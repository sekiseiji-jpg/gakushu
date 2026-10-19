#!/bin/bash
cd "$(dirname "$0")"
echo ""
echo "  世界史マスター を起動しました"
echo "  ---------------------------------------------"
echo "  このPC:  http://localhost:8767/"
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)
[ -n "$IP" ] && echo "  スマホ(同じWi-Fi):  http://$IP:8767/"
echo "  終了するにはこのウィンドウを閉じてください"
echo "  ---------------------------------------------"
echo ""
sleep 1 && open "http://localhost:8767/" &
python3 -m http.server 8767
