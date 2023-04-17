import { FontFile } from '../../FontFile';

const henry3d = new FontFile(
    'henry3d',
    'ZmxmMmEkIDggNyAxMyA2MyAzIDAgMjA0MTUgMQpWZXJzaW9uIDEuMCBBcHJpbCAyMDAxCkNoYXJhY3RlcnMgYnkgSGVucnkgU2VnZXJtYW4gaGVucnlzZWdAZW1haWwuY29tLApDb252ZXJ0ZWQgdG8gRklHbGV0IGZvbnQgYnkgTWFya3VzIEdlYmhhcmQgbWFya3VzQGphdmUuZGUKICQkQAogJCRACiAkJEAKICQkQAogJCRACiAkJEAKICQkQAogJCRAQAogIF9fIEAKICBMSiBACiAgRkogQAogSl9fTEAKICBfXyBACiBKX19MQAogfF9ffEAKICAgICBAQAogIF8gIF8gQAogRUogIExKQAogLS0gIC0tQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQEAKICAgICBfICBfICAgIEAKICAgX0ZKX19MXV8gIEAKICB8ICAgX18gICB8IEAKICBffCB8X198IHxfIEAKIExfICAgX18gICBfSkAKIExKX19GX19KX19MSkAKICB8X19MICBKX198IEAKICAgICAgICAgICAgIEBACiAgICBfRl1fICBACiAgIEYgX19fTCBACiAgSiAoX19ffCBACiAgSlxfX18gXCBACiAuLS1fX18pIFxACiBKXF9fICBfX0pACiAgSl9fTEpfX0ZACiAgICAgTEogICBAQAogICAgXyAgXyAgIEAKICAgRkogLy8gICBACiAgIC0tLyBGICAgQAogICAgLyAvJyAgIEAKICAgLyAgRiBfXyBACiAgL19fL0YgTF98QAogSl9fX3wgIExfSkAKICAgICAgICAgICBAQAogICAgX19fICAgIEAKICAgRiBfICIsICBACiAgSiAnLScofCAgQAogIC8gLC0sIFZcIEAKICBGIExfLyAgPCBACiBKXF9fX18sXy1MQAogIEpfX19fLF8tJ0AKICAgICAgICAgICBAQAogX19ACiBGSkAKIEwtQAogLSBACiAgJEAKICAgQAogICBACiAgIEBACiAgICBfICBACiAgLidffCBACiAvIC8tJyBACiB8IEwgICBACiBcIFxfXyBACiBcJy5fX0xACiAgJy5fX3xACiAgICAgICBAQAogICBfICAgQAogIHxfJy4gQAogICctXCBcQAogICAgSiB8QAogIF9fLyAvQAogSl9fLicvQAogfF9fLicgQAogICAgICAgQEAKICAgICBfXyAgICBACiAgIC9cRkovXCAgQAogICBcICAgIC8gIEAKICAuJyAgICAnLiBACiBKXC5uICBuLi9MQAogIFwvSl9fTFwvIEAKICAgIHxfX3wgICBACiAgICAgICAgICAgQEAKICAgICAgICAgQAogICAgX18gICBACiAgX19GSl9fIEAKIHxfXyAgX198QAogTF9KX19MX0pACiAgIEpfX0wgIEAKICAgICAgICAgQAogICAgICAgICBAQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgX18gQAogICBKICBMQAogICB8X0YgQAogICB8X0YgQEAKICAgICAgICAgQAogICAgICAgICBACiAgX19fX19fIEAKIHxfX19fX198QAogTF9fX19fX0pACiAgICAkICAgIEAKICAgICAgICAgQAogICAgICAgICBAQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEAKICBfXyBACiBKX19MQAogfF9ffEAKICAgICBAQAogICAgICAgX0AKICAgICAgLy9ACiAgICAgLyBGQAogICAgLyAvJ0AKICAgLyAgRiBACiAgL19fL0YgQAogSl9fX3wgIEAKICAgICAgICBAQAogICAgX19fXyAgIEAKICAgRiBfICBdICBACiAgSiB8LyB8IEwgQAogIHwgfCAvfCB8IEAKICBGICAvX0ogSiBACiBKXF9fX19fXy9GQAogIEpfX19fX19GIEAKICAgICAgICAgICBAQAogIF9fIEAKIC8gSiBACiBMRkogQAogSiAgTEAKIEogIExACiBKX19MQAogfF9ffEAKICAgICBAQAogICAgX19fXyAgIEAKICAgLyBfICBgLiBACiAgSl8vLTcgLicgQAogIGAtOicuJy4nIEAKICAuJyA7X0pfXyBACiBKX19fX19fX19MQAogfF9fX19fX19ffEAKICAgICAgICAgICBAQAogICAgX19fXyAgIEAKICAgRl9fXyBKICBACiAgIGAtX198IEwgQAogICAgfF9fICAoIEAKIC4tX19fX10gSiBACiBKXF9fX19fXy9GQAogIEpfX19fX19GIEAKICAgICAgICAgICBAQAogICBfICBfICAgQAogIEZKICBMXSAgQAogSiB8X198IEwgQAogfF9fX18gIHwgQAogTF9fX19KIEogQAogICAgICBKX19MQAogICAgICBKX198QAogICAgICAgICAgQEAKICAgIF9fX18gIEAKICAgRiBfX19MIEAKICBKIHxfX198IEAKICB8X19fXyBcIEAKIC4tLV9fXykgXEAKIEpcX19fX19fSkAKICBKX19fX19fRkAKICAgICAgICAgIEBACiAgICBfX19fICAgQAogICBGIF9fX10gIEAKICBKIGAtLV9dICBACiAgfCAsLS0uIEwgQAogIEYgTF9fSiB8IEAKIEpcX19fX19fL0xACiAgSl9fX19fX0YgQAogICAgICAgICAgIEBACiAgX19fXyBACiBGX19fIF1ACiBgLS03IC9ACiAgIC8gLy9ACiAgSiAgTCBACiAgSl9fTCBACiAgfF9ffCBACiAgICAgICBAQAogICAgX19fXyAgIEAKICAgRiBfXyBKICBACiAgSiBgLS0nIEwgQAogIC8gLC0tLiBcIEAKICBGIExfX0ogSiBACiBKXF9fX19fXy9MQAogIEpfX19fX19GIEAKICAgICAgICAgICBAQAogICBfX19fICAgQAogIEYgX18gSiAgQAogSiAnLS0nIEwgQAogSmAtLS0uIHwgQAogIGAtLS1KIEogQAogICAgICBKX19MQAogICAgICBKX198QAogICAgICAgICAgQEAKICAgICBACiAgX18gQAogIExKIEAKICAtLSBACiAgX18gQAogSl9fTEAKIHxfX3xACiAgICAgQEAKICAgICBACiAgX18gQAogIExKIEAKICAtLSBACiAgX18gQAogSiAgTEAKIHxfRiBACiB8X0YgQEAKICAgICAgIF8gIEAKICAgXy0iIl9MIEAKICwiIC4iIi0nIEAKIHwiLV8iLS1fIEAKICAiLV8iLS1fTEAKICAgICAiLS1ffEAKICAgICAgICAgIEAKICAgICAgICAgIEBACiAgICAgICAgICBACiAgIF9fX19fICBACiAgfF9fX19ffCBACiBfOl9fX19fOl9ACiBMX19fX19fX0pACiBMX19fX19fX0pACiAgICAgICAgICBACiAgICAgICAgICBAQAogICAgXyAgICAgIEAKICAgSl8iIi1fICBACiAgIGAtIiIuICIsQAogIF9fLS0iXy0ifEAKIEpfLS0iIl8tIiBACiAgfF8tLSIgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogICBfX19fICBACiAsIl9fICAiLkAKIEZKLS0vIEp8QAogLS0gL18vLyBACiAgIEpfXy8gIEAKICAgSl9fTCAgQAogICB8X198ICBACiAgICAgICAgIEBACiAgICBfX19fICAgQAogICBGIF9fIF0gIEAKICBKIHwgIHwgTCBACiAgfCB8W0wnIHwgQAogIEYgTF8tXy9fIEAKIEpcX19fX19fL0xACiAgSl9fX19fX0YgQAogICAgICAgICAgIEBACiAgICAgIF8gICAgIEAKICAgICAvLlwgICAgQAogICAgLy9fXFwgICBACiAgIC8gX19fIFwgIEAKICAvIExfX19KIFwgQAogSl9fTCAgIEpfX0xACiB8X19MICAgSl9ffEAKICAgICAgICAgICAgQEAKICAgIF9fXyAgIEAKICAgRiBfICIsIEAKICBKIGAtJyh8IEAKICB8ICwtLS5cIEAKICBGIExfX0ogXEAKIEpfX19fX19fSkAKIHxfX19fX19fRkAKICAgICAgICAgIEBACiAgICBfX18gICBACiAgLCJfX18iLiBACiAgRkotLS1MXSBACiBKIHwgICBMSiBACiB8IFxfX18tLS5ACiBKXF9fX19fL0ZACiAgSl9fX19fRiBACiAgICAgICAgICBAQAogICAgX19fICAgQAogICBGIF9fIi4gQAogIEogfC0tXCBMQAogIHwgfCAgSiB8QAogIEYgTF9fSiB8QAogSl9fX19fXy9GQAogfF9fX19fX0YgQAogICAgICAgICAgQEAKICAgIF9fX18gICBACiAgIEYgX19fSiAgQAogIEogfF9fXzogIEAKICB8IF9fX19ffCBACiAgRiBMX19fXzogQAogSl9fX19fX19fTEAKIHxfX19fX19fX3xACiAgICAgICAgICAgQEAKICAgIF9fX18gIEAKICAgRiBfX19KIEAKICBKIHxfX186IEAKICB8IF9fX19ffEAKICBGIHxfX19fSkAKIEpfX0YgICAgIEAKIHxfX3wgICAgIEAKICAgICAgICAgIEBACiAgICBfX18gICBACiAgLCJfX18iLiBACiAgRkotLS1MXSBACiBKIHwgIFsiIkxACiB8IFxfX19dIHxACiBKXF9fX19fL0ZACiAgSl9fX19fRiBACiAgICAgICAgICBAQAogICAgXyAgXyAgIEAKICAgRkogIExdICBACiAgSiB8X198IEwgQAogIHwgIF9fICB8IEAKICBGIExfX0ogSiBACiBKX19MICBKX19MQAogfF9fTCAgSl9ffEAKICAgICAgICAgICBAQAogICBfXyAgQAogICBGSiAgQAogIEogIEwgQAogIHwgIHwgQAogIEYgIEogQAogSl9fX19MQAogfF9fX198QAogICAgICAgQEAKICAgICBfICBACiAgICAgTF0gQAogICAgIHwgTEAKICAgICB8IHxACi4tLV9fSiBKQApKXF9fX19fL0AKIEpfX19fXy9ACiAgICAgICAgQEAKICAgXyAgXyAgIEAKICBGSiAvIDsgIEAKIEogfC8gKHwgIEAKIHwgICAgIEwgIEAKIEYgTDpcICBMIEAKSl9fTCBcXF9fTEAKfF9fTCAgXExffEAKICAgICAgICAgIEBACiAgICBfICAgICAgQAogICBGSiAgICAgIEAKICBKIHwgICAgICBACiAgfCB8ICAgICAgQAogIEYgTF9fX19fIEAKIEpfX19fX19fX0xACiB8X19fX19fX198QAogICAgICAgICAgIEBACiAgICBfXyAgX18gICBACiAgIEYgIFwvICBdICBACiAgSiB8XF9fL3wgTCBACiAgfCB8YC0tJ3wgfCBACiAgRiBMICAgIEogSiBACiBKX19MICAgIEpfX0xACiB8X19MICAgIEpfX3xACiAgICAgICAgICAgICBAQAogICAgXyAgXyAgIEAKICAgRiBMIExdICBACiAgSiAgIFx8IEwgQAogIHwgfFwgICB8IEAKICBGIExcXCAgSiBACiBKX19MIFxcX19MQAogfF9fTCAgSl9ffEAKICAgICAgICAgICBAQAogICAgX19fXyAgIEAKICAgRiBfXyBdICBACiAgSiB8LS18IEwgQAogIHwgfCAgfCB8IEAKICBGIExfX0ogSiBACiBKXF9fX19fXy9GQAogIEpfX19fX19GIEAKICAgICAgICAgICBAQAogICAgX19fICBACiAgIEYgXyAiLEAKICBKIGAtJyB8QAogIHwgIF9fL0ZACiAgRiB8X18vIEAKIEpfX3wgICAgQAogfF9fTCAgICBACiAgICAgICAgIEBACiAgICBfX19fICAgQAogICBGIF9fIF0gIEAKICBKIHwtLXwgTCBACiAgfCB8IF98IHwgQAogIEYgTF9GICBKIEAKIEpcX19fX18gIFxACiAgSl9fX19fXEpdQAogICAgICAgIFxKIEBACiAgICBfX18gICAgQAogICBGIF8gIiwgIEAKICBKIGAtJyh8ICBACiAgfCAgXyAgTCAgQAogIEYgfF9cICBMIEAKIEpfX3wgXFxfX0xACiB8X198ICBKX198QAogICAgICAgICAgIEBACiAgICBfX18gICBACiAgIEYgX18iLiBACiAgSiAoX19ffCBACiAgSlxfX18gXCBACiAuLS1fX18pIFxACiBKXF9fX19fX0pACiAgSl9fX19fX0ZACiAgICAgICAgICBAQAogIF9fX18gQAogL18gIF9cQAogW0ogIExdQAogIHwgIHwgQAogIEYgIEogQAogSl9fX19MQAogfF9fX198QAogICAgICAgQEAKICAgIF8gIF8gICBACiAgIEZKICBMXSAgQAogIEogfCAgfCBMIEAKICB8IHwgIHwgfCBACiAgRiBMX19KIEogQAogSlxfX19fX18vRkAKICBKX19fX19fRiBACiAgICAgICAgICAgQEAKICAgXyAgXyAgQAogIEZKICBMXSBACiBKIHwgIHwgTEAKIEogSiAgRiBMQAogSlwgXC8gL0ZACiAgXFxfXy8vIEAKICAgXF9fLyAgQAogICAgICAgICBAQAogICAgXyAgICBfICAgQAogICBGIEwgIEogSiAgQAogIEogSiAuLiBMIEwgQAogIHwgfC8gIFx8IHwgQAogIEYgICAvXCAgIEogQAogSl9fXy8vXFxfX19MQAogfF9fXy8gIFxfX198QAogICAgICAgICAgICAgQEAKICAgIF8gIF8gICBACiAgIEZKICBMSiAgQAogICBKIFwvIEYgIEAKICAgLyAgICBcICBACiAgLyAgL1wgIFwgQAogSl9fLy9cXF9fTEAKIHxfXy8gIFxfX3xACiAgICAgICAgICAgQEAKICBfICBfIEAKIEZKICBMSkAKIEogXC8gRkAKIEpcICAvTEAKICBGICBKIEAKIHxfX19ffEAKIHxfX19ffEAKICAgICAgIEBACiAgICBfX19fICAgQAogICBbX18gICcuIEAKICAgYC0tNyAuJyBACiAgICAuJy4nLicgQAogIC4nIChfKF9fIEAKIEpfX19fX19fX0xACiB8X19fX19fX198QAogICAgICAgICAgIEBACiAgICBfX19fICAgQAogICBGIF9fX0ogIEAKICBKIHwtLS0nICBACiAgfCB8ICAgICAgQAogIEYgTF9fX19fIEAKIEpfX19fX19fX0xACiB8X19fX19fX198QAogICAgICAgICAgIEBACiBfICAgICAgQAogXFwgICAgIEAKIEogXCAgICBACiAnXCBcICAgQAogIEogIFwgIEAKICBKXF9fXCBACiAgIHxfX19MQAogICAgICAgIEBACiAgICBfX19fICAgQAogICBMX19fIF0gIEAKICAgYC0tLXwgTCBACiAgICAgICB8IHwgQAogIF9fX19fSiBKIEAKIEpfX19fX19fX0xACiB8X19fX19fX198QAogICAgICAgICAgIEBACiAgIC9cICBACiAgLyAgXCBACiAvXy9cX1xACiBMXy9cX0pACiAgJCQkICBACiAgICQgICBACiAgICAgICBACiAgICAgICBAQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAkICAgICBACiAgX19fX19fX18gQAogfF9fX19fX19ffEAKIExfX19fX19fX0pAQAogXyAgQAogXFwgQAogXFxcQAogJCQgQAogICQgQAogICAgQAogICAgQAogICAgQEAKICAgICAgICAgICBACiAgICBfX18gXyAgQAogICBGIF9fYCBMIEAKICB8IHwtLXwgfCBACiAgRiBMX19KIEogQAogSlxfX19fLF9fTEAKICBKX19fXyxfX0ZACiAgICAgICAgICAgQEAKICAgIF8gICAgICBACiAgIEZKX19fICAgQAogIEogIF9fIEogIEAKICB8IHwtLXwgfCBACiAgRiBMX19KIEogQAogSl9fLF9fX18vTEAKIEpfXyxfX19fRiBACiAgICAgICAgICAgQEAKICAgICAgICAgICBACiAgICBfX19fICAgQAogICBGIF9fX0ouIEAKICB8IHwtLS1MSiBACiAgRiBMX19fLS0uQAogSlxfX19fX18vRkAKICBKX19fX19fRiBACiAgICAgICAgICAgQEAKICAgICAgIF8gICBACiAgICBfX19GSiAgQAogICBGIF9fICBMIEAKICB8IHwtLXwgfCBACiAgRiBMX19KIEogQAogSlxfX19fLF9fTEAKICBKX19fXyxfX0ZACiAgICAgICAgICAgQEAKICAgICAgICAgICBACiAgICBfX19fICAgQAogICBGIF9fIEogIEAKICB8IF9fX19fSiBACiAgRiBMX19fLS0uQAogSlxfX19fX18vRkAKICBKX19fX19fRiBACiAgICAgICAgICAgQEAKICAgIF9fX18gQAogICAvIF9fX0pACiAgSiB8Xy0tJ0AKICB8ICBffCAgQAogIEYgfF9KICBACiBKX19GICAgIEAKIHxfX3wgICAgQAogICAgICAgICBAQAogICAgICAgICAgIEAKICAgIF9fXyBfICBACiAgIEYgX19gIEwgQAogIHwgfC0tfCB8IEAKICBGIExfX0ogSiBACiAgKS1fX19fICBMQAogSlxfX19fX18vRkAKICBKX19fX19fRiBAQAogICAgXyAgICAgIEAKICAgRkpfX18gICBACiAgSiAgX18gYC4gQAogIHwgfC0tfCB8IEAKICBGIEwgIEogSiBACiBKX19MICBKX19MQAogfF9fTCAgSl9ffEAKICAgICAgICAgICBAQAogIF9fIEAKICBMSiBACiAgICAgQAogIEZKIEAKIEogIExACiBKX19MQAogfF9ffEAKICAgICBAQAogICAgX18gIEAKICAgIExKICBACiAgICAgXyAgQAogICAgSiBKIEAKICAgIEogIExACiAsLV9KICB8QAogXF9fX19fL0AKIFxfX19fXy9AQAogICBfICAgICAgQAogIEZKIF9fICAgQAogSiB8LyAvTCAgQAogfCAgICBcICAgQAogRiBMOlwgSiAgQApKX19MIFxcX0ouQAp8X19MICBcTF98QAogICAgICAgICAgQEAKICBfXyBACiAgTEogQAogIEZKIEAKIEogIExACiBKICBMQAogSl9fTEAKIHxfX3xACiAgICAgQEAKICAgICAgICAgICAgIEAKICAgXyBfX19fXyAgIEAKICBKICdfICBfIGAsIEAKICB8IHxffHxffCB8IEAKICBGIEwgTEogSiBKIEAKIEpfX0wgTEogSl9fTEAKIHxfX0wgTEogSl9ffEAKICAgICAgICAgICAgIEBACiAgICAgICAgICAgQAogICBfIF9fXyAgIEAKICBKICdfXyBKICBACiAgfCB8X198IHwgQAogIEYgTCAgSiBKIEAKIEpfX0wgIEpfX0xACiB8X19MICBKX198QAogICAgICAgICAgIEBACiAgICAgICAgICAgQAogICAgX19fXyAgIEAKICAgRiBfXyBKICBACiAgfCB8LS18IHwgQAogIEYgTF9fSiBKIEAKIEpcX19fX19fL0ZACiAgSl9fX19fX0YgQAogICAgICAgICAgIEBACiAgICAgICAgICAgQAogICBfIF9fXyAgIEAKICBKICdfXyBKICBACiAgfCB8LS18IHwgQAogIEYgTF9fSiBKIEAKIEogIF9fX19fL0xACiB8X0pfX19fX0YgQAogTF9KICAgICAgIEBACiAgICAgICAgICAgQAogICAgX19fIF8gIEAKICAgRiBfX2AgTCBACiAgfCB8LS18IHwgQAogIEYgTF9fSiBKIEAKIEpcX19fX18gIExACiAgSl9fX19fTF98QAogICAgICAgIExfSkBACiAgICAgICAgICBACiAgIF8gX19fICBACiAgSiAnX18gIixACiAgfCB8X198LUpACiAgRiBMICBgLSdACiBKX19MICAgICBACiB8X19MICAgICBACiAgICAgICAgICBAQAogICAgICAgICAgIEAKICAgIF9fX18gICBACiAgIEYgX19fSiAgQAogIHwgJy0tLS1fIEAKICApLV9fX18gIExACiBKXF9fX19fXy9GQAogIEpfX19fX19GIEAKICAgICAgICAgICBAQAogICBfICAgIEAKICBGSl8gICBACiBKICBffCAgQAogfCB8LScgIEAKIEYgfF9fLS5ACiBcX19fX18vQAogSl9fX19fRkAKICAgICAgICBAQAogICAgICAgICAgIEAKICAgXyAgICBfICBACiAgSiB8ICB8IEwgQAogIHwgfCAgfCB8IEAKICBGIExfX0ogSiBACiBKXF9fX18sX19MQAogIEpfX19fLF9fRkAKICAgICAgICAgICBAQAogICAgICAgICBACiAgXyAgICBfIEAKIEogfCAgfCBMQAogSiBKICBGIExACiBKXCBcLyAvRkAKICBcXF9fLy8gQAogICBcX18vICBACiAgICAgICAgIEBACiAgICAgICAgICAgICBACiAgICBfICAgIF8gICBACiAgIEZKIC4uIExdICBACiAgfCB8LyAgXHwgfCBACiAgRiAgIC9cICAgSiBACiBKXF9fLy9cXF9fL0xACiAgXF9fLyAgXF9fLyBACiAgICAgICAgICAgICBAQAogICAgICAgICAgQAogICBfICAgXyAgQAogIEogXCAvIEYgQAogICBcICcgLyAgQAogIC4nIC4gYC4gQAogSl9fLzpcX19MQAogfF9fLyBcX198QAogICAgICAgICAgQEAKICAgICAgICAgICBACiAgIF8gICAgXyAgQAogIEogfCAgfCBMIEAKICB8IHwgIHwgfCBACiAgRiBMX19KIEogQAogICktX19fXyAgTEAKIEpcX19fX19fL0ZACiAgSl9fX19fX0YgQEAKICAgICAgICAgIEAKICAgX19fX18gIEAKICBbX18gICBGIEAKICBgLS4nLicvIEAKICAuJyAoXyhfIEAKIEpfX19fX19fTEAKIHxfX19fX19ffEAKICAgICAgICAgIEBACiAgICAgIF8gICBACiAgICAuIl9KICBACiAgXy8gLy0nICBACiB8XyAoLyAgICBACiBMX0wuIi1fXyBACiAgICJfIi1fX0xACiAgICAgIi1fX3xACiAgICAgICAgICBAQAogIFtdIEAKICBMSiBACiAgRkogQAogSiAgTEAKIEogIExACiBKICBMQAogfF9ffEAKIHxfX3xAQAogICAgXyAgICAgQAogICBGXyIuICAgQAogICAnLVwgXF8gQAogICAgIFwpIF98QAogIF9fLSIuSl9KQAogSl9fLSJfIiAgQAogfF9fLSIgICAgQAogICAgICAgICAgQEAKICAgICAgQAogIC9cL11ACiAvICAgL0AKIEwvXC8vQAogTC9cLyBACiAgJCAgIEAKICAgICAgQAogICAgICBAQAogICAgW10gW10gICBACiAgICBgLC0uJyAgIEAKICAgIC8vX1xcICAgQAogICAvIF9fXyBcICBACiAgLyBMX19fSiBcIEAKIEpfX0wgICBKX19MQAogfF9fTCAgIEpfX3xACiAgICAgICAgICAgIEBACiAgIFtdX19bXSAgQAogICAsIl9fIiwgIEAKICBKIHwtLXwgTCBACiAgfCB8ICB8IHwgQAogIEYgTF9fSiBKIEAKIEpcX19fX19fL0ZACiAgSl9fX19fX0YgQAogICAgICAgICAgIEBACiAgIFtdICBbXSAgQAogICAtLCAgLC0gIEAKICBKIHwgIHwgTCBACiAgfCB8ICB8IHwgQAogIEYgTF9fSiBKIEAKIEpcX19fX19fL0ZACiAgSl9fX19fX0YgQAogICAgICAgICAgIEBACiAgIFtdICBbXSAgQAogICAgX19fXy0sIEAKICAgRiBfXyAgTCBACiAgfCB8LS18IHwgQAogIEYgTF9fSiBKIEAKIEpcX19fXy1fX0xACiAgSl9fX18tX19GQAogICAgICAgICAgIEBACiAgIFtdICBbXSAgQAogICAgX19fXyAgIEAKICAgRiBfXyBKICBACiAgfCB8LS18IHwgQAogIEYgTF9fSiBKIEAKIEpcX19fX19fL0ZACiAgSl9fX19fX0YgQAogICAgICAgICAgIEBACiAgIFtdICBbXSAgQAogICBfICAgIF8gIEAKICBKIHwgIHwgTCBACiAgfCB8ICB8IHwgQAogIEYgTF9fSiBKIEAKIEpcX19fXy1fX0xACiAgSl9fX18tX19GQAogICAgICAgICAgIEBACiAgICBfX18gICBACiAgIEYgXyAiLCBACiAgSiAnLScofCBACiAgfCAsLS0uXCBACiAgRiBMX19KIFxACiBKICAgX19fX0pACiB8X198X19fX0ZACiBMX198ICAgICBAQAoxNjAgIE5PLUJSRUFLIFNQQUNFCiAkJEAKICQkQAogJCRACiAkJEAKICQkQAogJCRACiAkJEAKICQkQEA='
);

export default henry3d;
