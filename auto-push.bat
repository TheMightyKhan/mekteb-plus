@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================================
echo 🚀 MəktəbPlus - Avtomatik GitHub & Vercel Push
echo ========================================================
echo.

git status --short
echo.
echo Dəyişikliklər toplanır və kommit edilir...
git add .
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set datestr=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%

git commit -m "auto: sync updates on %datestr%"
echo.
echo GitHub və Vercel-ə göndərilir (push)...
git push origin main
echo.
echo ✅ Bütün dəyişikliklər GitHub və Vercel-ə uğurla push edildi!
echo 🌐 Canlı sayt: https://themightykhan.github.io/mekteb-plus/
echo.
timeout /t 5
