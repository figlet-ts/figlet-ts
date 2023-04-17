import { FontFile } from '../../FontFile';

const contrast = new FontFile(
    'contrast',
    'ZmxmMmEkIDYgNSAyMCAtMSAyCkNvbnRyYXN0IEZvbnQgYnkgRGVubmlzIE1vbmsgIDcvOTQKT3JpZ2luYWwgZm9udCwgSSB0aGluay4gIE1heWJlIGluc3BpcmVkIGJ5IG9uZSBvZiBTY2FyZWNyb3cncyAuc2lncy4KLi4uLi4uLi5ACi4uLi4uLi4uQAouLi4uLi4uLkAKLi4uLi4uLi5ACi4uLi4uLi4uQAouLi4uLi4uLkBACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLi4uLi4uQAouLi4lJS4uLkAKLi4uLi4uLi5AQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4uJS4uJS4uQAouLi4uLi4uLkAKLi4uLi4uLi5ACi4uLi4uLi4uQEAKLi4lLi4lLi5ACi4lJSUlJSUuQAouLiUuLiUuLkAKLiUlJSUlJS5ACi4uJS4uJS4uQAouLi4uLi4uLkBACi4uJSUlJSUuQAouJSUuJS4uLkAKLi4lJSUlLi5ACi4uLiUuJSUuQAouJSUlJSUuLkAKLi4uLi4uLi5AQAouJSUuLiUlLkAKLiUuLiUlLi5ACi4uLiUlLi4uQAouLiUlLi4lLkAKLiUlLi4lJS5ACi4uLi4uLi4uQEAKLi4lJSUlJS4uQAouJSUuLi4lJS5ACi4uJSUuJSUuLkAKLiUlLiUlLiUuQAouLiUlJSUlLi5ACi4uLi4uLi4uLkBACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uLiUuLi5ACi4uLi4uLi4uQAouLi4uLi4uLkAKLi4uLi4uLi5AQAouLi4uJSUlLkAKLi4lJS4uLi5ACi4lLi4uLi4uQAouLiUlLi4uLkAKLi4uLiUlJS5ACi4uLi4uLi4uQEAKLiUlJS4uLi5ACi4uLi4lJS4uQAouLi4uLi4lLkAKLi4uLiUlLi5ACi4lJSUuLi4uQAouLi4uLi4uLkBACi4lLi4lLi4lLkAKLi4lLiUuJS4uQAouJSUlJSUlJS5ACi4uJS4lLiUuLkAKLiUuLiUuLiUuQAouLi4uLi4uLi5AQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4lJSUlJSUuQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLi4uLi4uQEAKLi4uLi4uLi5ACi4uLi4uLi4uQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLi4lLi4uQAouLi4uLi4uLkBACi4uLi4uLi4uQAouLi4uLi4uLkAKLiUlJSUlJS5ACi4uLi4uLi4uQAouLi4uLi4uLkAKLi4uLi4uLi5AQAouLi4uLi4uLkAKLi4uLi4uLi5ACi4uLi4uLi4uQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLi4uLi4uQEAKLi4uLi4lJS5ACi4uLi4lJS4uQAouLi4lJS4uLkAKLi4lJS4uLi5ACi4lJS4uLi4uQAouLi4uLi4uLkBACi4uJSUlJS4uQAouJSUuLiUlLkAKLiUlJSUlJS5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uLi4uLi5AQAouLi4lJS4uLkAKLi4lJSUuLi5ACi4uLiUlLi4uQAouLi4lJS4uLkAKLiUlJSUlJS5ACi4uLi4uLi4uQEAKLi4lJSUlLi5ACi4uLi4uJSUuQAouLiUlJSUuLkAKLiUlLi4uLi5ACi4lJSUlJSUuQAouLi4uLi4uLkBACi4lJSUlJSUuQAouLi4uJSUuLkAKLi4uJSUlLi5ACi4uLi4uJSUuQAouJSUlJSUuLkAKLi4uLi4uLi5AQAouLi4uLiUlLkAKLiUlLi4lJS5ACi4lJSUlJSUuQAouLi4uLiUlLkAKLi4uLi4lJS5ACi4uLi4uLi4uQEAKLiUlJSUlJS5ACi4lJS4uLi4uQAouLiUlJSUuLkAKLi4uLi4lJS5ACi4lJSUlJS4uQAouLi4uLi4uLkBACi4uLiUlLi4uQAouLiUlLi4uLkAKLiUlJSUlLi5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uLi4uLi5AQAouJSUlJSUlLkAKLi4uLiUlLi5ACi4uLiUlLi4uQAouLiUlLi4uLkAKLiUlLi4uLi5ACi4uLi4uLi4uQEAKLi4lJSUlLi5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLiUlLi4lJS5ACi4uJSUlJS4uQAouLi4uLi4uLkBACi4uJSUlJS4uQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLiUlLi4uQAouLiUlLi4uLkAKLi4uLi4uLi5AQAouLi4uLi4uLkAKLi4uJSUuLi5ACi4uLi4uLi4uQAouLi4lJS4uLkAKLi4uLi4uLi5ACi4uLi4uLi4uQEAKLi4uLi4uLi5ACi4uLiUlLi4uQAouLi4uLi4uLkAKLi4uJSUuLi5ACi4uLi4lLi4uQAouLi4uLi4uLkBACi4uLi4uJSUuQAouLi4lJS4uLkAKLiUlLi4uLi5ACi4uLiUlLi4uQAouLi4uLiUlLkAKLi4uLi4uLi5AQAouLi4uLi4uLkAKLiUlJSUlJS5ACi4uLi4uLi4uQAouJSUlJSUlLkAKLi4uLi4uLi5ACi4uLi4uLi4uQEAKLiUlLi4uLi5ACi4uLiUlLi4uQAouLi4uLiUlLkAKLi4uJSUuLi5ACi4lJS4uLi4uQAouLi4uLi4uLkBACi4uJSUlJS4uQAouJSUuLiUlLkAKLi4uLiUlLi5ACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uLi4uLi5AQAouLiUlJSUuLkAKLiUuJSUuJS5ACi4lLiUlLiUuQAouJS4uJS4lLkAKLi4lJSUlLi5ACi4uLi4uLi4uQEAKLi4lJSUlLi5ACi4lJS4uJSUuQAouJSUlJSUlLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLi4uLi4uLkBACi4lJSUlJS4uQAouJSUuLiUlLkAKLiUlJSUlLi5ACi4lJS4uJSUuQAouJSUlJSUuLkAKLi4uLi4uLi5AQAouLiUlJSUuLkAKLiUlLi4lJS5ACi4lJS4uLi4uQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLi4uLi4uQEAKLiUlJSUlLi5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4lJSUlJS4uQAouLi4uLi4uLkBACi4lJSUlJSUuQAouJSUuLi4uLkAKLiUlJSUuLi5ACi4lJS4uLi4uQAouJSUlJSUlLkAKLi4uLi4uLi5AQAouJSUlJSUlLkAKLiUlLi4uLi5ACi4lJSUlLi4uQAouJSUuLi4uLkAKLiUlLi4uLi5ACi4uLi4uLi4uQEAKLi4lJSUlLi5ACi4lJS4uLi4uQAouJSUuJSUlLkAKLiUlLi4lJS5ACi4uJSUlJS4uQAouLi4uLi4uLkBACi4lJS4uJSUuQAouJSUuLiUlLkAKLiUlJSUlJS5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLi4uLi4uLi5AQAouJSUlJSUlLkAKLi4uJSUuLi5ACi4uLiUlLi4uQAouLi4lJS4uLkAKLiUlJSUlJS5ACi4uLi4uLi4uQEAKLiUlJSUlJS5ACi4uLi4uJSUuQAouLi4uLiUlLkAKLiUlLi4lJS5ACi4uJSUlJS4uQAouLi4uLi4uLkBACi4lJS4uJSUuQAouJSUuJSUuLkAKLiUlJSUuLi5ACi4lJS4lJS4uQAouJSUuLiUlLkAKLi4uLi4uLi5AQAouJSUuLi4uLkAKLiUlLi4uLi5ACi4lJS4uLi4uQAouJSUuLi4uLkAKLiUlJSUlJS5ACi4uLi4uLi4uQEAKLiUlLi4uJSUuQAouJSUlLiUlJS5ACi4lJS4lLiUlLkAKLiUlLi4uJSUuQAouJSUuLi4lJS5ACi4uLi4uLi4uLkBACi4lJS4uJSUuQAouJSUlLiUlLkAKLiUlLiUlJS5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLi4uLi4uLi5AQAouLiUlJSUuLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLi4uLi4uQEAKLiUlJSUlLi5ACi4lJS4uJSUuQAouJSUlJSUuLkAKLiUlLi4uLi5ACi4lJS4uLi4uQAouLi4uLi4uLkBACi4uJSUlJS4uQAouJSUuLiUlLkAKLiUlLiUlJS5ACi4lJS4uJSUuQAouLiUlJSUlLkAKLi4uLi4uLi5AQAouJSUlJSUuLkAKLiUlLi4lJS5ACi4lJSUlJS4uQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4uLi4uLi4uQEAKLi4lJSUlLi5ACi4lJS4uLi4uQAouLiUlJSUuLkAKLi4uLi4lJS5ACi4uJSUlJS4uQAouLi4uLi4uLkBACi4lJSUlJSUuQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uLi4uLi5AQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLi4uLi4uQEAKLiUlLi4lJS5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLiUlLi4uQAouLi4uLi4uLkBACi4lJS4uLiUlLkAKLiUlLi4uJSUuQAouJSUuJS4lJS5ACi4lJSUlJSUlLkAKLi4lJS4lJS4uQAouLi4uLi4uLi5AQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLiUlLi4uQAouLiUlJSUuLkAKLiUlLi4lJS5ACi4uLi4uLi4uQEAKLiUlLi4lJS5ACi4uJSUlJS4uQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLiUlLi4uQAouLi4uLi4uLkBACi4lJSUlJSUuQAouLi4uJSUuLkAKLi4uJSUuLi5ACi4uJSUuLi4uQAouJSUlJSUlLkAKLi4uLi4uLi5AQAouJSUlJSUlLkAKLiUlLi4uLi5ACi4lJS4uLi4uQAouJSUuLi4uLkAKLiUlJSUlJS5ACi4uLi4uLi4uQEAKLiUlLi4uLi5ACi4uJSUuLi4uQAouLi4lJS4uLkAKLi4uLiUlLi5ACi4uLi4uJSUuQAouLi4uLi4uLkBACi4lJSUlJSUuQAouLi4uLiUlLkAKLi4uLi4lJS5ACi4uLi4uJSUuQAouJSUlJSUlLkAKLi4uLi4uLi5AQAouLi4lJS4uLkAKLi4lJSUlLi5ACi4lJS4uJSUuQAouLi4uLi4uLkAKLi4uLi4uLi5ACi4uLi4uLi4uQEAKLi4uLi4uLi5ACi4uLi4uLi4uQAouLi4uLi4uLkAKLi4uLi4uLi5ACi4lJSUlJSUuQAouLi4uLi4uLkBACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uJS4uLi5ACi4uLi4uLi4uQAouLi4uLi4uLkAKLi4uLi4uLi5AQAouLiUlJSUuLkAKLiUlLi4lJS5ACi4lJSUlJSUuQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4uLi4uLi4uQEAKLiUlJSUlLi5ACi4lJS4uJSUuQAouJSUlJSUuLkAKLiUlLi4lJS5ACi4lJSUlJS4uQAouLi4uLi4uLkBACi4uJSUlJS4uQAouJSUuLiUlLkAKLiUlLi4uLi5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uLi4uLi5AQAouJSUlJSUuLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLiUlJSUlLi5ACi4uLi4uLi4uQEAKLiUlJSUlJS5ACi4lJS4uLi4uQAouJSUlJS4uLkAKLiUlLi4uLi5ACi4lJSUlJSUuQAouLi4uLi4uLkBACi4lJSUlJSUuQAouJSUuLi4uLkAKLiUlJSUuLi5ACi4lJS4uLi4uQAouJSUuLi4uLkAKLi4uLi4uLi5AQAouLiUlJSUuLkAKLiUlLi4uLi5ACi4lJS4lJSUuQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLi4uLi4uQEAKLiUlLi4lJS5ACi4lJS4uJSUuQAouJSUlJSUlLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLi4uLi4uLkBACi4lJSUlJSUuQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLiUlLi4uQAouJSUlJSUlLkAKLi4uLi4uLi5AQAouJSUlJSUlLkAKLi4uLi4lJS5ACi4uLi4uJSUuQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLi4uLi4uQEAKLiUlLi4lJS5ACi4lJS4lJS4uQAouJSUlJS4uLkAKLiUlLiUlLi5ACi4lJS4uJSUuQAouLi4uLi4uLkBACi4lJS4uLi4uQAouJSUuLi4uLkAKLiUlLi4uLi5ACi4lJS4uLi4uQAouJSUlJSUlLkAKLi4uLi4uLi5AQAouJSUuLi4lJS5ACi4lJSUuJSUlLkAKLiUlLiUuJSUuQAouJSUuLi4lJS5ACi4lJS4uLiUlLkAKLi4uLi4uLi4uQEAKLiUlLi4lJS5ACi4lJSUuJSUuQAouJSUuJSUlLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLi4uLi4uLkBACi4uJSUlJS4uQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uLi4uLi5AQAouJSUlJSUuLkAKLiUlLi4lJS5ACi4lJSUlJS4uQAouJSUuLi4uLkAKLiUlLi4uLi5ACi4uLi4uLi4uQEAKLi4lJSUlLi5ACi4lJS4uJSUuQAouJSUuJSUlLkAKLiUlLi4lJS5ACi4uJSUlJSUuQAouLi4uLi4uLkBACi4lJSUlJS4uQAouJSUuLiUlLkAKLiUlJSUlLi5ACi4lJS4uJSUuQAouJSUuLiUlLkAKLi4uLi4uLi5AQAouLiUlJSUuLkAKLiUlLi4uLi5ACi4uJSUlJS4uQAouLi4uLiUlLkAKLi4lJSUlLi5ACi4uLi4uLi4uQEAKLiUlJSUlJS5ACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLiUlLi4uQAouLi4uLi4uLkBACi4lJS4uJSUuQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uLi4uLi5AQAouJSUuLiUlLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uJSUuLi5ACi4uLi4uLi4uQEAKLiUlLi4uJSUuQAouJSUuLi4lJS5ACi4lJS4lLiUlLkAKLiUlJSUlJSUuQAouLiUlLiUlLi5ACi4uLi4uLi4uLkBACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uJSUuLi5ACi4uJSUlJS4uQAouJSUuLiUlLkAKLi4uLi4uLi5AQAouJSUuLiUlLkAKLi4lJSUlLi5ACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLi4uLi4uQEAKLiUlJSUlJS5ACi4uLi4lJS4uQAouLi4lJS4uLkAKLi4lJS4uLi5ACi4lJSUlJSUuQAouLi4uLi4uLkBACi4uLiUlJSUuQAouLi4lJS4uLkAKLiUlJS4uLi5ACi4uLiUlLi4uQAouLi4lJSUlLkAKLi4uLi4uLi5AQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLiUlLi4uQAouLi4lJS4uLkAKLi4uJSUuLi5ACi4uLiUlLi4uQEAKLiUlJSUuLi5ACi4uLiUlLi4uQAouLi4uJSUlLkAKLi4uJSUuLi5ACi4lJSUlLi4uQAouLi4uLi4uLkBACi4uJSUlLiUuQAouJS4lJSUuLkAKLi4uLi4uLi5ACi4uLi4uLi4uQAouLi4uLi4uLkAKLi4uLi4uLi5AQAouJSUuLiUlLkAKLi4uLi4uLi5ACi4uJSUlJSUuQAouJSUuLiUlLkAKLi4lJSUlJS5ACi4uLi4uLi4uQEAKLiUlLi4lJS5ACi4uLi4uLi4uQAouLiUlJSUuLkAKLiUlLi4lJS5ACi4uJSUlJS4uQAouLi4uLi4uLkBACi4lJS4uJSUuQAouLi4uLi4uLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uLi4uLi5AQAouJSUuLiUlLkAKLi4uLi4uLi5ACi4uJSUlJSUuQAouJSUuLiUlLkAKLi4lJSUlJS5ACi4uLi4uLi4uQEAKLiUlLi4lJS5ACi4uLi4uLi4uQAouLiUlJSUuLkAKLiUlLi4lJS5ACi4uJSUlJS4uQAouLi4uLi4uLkBACi4lJS4uJSUuQAouLi4uLi4uLkAKLiUlLi4lJS5ACi4lJS4uJSUuQAouLiUlJSUuLkAKLi4uLi4uLi5AQAouLiUlJSUlLi5ACi4lJS4uLiUlLkAKLiUlLiUlJS4uQAouJSUuLi4lJS5ACi4lJS4lJSUuLkAKLiUlLi4uLi4uQEAK'
);

export default contrast;
