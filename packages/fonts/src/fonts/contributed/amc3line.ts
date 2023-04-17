import { FontFile } from '../../FontFile';

const amc3line = new FontFile(
    'amc3line',
    'ZmxmMmEkIDQgMyAxMCAtMSAxOAoKICAgICAgICAgICAgICAgICAgMyBsaW5lcyB0YWxsIGZvbnQgYnkgTEVTVEVSCiAgICAgICAgICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCgotPiBDb252ZXJzaW9uIHRvIEZpZ0xldCBmb250IGJ5IE1FUEguIChQYXJ0IG9mIEFTQ0lJIEVkaXRvciBTZXJ2aWNlIFBhY2sgSSkKICAgKGh0dHA6Ly9zdHVkZW50ZW4uZnJlZXBhZ2UuZGUvbWVwaC9hc2NpaS9hc2NpaS9lZGl0b3IvX2luZGV4Lmh0bSkKLT4gRGVmaW5lZDogQVNDSUkgY29kZSBhbHBoYW51bWVyaWMgKyBtb3N0IHVzZWQgc3ltYm9scwotPiBVcHBlcmNhc2UgY2hhcmFjdGVycyBvbmx5LgoKICAgICAuLX5+LS4KICAgIChfXi4uXl8pCkxlc3Rlcnx8fHxBTUMgLSBBbnRob255IEN1Y2NoaWFyYQoqTXl0aG9zIE9ubGluZSA6IEludGVybmV0IE1hZ2F6aW5lIG9mIExvdmVjcmFmdGlhbiBIb3Jyb3IgLSBEZWFkIEFsaWNlKgpodHRwOi8vd3d3LmZvcnR1bmVjaXR5LmNvbS92aWN0b3JpYW4vcmVkbGlvbi8xNTcvZGVhZGFsLmh0bQoqVmlzaXQgbXkgd2ViIHBhZ2UgQU5TSS9BU0NJSS9Gb250cyoKaHR0cDovL21lbWJlcnMuYW9sLmNvbS9sZXN0ZXI1Mzc0LwoKICRACiAkQAogJEAKICRAQAouIEAKfCBACi4gQAogIEBACmAnIEAKYDsgQAogICBACiAgIEBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACmAnIEAKYCcgQAogICBACiAgIEBACiAuIEAKKCAgQAogYCBACiAgIEBACi4gIEAKICkgQAonICBACiAgIEBACkAKQApACkBACkAKQApACkBACiAgQAogIEAKLCBACiAgQEAKQApACkAKQEAKICBACiAgQAouIEAKICBAQAogICAsIEAKICwnICBACicgICAgQAogICAgIEBACi4tLiBACnxcfCBACmAtJyBACiAgICBAQAogLiBACid8IEAKICcgQAogICBAQAouLS4gQAouJycgQApgLS0gQAogICAgQEAKLS4gQAotfCBACi0nIEAKICAgQEAKLiAuIEAKYC18IEAKICAnIEAKICAgIEBACi4tLiBACmBgLiBACi0tJyBACiAgICBAQAouLS4gQAp8LS4gQApgLScgQAogICAgQEAKLi0uIEAKIC4nIEAKJyAgIEAKICAgIEBACi4tLiBACiktKCBACmAtJyBACiAgICBAQAouLS4gQApgLXwgQApgLScgQAogICAgQEAKfCBACiAgQAp8IEAKICBAQAp8IEAKICBACnwgQAogIEBACkAKQApACkBACkAKQApACkBACkAKQApACkBACi4tLiBACiAuJyBACiAuICBACiAgICBAQApACkAKQApAQAouLS4gQAp8LXwgQApgICcgQAogICAgQEAKLi0uIEAKfCggIEAKYC0nIEAKICAgIEBACi4tLiBACnwgICBACmAtJyBACiAgICBAQAouLS4gQAp8ICApQApgLScgQAogICAgQEAKLi0uIEAKfC0gIEAKYC0nIEAKICAgIEBACi4tLiBACnwtICBACicgICBACiAgICBAQAouLS4gQAp8Li4gQApgLScgQAogICAgQEAKLiAuIEAKfC18IEAKJyBgIEAKICAgIEBACi4tLiBACiB8ICBACmAtJyBACiAgICBAQAogIC4gQAogIHwgQApgLScgQAogICAgQEAKLiAuIEAKfDwgIEAKJyBgIEAKICAgIEBACi4gICBACnwgICBACmAtJyBACiAgICBAQAouICAuIEAKfFwvfCBACicgIGAgQAogICAgIEBACi4gLiBACnxcfCBACicgYCBACiAgICBAQAouLS4gQAp8IHwgQApgLScgQAogICAgQEAKLi0uIEAKfC0nIEAKJyAgIEAKICAgIEBACi4tLiBACnwufCBACmAtYC5ACiAgICBAQAouLS4gQAp8KCAgQAonICcgQAogICAgQEAKLi0uIEAKYC0uIEAKYC0nIEAKICAgIEBACi4tLiBACiB8ICBACiAnICBACiAgICBAQAouIC4gQAp8IHwgQApgLScgQAogICAgQEAKLiAuIEAKfCB8IEAKYC4nIEAKICAgIEBACi4gLiAuIEAKfCB8IHwgQApgLicuJyBACiAgICAgIEBACi4gIC4gQAogKSggIEAKJyAgYCBACiAgICAgQEAKLiAuIEAKIHwgIEAKIGAgIEAKICAgIEBACi4tLiBACiAvICBACmAtJyBACiAgICBAQAouJyBACiggIEAKYC4gQAogICBAQAosICAgIEAKIGAsICBACiAgIGAgQAogICAgIEBACmAuIEAKICkgQAouJyBACiAgIEBACkAKQApACkBACkAKQApACkBACkAKQApACkBACi4tLiBACnwtfCBACmAgJyBACiAgICBAQAouLS4gQAp8KCAgQApgLScgQAogICAgQEAKLi0uIEAKfCAgIEAKYC0nIEAKICAgIEBACi4tLiBACnwgIClACmAtJyBACiAgICBAQAouLS4gQAp8LSAgQApgLScgQAogICAgQEAKLi0uIEAKfC0gIEAKJyAgIEAKICAgIEBACi4tLiBACnwuLiBACmAtJyBACiAgICBAQAouIC4gQAp8LXwgQAonIGAgQAogICAgQEAKLi0uIEAKIHwgIEAKYC0nIEAKICAgIEBACiAgLiBACiAgfCBACmAtJyBACiAgICBAQAouIC4gQAp8PCAgQAonIGAgQAogICAgQEAKLiAgIEAKfCAgIEAKYC0nIEAKICAgIEBACi4gIC4gQAp8XC98IEAKJyAgYCBACiAgICAgQEAKLiAuIEAKfFx8IEAKJyBgIEAKICAgIEBACi4tLiBACnwgfCBACmAtJyBACiAgICBAQAouLS4gQAp8LScgQAonICAgQAogICAgQEAKLi0uIEAKfC58IEAKYC1gLkAKICAgIEBACi4tLiBACnwoICBACicgJyBACiAgICBAQAouLS4gQApgLS4gQApgLScgQAogICAgQEAKLi0uIEAKIHwgIEAKICcgIEAKICAgIEBACi4gLiBACnwgfCBACmAtJyBACiAgICBAQAouIC4gQAp8IHwgQApgLicgQAogICAgQEAKLiAuIC4gQAp8IHwgfCBACmAuJy4nIEAKICAgICAgQEAKLiAgLiBACiApKCAgQAonICBgIEAKICAgICBAQAouIC4gQAogfCAgQAogYCAgQAogICAgQEAKLi0uIEAKIC8gIEAKYC0nIEAKICAgIEBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACkAKQApACkBACg=='
);

export default amc3line;
