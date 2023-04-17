import { FontFile } from '../../FontFile';

const runyc = new FontFile(
    'runyc',
    'ZmxmMmEkIDYgNiAxNSAtMSAyMApUaGUgZWxkZXIgZnV0aGFyayAgLS0gYnkgQnJ5YW4gQWxleGFuZGVyIDxhbGV4YW5kZUBtYXRoY3MucmhvZGVzLmVkdT4KZmlnbGV0IHJlbGVhc2UgMi4xIC0tIDEyIEF1ZyAxOTk0ClRoaXMgZm9udCBjb25zaXN0cyBvZiB0aGUgcnVuZXMgaW4gdGhlIGVsZGVyIGZ1dGhhcmsuICBJdCBpcyBhY2N1cmF0ZSBhcwpmYXIgYXMgSSBrbm93LiAgQW55IGNvcnJlY3Rpb25zLCBvciBpZGVhcyBvbiBpbXByb3ZpbmcgdGhlIGZvbnQncyBhcHBlYXJhbmNlCmFyZSB3ZWxjb21lLiAgTW9kaWZ5aW5nIHRoaXMgZm9udCBpcyBmaW5lIHdpdGggbWU7IHBsZWFzZSBlLW1haWwgbWUgdGhlCnJlc3VsdC4KCjMgcG9pbnQgdmVyc2lvbiBvZiB0aGUgcnVuZXMgdXNlZCBhcyB1cHBlcmNhc2UgYWRkZWQgYXMgbG93ZXJjYXNlIGxldHRlcnMKOS8yMi85NyBKZXJyYWQgUGllcmNlIDxiZWxnNG1pdEBtaXQuZWR1PgoKRXhwbGFuYXRpb24gb2YgZmlyc3QgbGluZToKZmxmMiAtICJtYWdpYyBudW1iZXIiIGZvciBmaWxlIGlkZW50aWZpY2F0aW9uCmEgICAgLSBzaG91bGQgYWx3YXlzIGJlIGBhJywgZm9yIG5vdwokICAgIC0gdGhlICJoYXJkYmxhbmsiIC0tIHByaW50cyBhcyBhIGJsYW5rLCBidXQgY2FuJ3QgYmUgc211c2hlZAo2ICAgIC0gaGVpZ2h0IG9mIGEgY2hhcmFjdGVyCjYgICAgLSBoZWlnaHQgb2YgYSBjaGFyYWN0ZXIsIG5vdCBpbmNsdWRpbmcgZGVzY2VuZGVycwoxNSAgIC0gbWF4IGxpbmUgbGVuZ3RoIChleGNsdWRpbmcgY29tbWVudCBsaW5lcykgKyBhIGZ1ZGdlIGZhY3RvcgotMSAgIC0gZGVmYXVsdCBzbXVzaG1vZGUgZm9yIHRoaXMgZm9udAoyMCAgIC0gbnVtYmVyIG9mIGNvbW1lbnQgbGluZXMKCiQgICAkQAokICAgJEAKJCBfICRACiR8X3wkQAokICAgJEAKJCAgICRAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQAogICAgICBACl9fL1xfX0AKXCAgICAvQAovXyAgX1xACiAgXC8gIEAKICAgICAgQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKIF8gQAp8X3xACiBfIEAKfF98QAogXyBACnxffEBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKICAgQAogXyBACihfKUAKICAgQAooXylACiAgIEBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACnxcICBACnwgXCBACnxcICBACnwgXCBACnwgICBACnwgICBAQAp8flwgIEAKfCAgPiBACnxfLyAgQAp8flwgIEAKfCAgPiBACnxfLyAgQEAKfCAgICBACnwgICAgQAp8ICAgIEAKfFwgICBACnwgXCAgQAp8ICBcIEBACnxcICAgIC98IEAKfCBcICAvIHwgQAp8ICBcLyAgfCBACnwgIC9cICB8IEAKfCAvICBcIHwgQAp8LyAgICBcfCBAQAp8XCAgICAvfCBACnwgXCAgLyB8IEAKfCAgXC8gIHwgQAp8ICAgICAgfCBACnwgICAgICB8IEAKfCAgICAgIHwgQEAKfCAvIC8gQAp8LyAvICBACnwgLyAgIEAKfC8gICAgQAp8ICAgICBACnwgICAgIEBAClwgICAgLyBACiBcICAvICBACiAgXC8gICBACiAgL1wgICBACiAvICBcICBACi8gICAgXCBAQAp8ICAgIHwgQAp8XCAgIHwgQAp8IFwgIHwgQAp8ICBcIHwgQAp8ICAgXHwgQAp8ICAgIHwgQEAKfCBACnwgQAp8IEAKfCBACnwgQAp8IEBACiAvICAgICBACi8gICAgICBAClwgICBcICBACiBcICAgXCBACiAgICAgLyBACiAgICAvICBAQAogIC8gQAogLyAgQAovICAgQApcICAgQAogXCAgQAogIFwgQEAKfFwgICBACnwgXCAgQAp8ICBcIEAKfCAgICBACnwgICAgQAp8ICAgIEBACnxcICAvfCBACnwgXC8gfCBACnwgL1wgfCBACnwvICBcfCBACnwgICAgfCBACnwgICAgfCBAQAogIHwgICBAClwgfCAgIEAKIFx8ICAgQAogIHxcICBACiAgfCBcIEAKICB8ICAgQEAKIC9+XCAgQAovICAgXCBAClwgICAvIEAKIFwgLyAgQAogLyBcICBACi8gICBcIEBACnxcICAvIEAKfCBcLyAgQAp8ICAgICBACnwgICAgIEAKfCAvXCAgQAp8LyAgXCBAQApACkAKQApACkAKQEAKfH5cICBACnwgIFwgQAp8ICAvIEAKfF8vICBACnwgXCAgQAp8ICBcIEBACiAgLyAgIEAKIC8gICAgQAovX19fXyBACiAgICAvIEAKICAgLyAgQAogIC8gICBAQAogIC98XCAgIEAKIC8gfCBcICBACi8gIHwgIFwgQAogICB8ICAgIEAKICAgfCAgICBACiAgIHwgICAgQEAKfFwgICAgQAp8IFwgICBACnwgIFwgIEAKfCAgIHwgQAp8ICAgfCBACnwgICB8IEBACnxcICAgIEAKfCBcICAgQAp8ICBcICBACnwgICB8IEAKfCAgIHwgQAp8ICAgfCBAQAp8XCAgQAp8ID4gQAp8LyAgQAp8ICAgQAp8ICAgQAp8ICAgQEAKQApACkAKQApACkBACnx+fi1fXyAgQAp8ICAgICB8IEAKfF9fX19ffCBACnwgIHwgIHwgQAp8ICB8ICB8IEAKfCAgfCAgfCBAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKICAgQAogICBACiAgIEAKfFwgQAp8XCBACnwgIEBACiAgIEAKICAgQAogICBACnxcIEAKfDwgQAp8LyBAQAogICBACiAgIEAKICAgQAp8ICBACnwgIEAKfFwgQEAKICAgICAgQAogICAgICBACiAgICAgIEAKfFwgL3wgQAp8IFggfCBACnwvIFx8IEBACiAgICAgQAogICAgIEAKICAgICBACnxcL3wgQAp8ICB8IEAKfCAgfCBAQAogICAgQAogICAgQAogICAgQAp8Ly8gQAp8LyAgQAp8ICAgQEAKICAgIEAKICAgIEAKICAgIEAKXCAvIEAKIFggIEAKLyBcIEBACiAgICBACiAgICBACiAgICBACnwgfCBACnxcfCBACnwgfCBAQAogIEAKICBACiAgQAp8IEAKfCBACnwgQEAKICAgIEAKICAgIEAKICAgIEAKLyAgIEAKXCBcIEAKICAvIEBACiAgIEAKICAgQAogICBACiAvIEAKPCAgQAogXCBAQAogICBACiAgIEAKICAgQAp8XCBACnwgIEAKfCAgQEAKICAgICBACiAgICAgQAogICAgIEAKfFwvfCBACnwvXHwgQAp8ICB8IEBACiAgICBACiAgICBACiAgICBACiB8ICBACmB8ICBACiB8YCBAQAogICBACiAgIEAKICAgQAovXCBAClwvIEAKL1wgQEAKICAgIEAKICAgIEAKICAgIEAKfFwvIEAKfCAgIEAKfC9cIEBACkAKQApACkAKQApAQAogICBACiAgIEAKICAgQAp8XCBACnwvIEAKfFwgQEAKICAgQAogICBACiAgIEAKLyAgQAotLSBACiAvIEBACiAgICBACiAgICBACiAgICBACi98XCBACiB8ICBACiB8ICBAQAogICAgQAogICAgQAogICAgQAp8XCAgQAp8IHwgQAp8IHwgQEAKICAgIEAKICAgIEAKICAgIEAKfFwgIEAKfCB8IEAKfCB8IEBACiAgIEAKICAgQAogICBACnxcIEAKfC8gQAp8ICBAQApACkAKQApACkAKQEAKICAgIEAKICAgIEAKICAgIEAKfH5cIEAKfF98IEAKfHx8IEBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACkAKQApACkAKQApAQApACkAKQApACkAKQEAKQApACkAKQApACkBACg=='
);

export default runyc;