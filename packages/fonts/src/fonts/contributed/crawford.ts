import { FontFile } from '../../FontFile';

const crawford = new FontFile(
    'crawford',
    'ZmxmMmEkIDggNyAxOCA0IDI1CmNyYXdmb3JkLmZsZiAoRklHbGV0IGZvbnQpCgoKRmlnbGV0IGNvbnZlcnNpb24gYnkgS2VudCBOYXNzZW4sIGtuYXNzZW5AdW1pY2guZWR1LCAxLzIvOTUKCkZyb206IHMxMTcxMTgwQGdpYWViLmNjLm1vbmFzaC5lZHUuYXUgKFJvd2FuIENyYXdmb3JkKQpOZXdzZ3JvdXBzOiBhbHQuYXNjaWktYXJ0ClN1YmplY3Q6IEZvbnQgLSBTdHlsZSBObyAyLi4uLgpEYXRlOiAxNCBKYW4gMTk5NCAxNDozNzozMCBHTVQKT3JnYW5pemF0aW9uOiBNb25hc2ggVW5pdmVyc2l0eQpMaW5lczogNDEKTWVzc2FnZS1JRDogPDJoNmFuYSRkYjZAaGFyYmluZ2VyLmNjLm1vbmFzaC5lZHUuYXU+Ck5OVFAtUG9zdGluZy1Ib3N0OiBnaWFlYi5jYy5tb25hc2guZWR1LmF1ClgtTmV3c3JlYWRlcjogTk4gdmVyc2lvbiA2LjUuMCAjNCAoTk9WKQpTdGF0dXM6IFJPCgpIYWQgc29tZSBzcGFyZSB0aW1lIHRvZGF5LCBzbyBJIGhhdmUgZG9uZSBhbm90aGVyIGZvbnQuIERpZmZlcmVudApmb3JtIHRvIHRoZSBsYXN0IG9uZSB0aG91Z2g6CgpbLi4uXQpBbmQgdGhlcmUgeW91IGFyZS4gIlMiIGxvb2tzIHNsaWdodGx5IG9kZCBhbmQgc28gZG9lcyAiSiIsIGJ1dApvdGhlcndpc2UgZmFpcmx5IG5lYXQgSSBndWVzcy4KClJvdy4KCiQgICRACiQgICRACiQgICRACiQgICRACiQgICRACiQgICRACiQgICRACiQgICRAQAogX18gQAp8ICBUQAp8ICB8QAp8X19qQAogX18gQAp8ICBUQApsX19qQAogICAgQEAKJF9fICBfXyBAClQgIHxUICB8QApsXyB8bF8gfEAKJCBcbCAgXGxACiQgICAgICAgQAokICAgICAgIEAKJCAgICAgICBACiQgICAgICAgQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQAogX18gQApUICB8QApsXyB8QAogIFxsQAogICAgQAogICAgQAogICAgQAogICAgQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQAogICAgQAogICAgQAogICAgQAogICAgQAogX18gQApUICB8QApsXyB8QAogIFxsQEAKICAgICAgIEAKICAgICAgIEAKIF9fX19fIEAKfCAgICAgfEAKbF9fX19fakAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEBACiAgICBACiAgICBACiAgICBACiAgICBACiBfXyBACnwgIFRACmxfX2pACiAgICBAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKICAgIEAKIF9fIEAKfCAgVEAKbF9fakAKIF9fIEAKfCAgVEAKbF9fakAKICAgIEBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKIF9fX19fIEAKLyAgICAgVEAKfCAgWSAgfEAKbF9ffCAgfEAKICAgbF9fakAKICAgIF9fIEAKICAgbF9fakAKICAgICAgIEBACiAgX19fXyBACiAvICAgIFxAClkgICBfIGpACnwgIFQgIHxACnwgIFxfX3xACnwgICAgIHxACiBcX18sX2pACiAgICAgICBAQAogIF9fX18gQAogLyAgICBUQApZICBvICB8QAp8ICAgICB8QAp8ICBfICB8QAp8ICB8ICB8QApsX19qX19qQAogICAgICAgQEAKIF9fX18gIEAKfCAgICBcIEAKfCAgbyAgKUAKfCAgICAgVEAKfCAgTyAgfEAKfCAgICAgfEAKbF9fX19fakAKICAgICAgIEBACiAgICBfXyBACiAgIC8gIF1ACiAgLyAgLyBACiAvICAvICBACi8gICBcXyBAClwgICAgIHxACiBcX19fX2pACiAgICAgICBAQAogX19fICAgQAp8ICAgXCAgQAp8ICAgIFwgQAp8ICBEICBZQAp8ICAgICB8QAp8ICAgICB8QApsX19fX19qQAogICAgICAgQEAKICAgX19fIEAKICAvICBfXUAKIC8gIFtfIEAKWSAgICBfXUAKfCAgIFtfIEAKfCAgICAgVEAKbF9fX19fakAKICAgICAgIEBACiBfX19fXyBACnwgICAgIHxACnwgICBfX2pACnwgIGxfICBACnwgICBfXSBACnwgIFQgICBACmxfX2ogICBACiAgICAgICBAQAogIF9fX18gQAogLyAgICBUQApZICAgX19qQAp8ICBUICB8QAp8ICBsXyB8QAp8ICAgICB8QApsX19fLF9qQAogICAgICAgQEAKIF9fIF9fIEAKfCAgVCAgVEAKfCAgbCAgfEAKfCAgXyAgfEAKfCAgfCAgfEAKfCAgfCAgfEAKbF9fal9fakAKICAgICAgIEBACiBfX19fIEAKbCAgICBqQAogfCAgVCBACiB8ICB8IEAKIHwgIHwgQAogaiAgbCBACnxfX19fakAKICAgICAgQEAKICBfX19fIEAKIHwgICAgfEAKIGxfXyAgfEAKIF9faiAgfEAKLyAgfCAgfEAKXCAgYCAgfEAKIFxfX19fakAKICAgICAgIEBACiBfXyAgXyBACnwgIGwvIF1ACnwgICcgLyBACnwgICAgXCBACnwgICAgIFlACnwgIC4gIHxACmxfX2pcX2pACiAgICAgICBAQAogXyAgICAgQAp8IFQgICAgQAp8IHwgICAgQAp8IGxfX18gQAp8ICAgICBUQAp8ICAgICB8QApsX19fX19qQAogICAgICAgQEAKIF9fXyBfX18gQAp8ICAgVCAgIFRACnwgXyAgIF8gfEAKfCAgXF8vICB8QAp8ICAgfCAgIHxACnwgICB8ICAgfEAKbF9fX2pfX19qQAogICAgICAgICBAQAogX19fXyAgQAp8ICAgIFwgQAp8ICBfICBZQAp8ICB8ICB8QAp8ICB8ICB8QAp8ICB8ICB8QApsX19qX19qQAogICAgICAgQEAKICBfX18gIEAKIC8gICBcIEAKWSAgICAgWUAKfCAgTyAgfEAKfCAgICAgfEAKbCAgICAgIUAKIFxfX18vIEAKICAgICAgIEBACiBfX19fICBACnwgICAgXCBACnwgIG8gIClACnwgICBfLyBACnwgIHwgICBACnwgIHwgICBACmxfX2ogICBACiAgICAgICBAQAogIF9fXyAgQAogLyAgIFwgQApZICAgICBZQAp8ICBRICB8QAp8ICAgICB8QApsICAgICB8QAogXF9fLF9qQAogICAgICAgQEAKIF9fX18gIEAKfCAgICBcIEAKfCAgRCAgKUAKfCAgICAvIEAKfCAgICBcIEAKfCAgLiAgWUAKbF9falxfakAKICAgICAgIEBACiAgX19fX19ACiAvIF9fXy9ACiggICBcXyBACiBcX18gIFRACiAvICBcIHxACiBcICAgIHxACiAgXF9fX2pACiAgICAgICBAQAogX19fX19fIEAKfCAgICAgIFRACnwgICAgICB8QApsX2ogIGxfakAKICB8ICB8ICBACiAgfCAgfCAgQAogIGxfX2ogIEAKICAgICAgICBAQAogX18gX18gQAp8ICBUICBUQAp8ICB8ICB8QAp8ICB8ICB8QAp8ICA6ICB8QApsICAgICB8QAogXF9fLF9qQAogICAgICAgQEAKIF9fIF9fIEAKfCAgVCAgfEAKfCAgfCAgfEAKfCAgfCAgfEAKbCAgOiAgIUAKIFwgICAvIEAKICBcXy8gIEAKICAgICAgIEBACiBfXyAgICBfXyBACnwgIFRfX1QgIFRACnwgIHwgIHwgIHxACnwgIHwgIHwgIHxACmwgIGAgICcgICFACiBcICAgICAgLyBACiAgXF8vXF8vICBACiAgICAgICAgICBAQAogX18gX18gQAp8ICBUICBUQAp8ICB8ICB8QApsXyAgIF9qQAp8ICAgICB8QAp8ICB8ICB8QAp8X19qX198QAogICAgICAgQEAKIF9fIF9fIEAKfCAgVCAgVEAKfCAgfCAgfEAKfCAgfiAgfEAKbF9fXywgfEAKfCAgICAgIUAKbF9fX18vIEAKICAgICAgIEBACiBfX19fXyBACnwgICAgIFRACmxfXy8gIHxACnwgICBfX2pACnwgIC8gIHxACnwgICAgIHxACmxfX19fX2pACiAgICAgICBAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKIF9fIEAKfCAgVEAKfCBfakAKfC8gIEAKICAgIEAKICAgIEAKICAgIEAKICAgIEBACiAgX19fXyBACiAvICAgIFRAClkgIG8gIHxACnwgICAgIHxACnwgIF8gIHxACnwgIHwgIHxACmxfX2pfX2pACiAgICAgICBAQAogX19fXyAgQAp8ICAgIFwgQAp8ICBvICApQAp8ICAgICBUQAp8ICBPICB8QAp8ICAgICB8QApsX19fX19qQAogICAgICAgQEAKICAgIF9fIEAKICAgLyAgXUAKICAvICAvIEAKIC8gIC8gIEAKLyAgIFxfIEAKXCAgICAgfEAKIFxfX19fakAKICAgICAgIEBACiBfX18gICBACnwgICBcICBACnwgICAgXCBACnwgIEQgIFlACnwgICAgIHxACnwgICAgIHxACmxfX19fX2pACiAgICAgICBAQAogICBfX18gQAogIC8gIF9dQAogLyAgW18gQApZICAgIF9dQAp8ICAgW18gQAp8ICAgICBUQApsX19fX19qQAogICAgICAgQEAKIF9fX19fIEAKfCAgICAgfEAKfCAgIF9fakAKfCAgbF8gIEAKfCAgIF9dIEAKfCAgVCAgIEAKbF9faiAgIEAKICAgICAgIEBACiAgX19fXyBACiAvICAgIFRAClkgICBfX2pACnwgIFQgIHxACnwgIGxfIHxACnwgICAgIHxACmxfX18sX2pACiAgICAgICBAQAogX18gX18gQAp8ICBUICBUQAp8ICBsICB8QAp8ICBfICB8QAp8ICB8ICB8QAp8ICB8ICB8QApsX19qX19qQAogICAgICAgQEAKIF9fX18gQApsICAgIGpACiB8ICBUIEAKIHwgIHwgQAogfCAgfCBACiBqICBsIEAKfF9fX19qQAogICAgICBAQAogIF9fX18gQAogfCAgICB8QAogbF9fICB8QAogX19qICB8QAovICB8ICB8QApcICBgICB8QAogXF9fX19qQAogICAgICAgQEAKIF9fICBfIEAKfCAgbC8gXUAKfCAgJyAvIEAKfCAgICBcIEAKfCAgICAgWUAKfCAgLiAgfEAKbF9falxfakAKICAgICAgIEBACiBfICAgICBACnwgVCAgICBACnwgfCAgICBACnwgbF9fXyBACnwgICAgIFRACnwgICAgIHxACmxfX19fX2pACiAgICAgICBAQAogX19fIF9fXyBACnwgICBUICAgVEAKfCBfICAgXyB8QAp8ICBcXy8gIHxACnwgICB8ICAgfEAKfCAgIHwgICB8QApsX19fal9fX2pACiAgICAgICAgIEBACiBfX19fICBACnwgICAgXCBACnwgIF8gIFlACnwgIHwgIHxACnwgIHwgIHxACnwgIHwgIHxACmxfX2pfX2pACiAgICAgICBAQAogIF9fXyAgQAogLyAgIFwgQApZICAgICBZQAp8ICBPICB8QAp8ICAgICB8QApsICAgICAhQAogXF9fXy8gQAogICAgICAgQEAKIF9fX18gIEAKfCAgICBcIEAKfCAgbyAgKUAKfCAgIF8vIEAKfCAgfCAgIEAKfCAgfCAgIEAKbF9faiAgIEAKICAgICAgIEBACiAgX19fICBACiAvICAgXCBAClkgICAgIFlACnwgIFEgIHxACnwgICAgIHxACmwgICAgIHxACiBcX18sX2pACiAgICAgICBAQAogX19fXyAgQAp8ICAgIFwgQAp8ICBEICApQAp8ICAgIC8gQAp8ICAgIFwgQAp8ICAuICBZQApsX19qXF9qQAogICAgICAgQEAKICBfX19fX0AKIC8gX19fL0AKKCAgIFxfIEAKIFxfXyAgVEAKIC8gIFwgfEAKIFwgICAgfEAKICBcX19fakAKICAgICAgIEBACiBfX19fX18gQAp8ICAgICAgVEAKfCAgICAgIHxACmxfaiAgbF9qQAogIHwgIHwgIEAKICB8ICB8ICBACiAgbF9faiAgQAogICAgICAgIEBACiBfXyBfXyBACnwgIFQgIFRACnwgIHwgIHxACnwgIHwgIHxACnwgIDogIHxACmwgICAgIHxACiBcX18sX2pACiAgICAgICBAQAogX18gX18gQAp8ICBUICB8QAp8ICB8ICB8QAp8ICB8ICB8QApsICA6ICAhQAogXCAgIC8gQAogIFxfLyAgQAogICAgICAgQEAKIF9fICAgIF9fIEAKfCAgVF9fVCAgVEAKfCAgfCAgfCAgfEAKfCAgfCAgfCAgfEAKbCAgYCAgJyAgIUAKIFwgICAgICAvIEAKICBcXy9cXy8gIEAKICAgICAgICAgIEBACiBfXyBfXyBACnwgIFQgIFRACnwgIHwgIHxACmxfICAgX2pACnwgICAgIHxACnwgIHwgIHxACnxfX2pfX3xACiAgICAgICBAQAogX18gX18gQAp8ICBUICBUQAp8ICB8ICB8QAp8ICB+ICB8QApsX19fLCB8QAp8ICAgICAhQApsX19fXy8gQAogICAgICAgQEAKIF9fX19fIEAKfCAgICAgVEAKbF9fLyAgfEAKfCAgIF9fakAKfCAgLyAgfEAKfCAgICAgfEAKbF9fX19fakAKICAgICAgIEBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQAo='
);

export default crawford;
