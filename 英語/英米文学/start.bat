@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  英米文学 を起動しました
echo  ---------------------------------------------
echo  このPC:  http://localhost:8789/
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  for /f "tokens=* delims= " %%b in ("%%a") do echo  スマホ(同じWi-Fi):  http://%%b:8789/
)
echo  終了するにはこの画面を閉じてください
echo  ---------------------------------------------
echo.
start "" http://localhost:8789/
python -m http.server 8789
