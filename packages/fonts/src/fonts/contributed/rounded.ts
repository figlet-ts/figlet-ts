import { FontFile } from '../../FontFile';

const rounded = new FontFile(
    'rounded',
    'ZmxmMmEkIDcgNiAyMCAxNSAyClJvdW5kZWQgYnkgTmljayBNaW5lcnMgTi5NLk1pbmVyc0BkdXJoYW0uYWMudWsKTWF5IDE5OTQKJCQjCiQkIwokJCMKJCQjCiQkIwokJCMKJCQjIwogXyAjCnwgfCMKfCB8Iwp8X3wjCiBfICMKfF98IwogICAjIwogXyAgXyAjCiggKSggKSMKfC8gIFx8IwogICAgICAjCiAgICAgICMKICAgICAgIwogICAgICAjIwogICBfIF8gICAjCiBffCBVIHxfICMKKF8gICAgIF8pIwogX3wgTyB8XyAjCihfICAgICBfKSMKICB8X25ffCAgIwogICAgICAgICAjIwogICBfICAgIwogX3wgfF8gIwp8ICBfX18pIwp8X19fICB8IwooXyAgIF98IwogIHxffCAgIwogICAgICAgIyMKIF8gICBfICMKKF8pIHwgfCMKICAgLyAvICMKICAvIC8gICMKIC8gLyBfICMKfF98IChfKSMKICAgICAgICMjCiAgX19fICAgIwogLyBfIFwgICMKKCAoXykgKSAjCiApIF8gKCAgIwooICgvICBcICMKIFxfXy9cXykjCiAgICAgICAgIyMKIF8gIwooICkjCnwvICMKICAgIwogICAjCiAgICMKICAgIyMKICBfICMKIC8gKSMKfCB8ICMKfCB8ICMKfCB8ICMKIFxfKSMKICAgICMjCiBfICAjCiggXCAjCiB8IHwjCiB8IHwjCiB8IHwjCihfLyAjCiAgICAjIwogICAgXyAgICAjCiBfIHwgfCBfICMKKCBcfCB8LyApIwogKSAgICAgKCAjCihfL3wgfFxfKSMKICAgfF98ICAgIwogICAgICAgICAjIwogICAgICAgIwogICBfICAgIwogX3wgfF8gIwooXyAgIF8pIwogIHxffCAgIwogICAgICAgIwogICAgICAgIyMKICAgIwogICAjCiAgICMKICAgIwogXyAjCiggKSMKfC8gIyMKICAgICAgICMKICAgICAgICMKIF9fX19fICMKKF9fX19fKSMKICAgICAgICMKICAgICAgICMKICAgICAgICMjCiAgICMKICAgIwogICAjCiAgICMKIF8gIwooXykjCiAgICMjCiAgICAgXyAjCiAgICB8IHwjCiAgIC8gLyAjCiAgLyAvICAjCiAvIC8gICAjCnxffCAgICAjCiAgICAgICAjIwogIF9fX19fICAjCiAoX19fX18pICMKIF8gIF9fIF8gIwp8IHwvIC98IHwjCnwgICAvX3wgfCMKIFxfX19fXy8gIwogICAgICAgICAjIwogIF9fXyAgICMKIChfX18pICAjCiAgICBfICAgIwogICB8IHwgICMKICBffCB8XyAjCiAoX19fX18pIwogICAgICAgICMjCiBfX19fX18gICMKKF9fX19fIFwgIwogIF9fX18pICkjCiAvIF9fX18vICMKfCAoX19fX18gIwp8X19fX19fXykjCiAgICAgICAgICMjCiBfX19fX18gICMKKF9fX19fIFwgIwogX19fX18pICkjCihfX19fXyAoICMKIF9fX19fKSApIwooX19fX19fLyAjCiAgICAgICAgICMjCiBfICAgICBfICMKfCB8ICAgKF8pIwp8IHxfX19fXyAjCnxfX19fXyAgfCMKICAgICAgfCB8IwogICAgICB8X3wjCiAgICAgICAgICMjCiBfX19fX19fICMKKF9fX19fX18pIwogX19fX19fICAjCihfX19fXyBcICMKIF9fX19fKSApIwooX19fX19fLyAjCiAgICAgICAgICMjCiBfX19fX19fICMKKF9fX19fX18pIwogX19fX19fICAjCnwgIF9fXyBcICMKfCB8X19fKSApIwp8X19fX19fLyAjCiAgICAgICAgICMjCiBfX19fX19fICMKKF9fX19fX18pIwogICAgICBfICAjCiAgICAgLyApICMKICAgIC8gLyAgIwogICAoXy8gICAjCiAgICAgICAgICMjCiAgX19fX18gICMKIChfX19fXykgIwogIF9fX19fICAjCiAvIF9fXyBcICMKKCAoX19fKSApIwogXF9fX19fLyAjCiAgICAgICAgICMjCiBfX19fX19fICMKKF9fX19fX18pIwogX19fX19fXyAjCihfX19fXyAgfCMKICAgICAgfCB8IwogICAgICB8X3wjCiAgICAgICAgICMjCiAgICMKICAgIwogXyAjCihfKSMKIF8gIwooXykjCiAgICMjCiAgICMKICAgIwogXyAjCihfKSMKIF8gIwooICkjCnwvICMjCiAgICAjCiAgXyAjCiAvICkjCiggKCAjCiBcXykjCiAgICAjCiAgICAjIwogICAgICAgIwogX19fX18gIwooX19fX18pIwogX19fX18gIwooX19fX18pIwogICAgICAgIwogICAgICAgIyMKICAgICMKIF8gICMKKCBcICMKICkgKSMKKF8vICMKICAgICMKICAgICMjCiAgX19fICAjCiAvIF8gXCAjCihfKCApICkjCiAgIChfLyAjCiAgIF8gICAjCiAgKF8pICAjCiAgICAgICAjIwogIF9fX19fICAjCiAvIF9fICBcICMKfCB8IC8gICApIwp8IHwgXF9fLyAjCnwgfF9fX18gICMKIFxfX19fXykgIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF9fX19fX18gIwp8ICBfX18gIHwjCnwgfCAgIHwgfCMKfF98ICAgfF98IwogICAgICAgICAjIwogX19fX19fICAjCihfX19fICBcICMKIF9fX18pICApIwp8ICBfXyAgKCAjCnwgfF9fKSAgKSMKfF9fX19fXy8gIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF8gICAgICAgIwp8IHwgICAgICAjCnwgfF9fX19fICMKIFxfX19fX18pIwogICAgICAgICAjIwogX19fX19fICAjCihfX19fX18pICMKIF8gICAgIF8gIwp8IHwgICB8IHwjCnwgfF9fLyAvICMKfF9fX19fLyAgIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF9fX19fICAgIwp8ICBfX18pICAjCnwgfF9fX19fICMKfF9fX19fX18pIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF9fX19fICAgIwp8ICBfX18pICAjCnwgfCAgICAgICMKfF98ICAgICAgIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF8gICBfX18gIwp8IHwgKF8gIHwjCnwgfF9fXykgfCMKIFxfX19fXy8gIwogICAgICAgICAjIwogXyAgICAgXyAjCihfKSAgIChfKSMKIF9fX19fX18gIwp8ICBfX18gIHwjCnwgfCAgIHwgfCMKfF98ICAgfF98IwogICAgICAgICAjIwogXyAjCnwgfCMKfCB8Iwp8IHwjCnwgfCMKfF98IwogICAjIwogX19fX19fXyAjCihfX19fX19fKSMKICAgICBfICAgIwogXyAgfCB8ICAjCnwgfF98IHwgICMKIFxfX18vICAgIwogICAgICAgICAjIwogXyAgICAgXyAjCihfKSAgIHwgfCMKIF9fX19ffCB8Iwp8ICBfICAgXykjCnwgfCAgXCBcICMKfF98ICAgXF8pIwogICAgICAgICAjIwogXyAgICAgICAjCihfKSAgICAgICMKIF8gICAgICAgIwp8IHwgICAgICAjCnwgfF9fX19fICMKfF9fX19fX18pIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF8gIF8gIF8gIwp8IHx8X3x8IHwjCnwgfCAgIHwgfCMKfF98ICAgfF98IwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF8gICAgIF8gIwp8IHwgICB8IHwjCnwgfCAgIHwgfCMKfF98ICAgfF98IwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF8gICAgIF8gIwp8IHwgICB8IHwjCnwgfF9fX3wgfCMKIFxfX19fXy8gIwogICAgICAgICAjIwogX19fX19fICAjCihfX19fXyBcICMKIF9fX19fKSApIwp8ICBfX19fLyAjCnwgfCAgICAgICMKfF98ICAgICAgIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKIF8gICAgXyAgIwp8IHwgIHwgfCAjCnwgfF9ffCB8ICMKIFxfX19fX18pIwogICAgICAgICAjIwogX19fX19fICAjCihfX19fXyBcICMKIF9fX19fKSApIwp8ICBfXyAgLyAjCnwgfCAgXCBcICMKfF98ICAgfF98IwogICAgICAgICAjIwogIF9fX19fXyAjCiAvIF9fX19fKSMKKCAoX19fXyAgIwogXF9fX18gXCAjCiBfX19fXykgKSMKKF9fX19fXy8gIwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKICAgIF8gICAgIwogICB8IHwgICAjCiAgIHwgfCAgICMKICAgfF98ICAgIwogICAgICAgICAjIwogXyAgICAgXyAjCihfKSAgIChfKSMKIF8gICAgIF8gIwp8IHwgICB8IHwjCnwgfF9fX3wgfCMKIFxfX19fXy8gIwogICAgICAgICAjIwogXyAgICAgXyAjCihfKSAgIChfKSMKIF8gICAgIF8gIwp8IHwgICB8IHwjCiBcIFwgLyAvICMKICBcX19fLyAgIwogICAgICAgICAjIwogXyAgXyAgXyAjCihfKShfKShfKSMKIF8gIF8gIF8gIwp8IHx8IHx8IHwjCnwgfHwgfHwgfCMKIFxfX19fXy8gIwogICAgICAgICAjIwogXyAgICAgXyAjCihfKSAgIChfKSMKICAgX19fICAgIwogIHwgICB8ICAjCiAvIC8gXCBcICMKfF98ICAgfF98IwogICAgICAgICAjIwogXyAgICAgXyAjCnwgfCAgIHwgfCMKfCB8X19ffCB8Iwp8X19fX18gIHwjCiBfX19fX3wgfCMKKF9fX19fX198IwogICAgICAgICAjIwogX19fX19fXyAjCihfX19fX19fKSMKICAgX18gICAgIwogIC8gLyAgICAjCiAvIC9fX19fICMKKF9fX19fX18pIwogICAgICAgICAjIwogX19fICMKfCAgXykjCnwgfCAgIwp8IHwgICMKfCB8XyAjCnxfX18pIwogICAgICMjCiBfICAgICAjCnwgfCAgICAjCiBcIFwgICAjCiAgXCBcICAjCiAgIFwgXCAjCiAgICB8X3wjCiAgICAgICAjIwogX19fICMKKF8gIHwjCiAgfCB8IwogIHwgfCMKIF98IHwjCihfX198IwogICAgICMjCiAgIF9fICAjCiAgLyAgXCAjCiAoXy9cXykjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjIwogICAgICAgICAjCiAgICAgICAgICMKICAgICAgICAgIwogICAgICAgICAjCiBfX19fX19fICMKKF9fX19fX18pIwogICAgICAgICAjIwogXyAjCiggKSMKIFx8IwogICAjCiAgICMKICAgIwogICAjIwogICAgICAgIwogICAgICAgIwogX19fX18gIwooX19fXyB8IwovIF9fXyB8IwpcX19fX198IwogICAgICAgIyMKIF8gICAgICMKfCB8ICAgICMKfCB8X18gICMKfCAgXyBcICMKfCB8XykgKSMKfF9fX18vICMKICAgICAgICMjCiAgICAgICAjCiAgICAgICAjCiAgX19fXyAjCiAvIF9fXykjCiggKF9fXyAjCiBcX19fXykjCiAgICAgICAjIwogICAgIF8gIwogICAgfCB8IwogIF9ffCB8IwogLyBfICB8IwooIChffCB8IwogXF9fX198IwogICAgICAgIyMKICAgICAgICMKICAgICAgICMKIF9fX19fICMKfCBfX18gfCMKfCBfX19ffCMKfF9fX19fKSMKICAgICAgICMjCiAgICBfX18gIwogICAvIF9fKSMKIF98IHxfXyAjCihfICAgX18pIwogIHwgfCAgICMKICB8X3wgICAjCiAgICAgICAgIyMKICAgICAgICMKICAgICAgICMKICBfX19fICMKIC8gXyAgfCMKKCAoX3wgfCMKIFxfX18gfCMKKF9fX19ffCMjCiBfICAgICAjCnwgfCAgICAjCnwgfF9fICAjCnwgIF8gXCAjCnwgfCB8IHwjCnxffCB8X3wjCiAgICAgICAjIwogXyAjCihfKSMKIF8gIwp8IHwjCnwgfCMKfF98IwogICAjIwogICBfICMKICAoXykjCiAgIF8gIwogIHwgfCMKICB8IHwjCiBffCB8IwooX18vICMjCiBfICAgICAjCnwgfCAgICAjCnwgfCAgXyAjCnwgfF8vICkjCnwgIF8gKCAjCnxffCBcXykjCiAgICAgICAjIwogXyAgIwp8IHwgIwp8IHwgIwp8IHwgIwp8IHwgIwogXF8pIwogICAgIyMKICAgICAgICMKICAgICAgICMKIF9fX18gICMKfCAgICBcICMKfCB8IHwgfCMKfF98X3xffCMKICAgICAgICMjCiAgICAgICAjCiAgICAgICAjCiBfX19fICAjCnwgIF8gXCAjCnwgfCB8IHwjCnxffCB8X3wjCiAgICAgICAjIwogICAgICAgIwogICAgICAgIwogIF9fXyAgIwogLyBfIFwgIwp8IHxffCB8IwogXF9fXy8gIwogICAgICAgIyMKICAgICAgICMKICAgICAgICMKIF9fX18gICMKfCAgXyBcICMKfCB8X3wgfCMKfCAgX18vICMKfF98ICAgICMjCiAgICAgICAjCiAgICAgICAjCiAgX19fXyAjCiAvIF8gIHwjCnwgfF98IHwjCiBcX18gIHwjCiAgICB8X3wjIwogICAgICAgIwogICAgICAgIwogIF9fX18gIwogLyBfX18pIwp8IHwgICAgIwp8X3wgICAgIwogICAgICAgIyMKICAgICAgIwogICAgICAjCiAgX19fICMKIC9fX18pIwp8X19fIHwjCihfX18vICMKICAgICAgIyMKICAgICAgICMKICAgXyAgICMKIF98IHxfICMKKF8gICBfKSMKICB8IHxfICMKICAgXF9fKSMKICAgICAgICMjCiAgICAgICAjCiAgICAgICAjCiBfICAgXyAjCnwgfCB8IHwjCnwgfF98IHwjCnxfX19fLyAjCiAgICAgICAjIwogICAgICAgIwogICAgICAgIwogXyAgIF8gIwp8IHwgfCB8IwogXCBWIC8gIwogIFxfLyAgIwogICAgICAgIyMKICAgICAgICMKICAgICAgICMKIF8gXyBfICMKfCB8IHwgfCMKfCB8IHwgfCMKIFxfX18vICMKICAgICAgICMjCiAgICAgICAjCiAgICAgICAjCiBfICAgXyAjCiggXCAvICkjCiApIFggKCAjCihfLyBcXykjCiAgICAgICAjIwogICAgICAgIwogICAgICAgIwogXyAgIF8gIwp8IHwgfCB8Iwp8IHxffCB8IwogXF9fICB8IwooX19fXy8gIyMKICAgICAgICMKICAgICAgICMKIF9fX19fICMKKF9fXyAgKSMKIC8gX18vICMKKF9fX19fKSMKICAgICAgICMjCiAgIF9fICMKICAvIF8pIwogfCB8ICAjCiggKCAgICMKIHwgfF8gIwogIFxfXykjCiAgICAgICMjCiBfICMKfCB8Iwp8X3wjCiBfICMKfCB8Iwp8X3wjCiAgICMjCiBfXyAgICMKKF8gXCAgIwogIHwgfCAjCiAgICkgKSMKIF98IHwgIwooX18vICAjCiAgICAgICMjCiAgX18gIF8gIwogLyAgXC8gKSMKKF8vXF9fLyAjCiAgICAgICAgIwogICAgICAgICMKICAgICAgICAjCiAgICAgICAgIyMKIF9fX19fX18gIwooXylfX18oXykjCiBfX19fX19fICMKfCAgX19fICB8Iwp8IHwgICB8IHwjCnxffCAgIHxffCMKICAgICAgICAgIyMKIF9fX19fX18gIwooXylfX18oXykjCiBfICAgICBfICMKfCB8ICAgfCB8Iwp8IHxfX198IHwjCiBcX19fX18vICMKICAgICAgICAgIyMKIF8gICAgIF8gIwooXykgICAoXykjCiBfICAgICBfICMKfCB8ICAgfCB8Iwp8IHxfX198IHwjCiBcX19fX18vICMKICAgICAgICAgIyMKIF8gICBfICMKKF8pIChfKSMKIF9fX19fICMKKF9fX18gfCMKLyBfX18gfCMKXF9fX19ffCMKICAgICAgICMjCiBfICAgXyAjCihfKSAoXykjCiAgX19fICAjCiAvIF8gXCAjCnwgfF98IHwjCiBcX19fLyAjCiAgICAgICAjIwogXyAgIF8gIwooXykgKF8pIwogXyAgIF8gIwp8IHwgfCB8Iwp8IHxffCB8Iwp8X19fXy8gIwogICAgICAgIyMKICBfX18gICMKIC8gXyBcICMKfCAoICkgKSMKfCB8KCAoICMKfCB8ICkgKSMKfF98KF8vICMKICAgICAgICMjCg=='
);

export default rounded;
