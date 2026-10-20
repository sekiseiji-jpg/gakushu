#!/bin/bash
cd "$(dirname "$0")"
echo ""
echo "  近現代文学 を起動しました"
echo "  ---------------------------------------------"
echo "  このPC:  http://localhost:8788/"
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)
[ -n "$IP" ] && echo "  スマホ(同じWi-Fi):  http://$IP:8788/"
echo "  終了するにはこのウィンドウを閉じてください"
echo "  ---------------------------------------------"
echo ""
sleep 1 && open "http://localhost:8788/" &
python3 -m http.server 8788
