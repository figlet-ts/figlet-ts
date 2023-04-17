import { FontFile } from '../../FontFile';

const big = new FontFile(
    'big',
    'ZmxmMmEkIDggNiA1OSAxNSAxMCAwIDI0NDYzCkJpZyBieSBHbGVubiBDaGFwcGVsbCA0LzkzIC0tIGJhc2VkIG9uIFN0YW5kYXJkCkluY2x1ZGVzIElTTyBMYXRpbi0xCkdyZWVrIGNoYXJhY3RlcnMgYnkgQnJ1Y2UgSmFrZXdheSA8cGJqYWtld2F5QG5ldW1hbm4udXdhdGVybG9vLmNhPgpmaWdsZXQgcmVsZWFzZSAyLjIgLS0gTm92ZW1iZXIgMTk5NgpQZXJtaXNzaW9uIGlzIGhlcmVieSBnaXZlbiB0byBtb2RpZnkgdGhpcyBmb250LCBhcyBsb25nIGFzIHRoZQptb2RpZmllcidzIG5hbWUgaXMgcGxhY2VkIG9uIGEgY29tbWVudCBsaW5lLgoKTW9kaWZpZWQgYnkgUGF1bCBCdXJ0b24gPHNvbHV0aW9uQGVhcnRobGluay5uZXQ+IDEyLzk2IHRvIGluY2x1ZGUgbmV3IHBhcmFtZXRlcgpzdXBwb3J0ZWQgYnkgRklHbGV0IGFuZCBGSUdXaW4uICBNYXkgYWxzbyBiZSBzbGlnaHRseSBtb2RpZmllZCBmb3IgYmV0dGVyIHVzZQpvZiBuZXcgZnVsbC13aWR0aC9rZXJuL3NtdXNoIGFsdGVybmF0aXZlcywgYnV0IGRlZmF1bHQgb3V0cHV0IGlzIE5PVCBjaGFuZ2VkLgogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRAQAogIF8gQAogfCB8QAogfCB8QAogfCB8QAogfF98QAogKF8pQAogICAgQAogICAgQEAKICBfIF8gQAogKCB8IClACiAgViBWIEAKICAgJCAgQAogICAkICBACiAgICQgIEAKICAgICAgQAogICAgICBAQAogICAgXyAgXyAgIEAKICBffCB8fCB8XyBACiB8XyAgX18gIF98QAogIF98IHx8IHxfIEAKIHxfICBfXyAgX3xACiAgIHxffHxffCAgQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogICBfICBACiAgfCB8IEAKIC8gX18pQAogXF9fIFxACiAoICAgL0AKICB8X3wgQAogICAgICBACiAgICAgIEBACiAgXyAgIF9fQAogKF8pIC8gL0AKICAgIC8gLyBACiAgIC8gLyAgQAogIC8gLyBfIEAKIC9fLyAoXylACiAgICAgICAgQAogICAgICAgIEBACiAgICAgICAgIEAKICAgX19fICAgQAogICggXyApICBACiAgLyBfIFwvXEAKIHwgKF8+ICA8QAogIFxfX18vXC9ACiAgICAgICAgIEAKICAgICAgICAgQEAKICBfIEAKICggKUAKIHwvIEAKICAkIEAKICAkIEAKICAkIEAKICAgIEAKICAgIEBACiAgIF9fQAogIC8gL0AKIHwgfCBACiB8IHwgQAogfCB8IEAKIHwgfCBACiAgXF9cQAogICAgIEBACiBfXyAgQAogXCBcIEAKICB8IHxACiAgfCB8QAogIHwgfEAKICB8IHxACiAvXy8gQAogICAgIEBACiAgICAgXyAgICBACiAgL1x8IHwvXCBACiAgXCBgICcgLyBACiB8XyAgICAgX3xACiAgLyAsIC4gXCBACiAgXC98X3xcLyBACiAgICAgICAgICBACiAgICAgICAgICBAQAogICAgICAgIEAKICAgIF8gICBACiAgX3wgfF8gQAogfF8gICBffEAKICAgfF98ICBACiAgICAkICAgQAogICAgICAgIEAKICAgICAgICBAQAogICAgQAogICAgQAogICAgQAogICAgQAogIF8gQAogKCApQAogfC8gQAogICAgQEAKICAgICAgICAgQAogICAgICAgICBACiAgX19fX19fIEAKIHxfX19fX198QAogICAgICQgICBACiAgICAgJCAgIEAKICAgICAgICAgQAogICAgICAgICBAQAogICAgQAogICAgQAogICAgQAogICAgQAogIF8gQAogKF8pQAogICAgQAogICAgQEAKICAgICAgX19ACiAgICAgLyAvQAogICAgLyAvIEAKICAgLyAvICBACiAgLyAvICAgQAogL18vICAgIEAKICAgICAgICBACiAgICAgICAgQEAKICAgX19fICBACiAgLyBfIFwgQAogfCB8IHwgfEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICBfXyBACiAvXyB8QAogIHwgfEAKICB8IHxACiAgfCB8QAogIHxffEAKICAgICBACiAgICAgQEAKICBfX18gIEAKIHxfXyBcIEAKICAgJCkgfEAKICAgLyAvIEAKICAvIC9fIEAKIHxfX19ffEAKICAgICAgIEAKICAgICAgIEBACiAgX19fXyAgQAogfF9fXyBcIEAKICAgX18pIHxACiAgfF9fIDwgQAogIF9fXykgfEAKIHxfX19fLyBACiAgICAgICAgQAogICAgICAgIEBACiAgXyAgXyAgIEAKIHwgfHwgfCAgQAogfCB8fCB8XyBACiB8X18gICBffEAKICAgIHwgfCAgQAogICAgfF98ICBACiAgICAgICAgIEAKICAgICAgICAgQEAKICBfX19fXyBACiB8IF9fX198QAogfCB8X18gIEAKIHxfX18gXCBACiAgX19fKSB8QAogfF9fX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICAgIF9fICBACiAgIC8gLyAgQAogIC8gL18gIEAKIHwgJ18gXCBACiB8IChfKSB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICBfX19fX18gQAogfF9fX18gIHxACiAgICAkLyAvIEAKICAgIC8gLyAgQAogICAvIC8gICBACiAgL18vICAgIEAKICAgICAgICAgQAogICAgICAgICBAQAogICBfX18gIEAKICAvIF8gXCBACiB8IChfKSB8QAogID4gXyA8IEAKIHwgKF8pIHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAogICBfX18gIEAKICAvIF8gXCBACiB8IChfKSB8QAogIFxfXywgfEAKICAgIC8gLyBACiAgIC9fLyAgQAogICAgICAgIEAKICAgICAgICBAQAogICAgQAogIF8gQAogKF8pQAogICQgQAogIF8gQAogKF8pQAogICAgQAogICAgQEAKICAgIEAKICBfIEAKIChfKUAKICAkIEAKICBfIEAKICggKUAKIHwvIEAKICAgIEBACiAgICBfX0AKICAgLyAvQAogIC8gLyBACiA8IDwgIEAKICBcIFwgQAogICBcX1xACiAgICAgIEAKICAgICAgQEAKICAgICAgICAgQAogIF9fX19fXyBACiB8X19fX19ffEAKICBfX19fX18gQAogfF9fX19fX3xACiAgICAgICAgIEAKICAgICAgICAgQAogICAgICAgICBAQAogX18gICBACiBcIFwgIEAKICBcIFwgQAogICA+ID5ACiAgLyAvIEAKIC9fLyAgQAogICAgICBACiAgICAgIEBACiAgX19fICBACiB8X18gXCBACiAgICApIHxACiAgIC8gLyBACiAgfF98ICBACiAgKF8pICBACiAgICAgICBACiAgICAgICBAQAogICAgICAgICAgQAogICAgX19fXyAgQAogICAvIF9fIFwgQAogIC8gLyBfYCB8QAogfCB8IChffCB8QAogIFwgXF9fLF98QAogICBcX19fXy8gQAogICAgICAgICAgQEAKICAgICAgICAgICBACiAgICAgL1wgICAgQAogICAgLyAgXCAgIEAKICAgLyAvXCBcICBACiAgLyBfX19fIFwgQAogL18vICAgIFxfXEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKICBfX19fICBACiB8ICBfIFwgQAogfCB8XykgfEAKIHwgIF8gPCBACiB8IHxfKSB8QAogfF9fX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICAgX19fX18gQAogIC8gX19fX3xACiB8IHwgJCAgIEAKIHwgfCAkICAgQAogfCB8X19fXyBACiAgXF9fX19ffEAKICAgICAgICAgQAogICAgICAgICBAQAogIF9fX19fICBACiB8ICBfXyBcIEAKIHwgfCAgfCB8QAogfCB8ICB8IHxACiB8IHxfX3wgfEAKIHxfX19fXy8gQAogICAgICAgICBACiAgICAgICAgIEBACiAgX19fX19fIEAKIHwgIF9fX198QAogfCB8X18gICBACiB8ICBfX3wgIEAKIHwgfF9fX18gQAogfF9fX19fX3xACiAgICAgICAgIEAKICAgICAgICAgQEAKICBfX19fX18gQAogfCAgX19fX3xACiB8IHxfXyAgIEAKIHwgIF9ffCAgQAogfCB8ICAgICBACiB8X3wgICAgIEAKICAgICAgICAgQAogICAgICAgICBAQAogICBfX19fXyBACiAgLyBfX19ffEAKIHwgfCAgX18gQAogfCB8IHxfIHxACiB8IHxfX3wgfEAKICBcX19fX198QAogICAgICAgICBACiAgICAgICAgIEBACiAgXyAgICBfIEAKIHwgfCAgfCB8QAogfCB8X198IHxACiB8ICBfXyAgfEAKIHwgfCAgfCB8QAogfF98ICB8X3xACiAgICAgICAgIEAKICAgICAgICAgQEAKICBfX19fXyBACiB8XyAgIF98QAogICB8IHwgIEAKICAgfCB8ICBACiAgX3wgfF8gQAogfF9fX19ffEAKICAgICAgICBACiAgICAgICAgQEAKICAgICAgIF8gQAogICAgICB8IHxACiAgICAgIHwgfEAKICBfICAgfCB8QAogfCB8X198IHxACiAgXF9fX18vIEAKICAgICAgICAgQAogICAgICAgICBAQAogIF8gIF9fQAogfCB8LyAvQAogfCAnIC8gQAogfCAgPCAgQAogfCAuIFwgQAogfF98XF9cQAogICAgICAgQAogICAgICAgQEAKICBfICAgICAgQAogfCB8ICAgICBACiB8IHwgICAgIEAKIHwgfCAgICAgQAogfCB8X19fXyBACiB8X19fX19ffEAKICAgICAgICAgQAogICAgICAgICBAQAogIF9fICBfXyBACiB8ICBcLyAgfEAKIHwgXCAgLyB8QAogfCB8XC98IHxACiB8IHwgIHwgfEAKIHxffCAgfF98QAogICAgICAgICBACiAgICAgICAgIEBACiAgXyAgIF8gQAogfCBcIHwgfEAKIHwgIFx8IHxACiB8IC4gYCB8QAogfCB8XCAgfEAKIHxffCBcX3xACiAgICAgICAgQAogICAgICAgIEBACiAgIF9fX18gIEAKICAvIF9fIFwgQAogfCB8ICB8IHxACiB8IHwgIHwgfEAKIHwgfF9ffCB8QAogIFxfX19fLyBACiAgICAgICAgIEAKICAgICAgICAgQEAKICBfX19fXyAgQAogfCAgX18gXCBACiB8IHxfXykgfEAKIHwgIF9fXy8gQAogfCB8ICAgICBACiB8X3wgICAgIEAKICAgICAgICAgQAogICAgICAgICBAQAogICBfX19fICBACiAgLyBfXyBcIEAKIHwgfCAgfCB8QAogfCB8ICB8IHxACiB8IHxfX3wgfEAKICBcX19fXF9cQAogICAgICAgICBACiAgICAgICAgIEBACiAgX19fX18gIEAKIHwgIF9fIFwgQAogfCB8X18pIHxACiB8ICBfICAvIEAKIHwgfCBcIFwgQAogfF98ICBcX1xACiAgICAgICAgIEAKICAgICAgICAgQEAKICAgX19fX18gQAogIC8gX19fX3xACiB8IChfX18gIEAKICBcX19fIFwgQAogIF9fX18pIHxACiB8X19fX18vIEAKICAgICAgICAgQAogICAgICAgICBAQAogIF9fX19fX18gQAogfF9fICAgX198QAogICAgfCB8ICAgQAogICAgfCB8ICAgQAogICAgfCB8ICAgQAogICAgfF98ICAgQAogICAgICAgICAgQAogICAgICAgICAgQEAKICBfICAgIF8gQAogfCB8ICB8IHxACiB8IHwgIHwgfEAKIHwgfCAgfCB8QAogfCB8X198IHxACiAgXF9fX18vIEAKICAgICAgICAgQAogICAgICAgICBAQAogX18gICAgICBfX0AKIFwgXCAgICAvIC9ACiAgXCBcICAvIC8gQAogICBcIFwvIC8gIEAKICAgIFwgIC8gICBACiAgICAgXC8gICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogX18gICAgICAgICAgX19ACiBcIFwgICAgICAgIC8gL0AKICBcIFwgIC9cICAvIC8gQAogICBcIFwvICBcLyAvICBACiAgICBcICAvXCAgLyAgIEAKICAgICBcLyAgXC8gICAgQAogICAgICAgICAgICAgICBACiAgICAgICAgICAgICAgIEBACiBfXyAgIF9fQAogXCBcIC8gL0AKICBcIFYgLyBACiAgID4gPCAgQAogIC8gLiBcIEAKIC9fLyBcX1xACiAgICAgICAgQAogICAgICAgIEBACiBfXyAgICAgX19ACiBcIFwgICAvIC9ACiAgXCBcXy8gLyBACiAgIFwgICAvICBACiAgICB8IHwgICBACiAgICB8X3wgICBACiAgICAgICAgICBACiAgICAgICAgICBAQAogIF9fX19fX0AKIHxfX18gIC9ACiAgICQvIC8gQAogICAvIC8gIEAKICAvIC9fXyBACiAvX19fX198QAogICAgICAgIEAKICAgICAgICBAQAogIF9fXyBACiB8ICBffEAKIHwgfCAgQAogfCB8ICBACiB8IHwgIEAKIHwgfF8gQAogfF9fX3xACiAgICAgIEBACiBfXyAgICAgQAogXCBcICAgIEAKICBcIFwgICBACiAgIFwgXCAgQAogICAgXCBcIEAKICAgICBcX1xACiAgICAgICAgQAogICAgICAgIEBACiAgX19fIEAKIHxfICB8QAogICB8IHxACiAgIHwgfEAKICAgfCB8QAogIF98IHxACiB8X19ffEAKICAgICAgQEAKICAvXCBACiB8L1x8QAogICAkIEAKICAgJCBACiAgICQgQAogICAkIEAKICAgICBACiAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACiAgICAgICAgIEAKICAgICAgICAgQAogICAgICAgICBACiAgICAgJCAgIEAKICBfX19fX18gQAogfF9fX19fX3xAQAogIF8gQAogKCApQAogIFx8QAogICQgQAogICQgQAogICQgQAogICAgQAogICAgQEAKICAgICAgICBACiAgICAgICAgQAogICBfXyBfIEAKICAvIF9gIHxACiB8IChffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKICBfICAgICBACiB8IHwgICAgQAogfCB8X18gIEAKIHwgJ18gXCBACiB8IHxfKSB8QAogfF8uX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKICAgX19fIEAKICAvIF9ffEAKIHwgKF9fIEAKICBcX19ffEAKICAgICAgIEAKICAgICAgIEBACiAgICAgIF8gQAogICAgIHwgfEAKICAgX198IHxACiAgLyBfYCB8QAogfCAoX3wgfEAKICBcX18sX3xACiAgICAgICAgQAogICAgICAgIEBACiAgICAgICBACiAgICAgICBACiAgIF9fXyBACiAgLyBfIFxACiB8ICBfXy9ACiAgXF9fX3xACiAgICAgICBACiAgICAgICBAQAogICBfXyBACiAgLyBffEAKIHwgfF8gQAogfCAgX3xACiB8IHwgIEAKIHxffCAgQAogICAgICBACiAgICAgIEBACiAgICAgICAgQAogICAgICAgIEAKICAgX18gXyBACiAgLyBfYCB8QAogfCAoX3wgfEAKICBcX18sIHxACiAgIF9fLyB8QAogIHxfX18vIEBACiAgXyAgICAgQAogfCB8ICAgIEAKIHwgfF9fICBACiB8ICdfIFwgQAogfCB8IHwgfEAKIHxffCB8X3xACiAgICAgICAgQAogICAgICAgIEBACiAgXyBACiAoXylACiAgXyBACiB8IHxACiB8IHxACiB8X3xACiAgICBACiAgICBAQAogICAgXyBACiAgIChfKUAKICAgIF8gQAogICB8IHxACiAgIHwgfEAKICAgfCB8QAogIF8vIHxACiB8X18vIEBACiAgXyAgICBACiB8IHwgICBACiB8IHwgX19ACiB8IHwvIC9ACiB8ICAgPCBACiB8X3xcX1xACiAgICAgICBACiAgICAgICBAQAogIF8gQAogfCB8QAogfCB8QAogfCB8QAogfCB8QAogfF98QAogICAgQAogICAgQEAKICAgICAgICAgICAgQAogICAgICAgICAgICBACiAgXyBfXyBfX18gIEAKIHwgJ18gYCBfIFwgQAogfCB8IHwgfCB8IHxACiB8X3wgfF98IHxffEAKICAgICAgICAgICAgQAogICAgICAgICAgICBAQAogICAgICAgIEAKICAgICAgICBACiAgXyBfXyAgQAogfCAnXyBcIEAKIHwgfCB8IHxACiB8X3wgfF98QAogICAgICAgIEAKICAgICAgICBAQAogICAgICAgIEAKICAgICAgICBACiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgKF8pIHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAogICAgICAgIEAKICAgICAgICBACiAgXyBfXyAgQAogfCAnXyBcIEAKIHwgfF8pIHxACiB8IC5fXy8gQAogfCB8ICAgIEAKIHxffCAgICBAQAogICAgICAgIEAKICAgICAgICBACiAgIF9fIF8gQAogIC8gX2AgfEAKIHwgKF98IHxACiAgXF9fLCB8QAogICAgIHwgfEAKICAgICB8X3xAQAogICAgICAgQAogICAgICAgQAogIF8gX18gQAogfCAnX198QAogfCB8ICAgQAogfF98ICAgQAogICAgICAgQAogICAgICAgQEAKICAgICAgQAogICAgICBACiAgX19fIEAKIC8gX198QAogXF9fIFxACiB8X19fL0AKICAgICAgQAogICAgICBAQAogIF8gICBACiB8IHwgIEAKIHwgfF8gQAogfCBfX3xACiB8IHxfIEAKICBcX198QAogICAgICBACiAgICAgIEBACiAgICAgICAgQAogICAgICAgIEAKICBfICAgXyBACiB8IHwgfCB8QAogfCB8X3wgfEAKICBcX18sX3xACiAgICAgICAgQAogICAgICAgIEBACiAgICAgICAgQAogICAgICAgIEAKIF9fICAgX19ACiBcIFwgLyAvQAogIFwgViAvIEAKICAgXF8vICBACiAgICAgICAgQAogICAgICAgIEBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKIF9fICAgICAgX19ACiBcIFwgL1wgLyAvQAogIFwgViAgViAvIEAKICAgXF8vXF8vICBACiAgICAgICAgICAgQAogICAgICAgICAgIEBACiAgICAgICBACiAgICAgICBACiBfXyAgX19ACiBcIFwvIC9ACiAgPiAgPCBACiAvXy9cX1xACiAgICAgICBACiAgICAgICBAQAogICAgICAgIEAKICAgICAgICBACiAgXyAgIF8gQAogfCB8IHwgfEAKIHwgfF98IHxACiAgXF9fLCB8QAogICBfXy8gfEAKICB8X19fLyBAQAogICAgICBACiAgICAgIEAKICBfX19fQAogfF8gIC9ACiAgLyAvIEAKIC9fX198QAogICAgICBACiAgICAgIEBACiAgICBfX0AKICAgLyAvQAogIHwgfCBACiAvIC8gIEAKIFwgXCAgQAogIHwgfCBACiAgIFxfXEAKICAgICAgQEAKICBfIEAKIHwgfEAKIHwgfEAKIHwgfEAKIHwgfEAKIHwgfEAKIHwgfEAKIHxffEBACiBfXyAgIEAKIFwgXCAgQAogIHwgfCBACiAgIFwgXEAKICAgLyAvQAogIHwgfCBACiAvXy8gIEAKICAgICAgQEAKICAvXC98QAogfC9cLyBACiAgICQgIEAKICAgJCAgQAogICAkICBACiAgICQgIEAKICAgICAgQAogICAgICBAQAogICBfICAgXyAgQAogIChfKV8oXykgQAogICAgLyBcICAgQAogICAvIF8gXCAgQAogIC8gX19fIFwgQAogL18vICAgXF9cQAogICAgICAgICAgQAogICAgICAgICAgQEAKICBfICAgXyBACiAoXylfKF8pQAogIC8gXyBcIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICBfICAgXyBACiAoXykgKF8pQAogfCB8IHwgfEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICBfICAgXyBACiAoXykgKF8pQAogICBfXyBfIEAKICAvIF9gIHxACiB8IChffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKICBfICAgXyBACiAoXykgKF8pQAogICBfX18gIEAKICAvIF8gXCBACiB8IChfKSB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKICBfICAgXyBACiAoXykgKF8pQAogIF8gICBfIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKICAgX19fICBACiAgLyBfIFwgQAogfCB8ICkgfEAKIHwgfDwgPCBACiB8IHwgKSB8QAogfCB8fF8vIEAKIHxffCAgICBACiAgICAgICAgQEAKMTYwICBOTy1CUkVBSyBTUEFDRQogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRAQAoxNjEgIElOVkVSVEVEIEVYQ0xBTUFUSU9OIE1BUksKICBfIEAKIChfKUAKIHwgfEAKIHwgfEAKIHwgfEAKIHxffEAKICAgIEAKICAgIEBACjE2MiAgQ0VOVCBTSUdOCiAgICAgICBACiAgICBfICBACiAgIHwgfCBACiAgLyBfXylACiB8IChfXyBACiAgXCAgIClACiAgIHxffCBACiAgICAgICBAQAoxNjMgIFBPVU5EIFNJR04KICAgICBfX18gICBACiAgICAvICxfXCAgQAogIF98IHxfICAgIEAKIHxfXyBfX3wgICBACiAgIHwgfF9fX18gQAogIChfLF9fX19ffEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKMTY0ICBDVVJSRU5DWSBTSUdOCiAgICAgICAgQAogL1xfX18vXEAKIFwgIF8gIC9ACiB8IChfKSB8QAogLyBfX18gXEAKIFwvICAgXC9ACiAgICAgICAgQAogICAgICAgIEBACjE2NSAgWUVOIFNJR04KICBfXyAgIF9fIEAKICBcIFwgLyAvIEAKICBfXCBWIC9fIEAKIHxfX18gX19ffEAKIHxfX18gX19ffEAKICAgIHxffCAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEBACjE2NiAgQlJPS0VOIEJBUgogIF8gQAogfCB8QAogfCB8QAogfF98QAogIF8gQAogfCB8QAogfCB8QAogfF98QEAKMTY3ICBTRUNUSU9OIFNJR04KICAgIF9fIEAKICBfLyBfKUAKIC8gXCBcIEAKIFwgXFwgXEAKICBcIFxfL0AKIChfXy8gIEAKICAgICAgIEAKICAgICAgIEBACjE2OCAgRElBRVJFU0lTCiAgXyAgIF8gQAogKF8pIChfKUAKICAkICAgJCBACiAgJCAgICQgQAogICQgICAkIEAKICAkICAgJCBACiAgICAgICAgQAogICAgICAgIEBACjE2OSAgQ09QWVJJR0hUIFNJR04KICAgIF9fX19fX19fICAgQAogICAvICBfX19fICBcICBACiAgLyAgLyBfX198ICBcIEAKIHwgIHwgfCAgICAgICB8QAogfCAgfCB8X19fICAgIHxACiAgXCAgXF9fX198ICAvIEAKICAgXF9fX19fX19fLyAgQAogICAgICAgICAgICAgICBAQAoxNzAgIEZFTUlOSU5FIE9SRElOQUwgSU5ESUNBVE9SCiAgIF9fIF8gQAogIC8gX2AgfEAKIHwgKF98IHxACiAgXF9fLF98QAogfF9fX19ffEAKICAgICQgICBACiAgICAgICAgQAogICAgICAgIEBACjE3MSAgTEVGVC1QT0lOVElORyBET1VCTEUgQU5HTEUgUVVPVEFUSU9OIE1BUksKICAgIF9fX19ACiAgIC8gLyAvQAogIC8gLyAvIEAKIDwgPCA8ICBACiAgXCBcIFwgQAogICBcX1xfXEAKICAgICAgICBACiAgICAgICAgQEAKMTcyICBOT1QgU0lHTgogICAgICAgICBACiAgICAgICAgIEAKICBfX19fX18gQAogfF9fX18gIHxACiAgICAgIHxffEAKICAgICAkICAgQAogICAgICAgICBACiAgICAgICAgIEBACjE3MyAgU09GVCBIWVBIRU4KICAgICAgICBACiAgICAgICAgQAogIF9fX19fIEAKIHxfX19fX3xACiAgICAkICAgQAogICAgJCAgIEAKICAgICAgICBACiAgICAgICAgQEAKMTc0ICBSRUdJU1RFUkVEIFNJR04KICAgIF9fX19fX19fICAgQAogICAvICBfX19fICBcICBACiAgLyAgfCAgXyBcICBcIEAKIHwgICB8IHxfKSB8ICB8QAogfCAgIHwgIF8gPCAgIHxACiAgXCAgfF98IFxfXCAvIEAKICAgXF9fX19fX19fLyAgQAogICAgICAgICAgICAgICBAQAoxNzUgIE1BQ1JPTgogIF9fX19fXyBACiB8X19fX19ffEAKICAgICAkICAgQAogICAgICQgICBACiAgICAgJCAgIEAKICAgICAkICAgQAogICAgICAgICBACiAgICAgICAgIEBACjE3NiAgREVHUkVFIFNJR04KICAgX18gIEAKICAvICBcIEAKIHwgKCkgfEAKICBcX18vIEAKICAgICQgIEAKICAgICQgIEAKICAgICAgIEAKICAgICAgIEBACjE3NyAgUExVUy1NSU5VUyBTSUdOCiAgICBfICAgQAogIF98IHxfIEAKIHxfICAgX3xACiAgIHxffCAgQAogIF9fX19fIEAKIHxfX19fX3xACiAgICAgICAgQAogICAgICAgIEBACjE3OCAgU1VQRVJTQ1JJUFQgVFdPCiAgX19fIEAKIHxfICApQAogIC8gLyBACiAvX19ffEAKICAgJCAgQAogICAkICBACiAgICAgIEAKICAgICAgQEAKMTc5ICBTVVBFUlNDUklQVCBUSFJFRQogIF9fX19ACiB8X18gL0AKICB8XyBcQAogfF9fXy9ACiAgICQgIEAKICAgJCAgQAogICAgICBACiAgICAgIEBACjE4MCAgQUNVVEUgQUNDRU5UCiAgX19ACiAvXy9ACiAgJCBACiAgJCBACiAgJCBACiAgJCBACiAgICBACiAgICBAQAoxODEgIE1JQ1JPIFNJR04KICAgICAgICBACiAgICAgICAgQAogIF8gICBfIEAKIHwgfCB8IHxACiB8IHxffCB8QAogfCAuXyxffEAKIHwgfCAgICBACiB8X3wgICAgQEAKMTgyICBQSUxDUk9XIFNJR04KICAgX19fX19fIEAKICAvICAgICAgfEAKIHwgKHwgfHwgfEAKICBcX18gfHwgfEAKICAgIHwgfHwgfEAKICAgIHxffHxffEAKICAgICAgICAgIEAKICAgICAgICAgIEBACjE4MyAgTUlERExFIERPVAogICAgQAogICAgQAogIF8gQAogKF8pQAogICQgQAogICQgQAogICAgQAogICAgQEAKMTg0ICBDRURJTExBCiAgICBACiAgICBACiAgICBACiAgICBACiAgICBACiAgXyBACiApXylACiAgICBAQAoxODUgIFNVUEVSU0NSSVBUIE9ORQogIF8gQAogLyB8QAogfCB8QAogfF98QAogICQgQAogICQgQAogICAgQAogICAgQEAKMTg2ICBNQVNDVUxJTkUgT1JESU5BTCBJTkRJQ0FUT1IKICAgX19fICBACiAgLyBfIFwgQAogfCAoXykgfEAKICBcX19fLyBACiB8X19fX198QAogICAgJCAgIEAKICAgICAgICBACiAgICAgICAgQEAKMTg3ICBSSUdIVC1QT0lOVElORyBET1VCTEUgQU5HTEUgUVVPVEFUSU9OIE1BUksKIF9fX18gICBACiBcIFwgXCAgQAogIFwgXCBcIEAKICAgPiA+ID5ACiAgLyAvIC8gQAogL18vXy8gIEAKICAgICAgICBACiAgICAgICAgQEAKMTg4ICBWVUxHQVIgRlJBQ1RJT04gT05FIFFVQVJURVIKICBfICAgX18gICBACiAvIHwgLyAvICAgQAogfCB8LyAvIF8gIEAKIHxfLyAvIHwgfCBACiAgLyAvfF8gIF98QAogL18vICAgfF98IEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKMTg5ICBWVUxHQVIgRlJBQ1RJT04gT05FIEhBTEYKICBfICAgX18gIEAKIC8gfCAvIC8gIEAKIHwgfC8gL19fIEAKIHxfLyAvXyAgKUAKICAvIC8gLyAvIEAKIC9fLyAvX19ffEAKICAgICAgICAgIEAKICAgICAgICAgIEBACjE5MCAgVlVMR0FSIEZSQUNUSU9OIFRIUkVFIFFVQVJURVJTCiAgX19fXyAgX18gICBACiB8X18gLyAvIC8gICBACiAgfF8gXC8gLyBfICBACiB8X19fLyAvIHwgfCBACiAgICAvIC98XyAgX3xACiAgIC9fLyAgIHxffCBACiAgICAgICAgICAgICBACiAgICAgICAgICAgICBAQAoxOTEgIElOVkVSVEVEIFFVRVNUSU9OIE1BUksKICAgIF8gIEAKICAgKF8pIEAKICAgfCB8IEAKICAvIC8gIEAKIHwgKF9fIEAKICBcX19ffEAKICAgICAgIEAKICAgICAgIEBACjE5MiAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIEdSQVZFCiAgICBfXyAgICBACiAgICBcX1wgICBACiAgICAvIFwgICBACiAgIC8gXyBcICBACiAgLyBfX18gXCBACiAvXy8gICBcX1xACiAgICAgICAgICBACiAgICAgICAgICBAQAoxOTMgIExBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBBQ1VURQogICAgIF9fICAgQAogICAgL18vICAgQAogICAgLyBcICAgQAogICAvIF8gXCAgQAogIC8gX19fIFwgQAogL18vICAgXF9cQAogICAgICAgICAgQAogICAgICAgICAgQEAKMTk0ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggQ0lSQ1VNRkxFWAogICAgLy9cICAgQAogICB8L19cfCAgQAogICAgLyBcICAgQAogICAvIF8gXCAgQAogIC8gX19fIFwgQAogL18vICAgXF9cQAogICAgICAgICAgQAogICAgICAgICAgQEAKMTk1ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggVElMREUKICAgIC9cL3wgIEAKICAgfC9cLyAgIEAKICAgIC8gXCAgIEAKICAgLyBfIFwgIEAKICAvIF9fXyBcIEAKIC9fLyAgIFxfXEAKICAgICAgICAgIEAKICAgICAgICAgIEBACjE5NiAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIERJQUVSRVNJUwogICBfICAgXyAgQAogIChfKV8oXykgQAogICAgLyBcICAgQAogICAvIF8gXCAgQAogIC8gX19fIFwgQAogL18vICAgXF9cQAogICAgICAgICAgQAogICAgICAgICAgQEAKMTk3ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRQogICAgIF8gICAgQAogICAgKG8pICAgQAogICAgLyBcICAgQAogICAvIF8gXCAgQAogIC8gX19fIFwgQAogL18vICAgXF9cQAogICAgICAgICAgQAogICAgICAgICAgQEAKMTk4ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBRQogICAgICBfX19fX19fIEAKICAgICAvICAgX19fX3xACiAgICAvICAgfF9fICAgQAogICAvIC98ICBfX3wgIEAKICAvIF9fXyB8X19fXyBACiAvXy8gIHxfX19fX198QAogICAgICAgICAgICAgIEAKICAgICAgICAgICAgICBAQAoxOTkgIExBVElOIENBUElUQUwgTEVUVEVSIEMgV0lUSCBDRURJTExBCiAgIF9fX19fIEAKICAvIF9fX198QAogfCB8ICQgICBACiB8IHwgJCAgIEAKIHwgfF9fX18gQAogIFxfX19fX3xACiAgICApXykgIEAKICAgICAgICAgQEAKMjAwICBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggR1JBVkUKICAgX18gICBACiAgX1xfXF8gQAogfCBfX19ffEAKIHwgIF98ICBACiB8IHxfX18gQAogfF9fX19ffEAKICAgICAgICBACiAgICAgICAgQEAKMjAxICBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQUNVVEUKICAgIF9fICBACiAgXy9fL18gQAogfCBfX19ffEAKIHwgIF98ICBACiB8IHxfX18gQAogfF9fX19ffEAKICAgICAgICBACiAgICAgICAgQEAKMjAyICBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQ0lSQ1VNRkxFWAogICAvL1wgIEAKICB8LyBcfCBACiB8IF9fX198QAogfCAgX3wgIEAKIHwgfF9fXyBACiB8X19fX198QAogICAgICAgIEAKICAgICAgICBAQAoyMDMgIExBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBESUFFUkVTSVMKICBfICAgXyBACiAoXykgKF8pQAogfCBfX19ffEAKIHwgIF98ICBACiB8IHxfX18gQAogfF9fX19ffEAKICAgICAgICBACiAgICAgICAgQEAKMjA0ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBJIFdJVEggR1JBVkUKICBfXyAgQAogIFxfXCBACiB8XyBffEAKICB8IHwgQAogIHwgfCBACiB8X19ffEAKICAgICAgQAogICAgICBAQAoyMDUgIExBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBBQ1VURQogICBfXyBACiAgL18vIEAKIHxfIF98QAogIHwgfCBACiAgfCB8IEAKIHxfX198QAogICAgICBACiAgICAgIEBACjIwNiAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgSSBXSVRIIENJUkNVTUZMRVgKICAvL1wgQAogfC9fXHxACiB8XyBffEAKICB8IHwgQAogIHwgfCBACiB8X19ffEAKICAgICAgQAogICAgICBAQAoyMDcgIExBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBESUFFUkVTSVMKICBfICAgXyBACiAoXylfKF8pQAogIHxfIF98IEAKICAgfCB8ICBACiAgIHwgfCAgQAogIHxfX198IEAKICAgICAgICBACiAgICAgICAgQEAKMjA4ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBFVEgKICAgIF9fX19fICBACiAgIHwgIF9fIFwgQAogIF98IHxfIHwgfEAKIHxfXyBfX3x8IHxACiAgIHwgfF9ffCB8QAogICB8X19fX18vIEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKMjA5ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBOIFdJVEggVElMREUKICAgL1wvfCBACiAgfC9cL18gQAogfCBcIHwgfEAKIHwgIFx8IHxACiB8IHxcICB8QAogfF98IFxffEAKICAgICAgICBACiAgICAgICAgQEAKMjEwICBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggR1JBVkUKICAgX18gICBACiAgIFxfXCAgQAogIC8gXyBcIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMjExICBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggQUNVVEUKICAgIF9fICBACiAgIC9fLyAgQAogIC8gXyBcIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMjEyICBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggQ0lSQ1VNRkxFWAogICAvL1wgIEAKICB8L19cfCBACiAgLyBfIFwgQAogfCB8IHwgfEAKIHwgfF98IHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAoyMTMgIExBVElOIENBUElUQUwgTEVUVEVSIE8gV0lUSCBUSUxERQogICAvXC98IEAKICB8L1wvICBACiAgLyBfIFwgQAogfCB8IHwgfEAKIHwgfF98IHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAoyMTQgIExBVElOIENBUElUQUwgTEVUVEVSIE8gV0lUSCBESUFFUkVTSVMKICBfICAgXyBACiAoXylfKF8pQAogIC8gXyBcIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMjE1ICBNVUxUSVBMSUNBVElPTiBTSUdOCiAgICAgQAogICAgIEAKIC9cL1xACiA+ICA8QAogXC9cL0AKICAgJCBACiAgICAgQAogICAgIEBACjIxNiAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIFNUUk9LRQogICBfX19fXyBACiAgLyBfXy8vIEAKIHwgfCAvLyB8QAogfCB8Ly98IHxACiB8IC8vX3wgfEAKICAvL19fXy8gQAogICAgICAgICBACiAgICAgICAgIEBACjIxNyAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIEdSQVZFCiAgIF9fICAgQAogIF9cX1xfIEAKIHwgfCB8IHxACiB8IHwgfCB8QAogfCB8X3wgfEAKICBcX19fLyBACiAgICAgICAgQAogICAgICAgIEBACjIxOCAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIEFDVVRFCiAgICBfXyAgQAogIF8vXy9fIEAKIHwgfCB8IHxACiB8IHwgfCB8QAogfCB8X3wgfEAKICBcX19fLyBACiAgICAgICAgQAogICAgICAgIEBACjIxOSAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIENJUkNVTUZMRVgKICAgLy9cICBACiAgfC8gXHwgQAogfCB8IHwgfEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMjIwICBMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggRElBRVJFU0lTCiAgXyAgIF8gQAogKF8pIChfKUAKIHwgfCB8IHxACiB8IHwgfCB8QAogfCB8X3wgfEAKICBcX19fLyBACiAgICAgICAgQAogICAgICAgIEBACjIyMSAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgWSBXSVRIIEFDVVRFCiAgICBfXyAgQAogX18vXy9fX0AKIFwgXCAvIC9ACiAgXCBWIC8gQAogICB8IHwgIEAKICAgfF98ICBACiAgICAgICAgQAogICAgICAgIEBACjIyMiAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVEhPUk4KICBfICAgICAgQAogfCB8X19fICBACiB8ICBfXyBcIEAKIHwgfF9fKSB8QAogfCAgX19fLyBACiB8X3wgICAgIEAKICAgICAgICAgQAogICAgICAgICBAQAoyMjMgIExBVElOIFNNQUxMIExFVFRFUiBTSEFSUCBTCiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgfCApIHxACiB8IHw8IDwgQAogfCB8ICkgfEAKIHwgfHxfLyBACiB8X3wgICAgQAogICAgICAgIEBACjIyNCAgTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBHUkFWRQogICBfXyAgIEAKICAgXF9cICBACiAgIF9fIF8gQAogIC8gX2AgfEAKIHwgKF98IHxACiAgXF9fLF98QAogICAgICAgIEAKICAgICAgICBAQAoyMjUgIExBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQUNVVEUKICAgIF9fICBACiAgIC9fLyAgQAogICBfXyBfIEAKICAvIF9gIHxACiB8IChffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKMjI2ICBMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIENJUkNVTUZMRVgKICAgLy9cICBACiAgfC8gXHwgQAogICBfXyBfIEAKICAvIF9gIHxACiB8IChffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKMjI3ICBMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIFRJTERFCiAgIC9cL3wgQAogIHwvXC8gIEAKICAgX18gXyBACiAgLyBfYCB8QAogfCAoX3wgfEAKICBcX18sX3xACiAgICAgICAgQAogICAgICAgIEBACjIyOCAgTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBESUFFUkVTSVMKICBfICAgXyBACiAoXykgKF8pQAogICBfXyBfIEAKICAvIF9gIHxACiB8IChffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKMjI5ICBMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIFJJTkcgQUJPVkUKICAgIF9fICBACiAgICgoKSkgQAogICBfXyBfIEAKICAvIF9gIHxACiB8IChffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKMjMwICBMQVRJTiBTTUFMTCBMRVRURVIgQUUKICAgICAgICAgICBACiAgICAgICAgICAgQAogICBfXyBfX19fIEAKICAvIF9gICBfIFxACiB8IChffCAgX18vQAogIFxfXyxfX19ffEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKMjMxICBMQVRJTiBTTUFMTCBMRVRURVIgQyBXSVRIIENFRElMTEEKICAgICAgIEAKICAgICAgIEAKICAgX19fIEAKICAvIF9ffEAKIHwgKF9fIEAKICBcX19ffEAKICAgKV8pIEAKICAgICAgIEBACjIzMiAgTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBHUkFWRQogICBfXyAgQAogICBcX1wgQAogICBfX18gQAogIC8gXyBcQAogfCAgX18vQAogIFxfX198QAogICAgICAgQAogICAgICAgQEAKMjMzICBMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIEFDVVRFCiAgICBfXyBACiAgIC9fLyBACiAgIF9fXyBACiAgLyBfIFxACiB8ICBfXy9ACiAgXF9fX3xACiAgICAgICBACiAgICAgICBAQAoyMzQgIExBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggQ0lSQ1VNRkxFWAogICAvL1wgQAogIHwvIFx8QAogICBfX18gQAogIC8gXyBcQAogfCAgX18vQAogIFxfX198QAogICAgICAgQAogICAgICAgQEAKMjM1ICBMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIERJQUVSRVNJUwogIF8gICBfIEAKIChfKSAoXylACiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgIF9fLyBACiAgXF9fX3wgQAogICAgICAgIEAKICAgICAgICBAQAoyMzYgIExBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggR1JBVkUKIF9fIEAKIFxfXEAKICBfIEAKIHwgfEAKIHwgfEAKIHxffEAKICAgIEAKICAgIEBACjIzNyAgTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBBQ1VURQogIF9fQAogL18vQAogIF8gQAogfCB8QAogfCB8QAogfF98QAogICAgQAogICAgQEAKMjM4ICBMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIENJUkNVTUZMRVgKICAvL1wgQAogfC8gXHxACiAgIF8gIEAKICB8IHwgQAogIHwgfCBACiAgfF98IEAKICAgICAgQAogICAgICBAQAoyMzkgIExBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggRElBRVJFU0lTCiAgXyAgIF8gQAogKF8pIChfKUAKICAgIF8gICBACiAgIHwgfCAgQAogICB8IHwgIEAKICAgfF98ICBACiAgICAgICAgQAogICAgICAgIEBACjI0MCAgTEFUSU4gU01BTEwgTEVUVEVSIEVUSAogIC9cL1wgIEAKICA+ICA8ICBACiAgXC9cIFwgQAogIC8gX2AgfEAKIHwgKF8pIHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAoyNDEgIExBVElOIFNNQUxMIExFVFRFUiBOIFdJVEggVElMREUKICAgL1wvfCBACiAgfC9cLyAgQAogIF8gX18gIEAKIHwgJ18gXCBACiB8IHwgfCB8QAogfF98IHxffEAKICAgICAgICBACiAgICAgICAgQEAKMjQyICBMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIEdSQVZFCiAgIF9fICAgQAogICBcX1wgIEAKICAgX19fICBACiAgLyBfIFwgQAogfCAoXykgfEAKICBcX19fLyBACiAgICAgICAgQAogICAgICAgIEBACjI0MyAgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBBQ1VURQogICAgX18gIEAKICAgL18vICBACiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgKF8pIHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAoyNDQgIExBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggQ0lSQ1VNRkxFWAogICAvL1wgIEAKICB8LyBcfCBACiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgKF8pIHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAoyNDUgIExBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggVElMREUKICAgL1wvfCBACiAgfC9cLyAgQAogICBfX18gIEAKICAvIF8gXCBACiB8IChfKSB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMjQ2ICBMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJUwogIF8gICBfIEAKIChfKSAoXylACiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgKF8pIHxACiAgXF9fXy8gQAogICAgICAgIEAKICAgICAgICBAQAoyNDcgIERJVklTSU9OIFNJR04KICAgICBfICAgIEAKICAgIChfKSAgIEAKICBfX19fX19fIEAKIHxfX19fX19ffEAKICAgICBfICAgIEAKICAgIChfKSAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEBACjI0OCAgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBTVFJPS0UKICAgICAgICAgQAogICAgICAgICBACiAgIF9fX18gIEAKICAvIF8vL1wgQAogfCAoLy8pIHxACiAgXC8vX18vIEAKICAgICAgICAgQAogICAgICAgICBAQAoyNDkgIExBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggR1JBVkUKICAgX18gICBACiAgIFxfXCAgQAogIF8gICBfIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKMjUwICBMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIEFDVVRFCiAgICBfXyAgQAogICAvXy8gIEAKICBfICAgXyBACiB8IHwgfCB8QAogfCB8X3wgfEAKICBcX18sX3xACiAgICAgICAgQAogICAgICAgIEBACjI1MSAgTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBDSVJDVU1GTEVYCiAgIC8vXCAgQAogIHwvIFx8IEAKICBfICAgXyBACiB8IHwgfCB8QAogfCB8X3wgfEAKICBcX18sX3xACiAgICAgICAgQAogICAgICAgIEBACjI1MiAgTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBESUFFUkVTSVMKICBfICAgXyBACiAoXykgKF8pQAogIF8gICBfIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfXyxffEAKICAgICAgICBACiAgICAgICAgQEAKMjUzICBMQVRJTiBTTUFMTCBMRVRURVIgWSBXSVRIIEFDVVRFCiAgICBfXyAgQAogICAvXy8gIEAKICBfICAgXyBACiB8IHwgfCB8QAogfCB8X3wgfEAKICBcX18sIHxACiAgIF9fLyB8QAogIHxfX18vIEBACjI1NCAgTEFUSU4gU01BTEwgTEVUVEVSIFRIT1JOCiAgXyAgICAgQAogfCB8ICAgIEAKIHwgfF9fICBACiB8ICdfIFwgQAogfCB8XykgfEAKIHwgLl9fLyBACiB8IHwgICAgQAogfF98ICAgIEBACjI1NSAgTEFUSU4gU01BTEwgTEVUVEVSIFkgV0lUSCBESUFFUkVTSVMKICBfICAgXyBACiAoXykgKF8pQAogIF8gICBfIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfXywgfEAKICAgX18vIHxACiAgfF9fXy8gQEAKMHgwMkJDICBNT0RJRklFUiBMRVRURVIgQVBPU1RST1BIRQogICBACiAgIEAKICkpQAogICBACiAgIEAKICAgQAogICBACiAgIEBACjB4MDJCRCAgTU9ESUZJRVIgTEVUVEVSIFJFVkVSU0VEIENPTU1BCiAgIEAKICAgQAogKChACiAgIEAKICAgQAogICBACiAgIEAKICAgQEAKMHgwMzdBICBHUkVFSyBZUE9HRUdSQU1NRU5JCiAgIEAKICAgQAogICBACiAgIEAKICAgQAogICBACiAgIEAKIHx8QEAKMHgwMzg3ICBHUkVFSyBBTk8gVEVMRUlBCiAgICBACiAgJCBACiAgXyBACiAoXylACiAgICBACiAgJCBACiAgICBACiAgICBAQAoweDAzOTEgIEdSRUVLIENBUElUQUwgTEVUVEVSIEFMUEhBCiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgfF98IHxACiB8ICBfICB8QAogfCB8IHwgfEAKIHxffCB8X3xACiAgICAgICAgQAogICAgICAgIEBACjB4MDM5MiAgR1JFRUsgQ0FQSVRBTCBMRVRURVIgQkVUQQogIF9fX18gIEAKIHwgIF8gXCBACiB8IHxfKSApQAogfCAgXyAoIEAKIHwgfF8pIClACiB8X19fXy8gQAogICAgICAgIEAKICAgICAgICBAQAoweDAzOTMgIEdSRUVLIENBUElUQUwgTEVUVEVSIEdBTU1BCiAgX19fX18gQAogfCAgX19fKUAKIHwgfCQgICBACiB8IHwkICAgQAogfCB8ICAgIEAKIHxffCAgICBACiAgICAgICAgQAogICAgICAgIEBACjB4MDM5NCAgR1JFRUsgQ0FQSVRBTCBMRVRURVIgREVMVEEKICAgICAgICAgICBACiAgICAgL1wgICAgQAogICAgLyAgXCAgIEAKICAgLyAvXCBcICBACiAgLyAvX19cIFwgQAogL19fX19fX19fXEAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKMHgwMzk1ICBHUkVFSyBDQVBJVEFMIExFVFRFUiBFUFNJTE9OCiAgX19fX18gQAogfCAgX19fKUAKIHwgfF8gICBACiB8ICBfKSAgQAogfCB8X19fIEAKIHxfX19fXylACiAgICAgICAgQAogICAgICAgIEBACjB4MDM5NiAgR1JFRUsgQ0FQSVRBTCBMRVRURVIgWkVUQQogIF9fX19fX0AKIChfX18gIC9ACiAgICAvIC8gQAogICAvIC8gIEAKICAvIC9fXyBACiAvX19fX18pQAogICAgICAgIEAKICAgICAgICBAQAoweDAzOTcgIEdSRUVLIENBUElUQUwgTEVUVEVSIEVUQQogIF8gICBfIEAKIHwgfCB8IHxACiB8IHxffCB8QAogfCAgXyAgfEAKIHwgfCB8IHxACiB8X3wgfF98QAogICAgICAgIEAKICAgICAgICBAQAoweDAzOTggIEdSRUVLIENBUElUQUwgTEVUVEVSIFRIRVRBCiAgIF9fX18gIEAKICAvIF9fIFwgQAogfCB8X198IHxACiB8ICBfXyAgfEAKIHwgfF9ffCB8QAogIFxfX19fLyBACiAgICAgICAgIEAKICAgICAgICAgQEAKMHgwMzk5ICBHUkVFSyBDQVBJVEFMIExFVFRFUiBJT1RBCiAgX19fIEAKICggICApQAogIHwgfCBACiAgfCB8IEAKICB8IHwgQAogKF9fXylACiAgICAgIEAKICAgICAgQEAKMHgwMzlBICBHUkVFSyBDQVBJVEFMIExFVFRFUiBLQVBQQQogIF8gICBfX0AKIHwgfCAvIC9ACiB8IHwvIC8gQAogfCAgIDwgIEAKIHwgfFwgXCBACiB8X3wgXF9cQAogICAgICAgIEAKICAgICAgICBAQAoweDAzOUIgIEdSRUVLIENBUElUQUwgTEVUVEVSIExBTURBCiAgICAgICAgICAgQAogICAgIC9cICAgIEAKICAgIC8gIFwgICBACiAgIC8gL1wgXCAgQAogIC8gLyAgXCBcIEAKIC9fLyAgICBcX1xACiAgICAgICAgICAgQAogICAgICAgICAgIEBACjB4MDM5QyAgR1JFRUsgQ0FQSVRBTCBMRVRURVIgTVUKICBfXyAgIF9fIEAKIHwgIFwgLyAgfEAKIHwgICB2ICAgfEAKIHwgfFxfL3wgfEAKIHwgfCAgIHwgfEAKIHxffCAgIHxffEAKICAgICAgICAgIEAKICAgICAgICAgIEBACjB4MDM5RCAgR1JFRUsgQ0FQSVRBTCBMRVRURVIgTlUKICBfICAgXyBACiB8IFwgfCB8QAogfCAgXHwgfEAKIHwgICAgIHxACiB8IHxcICB8QAogfF98IFxffEAKICAgICAgICBACiAgICAgICAgQEAKMHgwMzlFICBHUkVFSyBDQVBJVEFMIExFVFRFUiBYSQogIF9fX19fIEAKIChfX19fXylACiAgIF9fXyAgQAogIChfX18pIEAKICBfX19fXyBACiAoX19fX18pQAogICAgICAgIEAKICAgICAgICBAQAoweDAzOUYgIEdSRUVLIENBUElUQUwgTEVUVEVSIE9NSUNST04KICAgX19fICBACiAgLyBfIFwgQAogfCB8IHwgfEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMHgwM0EwICBHUkVFSyBDQVBJVEFMIExFVFRFUiBQSQogIF9fX19fX18gQAogKCAgIF8gICApQAogIHwgfCB8IHwgQAogIHwgfCB8IHwgQAogIHwgfCB8IHwgQAogIHxffCB8X3wgQAogICAgICAgICAgQAogICAgICAgICAgQEAKMHgwM0ExICBHUkVFSyBDQVBJVEFMIExFVFRFUiBSSE8KICBfX19fICBACiB8ICBfIFwgQAogfCB8XykgKUAKIHwgIF9fLyBACiB8IHwgICAgQAogfF98ICAgIEAKICAgICAgICBACiAgICAgICAgQEAKMHgwM0EzICBHUkVFSyBDQVBJVEFMIExFVFRFUiBTSUdNQQogX19fX19fIEAKIFwgIF9fXylACiAgXCBcICAgQAogICA+ID4gIEAKICAvIC9fXyBACiAvX19fX18pQAogICAgICAgIEAKICAgICAgICBAQAoweDAzQTQgIEdSRUVLIENBUElUQUwgTEVUVEVSIFRBVQogIF9fX19fIEAKIChfICAgXylACiAgIHwgfCAgQAogICB8IHwgIEAKICAgfCB8ICBACiAgIHxffCAgQAogICAgICAgIEAKICAgICAgICBAQAoweDAzQTUgIEdSRUVLIENBUElUQUwgTEVUVEVSIFVQU0lMT04KICBfXyAgIF9fIEAKIChfIFwgLyBfKUAKICAgXCB2IC8gIEAKICAgIHwgfCAgIEAKICAgIHwgfCAgIEAKICAgIHxffCAgIEAKICAgICAgICAgIEAKICAgICAgICAgIEBACjB4MDNBNiAgR1JFRUsgQ0FQSVRBTCBMRVRURVIgUEhJCiAgICAgXyAgICBACiAgIF98IHxfICBACiAgLyAgICAgXCBACiAoICh8IHwpIClACiAgXF8gICBfLyBACiAgICB8X3wgICBACiAgICAgICAgICBACiAgICAgICAgICBAQAoweDAzQTcgIEdSRUVLIENBUElUQUwgTEVUVEVSIENISQogX18gICBfX0AKIFwgXCAvIC9ACiAgXCB2IC8gQAogICA+IDwgIEAKICAvIF4gXCBACiAvXy8gXF9cQAogICAgICAgIEAKICAgICAgICBAQAoweDAzQTggIEdSRUVLIENBUElUQUwgTEVUVEVSIFBTSQogIF8gIF8gIF8gQAogfCB8fCB8fCB8QAogfCBcfCB8LyB8QAogIFxfICAgXy8gQAogICAgfCB8ICAgQAogICAgfF98ICAgQAogICAgICAgICAgQAogICAgICAgICAgQEAKMHgwM0E5ICBHUkVFSyBDQVBJVEFMIExFVFRFUiBPTUVHQQogICAgX19fXyAgIEAKICAgLyBfXyBcICBACiAgfCB8ICB8IHwgQAogIHwgfCAgfCB8IEAKICBfXCBcLyAvXyBACiAoX19ffHxfX18pQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAoweDAzQjEgIEdSRUVLIFNNQUxMIExFVFRFUiBBTFBIQQogICAgICAgICBACiAgICAgICAgIEAKICAgX18gIF9fQAogIC8gIFwvIC9ACiAoICgpICA8IEAKICBcX18vXF9cQAogICAgICAgICBACiAgICAgICAgIEBACjB4MDNCMiAgR1JFRUsgU01BTEwgTEVUVEVSIEJFVEEKICAgX19fICBACiAgLyBfIFwgQAogfCB8XykgKUAKIHwgIF8gPCBACiB8IHxfKSApQAogfCAgX18vIEAKIHwgfCAgICBACiB8X3wgICAgQEAKMHgwM0IzICBHUkVFSyBTTUFMTCBMRVRURVIgR0FNTUEKICAgICAgICBACiAgICAgICAgQAogIF8gICBfIEAKICggXCAvIClACiAgXCB2IC8gQAogICB8IHwgIEAKICAgfCB8ICBACiAgIHxffCAgQEAKMHgwM0I0ICBHUkVFSyBTTUFMTCBMRVRURVIgREVMVEEKICAgIF9fICBACiAgIC8gXykgQAogICBcIFwgIEAKICAvIF8gXCBACiAoIChfKSApQAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMHgwM0I1ICBHUkVFSyBTTUFMTCBMRVRURVIgRVBTSUxPTgogICAgICBACiAgICAgIEAKICBfX18gQAogLyBfXylACiA+IF8pIEAKIFxfX18pQAogICAgICBACiAgICAgIEBACjB4MDNCNiAgR1JFRUsgU01BTEwgTEVUVEVSIFpFVEEKIF9fX19fICBACiBcX18gICkgQAogICAvIC8gIEAKICAvIC8gICBACiB8IHxfXyAgQAogIFxfXyBcIEAKICAgICApIClACiAgICAoXy8gQEAKMHgwM0I3ICBHUkVFSyBTTUFMTCBMRVRURVIgRVRBCiAgICAgICAgQAogICAgICAgIEAKICBfIF9fICBACiB8ICdfIFwgQAogfCB8IHwgfEAKIHxffCB8IHxACiAgICAgfCB8QAogICAgIHxffEBACjB4MDNCOCAgR1JFRUsgU01BTEwgTEVUVEVSIFRIRVRBCiAgIF9fXyAgQAogIC8gXyBcIEAKIHwgfF98IHxACiB8ICBfICB8QAogfCB8X3wgfEAKICBcX19fLyBACiAgICAgICAgQAogICAgICAgIEBACjB4MDNCOSAgR1JFRUsgU01BTEwgTEVUVEVSIElPVEEKICAgICBACiAgICAgQAogIF8gIEAKIHwgfCBACiB8IHwgQAogIFxfKUAKICAgICBACiAgICAgQEAKMHgwM0JBICBHUkVFSyBTTUFMTCBMRVRURVIgS0FQUEEKICAgICAgIEAKICAgICAgIEAKICBfICBfX0AKIHwgfC8gL0AKIHwgICA8IEAKIHxffFxfXEAKICAgICAgIEAKICAgICAgIEBACjB4MDNCQiAgR1JFRUsgU01BTEwgTEVUVEVSIExBTURBCiBfXyAgICAgQAogXCBcICAgIEAKICBcIFwgICBACiAgID4gXCAgQAogIC8gXiBcIEAKIC9fLyBcX1xACiAgICAgICAgQAogICAgICAgIEBACjB4MDNCQyAgR1JFRUsgU01BTEwgTEVUVEVSIE1VCiAgICAgICAgQAogICAgICAgIEAKICBfICAgXyBACiB8IHwgfCB8QAogfCB8X3wgfEAKIHwgLl8sX3xACiB8IHwgICAgQAogfF98ICAgIEBACjB4MDNCRCAgR1JFRUsgU01BTEwgTEVUVEVSIE5VCiAgICAgICBACiAgICAgICBACiAgXyAgX19ACiB8IHwvIC9ACiB8IC8gLyBACiB8X18vICBACiAgICAgICBACiAgICAgICBAQAoweDAzQkUgIEdSRUVLIFNNQUxMIExFVFRFUiBYSQogXD1cX18gIEAKICA+IF9fKSBACiAoIChfICAgQAogID4gXykgIEAKICggKF9fICBACiAgXF9fIFwgQAogICAgICkgKUAKICAgIChfLyBAQAoweDAzQkYgIEdSRUVLIFNNQUxMIExFVFRFUiBPTUlDUk9OCiAgICAgICAgQAogICAgICAgIEAKICAgX19fICBACiAgLyBfIFwgQAogKCAoXykgKUAKICBcX19fLyBACiAgICAgICAgQAogICAgICAgIEBACjB4MDNDMCAgR1JFRUsgU01BTEwgTEVUVEVSIFBJCiAgICAgICAgIEAKICAgICAgICAgQAogIF9fX19fXyBACiAoICBfXyAgKUAKICB8IHx8IHwgQAogIHxffHxffCBACiAgICAgICAgIEAKICAgICAgICAgQEAKMHgwM0MxICBHUkVFSyBTTUFMTCBMRVRURVIgUkhPCiAgICAgICAgQAogICAgICAgIEAKICAgX19fICBACiAgLyBfIFwgQAogfCB8XykgKUAKIHwgIF9fLyBACiB8IHwgICAgQAogfF98ICAgIEBACjB4MDNDMiAgR1JFRUsgU01BTEwgTEVUVEVSIEZJTkFMIFNJR01BCiAgICAgICAgQAogICAgICAgIEAKICAgX19fXyBACiAgLyBfX18pQAogKCAoX18gIEAKICBcX18gXCBACiAgICBfKSApQAogICAoX18vIEBACjB4MDNDMyAgR1JFRUsgU01BTEwgTEVUVEVSIFNJR01BCiAgICAgICAgQAogICAgICAgIEAKICAgX19fXyBACiAgLyAgLl8pQAogKCAoKSApIEAKICBcX18vICBACiAgICAgICAgQAogICAgICAgIEBACjB4MDNDNCAgR1JFRUsgU01BTEwgTEVUVEVSIFRBVQogICAgICBACiAgICAgIEAKICBfX18gQAogKCAgIClACiAgfCB8IEAKICAgXF8pQAogICAgICBACiAgICAgIEBACjB4MDNDNSAgR1JFRUsgU01BTEwgTEVUVEVSIFVQU0lMT04KICAgICAgICBACiAgICAgICAgQAogIF8gICBfIEAKIHwgfCB8IHxACiB8IHxffCB8QAogIFxfX18vIEAKICAgICAgICBACiAgICAgICAgQEAKMHgwM0M2ICBHUkVFSyBTTUFMTCBMRVRURVIgUEhJCiAgICAgXyAgICBACiAgICB8IHwgICBACiAgIF98IHxfICBACiAgLyAgICAgXCBACiAoICh8IHwpIClACiAgXF8gICBfLyBACiAgICB8IHwgICBACiAgICB8X3wgICBAQAoweDAzQzcgIEdSRUVLIFNNQUxMIExFVFRFUiBDSEkKICAgICAgICBACiAgICAgICAgQAogX18gICBfX0AKIFwgXCAvIC9ACiAgXCB2IC8gQAogICA+IDwgIEAKICAvIF4gXCBACiAvXy8gXF9cQEAKMHgwM0M4ICBHUkVFSyBTTUFMTCBMRVRURVIgUFNJCiAgICAgICAgICBACiAgICAgICAgICBACiAgXyAgXyAgXyBACiB8IHx8IHx8IHxACiB8IFx8IHwvIHxACiAgXF8gICBfLyBACiAgICB8IHwgICBACiAgICB8X3wgICBAQAoweDAzQzkgIEdSRUVLIFNNQUxMIExFVFRFUiBPTUVHQQogICAgICAgICAgICBACiAgICAgICAgICAgIEAKICAgX18gICBfXyAgQAogIC8gLyBfIFwgXCBACiB8IHxfLyBcX3wgfEAKICBcX19fXl9fXy8gQAogICAgICAgICAgICBACiAgICAgICAgICAgIEBACjB4MDNEMSAgR1JFRUsgVEhFVEEgU1lNQk9MCiAgICAgX19fICAgIEAKICAgIC8gXyBcICAgQAogICAoIChffCB8XyBACiAgXyBcIF8gICBfKUAKIHwgfF9fX3wgfCAgQAogIFxfX19fXy8gICBACiAgICAgICAgICAgIEAKICAgICAgICAgICAgQEAKMHgwM0Q1ICBHUkVFSyBQSEkgU1lNQk9MCiAgICAgICAgICBACiAgICAgICAgICBACiAgXyAgIF9fICBACiB8IHwgLyAgXCBACiB8IHx8IHx8IClACiAgXF8gICBfLyBACiAgICB8IHwgICBACiAgICB8X3wgICBAQAoweDAzRDYgIEdSRUVLIFBJIFNZTUJPTAogICAgICAgICAgICBACiAgICAgICAgICAgIEAKICBfX19fX19fX18gQAogKCAgX19fX18gIClACiB8IHxfLyBcX3wgfEAKICBcX19fXl9fXy8gQAogICAgICAgICAgICBACiAgICAgICAgICAgIEBACi0weDAwMDUgIAphbHBoYSA9IGEsIGJldGEgPSBiLCBnYW1tYSA9IGcsIGRlbHRhID0gZCwgZXBzaWxvbiA9IGUgICBACnpldGEgPSB6LCBldGEgPSBoLCB0aGV0YSA9IHEsIGlvdGEgPSBpLCBsYW1kYSA9IGwsIG11ID0gbUAKbnUgPSBuLCB4aSA9IHgsIG9taWNyb24gPSBvLCBwaSA9IHAsIHJobyA9IHIsIHNpZ21hID0gcyAgQApwaGkgPSBmLCBjaGkgPSBjLCBwc2kgPSB5LCBvbWVnYSA9IHcsIGZpbmFsIHNpZ21hID0gViAgICBACiAgICAgcGkgc3ltYm9sID0gdiwgdGhldGEgc3ltYm9sID0gSiwgcGhpIHN5bWJvbCA9IGogICAgIEAKICAgICBtaWRkbGUgZG90ID0gOiwgeXBvZ2VncmFtbWVuaSA9IF8gICAgICAgICAgICAgICAgICAgQAogICAgIHJvdWdoIGJyZWF0aGluZyA9ICgsIHNtb290aCBicmVhdGhpbmcgPSApICAgICAgICAgICBACiAgICAgYWN1dGUgYWNjZW50ID0gJywgZ3JhdmUgYWNjZW50ID0gYCwgZGlhbHl0aWthID0gXiAgIEBACg=='
);

export default big;