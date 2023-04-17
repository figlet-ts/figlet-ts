import { FontFile } from '../../FontFile';

const isometric1 = new FontFile(
    'isometric1',
    'ZmxmMmEkIDExIDExIDE4IC0xIDIzCmlzb21ldHJpYzEuZmxmCgpGaWdsZXQgY29udmVyc2lvbiBieSBLZW50IE5hc3NlbiAoa2VudG5AY3liZXJzcGFjZS5vcmcpLCA4LTEwLTk0LCBiYXNlZApvbiB0aGUgZm9udHMgcG9zdGVkIGJ5IExlbm5lcnQgU3RvY2s6CgpGcm9tOiBzdG9ja0Bmd2kudXZhLm5sIChMZW5uZXJ0IFN0b2NrKQpEYXRlOiAxNSBKdWwgMTk5NCAwMDowNDoyNSBHTVQKCkhlcmUgYXJlIHNvbWUgZm9udHMuIE5vbi1maWdsZXQgSSdtIGFmcmFpZCwgaWYgeW91IHdhbm5hIGNvbnZlcnQgdGhlbSwgYmUKbXkgZ3Vlc3QuIEkgcG9zdGVkIHRoZSBpc29tZXRyaWMgZm9udHMgYmVmb3JlLgoKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgogICAgIC54JSUlJSUleC4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAueCUlJSUlJXguCiAgICAsJSUlJSUlJSUlJS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiUlJSUlJSUlJSUuCiAgICwlJSUnICApJyAgXCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiggIGAoICBgJSUlLgogICwleCUpX19fX19fX18pIC0tLS0tLS0tLSBMIGUgbiBuIGUgciB0ICAgUyB0IG8gYyBrICAgICAgICggXyAgIF9fICgleCUuCiAgKCUlJX5eODhQfjg4UHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfH49PiAuPS1+ICUlJSkKICAoJSU6Oi4gLjosXCAuJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLiAvLDouIC46OiUlKQogIGA7JTpgXC4gYC0nIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGAtJyAuLyc6JTonCiAgIGBgeGAuIC09PT0uJyAgICAgICAgICAgICAgICAgICBzdG9ja0Bmd2kudXZhLm5sIC0tLS0tLS0tIGAuPT09LSAuJ3gnJwogICAgLyBgOmAuX18uOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOi5fXy4nOicgXAogLmQ4Yi4gICAgIC4uYC4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJy4uICAgICAuZDhiLgokICAgICAgICRACiQgICAgICAgJEAKJCAgICAgICAkQAokICAgICAgICRACiQgICAgICAgJEAKJCAgICAgICAkQAokICAgICAgICRACiQgICAgICAgJEAKJCAgICAgICAkQAokICAgICAgICRACiQgICAgICAgJEBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOjpcflw6XCAgXCBACiAvOi9cOlwgXDpcX19cQAogXC9fX1w6XC86LyAgL0AKICAgICAgXDo6LyAgLyBACiAgICAgIC86LyAgLyAgQAogICAgIC86LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOjpcflw6XF9fXCBACiAvOi9cOlwgXDp8X198QAogXDpcflw6XC86LyAgL0AKICBcOlwgXDo6LyAgLyBACiAgIFw6XC86LyAgLyAgQAogICAgXDo6L19fLyAgIEAKICAgICB+fiAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOi8gIFw6XCAgXCBACiAvOi9fXy8gXDpcX19cQAogXDpcICBcICBcL19fL0AKICBcOlwgIFwgICAgICBACiAgIFw6XCAgXCAgICAgQAogICAgXDpcX19cICAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOi8gIFw6XF9fXCBACiAvOi9fXy8gXDp8X198QAogXDpcICBcIC86LyAgL0AKICBcOlwgIC86LyAgLyBACiAgIFw6XC86LyAgLyAgQAogICAgXDo6L19fLyAgIEAKICAgICB+fiAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOjpcflw6XCAgXCBACiAvOi9cOlwgXDpcX19cQAogXDpcflw6XCBcL19fL0AKICBcOlwgXDpcX19cICBACiAgIFw6XCBcL19fLyAgQAogICAgXDpcX19cICAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOjpcflw6XCAgXCBACiAvOi9cOlwgXDpcX19cQAogXC9fX1w6XCBcL19fL0AKICAgICAgXDpcX19cICBACiAgICAgICBcL19fLyAgQAogICAgICAgICAgICAgIEAKICAgICAgICAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOi8gIFw6XCAgXCBACiAvOi9fXy9fXDpcX19cQAogXDpcICAvXCBcL19fL0AKICBcOlwgXDpcX19cICBACiAgIFw6XC86LyAgLyAgQAogICAgXDo6LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXF9fXCAgICBACiAgICAvOi8gIC8gICAgQAogICAvOi9fXy8gICAgIEAKICAvOjpcICBcIF9fXyBACiAvOi9cOlwgIC9cX19cQAogXC9fX1w6XC86LyAgL0AKICAgICAgXDo6LyAgLyBACiAgICAgIC86LyAgLyAgQAogICAgIC86LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICAgICAgICBACiAgICAgIF9fXyAgIEAKICAgICAvXCAgXCAgQAogICAgIFw6XCAgXCBACiAgICAgLzo6XF9fXEAKICBfXy86L1wvX18vQAogL1wvOi8gIC8gICBACiBcOjovX18vICAgIEAKICBcOlxfX1wgICAgQAogICBcL19fLyAgICBACiAgICAgICAgICAgIEBACiAgICAgICBfX18gICBACiAgICAgIC9cICBcICBACiAgICAgIFw6XCAgXCBACiAgX19fIC86OlxfX1xACiAvXCAgLzovXC9fXy9ACiBcOlwvOi8gIC8gICBACiAgXDo6LyAgLyAgICBACiAgIFwvX18vICAgICBACiAgICAgICAgICAgICBACiAgICAgICAgICAgICBACiAgICAgICAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXF9fXCAgICBACiAgICAvOi8gIC8gICAgQAogICAvOi9fXy8gICAgIEAKICAvOjpcX19cX19fXyBACiAvOi9cOjo6OjpcX19cQAogXC9ffDp8fn58fiAgIEAKICAgIHw6fCAgfCAgICBACiAgICB8OnwgIHwgICAgQAogICAgfDp8ICB8ICAgIEAKICAgICBcfF9ffCAgICBAQAogICAgICBfX18gQAogICAgIC9cX19cQAogICAgLzovICAvQAogICAvOi8gIC8gQAogIC86LyAgLyAgQAogLzovX18vICAgQAogXDpcICBcICAgQAogIFw6XCAgXCAgQAogICBcOlwgIFwgQAogICAgXDpcX19cQAogICAgIFwvX18vQEAKICAgICAgX19fICAgICBACiAgICAgL1xfX1wgICAgQAogICAgLzo6fCAgfCAgIEAKICAgLzp8OnwgIHwgICBACiAgLzovfDp8X198X18gQAogLzovIHw6Ojo6XF9fXEAKIFwvX18vfn4vOi8gIC9ACiAgICAgICAvOi8gIC8gQAogICAgICAvOi8gIC8gIEAKICAgICAvOi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1xfX1wgICAgQAogICAgLzo6fCAgfCAgIEAKICAgLzp8OnwgIHwgICBACiAgLzovfDp8ICB8X18gQAogLzovIHw6fCAvXF9fXEAKIFwvX198OnwvOi8gIC9ACiAgICAgfDovOi8gIC8gQAogICAgIHw6Oi8gIC8gIEAKICAgICAvOi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgLzo6XCAgXCAgIEAKICAgLzovXDpcICBcICBACiAgLzovICBcOlwgIFwgQAogLzovX18vIFw6XF9fXEAKIFw6XCAgXCAvOi8gIC9ACiAgXDpcICAvOi8gIC8gQAogICBcOlwvOi8gIC8gIEAKICAgIFw6Oi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgLzo6XCAgXCAgIEAKICAgLzovXDpcICBcICBACiAgLzo6XH5cOlwgIFwgQAogLzovXDpcIFw6XF9fXEAKIFwvX19cOlwvOi8gIC9ACiAgICAgIFw6Oi8gIC8gQAogICAgICAgXC9fXy8gIEAKICAgICAgICAgICAgICBACiAgICAgICAgICAgICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgLzo6XCAgXCAgIEAKICAgLzovXDpcICBcICBACiAgIFw6XH5cOlwgIFwgQAogICAgXDpcIFw6XF9fXEAKICAgICBcOlwvOi8gIC9ACiAgICAgIFw6Oi8gIC8gQAogICAgICAvOi8gIC8gIEAKICAgICAvOi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgLzo6XCAgXCAgIEAKICAgLzovXDpcICBcICBACiAgLzo6XH5cOlwgIFwgQAogLzovXDpcIFw6XF9fXEAKIFwvX3w6OlwvOi8gIC9ACiAgICB8Onw6Oi8gIC8gQAogICAgfDp8XC9fXy8gIEAKICAgIHw6fCAgfCAgICBACiAgICAgXHxfX3wgICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgLzo6XCAgXCAgIEAKICAgLzovXCBcICBcICBACiAgX1w6XH5cIFwgIFwgQAogL1wgXDpcIFwgXF9fXEAKIFw6XCBcOlwgXC9fXy9ACiAgXDpcIFw6XF9fXCAgQAogICBcOlwvOi8gIC8gIEAKICAgIFw6Oi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgIFw6XCAgXCAgIEAKICAgICAgXDpcICBcICBACiAgICAgIC86OlwgIFwgQAogICAgIC86L1w6XF9fXEAKICAgIC86LyAgXC9fXy9ACiAgIC86LyAgLyAgICAgQAogICBcL19fLyAgICAgIEAKICAgICAgICAgICAgICBACiAgICAgICAgICAgICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1xfX1wgICAgQAogICAgLzovICAvICAgIEAKICAgLzovICAvICAgICBACiAgLzovICAvICBfX18gQAogLzovX18vICAvXF9fXEAKIFw6XCAgXCAvOi8gIC9ACiAgXDpcICAvOi8gIC8gQAogICBcOlwvOi8gIC8gIEAKICAgIFw6Oi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1xfX1wgICAgQAogICAgLzovICAvICAgIEAKICAgLzovICAvICAgICBACiAgLzovX18vICBfX18gQAogIHw6fCAgfCAvXF9fXEAKICB8OnwgIHwvOi8gIC9ACiAgfDp8X18vOi8gIC8gQAogICBcOjo6Oi9fXy8gIEAKICAgIH5+fn4gICAgICBACiAgICAgICAgICAgICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1xfX1wgICAgQAogICAgLzovIF8vXyAgIEAKICAgLzovIC9cX19cICBACiAgLzovIC86LyBfL18gQAogLzovXy86LyAvXF9fXEAKIFw6XC86LyAvOi8gIC9ACiAgXDo6L18vOi8gIC8gQAogICBcOlwvOi8gIC8gIEAKICAgIFw6Oi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgfFxfX1wgICAgQAogICAgIHw6fCAgfCAgIEAKICAgICB8OnwgIHwgICBACiAgICAgfDp8X198X18gQAogX19fXy86Ojo6XF9fXEAKIFw6Ojo6L35+L34gICBACiAgfn58Onx+fnwgICAgQAogICAgfDp8ICB8ICAgIEAKICAgIHw6fCAgfCAgICBACiAgICAgXHxfX3wgICAgQEAKICAgICAgX19fICAgICBACiAgICAgfFxfX1wgICAgQAogICAgIHw6fCAgfCAgIEAKICAgICB8OnwgIHwgICBACiAgICAgfDp8X198X18gQAogICAgIC86Ojo6XF9fXEAKICAgIC86L35+L34gICBACiAgIC86LyAgLyAgICAgQAogICBcL19fLyAgICAgIEAKICAgICAgICAgICAgICBACiAgICAgICAgICAgICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgIFw6XCAgXCAgIEAKICAgICAgXDpcICBcICBACiAgICAgICBcOlwgIFwgQAogX19fX19fX1w6XF9fXEAKIFw6Ojo6Ojo6Oi9fXy9ACiAgXDpcfn5cfn4gICAgQAogICBcOlwgIFwgICAgIEAKICAgIFw6XF9fXCAgICBACiAgICAgXC9fXy8gICAgQEAKICAgICAgX19fICAgICBACiAgICAgL1wgIFwgICAgQAogICAgLzo6XCAgXCAgIEAKICAgLzo6OjpcICBcICBACiAgLzo6Ojo6OlwgIFwgQAogLzo6OkxTOjo6XF9fXEAKIFw6OjE5OTQ6Oi8gIC9ACiAgXDo6Ojo6Oi8gIC8gQAogICBcOjo6Oi8gIC8gIEAKICAgIFw6Oi8gIC8gICBACiAgICAgXC9fXy8gICAgQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACiAgICAgIF9fXyAgICAgQAogICAgIC9cICBcICAgIEAKICAgIC86OlwgIFwgICBACiAgIC86L1w6XCAgXCAgQAogIC86Olx+XDpcICBcIEAKIC86L1w6XCBcOlxfX1xACiBcL19fXDpcLzovICAvQAogICAgICBcOjovICAvIEAKICAgICAgLzovICAvICBACiAgICAgLzovICAvICAgQAogICAgIFwvX18vICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cICBcICAgIEAKICAgIC86OlwgIFwgICBACiAgIC86L1w6XCAgXCAgQAogIC86Olx+XDpcX19cIEAKIC86L1w6XCBcOnxfX3xACiBcOlx+XDpcLzovICAvQAogIFw6XCBcOjovICAvIEAKICAgXDpcLzovICAvICBACiAgICBcOjovX18vICAgQAogICAgIH5+ICAgICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cICBcICAgIEAKICAgIC86OlwgIFwgICBACiAgIC86L1w6XCAgXCAgQAogIC86LyAgXDpcICBcIEAKIC86L19fLyBcOlxfX1xACiBcOlwgIFwgIFwvX18vQAogIFw6XCAgXCAgICAgIEAKICAgXDpcICBcICAgICBACiAgICBcOlxfX1wgICAgQAogICAgIFwvX18vICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cICBcICAgIEAKICAgIC86OlwgIFwgICBACiAgIC86L1w6XCAgXCAgQAogIC86LyAgXDpcX19cIEAKIC86L19fLyBcOnxfX3xACiBcOlwgIFwgLzovICAvQAogIFw6XCAgLzovICAvIEAKICAgXDpcLzovICAvICBACiAgICBcOjovX18vICAgQAogICAgIH5+ICAgICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cICBcICAgIEAKICAgIC86OlwgIFwgICBACiAgIC86L1w6XCAgXCAgQAogIC86Olx+XDpcICBcIEAKIC86L1w6XCBcOlxfX1xACiBcOlx+XDpcIFwvX18vQAogIFw6XCBcOlxfX1wgIEAKICAgXDpcIFwvX18vICBACiAgICBcOlxfX1wgICAgQAogICAgIFwvX18vICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cICBcICAgIEAKICAgIC86OlwgIFwgICBACiAgIC86L1w6XCAgXCAgQAogIC86Olx+XDpcICBcIEAKIC86L1w6XCBcOlxfX1xACiBcL19fXDpcIFwvX18vQAogICAgICBcOlxfX1wgIEAKICAgICAgIFwvX18vICBACiAgICAgICAgICAgICAgQAogICAgICAgICAgICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cICBcICAgIEAKICAgIC86OlwgIFwgICBACiAgIC86L1w6XCAgXCAgQAogIC86LyAgXDpcICBcIEAKIC86L19fL19cOlxfX1xACiBcOlwgIC9cIFwvX18vQAogIFw6XCBcOlxfX1wgIEAKICAgXDpcLzovICAvICBACiAgICBcOjovICAvICAgQAogICAgIFwvX18vICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cX19cICAgIEAKICAgIC86LyAgLyAgICBACiAgIC86L19fLyAgICAgQAogIC86OlwgIFwgX19fIEAKIC86L1w6XCAgL1xfX1xACiBcL19fXDpcLzovICAvQAogICAgICBcOjovICAvIEAKICAgICAgLzovICAvICBACiAgICAgLzovICAvICAgQAogICAgIFwvX18vICAgIEBACiAgICAgICAgICAgIEAKICAgICAgX19fICAgQAogICAgIC9cICBcICBACiAgICAgXDpcICBcIEAKICAgICAvOjpcX19cQAogIF9fLzovXC9fXy9ACiAvXC86LyAgLyAgIEAKIFw6Oi9fXy8gICAgQAogIFw6XF9fXCAgICBACiAgIFwvX18vICAgIEAKICAgICAgICAgICAgQEAKICAgICAgIF9fXyAgIEAKICAgICAgL1wgIFwgIEAKICAgICAgXDpcICBcIEAKICBfX18gLzo6XF9fXEAKIC9cICAvOi9cL19fL0AKIFw6XC86LyAgLyAgIEAKICBcOjovICAvICAgIEAKICAgXC9fXy8gICAgIEAKICAgICAgICAgICAgIEAKICAgICAgICAgICAgIEAKICAgICAgICAgICAgIEBACiAgICAgIF9fXyAgICAgQAogICAgIC9cX19cICAgIEAKICAgIC86LyAgLyAgICBACiAgIC86L19fLyAgICAgQAogIC86OlxfX1xfX19fIEAKIC86L1w6Ojo6OlxfX1xACiBcL198Onx+fnx+ICAgQAogICAgfDp8ICB8ICAgIEAKICAgIHw6fCAgfCAgICBACiAgICB8OnwgIHwgICAgQAogICAgIFx8X198ICAgIEBACiAgICAgIF9fXyBACiAgICAgL1xfX1xACiAgICAvOi8gIC9ACiAgIC86LyAgLyBACiAgLzovICAvICBACiAvOi9fXy8gICBACiBcOlwgIFwgICBACiAgXDpcICBcICBACiAgIFw6XCAgXCBACiAgICBcOlxfX1xACiAgICAgXC9fXy9AQAogICAgICBfX18gICAgIEAKICAgICAvXF9fXCAgICBACiAgICAvOjp8ICB8ICAgQAogICAvOnw6fCAgfCAgIEAKICAvOi98OnxfX3xfXyBACiAvOi8gfDo6OjpcX19cQAogXC9fXy9+fi86LyAgL0AKICAgICAgIC86LyAgLyBACiAgICAgIC86LyAgLyAgQAogICAgIC86LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXF9fXCAgICBACiAgICAvOjp8ICB8ICAgQAogICAvOnw6fCAgfCAgIEAKICAvOi98OnwgIHxfXyBACiAvOi8gfDp8IC9cX19cQAogXC9fX3w6fC86LyAgL0AKICAgICB8Oi86LyAgLyBACiAgICAgfDo6LyAgLyAgQAogICAgIC86LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOi8gIFw6XCAgXCBACiAvOi9fXy8gXDpcX19cQAogXDpcICBcIC86LyAgL0AKICBcOlwgIC86LyAgLyBACiAgIFw6XC86LyAgLyAgQAogICAgXDo6LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOjpcflw6XCAgXCBACiAvOi9cOlwgXDpcX19cQAogXC9fX1w6XC86LyAgL0AKICAgICAgXDo6LyAgLyBACiAgICAgICBcL19fLyAgQAogICAgICAgICAgICAgIEAKICAgICAgICAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAgXDpcflw6XCAgXCBACiAgICBcOlwgXDpcX19cQAogICAgIFw6XC86LyAgL0AKICAgICAgXDo6LyAgLyBACiAgICAgIC86LyAgLyAgQAogICAgIC86LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cOlwgIFwgIEAKICAvOjpcflw6XCAgXCBACiAvOi9cOlwgXDpcX19cQAogXC9ffDo6XC86LyAgL0AKICAgIHw6fDo6LyAgLyBACiAgICB8OnxcL19fLyAgQAogICAgfDp8ICB8ICAgIEAKICAgICBcfF9ffCAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAvOjpcICBcICAgQAogICAvOi9cIFwgIFwgIEAKICBfXDpcflwgXCAgXCBACiAvXCBcOlwgXCBcX19cQAogXDpcIFw6XCBcL19fL0AKICBcOlwgXDpcX19cICBACiAgIFw6XC86LyAgLyAgQAogICAgXDo6LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAgXDpcICBcICAgQAogICAgICBcOlwgIFwgIEAKICAgICAgLzo6XCAgXCBACiAgICAgLzovXDpcX19cQAogICAgLzovICBcL19fL0AKICAgLzovICAvICAgICBACiAgIFwvX18vICAgICAgQAogICAgICAgICAgICAgIEAKICAgICAgICAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXF9fXCAgICBACiAgICAvOi8gIC8gICAgQAogICAvOi8gIC8gICAgIEAKICAvOi8gIC8gIF9fXyBACiAvOi9fXy8gIC9cX19cQAogXDpcICBcIC86LyAgL0AKICBcOlwgIC86LyAgLyBACiAgIFw6XC86LyAgLyAgQAogICAgXDo6LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXF9fXCAgICBACiAgICAvOi8gIC8gICAgQAogICAvOi8gIC8gICAgIEAKICAvOi9fXy8gIF9fXyBACiAgfDp8ICB8IC9cX19cQAogIHw6fCAgfC86LyAgL0AKICB8OnxfXy86LyAgLyBACiAgIFw6Ojo6L19fLyAgQAogICAgfn5+fiAgICAgIEAKICAgICAgICAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXF9fXCAgICBACiAgICAvOi8gXy9fICAgQAogICAvOi8gL1xfX1wgIEAKICAvOi8gLzovIF8vXyBACiAvOi9fLzovIC9cX19cQAogXDpcLzovIC86LyAgL0AKICBcOjovXy86LyAgLyBACiAgIFw6XC86LyAgLyAgQAogICAgXDo6LyAgLyAgIEAKICAgICBcL19fLyAgICBAQAogICAgICBfX18gICAgIEAKICAgICB8XF9fXCAgICBACiAgICAgfDp8ICB8ICAgQAogICAgIHw6fCAgfCAgIEAKICAgICB8OnxfX3xfXyBACiBfX19fLzo6OjpcX19cQAogXDo6Ojovfn4vfiAgIEAKICB+fnw6fH5+fCAgICBACiAgICB8OnwgIHwgICAgQAogICAgfDp8ICB8ICAgIEAKICAgICBcfF9ffCAgICBAQAogICAgICBfX18gICAgIEAKICAgICB8XF9fXCAgICBACiAgICAgfDp8ICB8ICAgQAogICAgIHw6fCAgfCAgIEAKICAgICB8OnxfX3xfXyBACiAgICAgLzo6OjpcX19cQAogICAgLzovfn4vfiAgIEAKICAgLzovICAvICAgICBACiAgIFwvX18vICAgICAgQAogICAgICAgICAgICAgIEAKICAgICAgICAgICAgICBAQAogICAgICBfX18gICAgIEAKICAgICAvXCAgXCAgICBACiAgICAgXDpcICBcICAgQAogICAgICBcOlwgIFwgIEAKICAgICAgIFw6XCAgXCBACiBfX19fX19fXDpcX19cQAogXDo6Ojo6Ojo6L19fL0AKICBcOlx+flx+fiAgICBACiAgIFw6XCAgXCAgICAgQAogICAgXDpcX19cICAgIEAKICAgICBcL19fLyAgICBAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQApACkAKQEAK'
);

export default isometric1;
