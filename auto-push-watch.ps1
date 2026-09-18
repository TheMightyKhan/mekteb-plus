# MektebPlus - Auto-Push File Watcher
$folder = $PSScriptRoot
if (-not $folder) { $folder = (Get-Location).Path }

Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host "MektebPlus - Canli Auto-Push Izleyicisi Aktivdir" -ForegroundColor Green
Write-Host "Qovluq: $folder" -ForegroundColor Yellow
Write-Host "Fayllarda deyisiklik olan kimi avtomatik push edilecek..." -ForegroundColor White
Write-Host "=========================================================" -ForegroundColor Cyan

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $folder
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::LastWrite -bor [System.IO.NotifyFilters]::FileName

while ($true) {
    $change = $watcher.WaitForChanged([System.IO.WatcherChangeTypes]::All, 3000)
    if ($change.TimedOut -eq $false) {
        $relName = $change.Name
        if ($relName -notmatch "^(\.git|node_modules)") {
            Start-Sleep -Seconds 2
            $status = git status --porcelain
            if ($status) {
                $now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
                Write-Host "Deyisiklik askarlandi: $relName ($now)" -ForegroundColor Yellow
                git add .
                git commit -m "auto: $relName yenilendi ($now)"
                Write-Host "GitHub ve Vercel-e push edilir..." -ForegroundColor Cyan
                git push origin main
                Write-Host "Ugurlu push tamamlandi ($now)!" -ForegroundColor Green
            }
        }
    }
}
