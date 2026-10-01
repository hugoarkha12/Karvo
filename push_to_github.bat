@echo off
echo ==============================================
echo   Subiendo Karvo a GitHub
echo ==============================================
echo.
git add .
git commit -m "feat: Karvo Venture Studio landing page"
git branch -M main
git push -u origin main
echo.
echo ==============================================
echo   Proceso finalizado!
echo ==============================================
pause
