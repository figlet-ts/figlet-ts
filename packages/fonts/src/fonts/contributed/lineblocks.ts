import { FontFile } from '../../FontFile';

const lineblocks = new FontFile(
    'lineblocks',
    'ZmxmMmEkIDUgNCAxNCAtMSAxMSAwIDAgMCAKQXV0aG9yIDogQmF0ZWF1IChsYm0pIApEYXRlICAgOiAyMDA1LzIvNCAxMTowNDozNyAKVmVyc2lvbjogMS4wIAotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIAoKCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gClRoaXMgZm9udCBoYXMgYmVlbiBjcmVhdGVkIHVzaW5nIEphdkUncyBGSUdsZXQgZm9udCBleHBvcnQgYXNzaXN0YW50LiAKSGF2ZSBhIGxvb2sgYXQ6IGh0dHA6Ly93d3cuamF2ZS5kZSAKUGVybWlzc2lvbiBpcyBoZXJlYnkgZ2l2ZW4gdG8gbW9kaWZ5IHRoaXMgZm9udCwgYXMgbG9uZyBhcyB0aGUgCm1vZGlmaWVyJ3MgbmFtZSBpcyBwbGFjZWQgb24gYSBjb21tZW50IGxpbmUuIAokICMKJCAjCiQgIwokICMKJCAjIwohIwogIwogIwogIwogIyMKIiMKICMKICMKICMKICMjCiMjCiAjCiAjCiAjCiAjIwokIwogIwogIwogIwogIyMKJSMKICMKICMKICMKICMjCiYjCiAjCiAjCiAjCiAjIwonIwogIwogIwogIwogIyMKKCMKICMKICMKICMKICMjCikjCiAjCiAjCiAjCiAjIwoqIwogIwogIwogIwogIyMKKyMKICMKICMKICMKICMjCiwjCiAjCiAjCiAjCiAjIwotIwogIwogIwogIwogIyMKLiMKICMKICMKICMKICMjCi8jCiAjCiAjCiAjCiAjIwowIwogIwogIwogIwogIyMKMSMKICMKICMKICMKICMjCjIjCiAjCiAjCiAjCiAjIwozIwogIwogIwogIwogIyMKNCMKICMKICMKICMKICMjCjUjCiAjCiAjCiAjCiAjIwo2IwogIwogIwogIwogIyMKNyMKICMKICMKICMKICMjCjgjCiAjCiAjCiAjCiAjIwo5IwogIwogIwogIwogIyMKOiMKICMKICMKICMKICMjCjsjCiAjCiAjCiAjCiAjIwo8IwogIwogIwogIwogIyMKPSMKICMKICMKICMKICMjCj4jCiAjCiAjCiAjCiAjIwogX19fX19fICAjCnxffCAgfCB8ICMKICAgX198X3wgIwogIHxffCAgICAjCiAgIF8gICAgICMjCkAjCiAjCiAjCiAjCiAjIwogX19fX19fICAjCnwgfCAgfCB8ICMKfCB8X198IHwgIwp8X3wgIHxffCAjCiAgICAgICAgICMjCiBfX19fX18gICMKfCB8ICB8IFwgIwp8IHwtLXwgPCAjCnxffF9ffF8vICMKICAgICAgICAgIyMKIF9fX19fXyAjCnwgfCAgICAgIwp8IHwgICAgICMKfF98X19fXyAjCiAgICAgICAgIyMKIF9fX19fICAgIwp8IHwgXCBcICAjCnwgfCAgfCB8ICMKfF98Xy9fLyAgIwogICAgICAgICAjIwogX19fX19fICMKfCB8ICAgICAjCnwgfC0tLS0gIwp8X3xfX19fICMKICAgICAgICAjIwogX19fX19fICMKfCB8ICAgICAjCnwgfC0tLS0gIwp8X3wgICAgICMKICAgICAgICAjIwogX19fX19fICAjCnwgfCBfX19fICMKfCB8ICB8IHwgIwp8X3xfX3xffCAjCiAgICAgICAgICMjCiBfICAgIF8gICMKfCB8ICB8IHwgIwp8IHwtLXwgfCAjCnxffCAgfF98ICMKICAgICAgICAgIyMKX19fX18gIwogfCB8ICAjCiB8IHwgICMKX3xffF8gIwogICAgICAjIwogICAgICBfICAjCiAgICAgfCB8ICMKIF8gICB8IHwgIwp8X3xfX3xffCAjCiAgICAgICAgICMjCiBfICAgIF9fICMKfCB8ICAvIC8gIwp8IHwtPCA8ICAjCnxffCAgXF9cICMKICAgICAgICAgIyMKIF8gICAgICAgIwp8IHwgICAgICAjCnwgfCAgIF8gICMKfF98X198X3wgIwogICAgICAgICAjIwogX19fX19fX19fICAjCnwgfCB8IHwgfCBcICMKfCB8IHwgfCB8IHwgIwp8X3wgfF98IHxffCAjCiAgICAgICAgICAgICMjCiBfX19fX18gICMKfCB8ICBcIFwgIwp8IHwgIHwgfCAjCnxffCAgfF98ICMKICAgICAgICAgIyMKIF9fX19fXyAgIwovIHwgIHwgXCAjCnwgfCAgfCB8ICMKXF98X198Xy8gIwogICAgICAgICAjIwogX19fX19fICAjCnwgfCAgfCBcICMKfCB8X198Xy8gIwp8X3wgICAgICAjCiAgICAgICAgICMjCiBfX19fX18gICAjCi8gfCBffCBcICAjCnwgfCBcICB8ICAjClxffF9ffF9fXCAjCiAgICAgICAgICAjIwogX19fX19fICAjCnwgfCAgfCBcICMKfCB8X198IHwgIwp8X3wgIFxfXCAjCiAgICAgICAgICMjCiBfX19fX18gICMKLyB8ICAgICAgIwonLS0tLS0tLiAjCiBfX19ffF8vICMKICAgICAgICAgIyMKX19fX19fXyAjCiAgfCB8ICAgIwogIHwgfCAgICMKICB8X3wgICAjCiAgICAgICAgIyMKIF8gICAgXyAgIwp8IHwgIHwgfCAjCnwgfCAgfCB8ICMKXF98X198X3wgIwogICAgICAgICAjIwogXyAgICAgXyAgIwp8IHwgICB8IHwgIwpcIFwgICAvIC8gIwogXF9cXy9fLyAgIwogICAgICAgICAgIyMKIF8gICBfICAgXyAgIwp8IHwgfCB8IHwgfCAjCnwgfCB8IHwgfCB8ICMKfF98X3xffF98Xy8gIwogICAgICAgICAgICAjIwogXyAgICBfICAjClwgXCAgLyAvICMKID58LS18PCAgIwovXy8gIFxfXCAjCiAgICAgICAgICMjCl9fICAgIF8gICMKXCBcICB8IHwgIwogXF9cX3wgfCAjCiBfX19ffF98ICMKICAgICAgICAgIyMKIF9fX19fXyAjCiAgICAvIC8gIwogLi0tLScgICMKL18vX19fICAjCiAgICAgICAgIyMKWyMKICMKICMKICMKICMjClwjCiAjCiAjCiAjCiAjIwpdIwogIwogIwogIwogIyMKXiMKICMKICMKICMKICMjCl8jCiAjCiAjCiAjCiAjIwpgIwogIwogIwogIwogIyMKIF9fX19fXyAgIwp8IHwgIHwgfCAjCnwgfF9ffCB8ICMKfF98ICB8X3wgIwogICAgICAgICAjIwogX19fX19fICAjCnwgfCAgfCBcICMKfCB8LS18IDwgIwp8X3xfX3xfLyAjCiAgICAgICAgICMjCiBfX19fX18gIwp8IHwgICAgICMKfCB8ICAgICAjCnxffF9fX18gIwogICAgICAgICMjCiBfX19fXyAgICMKfCB8IFwgXCAgIwp8IHwgIHwgfCAjCnxffF8vXy8gICMKICAgICAgICAgIyMKIF9fX19fXyAjCnwgfCAgICAgIwp8IHwtLS0tICMKfF98X19fXyAjCiAgICAgICAgIyMKIF9fX19fXyAjCnwgfCAgICAgIwp8IHwtLS0tICMKfF98ICAgICAjCiAgICAgICAgIyMKIF9fX19fXyAgIwp8IHwgX19fXyAjCnwgfCAgfCB8ICMKfF98X198X3wgIwogICAgICAgICAjIwogXyAgICBfICAjCnwgfCAgfCB8ICMKfCB8LS18IHwgIwp8X3wgIHxffCAjCiAgICAgICAgICMjCl9fX19fICMKIHwgfCAgIwogfCB8ICAjCl98X3xfICMKICAgICAgIyMKICAgICAgXyAgIwogICAgIHwgfCAjCiBfICAgfCB8ICMKfF98X198X3wgIwogICAgICAgICAjIwogXyAgICBfXyAjCnwgfCAgLyAvICMKfCB8LTwgPCAgIwp8X3wgIFxfXCAjCiAgICAgICAgICMjCiBfICAgICAgICMKfCB8ICAgICAgIwp8IHwgICBfICAjCnxffF9ffF98ICMKICAgICAgICAgIyMKIF9fX19fX19fXyAgIwp8IHwgfCB8IHwgXCAjCnwgfCB8IHwgfCB8ICMKfF98IHxffCB8X3wgIwogICAgICAgICAgICAjIwogX19fX19fICAjCnwgfCAgXCBcICMKfCB8ICB8IHwgIwp8X3wgIHxffCAjCiAgICAgICAgICMjCiBfX19fX18gICMKLyB8ICB8IFwgIwp8IHwgIHwgfCAjClxffF9ffF8vICMKICAgICAgICAgIyMKIF9fX19fXyAgIwp8IHwgIHwgXCAjCnwgfF9ffF8vICMKfF98ICAgICAgIwogICAgICAgICAjIwogX19fX19fICAgIwovIHwgX3wgXCAgIwp8IHwgXCAgfCAgIwpcX3xfX3xfX1wgIwogICAgICAgICAgIyMKIF9fX19fXyAgIwp8IHwgIHwgXCAjCnwgfF9ffCB8ICMKfF98ICBcX1wgIwogICAgICAgICAjIwogX19fX19fICAjCi8gfCAgICAgICMKJy0tLS0tLS4gIwogX19fX3xfLyAjCiAgICAgICAgICMjCl9fX19fX18gIwogIHwgfCAgICMKICB8IHwgICAjCiAgfF98ICAgIwogICAgICAgICMjCiBfICAgIF8gICMKfCB8ICB8IHwgIwp8IHwgIHwgfCAjClxffF9ffF98ICMKICAgICAgICAgIyMKIF8gICAgIF8gICMKfCB8ICAgfCB8ICMKXCBcICAgLyAvICMKIFxfXF8vXy8gICMKICAgICAgICAgICMjCiBfICAgXyAgIF8gICMKfCB8IHwgfCB8IHwgIwp8IHwgfCB8IHwgfCAjCnxffF98X3xffF8vICMKICAgICAgICAgICAgIyMKIF8gICAgXyAgIwpcIFwgIC8gLyAjCiA+fC0tfDwgICMKL18vICBcX1wgIwogICAgICAgICAjIwpfXyAgICBfICAjClwgXCAgfCB8ICMKIFxfXF98IHwgIwogX19fX3xffCAjCiAgICAgICAgICMjCiBfX19fX18gIwogICAgLyAvICMKIC4tLS0nICAjCi9fL19fXyAgIwogICAgICAgICMjCnsjCiAjCiAjCiAjCiAjIwp8IwogIwogIwogIwogIyMKfSMKICMKICMKICMKICMjCn4jCiAjCiAjCiAjCiAjIwogX19fX19fICAjCnwgfCAgfCB8ICMKfCB8X198IHwgIwp8X3wgIHxffCAjCiAgICAgICAgICMjCiBfX19fX18gICMKLyB8ICB8IFwgIwp8IHwgIHwgfCAjClxffF9ffF8vICMKICAgICAgICAgIyMKIF8gICAgXyAgIwp8IHwgIHwgfCAjCnwgfCAgfCB8ICMKXF98X198X3wgIwogICAgICAgICAjIwogX19fX19fICAjCnwgfCAgfCB8ICMKfCB8X198IHwgIwp8X3wgIHxffCAjCiAgICAgICAgICMjCiBfX19fX18gICMKLyB8ICB8IFwgIwp8IHwgIHwgfCAjClxffF9ffF8vICMKICAgICAgICAgIyMKIF8gICAgXyAgIwp8IHwgIHwgfCAjCnwgfCAgfCB8ICMKXF98X198X3wgIwogICAgICAgICAjIwrfIwogIwogIwogIwogIyM='
);

export default lineblocks;
