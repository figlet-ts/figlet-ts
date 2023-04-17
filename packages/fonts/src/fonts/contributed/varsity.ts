import { FontFile } from '../../FontFile';

const varsity = new FontFile(
    'varsity',
    'ZmxmMmEkIDcgNyAxOCAwIDExIDAgMjQ0NDcgMApBdXRob3IgOiBteWZsaXgKRGF0ZSAgIDogMjAwNC82LzI5IDEyOjEyOjU1ClZlcnNpb246IDEuMAotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tClRoaXMgZm9udCBoYXMgYmVlbiBjcmVhdGVkIHVzaW5nIEphdkUncyBGSUdsZXQgZm9udCBleHBvcnQgYXNzaXN0YW50LgpIYXZlIGEgbG9vayBhdDogaHR0cDovL3d3dy5qYXZlLmRlCgpQZXJtaXNzaW9uIGlzIGhlcmVieSBnaXZlbiB0byBtb2RpZnkgdGhpcyBmb250LCBhcyBsb25nIGFzIHRoZQptb2RpZmllcidzIG5hbWUgaXMgcGxhY2VkIG9uIGEgY29tbWVudCBsaW5lLgokICMKJCAjCiQgIwokICMKJCAjCiQgIwokICMjCiBfICAjCnwgfCAjCnwgfCAjCnwgfCAjCnxffCAjCihfKSAjCiAgICAjIwogXyAgXyAgIwp8IHx8IHwgIwpcX3xcX3wgIwogICAgICAgIwogICAgICAgIwogICAgICAgIwogICAgICAgIyMKICAgICAgICAgICAjCiAgIF8gIF8gICAgIwogX3wgfHwgfF8gICMKfF98IHx8IHxffCAjCnxffCB8fCB8X3wgIwogIHxffHxffCAgICMKICAgICAgICAgICAjIwogICAgIF8gICAgICAjCiAuLS18IHwtLS4gICMKfCAoX3wgfF9cX3wgIwonXy5ffCB8XycuICAjCnwgXF98IHxfKSB8ICMKICctLXxffC0tJyAgIwogICAgICAgICAgICAjIwogICAgIF9fICAjCiBfICAvIC8gICMKKF8pLyAvICAgIwogIC8gLyBfICAjCiAvIC8gKF8pICMKL18vICAgICAgIwogICAgICAgICAjIwogICBfX18gICAgICAgIwogLicgXyAnLiAgICAgIwogfCAoXykgJ19fXyAgIwogLmBfX18nLyBfLyAgIwp8IChfX18pICBcXyAgIwpgLl9fX19fLlxfX3wgIwogICAgICAgICAgICAgIyMKIF8gICMKfCB8ICMKXF98ICMKICAgICMKICAgICMKICAgICMKICAgICMjCiAgX18gICMKLicgX3wgIwp8IHwgICAjCnwgfCAgICMKfCB8XyAgIwpgLl9ffCAjCiAgICAgICMjCiBfXyAgICMKfF8gYC4gIwogIHwgfCAjCiAgfCB8ICMKIF98IHwgIwp8X18sJyAjCiAgICAgICMjCiAgICBfICAgICAjCiAuLXwgfC0uICAjCiBcICAgICAvICAjCnxfICAgICBffCAjCiAvICAgICBcICAjCiAnLXxffC0nICAjCiAgICAgICAgICAjIwogICAgICAgICAgIwogICAuLS4gICAgIwogX198IHxfXyAgIwp8X18gICBfX3wgIwogICB8IHwgICAgIwogICAnLScgICAgIwogICAgICAgICAgIyMKICAgICMKICAgICMKICAgICMKICAgICMKIF8gICMKKV8vICMKICAgICMjCiAgICAgICAgICMKICAgICAgICAgIwogX19fX19fICAjCnxfX19fX198ICMKICAgICAgICAgIwogICAgICAgICAjCiAgICAgICAgICMjCiAgICAjCiAgICAjCiAgICAjCiAgICAjCiBfICAjCihfKSAjCiAgICAjIwogICAgIF9fICMKICAgIC8gLyAjCiAgIC8gLyAgIwogIC8gLyAgICMKIC8gLyAgICAjCi9fLyAgICAgIwogICAgICAgICMjCiAgIF9fX18gICAgIwogLicgICAgJy4gICMKfCAgLi0tLiAgfCAjCnwgfCAgICB8IHwgIwp8ICBgLS0nICB8ICMKICcuX19fXy4nICAjCiAgICAgICAgICAgIyMKICBfXyAgICAjCiAvICB8ICAgIwogYHwgfCAgICMKICB8IHwgICAjCiBffCB8XyAgIwp8X19fX198ICMKICAgICAgICAjIwogIF9fX19fICAgIwogLyBfX18gYC4gIwp8Xy9fX18pIHwgIwogLidfX19fLicgIwovIC9fX19fXyAgIwp8X19fX19fX3wgIwogICAgICAgICAgIyMKICBfX19fX18gICAjCiAvIF9fX18gYC4gIwogYCcgIF9fKSB8ICMKIF8gIHxfXyAnLiAjCnwgXF9fX18pIHwgIwogXF9fX19fXy4nICMKICAgICAgICAgICAjIwogXyAgICBfICAgICMKfCB8ICB8IHwgICAjCnwgfF9ffCB8XyAgIwp8X19fXyAgIF98ICMKICAgIF98IHxfICAjCiAgIHxfX19fX3wgIwogICAgICAgICAgICMjCiBfX19fX19fICAgIwp8ICBfX19fX3wgICMKfCB8X19fXyAgICAjCidfLl9fX18nJy4gIwp8IFxfX19fKSB8ICMKIFxfX19fX18uJyAjCiAgICAgICAgICAgIyMKICBfX19fX18gICAjCi4nIF9fX18gXCAgIwp8IHxfX19fXF98ICMKfCAnX19fX2AnLiAjCnwgKF9fX18pIHwgIwonLl9fX19fXy4nICMKICAgICAgICAgICAjIwogX19fX19fXyAgIwp8ICBfX18gIHwgIwp8Xy8gIC8gLyAgIwogICAgLyAvICAgIwogICAvIC8gICAgIwogIC9fLyAgICAgIwogICAgICAgICAgIyMKICAgX19fXyAgICAjCiAuJyBfXyAnLiAgIwogfCAoX18pIHwgICMKIC5gX19fXycuICAjCnwgKF9fX18pIHwgIwpgLl9fX19fXy4nICMKICAgICAgICAgICAjIwogIF9fX19fXyAgICMKLicgX19fXyAnLiAjCnwgKF9fX18pIHwgIwonXy5fX19fLiB8ICMKfCBcX19fX3wgfCAjCiBcX19fX19fLCcgIwogICAgICAgICAgICMjCiAgICAjCiBfICAjCihfKSAjCiBfICAjCihfKSAjCiAgICAjCiAgICAjIwogICAgIwogXyAgIwooXykgIwogXyAgIwp8ICkgIwopLyAgIwogICAgIyMKICAgXyAgIwogIC8gLyAjCiAvIC8gICMKPCA8ICAgIwogXCBcICAjCiAgXF9cICMKICAgICAgIyMKICAgICAgICAgIwogX19fX19fICAjCnxfX19fX198ICMKIF9fX19fXyAgIwp8X19fX19ffCAjCiAgICAgICAgICMKICAgICAgICAgIyMKICBfICAgICMKIFwgXCAgICMKICBcIFwgICMKICAgPiA+ICMKICAvIC8gICMKIC9fLyAgICMKICAgICAgICMjCiAgX19fX18gICAjCiAvIF9fXyBgLiAjCnxfL19fXykgfCAjCiAgLyAgX18uJyAjCiAgfF98ICAgICAjCiAgKF8pICAgICAjCiAgICAgICAgICAjIwogICBfX19fICAgIwogLicgX18gXCAgIwovIC4nICBcIHwgIwp8IHwgKF8vIHwgIwpcIGAuX18uJ1wgIwogYC5fX18gLicgIwogICAgICAgICAgIyMKICAgICAgXyAgICAgICAjCiAgICAgLyBcICAgICAgIwogICAgLyBfIFwgICAgICMKICAgLyBfX18gXCAgICAjCiBfLyAvICAgXCBcXyAgIwp8X19fX3wgfF9fX198ICMKICAgICAgICAgICAgICAjIwogX19fX19fICAgICMKfF8gICBfIFwgICAjCiAgfCB8XykgfCAgIwogIHwgIF9fJy4gICMKIF98IHxfXykgfCAjCnxfX19fX19fLyAgIwogICAgICAgICAgICMjCiAgIF9fX19fXyAgIwogLicgX19fICB8ICMKLyAuJyAgIFxffCAjCnwgfCAgICAgICAgIwpcIGAuX19fLidcICMKIGAuX19fXyAuJyAjCiAgICAgICAgICAgIyMKIF9fX19fXyAgICAjCnxfICAgXyBgLiAgIwogIHwgfCBgLiBcICMKICB8IHwgIHwgfCAjCiBffCB8Xy4nIC8gIwp8X19fX19fLicgICMKICAgICAgICAgICAjIwogX19fX19fX18gICMKfF8gICBfXyAgfCAjCiAgfCB8XyBcX3wgIwogIHwgIF98IF8gICMKIF98IHxfXy8gfCAjCnxfX19fX19fX3wgIwogICAgICAgICAgICMjCiBfX19fX19fXyAgIwp8XyAgIF9fICB8ICMKICB8IHxfIFxffCAjCiAgfCAgX3wgICAgIwogX3wgfF8gICAgICMKfF9fX19ffCAgICAjCiAgICAgICAgICAgIyMKICAgX19fX19fICAgIwogLicgX19fICB8ICAjCi8gLicgICBcX3wgICMKfCB8ICAgX19fXyAgIwpcIGAuX19fXSAgfCAjCiBgLl9fX19fLicgICMKICAgICAgICAgICAgIyMKIF9fX18gIF9fX18gICMKfF8gICB8fCAgIF98ICMKICB8IHxfX3wgfCAgICMKICB8ICBfXyAgfCAgICMKIF98IHwgIHwgfF8gICMKfF9fX198fF9fX198ICMKICAgICAgICAgICAgICMjCiBfX19fXyAgIwp8XyAgIF98ICMKICB8IHwgICAjCiAgfCB8ICAgIwogX3wgfF8gICMKfF9fX19ffCAjCiAgICAgICAgIyMKICAgIF9fX19fICAjCiAgIHxfICAgX3wgIwogICAgIHwgfCAgICMKIF8gICB8IHwgICAjCnwgfF9fJyB8ICAgIwpgLl9fX18uJyAgICMKICAgICAgICAgICAjIwogX19fICBfX19fICAgIwp8XyAgfHxfICBffCAgIwogIHwgfF8vIC8gICAgIwogIHwgIF9fJy4gICAgIwogX3wgfCAgXCBcXyAgIwp8X19fX3x8X19fX3wgIwogICAgICAgICAgICAgIyMKICBfX19fXyAgICAgIwogfF8gICBffCAgICAjCiAgIHwgfCAgICAgICMKICAgfCB8ICAgXyAgIwogIF98IHxfXy8gfCAjCiB8X19fX19fX198ICMKICAgICAgICAgICAgIyMKIF9fX18gICAgX19fXyAgIwp8XyAgIFwgIC8gICBffCAjCiAgfCAgIFwvICAgfCAgICMKICB8IHxcICAvfCB8ICAgIwogX3wgfF9cL198IHxfICAjCnxfX19fX3x8X19fX198ICMKICAgICAgICAgICAgICAgIyMKIF9fX18gIF9fX19fICAjCnxfICAgXHxfICAgX3wgIwogIHwgICBcIHwgfCAgICMKICB8IHxcIFx8IHwgICAjCiBffCB8X1wgICB8XyAgIwp8X19fX198XF9fX198ICMKICAgICAgICAgICAgICAjIwogICBfX18gICAgIwogLicgICBgLiAgIwovICAuLS4gIFwgIwp8IHwgICB8IHwgIwpcICBgLScgIC8gIwogYC5fX18uJyAgIwogICAgICAgICAgIyMKIF9fX19fX18gICAjCnxfICAgX18gXCAgIwogIHwgfF9fKSB8ICMKICB8ICBfX18vICAjCiBffCB8XyAgICAgIwp8X19fX198ICAgICMKICAgICAgICAgICAjIwogICBfX18gICAgICAjCiAuJyAgIGAuICAgICMKLyAgLi0uICBcICAgIwp8IHwgICB8IHwgICAjClwgIGAtJyAgXF8gICMKIGAuX19fLlxfX3wgIwogICAgICAgICAgICAjIwogX19fX19fXyAgICAgIwp8XyAgIF9fIFwgICAgIwogIHwgfF9fKSB8ICAgIwogIHwgIF9fIC8gICAgIwogX3wgfCAgXCBcXyAgIwp8X19fX3wgfF9fX3wgIwogICAgICAgICAgICAgIyMKICBfX19fX18gICAjCi4nIF9fX18gXCAgIwp8IChfX18gXF98ICMKIF8uX19fX2AuICAjCnwgXF9fX18pIHwgIwogXF9fX19fXy4nICMKICAgICAgICAgICAjIwogX19fX19fX19fICAjCnwgIF8gICBfICB8ICMKfF8vIHwgfCBcX3wgIwogICAgfCB8ICAgICAjCiAgIF98IHxfICAgICMKICB8X19fX198ICAgIwogICAgICAgICAgICAjIwogX19fX18gIF9fX19fICAjCnxfICAgX3x8XyAgIF98ICMKICB8IHwgICAgfCB8ICAgIwogIHwgJyAgICAnIHwgICAjCiAgIFwgXF9fLyAvICAgICMKICAgIGAuX18uJyAgICAgIwogICAgICAgICAgICAgICAjIwogX19fXyAgIF9fX18gICMKfF8gIF98IHxfICBffCAjCiAgXCBcICAgLyAvICAgIwogICBcIFwgLyAvICAgICMKICAgIFwgJyAvICAgICAjCiAgICAgXF8vICAgICAgIwogICAgICAgICAgICAgICMjCiBfX19fICAgICAgX19fXyAjCnxfICBffCAgICB8XyAgX3wjCiAgXCBcICAvXCAgLyAvICAjCiAgIFwgXC8gIFwvIC8gICAjCiAgICBcICAvXCAgLyAgICAjCiAgICAgXC8gIFwvICAgICAjCiAgICAgICAgICAgICAgICAjIwogX19fXyAgX19fXyAgIwp8XyAgX3x8XyAgX3wgIwogIFwgXCAgLyAvICAgIwogICA+IGAnIDwgICAgIwogXy8gLydgXCBcXyAgIwp8X19fX3x8X19fX3wgIwogICAgICAgICAgICAgIyMKIF9fX18gIF9fX18gICMKfF8gIF98fF8gIF98ICMKICBcIFwgIC8gLyAgICMKICAgXCBcLyAvICAgICMKICAgX3wgIHxfICAgICMKICB8X19fX19ffCAgICMKICAgICAgICAgICAgICMjCiBfX19fX19fXyAgIwp8ICBfXyAgIF98ICMKfF8vICAvIC8gICAjCiAgIC4nLicgXyAgIwogXy8gL19fLyB8ICMKfF9fX19fX19ffCAjCiAgICAgICAgICAgIyMKIF9fXyAgIwp8ICBffCAjCnwgfCAgICMKfCB8ICAgIwp8IHxfICAjCnxfX198ICMKICAgICAgIyMKX18gICAgICAjClwgXCAgICAgIwogXCBcICAgICMKICBcIFwgICAjCiAgIFwgXCAgIwogICAgXF9cICMKICAgICAgICAjIwogX19fICAjCnxfICB8ICMKICB8IHwgIwogIHwgfCAjCiBffCB8ICMKfF9fX3wgIwogICAgICAjIwogIF9fXyAgICMKIC8gXyBcICAjCnxfLyBcX3wgIwogICAgICAgICMKICAgICAgICAjCiAgICAgICAgIwogICAgICAgICMjCiAgICAgICAgICAjCiAgICAgICAgICAjCiAgICAgICAgICAjCiAgICAgICAgICAjCiBfX19fX19fICAjCnxfX19fX19ffCAjCiAgICAgICAgICAjIwogX18gICMKfCAgfCAjCiBcX3wgIwogICAgICMKICAgICAjCiAgICAgIwogICAgICMjCiAgICAgICAgIwogICAgICAgICMKICwtLS4gICAjCmAnX1wgOiAgIwovLyB8IHwsICMKXCctO19fLyAjCiAgICAgICAgIyMKIF9fICAgICAgICAjClsgIHwgICAgICAgIwogfCB8Li0tLiAgICMKIHwgJy8nYFwgXCAjCiB8ICBcX18vIHwgIwpbX187Ll9fLicgICMKICAgICAgICAgICAjIwogICAgICAgICMKICAgICAgICAjCiAuLS0tLiAgIwovIC8nYFxdICMKfCBcX18uICAjCicuX19fLicgIwogICAgICAgICMjCiAgICAgICBfXyAgIwogICAgICB8ICBdICMKICAuLS0ufCB8ICAjCi8gLydgXCcgfCAgIwp8IFxfXy8gIHwgICMKICcuX18uO19fXSAjCiAgICAgICAgICAgIyMKICAgICAgICAjCiAgICAgICAgIwogLi0tLS4gICMKLyAvX19cXCAjCnwgXF9fLiwgIwogJy5fXy4nICMKICAgICAgICAjIwogICAgX19fICAjCiAgLicgLi5dICMKIF98IHxfICAgIwonLXwgfC0nICAjCiAgfCB8ICAgICMKIFtfX19dICAgIwogICAgICAgICAjIwogICAgICAgICAjCiAgICAgICAgICMKICAuLS0uLykgIwogLyAvJ2BcOyAjCiBcIFwuXy8vICMKIC4nLF9fYCAgIwooICggX18pKSAjIwogX18gICAgICAgIwpbICB8ICAgICAgIwogfCB8LS0uICAgIwogfCAuLS4gfCAgIwogfCB8IHwgfCAgIwpbX19fXXxfX10gIwogICAgICAgICAgIyMKICBfICAgIwogKF8pICAjCiBfXyAgICMKWyAgfCAgIwogfCB8ICAjCltfX19dICMKICAgICAgIyMKICAgICBfICAjCiAgICAoXykgIwogICAgX18gICMKICAgWyAgfCAjCiBfICB8IHwgIwpbIFxffCB8ICMKIFxfX19fLyAjIwogX18gICAgICAgIwpbICB8ICBfICAgIwogfCB8IC8gXSAgIwogfCAnJyA8ICAgIwogfCB8YFwgXCAgIwpbX198ICBcX10gIwogICAgICAgICAgIyMKIF9fICAgIwpbICB8ICAjCiB8IHwgICMKIHwgfCAgIwogfCB8ICAjCltfX19dICMKICAgICAgIyMKICAgICAgICAgICAgICAjCiAgICAgICAgICAgICAgIwogXyAuLS0uLi0tLiAgICMKWyBgLi0uIC4tLiB8ICAjCiB8IHwgfCB8IHwgfCAgIwpbX19ffHxfX3x8X19dICMKICAgICAgICAgICAgICAjIwogICAgICAgICAgIwogICAgICAgICAgIwogXyAuLS0uICAgIwpbIGAuLS4gfCAgIwogfCB8IHwgfCAgIwpbX19ffHxfX10gIwogICAgICAgICAgIyMKICAgICAgICAgIwogICAgICAgICAjCiAgLi0tLiAgICMKLyAuJ2BcIFwgIwp8IFxfXy4gfCAjCiAnLl9fLicgICMKICAgICAgICAgIyMKICAgICAgICAgICMKICAgICAgICAgICMKIF8gLi0tLiAgICMKWyAnLydgXCBcICMKIHwgXF9fLyB8ICMKIHwgOy5fXy8gICMKW19ffCAgICAgICMjCiAgICAgICAgICAjCiAgICAgICAgICAjCiAgLi0tLiBfICAjCi8gLydgXCcgXSAjCnwgXF9fLyB8ICAjCiBcX18uOyB8ICAjCiAgICAgfF9fXSAjIwogICAgICAgICAjCiAgICAgICAgICMKIF8gLi0tLiAgIwpbIGAvJ2BcXSAjCiB8IHwgICAgICMKW19fX10gICAgIwogICAgICAgICAjIwogICAgICAgICMKICAgICAgICAjCiAuLS0uICAgIwooIChgXF0gICMKIGAnLicuICAjCltcX18pICkgIwogICAgICAgICMjCiAgXyAgICAjCiAvIHxfICAjCmB8IHwtJyAjCiB8IHwgICAjCiB8IHwsICAjCiBcX18vICAjCiAgICAgICAjIwogICAgICAgICAgIwogICAgICAgICAgIwogX18gICBfICAgIwpbICB8IHwgfCAgIwogfCBcXy8gfCwgIwogJy5fXy4nXy8gIwogICAgICAgICAgIyMKICAgICAgICAgIwogICAgICAgICAjCiBfICAgX18gICMKWyBcIFsgIF0gIwogXCBcLyAvICAjCiAgXF9fLyAgICMKICAgICAgICAgIyMKICAgICAgICAgICAgICMKICAgICAgICAgICAgICMKIF8gICBfICAgX18gICMKWyBcIFsgXCBbICBdICMKIFwgXC9cIFwvIC8gICMKICBcX18vXF9fLyAgICMKICAgICAgICAgICAgICMjCiAgICAgICAgICMKICAgICAgICAgIwogXyAgIF9fICAjClsgXCBbICBdICMKID4gJyAgPCAgIwpbX19dYFxfXSAjCiAgICAgICAgICMjCiAgICAgICAgICAjCiAgICAgICAgICAjCiAgXyAgIF9fICAjCiBbIFwgWyAgXSAjCiAgXCAnLyAvICAjCltcXzogIC8gICAjCiBcX18uJyAgICAjIwogICAgICAgICMKICAgICAgICAjCiBfX19fICAgIwpbXyAgIF0gICMKIC4nIC9fICAjCltfX19fX10gIwogICAgICAgICMjCiAgIF9fICAjCiAuJyBfLyAjCiB8IHwgICAjCjwgPCAgICAjCiB8IHxfICAjCiBgLl9fXCAjCiAgICAgICAjIwogXyAgIwp8IHwgIwp8IHwgIwp8IHwgIwp8IHwgIwp8X3wgIwogICAgIyMKIF9fICAgICMKXF8gYC4gICMKICB8IHwgICMKICAgPiA+ICMKIF98IHwgICMKL19fLicgICMKICAgICAgICMjCiBfX18uLS4gIwp8ICBfX198ICMKJy0nICAgICAjCiAgICAgICAgIwogICAgICAgICMKICAgICAgICAjCiAgICAgICAgIyMKICAgICAgXyAgICAgICAjCiAgICAgLyBcICAgICAgIwogICAgLyBfIFwgICAgICMKICAgLyBfX18gXCAgICAjCiBfLyAvICAgXCBcXyAgIwp8X19fX3wgfF9fX198ICMKICAgICAgICAgICAgICAjIwogICBfX18gICAgIwogLicgICBgLiAgIwovICAuLS4gIFwgIwp8IHwgICB8IHwgIwpcICBgLScgIC8gIwogYC5fX18uJyAgIwogICAgICAgICAgIyMKIF9fX19fICBfX19fXyAgIwp8XyAgIF98fF8gICBffCAjCiAgfCB8ICAgIHwgfCAgICMKICB8ICcgICAgJyB8ICAgIwogICBcIFxfXy8gLyAgICAjCiAgICBgLl9fLicgICAgICMKICAgICAgICAgICAgICAgIyMKICAgICAgICAjCiAgICAgICAgIwogLC0tLiAgICMKYCdfXCA6ICAjCi8vIHwgfCwgIwpcJy07X18vICMKICAgICAgICAjIwogICAgICAgICAjCiAgICAgICAgICMKICAuLS0uICAgIwovIC4nYFwgXCAjCnwgXF9fLiB8ICMKICcuX18uJyAgIwogICAgICAgICAjIwogICAgICAgICAgIwogICAgICAgICAgIwogX18gICBfICAgIwpbICB8IHwgfCAgIwogfCBcXy8gfCwgIwogJy5fXy4nXy8gIwogICAgICAgICAgIyMK3yMKICMKICMKICMKICMKICMKICMj'
);

export default varsity;
