# MəktəbPlus - Canlı Dəyişiklik İzləyicisi və Avtomatik Push (File Watcher)
# Bu skript arxa planda işləyərək fayllarda hər dəfə yaddaşa yazma (Save) olduqda dərhal avtomatik olaraq GitHub və Vercel-ə push edir.

$folder = $PSScriptRoot
if (-not $folder) { $folder = Get-Location }

Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host "🚀 MəktəbPlus - Canlı Auto-Push İzləyicisi Aktivdir" -ForegroundColor Green
Write-Host "Qovluq: $folder" -ForegroundColor Yellow
Write-Host "Hər hansı faylda yaddaşa yazma (Ctrl+S) olduqda dərhal push ediləcək..." -ForegroundColor White
Write-Host "Dayandırmaq üçün Ctrl+C sıxın." -ForegroundColor Gray
Write-Host "=========================================================" -ForegroundColor Cyan

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $folder
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::LastWrite -bor [System.IO.NotifyFilters]::FileName

while ($true) {
    # 3 saniyəlik pəncərə ilə dəyişiklikləri gözləyirik
    $change = $watcher.WaitForChanged([System.IO.WatcherChangeTypes]::All, 3000)
    if ($change.TimedOut -eq $false) {
        $relName = $change.Name
        # .git qovluğunda olan daxili dəyişiklikləri nəzərə almırıq
        if ($relName -notmatch "^(\.git|node_modules)") {
            Start-Sleep -Seconds 2
            $status = git status --porcelain
            if ($status) {
                $now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
                Write-Host "`n⚡ [$now] Dəyişiklik aşkarlandı: $relName" -ForegroundColor Yellow
                git add .
                git commit -m "auto: $relName yeniləndi ($now)"
                Write-Host "📤 GitHub və Vercel-ə push edilir..." -ForegroundColor Cyan
                git push origin main
                Write-Host "✅ [$now] Uğurla göndərildi! Sayt canlı olaraq yeniləndi." -ForegroundColor Green
            }
        }
    }
}
