import { FontFile } from '../../FontFile';

const epic = new FontFile(
    'epic',
    'ZmxmMmEkIDkgOCAxMyAxNiAxNgpFcGljIGJ5IENsYXVkZSBNYXJ0aW5zIDEyLzk0CgpGaWdsZXQgcmVsZWFzZSAyLjEgLS0gMTIgQXVnIDE5OTQKUGVybWlzc2lvbiBpcyBoZXJlYnkgZ2l2ZW4gdG8gbW9kaWZ5IHRoaXMgZm9udCwgYXMgbG9uZyBhcyB0aGUKbW9kaWZpZXIncyBuYW1lIGlzIHBsYWNlZCBvbiBhIGNvbW1lbnQgbGluZS4KCkV4cGxhbmF0aW9uIG9mIGZpcnN0IGxpbmU6CmZsZjIgLSAibWFnaWMgbnVtYmVyIiBmb3IgZmlsZSBpZGVudGlmaWNhdGlvbgphICAgIC0gc2hvdWxkIGFsd2F5cyBiZSBgYScsIGZvciBub3cKJCAgICAtIHRoZSAiaGFyZGJsYW5rIiAtLSBwcmludHMgYXMgYSBibGFuaywgYnV0IGNhbid0IGJlIHNtdXNoZWQKOSAgICAtIGhlaWdodCBvZiBhIGNoYXJhY3Rlcgo4ICAgIC0gaGVpZ2h0IG9mIGEgY2hhcmFjdGVyLCBub3QgaW5jbHVkaW5nIGRlc2NlbmRlcnMKMTMgICAtIG1heCBsaW5lIGxlbmd0aCAoZXhjbHVkaW5nIGNvbW1lbnQgbGluZXMpICsgYSBmdWRnZSBmYWN0b3IKMTYgICAtIGRlZmF1bHQgc211c2htb2RlIGZvciB0aGlzIGZvbnQKMTYgICAtIG51bWJlciBvZiBjb21tZW50IGxpbmVzCgokJEAKJCRACiQkQAokJEAKJCRACiQkQAokJEAKJCRACiQkQEAKIF8gQAooIClACnwgfEAKfCB8QAp8IHxACihfKUAKIF8gQAooXylACiAgIEBACiBfICBfIEAKKCApKCApQAogXHx8LyBACiAgICAgIEAKICAgICAgQAogICAgICBACiAgICAgIEAKICAgICAgQAogICAgICBAQAogICBfICAgXyAgIEAKICAoICkgKCApICBACiBffCB8X3wgfF8gQAooXyAgIF8gICBfKUAKIF98IChfKSB8XyBACihfICAgXyAgIF8pQAogIHwgfCB8IHwgIEAKICAoXykgKF8pICBACiAgICAgICAgICAgQEAKICAgIF8gICAgQAogX198X3xfX19ACiggIF9fX19fL0AKfCAofF98X18gQAooX19fX18gIClACi9cX3xffCkgfEAKXF9fX19fX18pQAogICB8X3wgICBACiAgICAgICAgIEBACiAgICAgICBACiAgICAgL1xACigpICAvIC9ACiAgIC8gLyBACiAgLyAvICBACiAvIC8gICBACi8gLyAgKClAClwvICAgICBACiAgICAgICBAQAogICBfXyAgIEAKICAvX19cICBACiAoIFwvICkgQAogIFwgIC8gIEAKICAvICBcL1xACiAvIC9cICAvQAooICBcLyAgXEAKIFxfX18vXC9ACiAgICAgICAgQEAKIF8gQAooIClACnwvIEAKICAgQAogICBACiAgIEAKICAgQAogICBACiAgIEBACiAgIF8gQAogIC8gKUAKIC8gLyBACiggKCAgQAp8IHwgIEAKKCAoICBACiBcIFwgQAogIFxfKUAKICAgICBAQAogXyAgIEAKKCBcICBACiBcIFwgQAogICkgKUAKICB8IHxACiAgKSApQAogLyAvIEAKKF8vICBACiAgICAgQEAKICAgICAgICAgIEAKIC9cICAgIC9cIEAKIFwgXCAgLyAvIEAKIF8pICgpIChfIEAKKF8gICAgICBfKUAKICApICgpICggIEAKIC8gLyAgXCBcIEAKIFwvICAgIFwvIEAKICAgICAgICAgIEBACiAgICBfICAgIEAKICAgKCApICAgQAogICB8IHwgICBACiBfX3wgfF9fIEAKKF9fICAgX18pQAogICB8IHwgICBACiAgIHwgfCAgIEAKICAgKF8pICAgQAogICAgICAgICBAQAogICBACiAgIEAKICAgQAogICBACiAgIEAKICAgQAogXyBACiggKUAKfC8gQEAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEAKIF9fX19fIEAKKF9fX19fKUAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEBACiAgIEAKICAgQAogICBACiAgIEAKICAgQAogICBACiBfIEAKKF8pQAogICBAQAogICAgICAgQAogICAgIC9cQAogICAgLyAvQAogICAvIC8gQAogIC8gLyAgQAogLyAvICAgQAovIC8gICAgQApcLyAgICAgQAogICAgICAgQEAKIF9fX19fX18gQAooICBfXyAgIClACnwgKCAgKSAgfEAKfCB8IC8gICB8QAp8ICgvIC8pIHxACnwgICAvIHwgfEAKfCAgKF9fKSB8QAooX19fX19fXylACiAgICAgICAgIEBACiAgX18gICBACiAvICBcICBACiBcLykgKSBACiAgIHwgfCBACiAgIHwgfCBACiAgIHwgfCBACiBfXykgKF9ACiBcX19fXy9ACiAgICAgICBAQAogX19fX19fXyBACi8gX19fICAgKUAKXC8gICApICB8QAogICAgLyAgIClACiAgXy8gICAvIEAKIC8gICBfLyAgQAooICAgKF9fL1xAClxfX19fX19fL0AKICAgICAgICAgQEAKIF9fX19fXyAgQAovIF9fXyAgXCBAClwvICAgXCAgXEAKICAgX19fKSAvQAogIChfX18gKCBACiAgICAgICkgXEAKL1xfX18vICAvQApcX19fX19fLyBACiAgICAgICAgIEBACiAgICBfX18gICBACiAgIC8gICApICBACiAgLyAvKSB8ICBACiAvIChfKSAoXyBACihfX19fICAgXylACiAgICAgKSAoICBACiAgICAgfCB8ICBACiAgICAgKF8pICBACiAgICAgICAgICBAQAogX19fX19fXyBACiggIF9fX18gXEAKfCAoICAgIFwvQAp8IChfX19fICBACihfX19fXyBcIEAKICAgICAgKSApQAovXF9fX18pIClAClxfX19fX18vIEAKICAgICAgICAgQEAKICBfX19fX18gQAogLyBfX19fIFxACiggKCAgICBcL0AKfCAoX19fXyAgQAp8ICBfX18gXCBACnwgKCAgICkgKUAKKCAoX19fKSApQAogXF9fX19fLyBACiAgICAgICAgIEBACiBfX19fX18gIEAKLyBfX18gIFwgQApcLyAgICkgIClACiAgICAvICAvIEAKICAgLyAgLyAgQAogIC8gIC8gICBACiAvICAvICAgIEAKIFxfLyAgICAgQAogICAgICAgICBAQAogIF9fX19fICBACiAvIF9fXyBcIEAKKCAoX19fKSApQAogXCAgICAgLyBACiAvIF9fXyBcIEAKKCAoICAgKSApQAooIChfX18pIClACiBcX19fX18vIEAKICAgICAgICAgQEAKICBfX19fXyAgQAogLyBfX18gXCBACiggKCAgICkgKUAKKCAoX19fKSB8QAogXF9fX18gIHxACiAgICAgICkgfEAKL1xfX19fKSApQApcX19fX19fLyBACiAgICAgICAgIEBACiAgIEAKICAgQAogXyBACihfKUAKICAgQAogXyBACihfKUAKICAgQAogICBAQAogICBACiAgIEAKICAgQAogXyBACihfKUAKICAgQAogXyBACiggKUAKfC8gQEAKICAgIF8gQAogICAvIClACiAgLyAvIEAKIC8gLyAgQAooICggICBACiBcIFwgIEAKICBcIFwgQAogICBcXylACiAgICAgIEBACiAgICAgQAogICAgIEAKIF9fXyBACihfX18pQAogX19fIEAKKF9fXylACiAgICAgQAogICAgIEAKICAgICBAQAogXyAgICBACiggXCAgIEAKIFwgXCAgQAogIFwgXCBACiAgICkgKUAKICAvIC8gQAogLyAvICBACihfLyAgIEAKICAgICAgQEAKICBfX19fXyAgQAogLyBfX18gXCBACiggKCAgICkgKUAKIFwvICAvIC8gQAogICAgKCAoICBACiAgICB8IHwgIEAKICAgIChfKSAgQAogICAgIF8gICBACiAgICAoXykgIEBACiAgIF9fX19fICAgQAogIC8gX19fIFwgIEAKIC8gLyBfIFwgXCBACiggKCAvIFwgKSApQAp8IHwoKCkvLyAvIEAKKCAoIFxfX18vICBACiBcIFxfX19fL1wgQAogIFxfX19fX18vIEAKICAgICAgICAgICBAQAogX19fX19fXyBACiggIF9fXyAgKUAKfCAoICAgKSB8QAp8IChfX18pIHxACnwgIF9fXyAgfEAKfCAoICAgKSB8QAp8ICkgICAoIHxACnwvICAgICBcfEAKICAgICAgICAgQEAKIF9fX19fXyAgQAooICBfX18gXCBACnwgKCAgICkgKUAKfCAoX18vIC8gQAp8ICBfXyAoICBACnwgKCAgXCBcIEAKfCApX19fKSApQAp8LyBcX19fLyBACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgX19fXyBcQAp8ICggICAgXC9ACnwgfCAgICAgIEAKfCB8ICAgICAgQAp8IHwgICAgICBACnwgKF9fX18vXEAKKF9fX19fX18vQAogICAgICAgICBAQAogX19fX19fICBACiggIF9fICBcIEAKfCAoICBcICApQAp8IHwgICApIHxACnwgfCAgIHwgfEAKfCB8ICAgKSB8QAp8IChfXy8gIClACihfX19fX18vIEAKICAgICAgICAgQEAKIF9fX19fX18gQAooICBfX19fIFxACnwgKCAgICBcL0AKfCAoX18gICAgQAp8ICBfXykgICBACnwgKCAgICAgIEAKfCAoX19fXy9cQAooX19fX19fXy9ACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgX19fXyBcQAp8ICggICAgXC9ACnwgKF9fICAgIEAKfCAgX18pICAgQAp8ICggICAgICBACnwgKSAgICAgIEAKfC8gICAgICAgQAogICAgICAgICBAQAogX19fX19fXyBACiggIF9fX18gXEAKfCAoICAgIFwvQAp8IHwgICAgICBACnwgfCBfX19fIEAKfCB8IFxfICApQAp8IChfX18pIHxACihfX19fX19fKUAKICAgICAgICAgQEAKICAgICAgICAgQAp8XCAgICAgL3xACnwgKSAgICggfEAKfCAoX19fKSB8QAp8ICBfX18gIHxACnwgKCAgICkgfEAKfCApICAgKCB8QAp8LyAgICAgXHxACiAgICAgICAgIEBACl9fX19fX19fX0AKXF9fICAgX18vQAogICApICggICBACiAgIHwgfCAgIEAKICAgfCB8ICAgQAogICB8IHwgICBACl9fXykgKF9fX0AKXF9fX19fX18vQAogICAgICAgICBAQApfX19fX19fX19AClxfXyAgICBfL0AKICAgKSAgKCAgQAogICB8ICB8ICBACiAgIHwgIHwgIEAKICAgfCAgfCAgQAp8XF8pICApICBACihfX19fLyAgIEAKICAgICAgICAgQEAKIF8gICAgICAgQAp8IFwgICAgL1xACnwgIFwgIC8gL0AKfCAgKF8vIC8gQAp8ICAgXyAoICBACnwgICggXCBcIEAKfCAgLyAgXCBcQAp8Xy8gICAgXC9ACiAgICAgICAgIEBACiBfICAgICAgIEAKKCBcICAgICAgQAp8ICggICAgICBACnwgfCAgICAgIEAKfCB8ICAgICAgQAp8IHwgICAgICBACnwgKF9fX18vXEAKKF9fX19fX18vQAogICAgICAgICBAQAogX19fX19fXyBACiggICAgICAgKUAKfCAoKSAoKSB8QAp8IHx8IHx8IHxACnwgfChfKXwgfEAKfCB8ICAgfCB8QAp8ICkgICAoIHxACnwvICAgICBcfEAKICAgICAgICAgQEAKIF8gICAgICAgQAooICggICAgL3xACnwgIFwgICggfEAKfCAgIFwgfCB8QAp8IChcIFwpIHxACnwgfCBcICAgfEAKfCApICBcICB8QAp8LyAgICApXylACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgX19fICApQAp8ICggICApIHxACnwgfCAgIHwgfEAKfCB8ICAgfCB8QAp8IHwgICB8IHxACnwgKF9fXykgfEAKKF9fX19fX18pQAogICAgICAgICBAQAogX19fX19fXyBACiggIF9fX18gKUAKfCAoICAgICl8QAp8IChfX19fKXxACnwgIF9fX19fKUAKfCAoICAgICAgQAp8ICkgICAgICBACnwvICAgICAgIEAKICAgICAgICAgQEAKIF9fX19fX18gQAooICBfX18gIClACnwgKCAgICkgfEAKfCB8ICAgfCB8QAp8IHwgICB8IHxACnwgfCAvXHwgfEAKfCAoX1wgXCB8QAooX19fX1wvXylACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgX19fXyApQAp8ICggICAgKXxACnwgKF9fX18pfEAKfCAgICAgX18pQAp8IChcICggICBACnwgKSBcIFxfX0AKfC8gICBcX18vQAogICAgICAgICBAQAogX19fX19fXyBACiggIF9fX18gXEAKfCAoICAgIFwvQAp8IChfX19fXyBACihfX19fXyAgKUAKICAgICAgKSB8QAovXF9fX18pIHxAClxfX19fX19fKUAKICAgICAgICAgQEAKX19fX19fX19fQApcX18gICBfXy9ACiAgICkgKCAgIEAKICAgfCB8ICAgQAogICB8IHwgICBACiAgIHwgfCAgIEAKICAgfCB8ICAgQAogICApXyggICBACiAgICAgICAgIEBACiAgICAgICAgIEAKfFwgICAgIC98QAp8ICkgICAoIHxACnwgfCAgIHwgfEAKfCB8ICAgfCB8QAp8IHwgICB8IHxACnwgKF9fXykgfEAKKF9fX19fX18pQAogICAgICAgICBAQAogICAgICAgICBACnxcICAgICAvfEAKfCApICAgKCB8QAp8IHwgICB8IHxACiggKCAgICkgKUAKIFwgXF8vIC8gQAogIFwgICAvICBACiAgIFxfLyAgIEAKICAgICAgICAgQEAKICAgICAgICAgQAp8XCAgICAgL3xACnwgKSAgICggfEAKfCB8IF8gfCB8QAp8IHwoICl8IHxACnwgfHwgfHwgfEAKfCAoKSAoKSB8QAooX19fX19fXylACiAgICAgICAgIEBACiAgICAgICAgIEAKfFwgICAgIC98QAooIFwgICAvIClACiBcIChfKSAvIEAKICApIF8gKCAgQAogLyAoICkgXCBACiggLyAgIFwgKUAKfC8gICAgIFx8QAogICAgICAgICBAQAogICAgICAgICBACnxcICAgICAvfEAKKCBcICAgLyApQAogXCAoXykgLyBACiAgXCAgIC8gIEAKICAgKSAoICAgQAogICB8IHwgICBACiAgIFxfLyAgIEAKICAgICAgICAgQEAKIF9fX19fX18gQAovIF9fXyAgIClAClwvICAgKSAgfEAKICAgIC8gICApQAogICAvICAgLyBACiAgLyAgIC8gIEAKIC8gICAoXy9cQAooX19fX19fXy9ACiAgICAgICAgIEBACiBfX19fIEAKKCAgX18pQAp8ICggICBACnwgfCAgIEAKfCB8ICAgQAp8IHwgICBACnwgKF9fIEAKKF9fX18pQAogICAgICBAQAogICAgICAgQAovXCAgICAgQApcIFwgICAgQAogXCBcICAgQAogIFwgXCAgQAogICBcIFwgQAogICAgXCBcQAogICAgIFwvQAogICAgICAgQEAKIF9fX18gQAooX18gIClACiAgICkgfEAKICAgfCB8QAogICB8IHxACiAgIHwgfEAKIF9fKSB8QAooX19fXylACiAgICAgIEBACiAvXCBACigvXClACiAgICBACiAgICBACiAgICBACiAgICBACiAgICBACiAgICBACiAgICBAQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogX19fX18gQAooX19fX18pQEAKIF8gQAooIClACiBcfEAKICAgQAogICBACiAgIEAKICAgQAogICBACiAgIEBACiBfX19fX19fIEAKKCAgX19fICApQAp8ICggICApIHxACnwgKF9fXykgfEAKfCAgX19fICB8QAp8ICggICApIHxACnwgKSAgICggfEAKfC8gICAgIFx8QAogICAgICAgICBAQAogX19fX19fICBACiggIF9fXyBcIEAKfCAoICAgKSApQAp8IChfXy8gLyBACnwgIF9fICggIEAKfCAoICBcIFwgQAp8IClfX18pIClACnwvIFxfX18vIEAKICAgICAgICAgQEAKIF9fX19fX18gQAooICBfX19fIFxACnwgKCAgICBcL0AKfCB8ICAgICAgQAp8IHwgICAgICBACnwgfCAgICAgIEAKfCAoX19fXy9cQAooX19fX19fXy9ACiAgICAgICAgIEBACiBfX19fX18gIEAKKCAgX18gIFwgQAp8ICggIFwgIClACnwgfCAgICkgfEAKfCB8ICAgfCB8QAp8IHwgICApIHxACnwgKF9fLyAgKUAKKF9fX19fXy8gQAogICAgICAgICBAQAogX19fX19fXyBACiggIF9fX18gXEAKfCAoICAgIFwvQAp8IChfXyAgICBACnwgIF9fKSAgIEAKfCAoICAgICAgQAp8IChfX19fL1xACihfX19fX19fL0AKICAgICAgICAgQEAKIF9fX19fX18gQAooICBfX19fIFxACnwgKCAgICBcL0AKfCAoX18gICAgQAp8ICBfXykgICBACnwgKCAgICAgIEAKfCApICAgICAgQAp8LyAgICAgICBACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgX19fXyBcQAp8ICggICAgXC9ACnwgfCAgICAgIEAKfCB8IF9fX18gQAp8IHwgXF8gIClACnwgKF9fXykgfEAKKF9fX19fX18pQAogICAgICAgICBAQAogICAgICAgICBACnxcICAgICAvfEAKfCApICAgKCB8QAp8IChfX18pIHxACnwgIF9fXyAgfEAKfCAoICAgKSB8QAp8ICkgICAoIHxACnwvICAgICBcfEAKICAgICAgICAgQEAKX19fX19fX19fQApcX18gICBfXy9ACiAgICkgKCAgIEAKICAgfCB8ICAgQAogICB8IHwgICBACiAgIHwgfCAgIEAKX19fKSAoX19fQApcX19fX19fXy9ACiAgICAgICAgIEBACl9fX19fX19fX0AKXF9fICAgIF8vQAogICApICAoICBACiAgIHwgIHwgIEAKICAgfCAgfCAgQAogICB8ICB8ICBACnxcXykgICkgIEAKKF9fX18vICAgQAogICAgICAgICBAQAogXyAgICAgICBACnwgXCAgICAvXEAKfCAgXCAgLyAvQAp8ICAoXy8gLyBACnwgICBfICggIEAKfCAgKCBcIFwgQAp8ICAvICBcIFxACnxfLyAgICBcL0AKICAgICAgICAgQEAKIF8gICAgICAgQAooIFwgICAgICBACnwgKCAgICAgIEAKfCB8ICAgICAgQAp8IHwgICAgICBACnwgfCAgICAgIEAKfCAoX19fXy9cQAooX19fX19fXy9ACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgICAgICApQAp8ICgpICgpIHxACnwgfHwgfHwgfEAKfCB8KF8pfCB8QAp8IHwgICB8IHxACnwgKSAgICggfEAKfC8gICAgIFx8QAogICAgICAgICBAQAogXyAgICAgICBACiggKCAgICAvfEAKfCAgXCAgKCB8QAp8ICAgXCB8IHxACnwgKFwgXCkgfEAKfCB8IFwgICB8QAp8ICkgIFwgIHxACnwvICAgIClfKUAKICAgICAgICAgQEAKIF9fX19fX18gQAooICBfX18gIClACnwgKCAgICkgfEAKfCB8ICAgfCB8QAp8IHwgICB8IHxACnwgfCAgIHwgfEAKfCAoX19fKSB8QAooX19fX19fXylACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgX19fXyApQAp8ICggICAgKXxACnwgKF9fX18pfEAKfCAgX19fX18pQAp8ICggICAgICBACnwgKSAgICAgIEAKfC8gICAgICAgQAogICAgICAgICBAQAogX19fX19fXyBACiggIF9fXyAgKUAKfCAoICAgKSB8QAp8IHwgICB8IHxACnwgfCAgIHwgfEAKfCB8IC9cfCB8QAp8IChfXCBcIHxACihfX19fXC9fKUAKICAgICAgICAgQEAKIF9fX19fX18gQAooICBfX19fIClACnwgKCAgICApfEAKfCAoX19fXyl8QAp8ICAgICBfXylACnwgKFwgKCAgIEAKfCApIFwgXF9fQAp8LyAgIFxfXy9ACiAgICAgICAgIEBACiBfX19fX19fIEAKKCAgX19fXyBcQAp8ICggICAgXC9ACnwgKF9fX19fIEAKKF9fX19fICApQAogICAgICApIHxACi9cX19fXykgfEAKXF9fX19fX18pQAogICAgICAgICBAQApfX19fX19fX19AClxfXyAgIF9fL0AKICAgKSAoICAgQAogICB8IHwgICBACiAgIHwgfCAgIEAKICAgfCB8ICAgQAogICB8IHwgICBACiAgIClfKCAgIEAKICAgICAgICAgQEAKICAgICAgICAgQAp8XCAgICAgL3xACnwgKSAgICggfEAKfCB8ICAgfCB8QAp8IHwgICB8IHxACnwgfCAgIHwgfEAKfCAoX19fKSB8QAooX19fX19fXylACiAgICAgICAgIEBACiAgICAgICAgIEAKfFwgICAgIC98QAp8ICkgICAoIHxACnwgfCAgIHwgfEAKKCAoICAgKSApQAogXCBcXy8gLyBACiAgXCAgIC8gIEAKICAgXF8vICAgQAogICAgICAgICBAQAogICAgICAgICBACnxcICAgICAvfEAKfCApICAgKCB8QAp8IHwgXyB8IHxACnwgfCggKXwgfEAKfCB8fCB8fCB8QAp8ICgpICgpIHxACihfX19fX19fKUAKICAgICAgICAgQEAKICAgICAgICAgQAp8XCAgICAgL3xACiggXCAgIC8gKUAKIFwgKF8pIC8gQAogICkgXyAoICBACiAvICggKSBcIEAKKCAvICAgXCApQAp8LyAgICAgXHxACiAgICAgICAgIEBACiAgICAgICAgIEAKfFwgICAgIC98QAooIFwgICAvIClACiBcIChfKSAvIEAKICBcICAgLyAgQAogICApICggICBACiAgIHwgfCAgIEAKICAgXF8vICAgQAogICAgICAgICBAQAogX19fX19fXyBACi8gX19fICAgKUAKXC8gICApICB8QAogICAgLyAgIClACiAgIC8gICAvIEAKICAvICAgLyAgQAogLyAgIChfL1xACihfX19fX19fL0AKICAgICAgICAgQEAKICBfXyBACiAoIF8pQAogKSggIEAKLyB8ICBAClwgfCAgQAogKShfIEAKIChfXylACiAgICAgQAogICAgIEBACiBfIEAKKCApQAp8IHxACihfKUAKIF8gQAooIClACnwgfEAKKF8pQAogICBAQAogX18gIEAKKF8gKSBACiAgKSggQAogIHwgXEAKICB8IC9ACiBfKSggQAooX18pIEAKICAgICBACiAgICAgQEAKICBfICAgIEAKIC9fXF8vKUAKKC8gXF8vIEAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEAKICAgICAgIEBACiBfXyAgIF9fIEAKKF9fKSAoX18pQAogX19fX19fXyBACiggIF9fXyAgKUAKfCAoX19fKSB8QAp8ICBfX18gIHxACnwgKSAgICggfEAKfC8gICAgIFx8QAogICAgICAgICBAQAogX18gICBfXyBACihfXykgKF9fKUAKIF9fX19fX18gQAooICBfX18gIClACnwgKCAgICkgfEAKfCB8ICAgfCB8QAp8IChfX18pIHxACihfX19fX19fKUAKICAgICAgICAgQEAKIF9fICAgX18gQAooX18pIChfXylACiAgICAgICAgIEAKfFwgICAgIC98QAp8ICkgICAoIHxACnwgfCAgIHwgfEAKfCAoX19fKSB8QAooX19fX19fXylACiAgICAgICAgIEBACiBfXyAgIF9fIEAKKF9fKSAoX18pQAogX19fX19fXyBACiggIF9fXyAgKUAKfCAoX19fKSB8QAp8ICBfX18gIHxACnwgKSAgICggfEAKfC8gICAgIFx8QAogICAgICAgICBAQAogX18gICBfXyBACihfXykgKF9fKUAKIF9fX19fX18gQAooICBfX18gIClACnwgKCAgICkgfEAKfCB8ICAgfCB8QAp8IChfX18pIHxACihfX19fX19fKUAKICAgICAgICAgQEAKIF9fICAgX18gQAooX18pIChfXylACiAgICAgICAgIEAKfFwgICAgIC98QAp8ICkgICAoIHxACnwgfCAgIHwgfEAKfCAoX19fKSB8QAooX19fX19fXylACiAgICAgICAgIEBACiBfX19fX18gIEAKKCAgX19fIFwgQAp8IChfX18pIClACnwgIF9fXyAvIEAKfCAoX19fKVwgQAp8IHxcX19fLyBACnwgKSAgICAgIEAKfC8gICAgICAgQAogICAgICAgICBAQAo='
);

export default epic;