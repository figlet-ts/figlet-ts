import { FontFile } from '../../FontFile';

const smallcaps = new FontFile(
    'smallcaps',
    'ZmxmMmEkIDUgNCA5IC0xIDExIDAgODE5MiAwCkF1dGhvciA6IExHIEJlYXJkCkRhdGUgICA6IDIwMDQvNi82IDE2OjA0OjUzClZlcnNpb246IDEuMAotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tClRoaXMgZm9udCBoYXMgYmVlbiBjcmVhdGVkIHVzaW5nIEphdkUncyBGSUdsZXQgZm9udCBleHBvcnQgYXNzaXN0YW50LgpIYXZlIGEgbG9vayBhdDogaHR0cDovL3d3dy5qYXZlLmRlCgpQZXJtaXNzaW9uIGlzIGhlcmVieSBnaXZlbiB0byBtb2RpZnkgdGhpcyBmb250LCBhcyBsb25nIGFzIHRoZQptb2RpZmllcidzIG5hbWUgaXMgcGxhY2VkIG9uIGEgY29tbWVudCBsaW5lLgokICMKJCAjCiQgIwokICMKJCAjIwogXyAgIwopIHwgIwp8XyggIwopXy8gIwogICAgIyMKICBfIF8gICMKIC8gLyAoICMKKV8vXy8gICMKICAgICAgICMKICAgICAgICMjCiMjCiAjCiAjCiAjCiAjIwokIwogIwogIwogIwogIyMKIF8gIF8gICMKKF8pLyAoICMKICAvIC9fICMKIClfLyhfKSMKICAgICAgICMjCiYjCiAjCiAjCiAjCiAjIwopfCAjCiAgICMKICAgIwogICAjCiAgICMjCiAgXyAgIwogKSAvICMKKCAoICAjCiApX1wgIwogICAgICMjCiBfICAgIwpcICggICMKICkgKSAjCi9fKCAgIwogICAgICMjCiojCiAjCiAjCiAjCiAjIwogICBfICAgIwogXy8gKF8gIwopXyAgIF8oIwogIClfLyAgIwogICAgICAgIyMKICAgIwogICAjCiAgICMKKS8gIwogICAjIwogICAgICAgIwogX19fXyAgIwopX19fXyggIwogICAgICAgIwogICAgICAgIyMKICAgICMKICAgICMKIF8gICMKKF8pICMKICAgICMjCiAgIF8gICMKICAvICggIwogLyAvICAjCilfLyAgICMKICAgICAgIyMKIF9fXyAgIwovIF8gXCAjCikpXygoICMKXF9fXy8gIwogICAgICAjIwogIF8gICMKL18gKCAjCiApIHwgIwovX18oICMKICAgICAjIwogX19fICAjCi9fXyAoICMKICggLyAgIwovX19fXCAjCiAgICAgICMjCiBfX18gICMKKF9fIFwgIwogKF8gfCAjCihfX18vICMKICAgICAgIyMKIF8gIF8gICMKKSAoKSAoICMKIFxfICB8ICMKICAgKV8oICMKICAgICAgICMjCiAgX19fICAjCiApIF9fXCAjCiAnLSApICAjCiApX19fXCAjCiAgICAgICAjIwogXyAgICAjCikgfF8gICMKfCAoIFwgIwpcX19fLyAjCiAgICAgICMjCiBfX18gICMKXF8gICggIwogIC8gfCAjCiAgKV8oICMKICAgICAgIyMKIF9fXyAgIwovIF8gXCAjCikgXyAoICMKXF9fXy8gIwogICAgICAjIwogX19fICAjCi8gXyBcICMKYC1fKCggIwogIClfLyAjCiAgICAgICMjCiBfICAjCihfKSAjCiBfICAjCihfKSAjCiAgICAjIwogXyAgIwooXykgIwogXyAgIwopXyggIwogICAgIyMKICBfXyAgIwouJyBfLyAjCicuX19cICMKICAgICAgIwogICAgICAjIwogX19fXyAgIwopX19fXyggIwogX19fXyAgIwopX19fXyggIwogICAgICAgIyMKIF9fICAgIwpcXyBgLiAjCi9fXy5gICMKICAgICAgIwogICAgICAjIwogX19fICAjCi8gXyBcICMKYC0nKCggIwogICApLyAjCiAgICAgICMjCkAjCiAjCiAjCiAjCiAjIwogICBfICAgIwogIClfXCAgIwogLyggKVwgIwopXy8gXF8oIwogICAgICAgIyMKIF9fXyAgIwpcICBfKSAjCnwgICggICMKL19fbykgIwogICAgICAjIwogX19fICMKLyBfKCAjCikpXyAgIwpcX18oICMKICAgICAjIwogX19fICAjClwgICBcICMKfCApICggIwovX19fLyAjCiAgICAgICMjCiBfX18gICMKKSBfXyggIwp8IF8pICAjCilfX18oICMKICAgICAgIyMKIF9fXyAgIwopIF9fKCAjCnwgXykgICMKKV8oICAgIwogICAgICAjIwogX19fXyAgIwopLi0uXyggIwp8KCAsLS4gIwopX2BfXyggIwogICAgICAgIyMKIF8gIF8gICMKKSAoKSAoICMKfCAtLSB8ICMKKV8oKV8oICMKICAgICAgICMjCiAgX19fICAjCiApXyBfKCAjCiBffCB8XyAjCilfX19fXygjCiAgICAgICAjIwogIF9fXyAgIwogKV8gXyggIwogXykgfCAgIwopX19fKCAgIwogICAgICAgIyMKIF8gIF8gICMKKSB8KSAvICMKfCAoICggICMKKV98KV9cICMKICAgICAgICMjCiBfICAgICAjCikgfCAgICAjCnwgKF9fICAjCilfX19fKCAjCiAgICAgICAjIwogXyAgIF8gIwopIFxfLyAoIwp8ICBfICB8IwopXyggKV8oIwogICAgICAgIyMKIF8gIF8gICMKKSBcLyAoICMKfCAgXCB8ICMKKV8oKV8oICMKICAgICAgICMjCiBfX19fICAjCi8gX18gXCAjCikpX18oKCAjClxfX19fLyAjCiAgICAgICAjIwogX19fXyAgIwopICBfKVwgIwp8ICdfXy8gIwopXyggICAgIwogICAgICAgIyMKIF9fX18gICMKLyBfXyBcICMKKSlfXygoICMKXF9fX1woICMKICAgICAgICMjCiBfX19fICAjCi8gIF8gXCAjCikgICcgLyAjCnxfKClfXCAjCiAgICAgICAjIwogIF9fXyAgIwogKCAgXyggIwogXykgXCAgIwopX19fXykgIwogICAgICAgIyMKIF9fX19fICMKKV9fIF9fKCMKICB8IHwgICMKICApXyggICMKICAgICAgICMjCiBfICBfICAjCikgKCkgKCAjCnwgXC8gfCAjCilfX19fKCAjCiAgICAgICAjIwogXyAgIF8gIwpcICggKSAvIwogKVxfLyggIwogIFxfLyAgIwogICAgICAgIyMKX18gICBfXyMKKSAoXykgKCMKXCAgXyAgLyMKICkvIFwoICMKICAgICAgICMjCiBfICAgXyAjCikgKCApICgjCiApIHwgKCAjCilfKCApXygjCiAgICAgICAjIwogXyAgXyAgIwopICgpICggIwonLiAgLyAgIwogL18oICAgIwogICAgICAgIyMKIF9fX18gICMKKV9fXyAoICMKICAvIC9fICMKIClfX19fKCMKICAgICAgICMjCiBfXyAgIwopIF98ICMKfChfICAjCilfX3wgIwogICAgICMjCiBfICAgICMKKSBcICAgIwogXCBcICAjCiAgXF8oICMKICAgICAgIyMKIF9fICAjCnxfICggIwogXyl8ICMKfF9fKCAjCiAgICAgIyMKXiMKICMKICMKICMKICMjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCiBfX19fXyAjCilfX19fXygjIwpcKCAjCiAgICMKICAgIwogICAjCiAgICMjCiAgIF8gICAjCiAgKV9cICAjCiAvKCApXCAjCilfLyBcXygjCiAgICAgICAjIwogX19fICAjClwgIF8pICMKfCAgKCAgIwovX19vKSAjCiAgICAgICMjCiBfX18gIwovIF8oICMKKSlfICAjClxfXyggIwogICAgICMjCiBfX18gICMKXCAgIFwgIwp8ICkgKCAjCi9fX18vICMKICAgICAgIyMKIF9fXyAgIwopIF9fKCAjCnwgXykgICMKKV9fXyggIwogICAgICAjIwogX19fICAjCikgX18oICMKfCBfKSAgIwopXyggICAjCiAgICAgICMjCiBfX19fICAjCikuLS5fKCAjCnwoICwtLiAjCilfYF9fKCAjCiAgICAgICAjIwogXyAgXyAgIwopICgpICggIwp8IC0tIHwgIwopXygpXyggIwogICAgICAgIyMKICBfX18gICMKIClfIF8oICMKIF98IHxfICMKKV9fX19fKCMKICAgICAgICMjCiAgX19fICAjCiApXyBfKCAjCiBfKSB8ICAjCilfX18oICAjCiAgICAgICAjIwogXyAgXyAgIwopIHwpIC8gIwp8ICggKCAgIwopX3wpX1wgIwogICAgICAgIyMKIF8gICAgICMKKSB8ICAgICMKfCAoX18gICMKKV9fX18oICMKICAgICAgICMjCiBfICAgXyAjCikgXF8vICgjCnwgIF8gIHwjCilfKCApXygjCiAgICAgICAjIwogXyAgXyAgIwopIFwvICggIwp8ICBcIHwgIwopXygpXyggIwogICAgICAgIyMKIF9fX18gICMKLyBfXyBcICMKKSlfXygoICMKXF9fX18vICMKICAgICAgICMjCiBfX19fICAjCikgIF8pXCAjCnwgJ19fLyAjCilfKCAgICAjCiAgICAgICAjIwogX19fXyAgIwovIF9fIFwgIwopKV9fKCggIwpcX19fXCggIwogICAgICAgIyMKIF9fX18gICMKLyAgXyBcICMKKSAgJyAvICMKfF8oKV9cICMKICAgICAgICMjCiAgX19fICAjCiAoICBfKCAjCiBfKSBcICAjCilfX19fKSAjCiAgICAgICAjIwogX19fX18gIwopX18gX18oIwogIHwgfCAgIwogIClfKCAgIwogICAgICAgIyMKIF8gIF8gICMKKSAoKSAoICMKfCBcLyB8ICMKKV9fX18oICMKICAgICAgICMjCiBfICAgXyAjClwgKCApIC8jCiApXF8vKCAjCiAgXF8vICAjCiAgICAgICAjIwpfXyAgIF9fIwopIChfKSAoIwpcICBfICAvIwogKS8gXCggIwogICAgICAgIyMKIF8gICBfICMKKSAoICkgKCMKICkgfCAoICMKKV8oIClfKCMKICAgICAgICMjCiBfICBfICAjCikgKCkgKCAjCicuICAvICAjCiAvXyggICAjCiAgICAgICAjIwogX19fXyAgIwopX19fICggIwogIC8gL18gIwogKV9fX18oIwogICAgICAgIyMKICBfICAjCiApIHwgIwooICggICMKIClffCAjCiAgICAgIyMKIF8gICMKKSB8ICMKfCAoICMKKV98ICMKICAgICMjCiBfICAgIwp8ICggICMKICkgKSAjCnxfKCAgIwogICAgICMjCiAgICAgICAjCilgLS5fICAjCiBgLS5fKCAjCiAgICAgICAjCiAgICAgICAjIwogICBfICAgIwogIClfXCAgIwogLyggKVwgIwopXy8gXF8oIwogICAgICAgIyMKIF9fX18gICMKLyBfXyBcICMKKSlfXygoICMKXF9fX18vICMKICAgICAgICMjCiBfICBfICAjCikgKCkgKCAjCnwgXC8gfCAjCilfX19fKCAjCiAgICAgICAjIwogICBfICAgIwogIClfXCAgIwogLyggKVwgIwopXy8gXF8oIwogICAgICAgIyMKIF9fX18gICMKLyBfXyBcICMKKSlfXygoICMKXF9fX18vICMKICAgICAgICMjCiBfICBfICAjCikgKCkgKCAjCnwgXC8gfCAjCilfX19fKCAjCiAgICAgICAjIwrfIwogIwogIwogIwogIyM='
);

export default smallcaps;