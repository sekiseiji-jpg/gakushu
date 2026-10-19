@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  日本史マスター を起動しました
echo  ---------------------------------------------
echo  このPC:  http://localhost:8766/
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  for /f "tokens=* delims= " %%b in ("%%a") do echo  スマホ(同じWi-Fi):  http://%%b:8766/
)
echo  終了するにはこの画面を閉じてください
echo  ---------------------------------------------
echo.
start "" http://localhost:8766/
python -m http.server 8766
