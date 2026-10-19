#!/bin/bash
cd "$(dirname "$0")"
echo ""
echo "  倫理マスター を起動しました"
echo "  ---------------------------------------------"
echo "  このPC:  http://localhost:8776/"
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)
[ -n "$IP" ] && echo "  スマホ(同じWi-Fi):  http://$IP:8776/"
echo "  終了するにはこのウィンドウを閉じてください"
echo "  ---------------------------------------------"
echo ""
sleep 1 && open "http://localhost:8776/" &
python3 -m http.server 8776
