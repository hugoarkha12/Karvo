@echo off
echo ==============================================
echo   Subiendo Karvo a GitHub (hugoarkha12)
echo ==============================================
echo.
git add .
git commit -m "feat: Karvo Venture Studio landing page" 2>nul
git branch -M main
git push -u origin main
echo.
echo ==============================================
echo   Proceso finalizado!
echo ==============================================
pause
