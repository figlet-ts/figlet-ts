import { FontFile } from '../../FontFile';

const bulbhead = new FontFile(
    'bulbhead',
    'ZmxmMmEkIDQgNCA5OSAwIDE3CkJ1bGJoZWFkIGJ5IEplZiBQb3NrYW56ZXIsIDIzanVuOTQKRmlnbGV0IHJlbGVhc2UgMi4wIC0tIEF1Z3VzdCA1LCAxOTkzCiBfX19fICBfXyAgX18gIF9fICAgIF9fX18gIF8gICBfICBfX19fICAgIF9fICAgIF9fX18KKCAgXyBcKCAgKSggICkoICApICAoICBfIFwoIClfKCApKCBfX18pICAvX19cICAoICBfIFwKICkgXyA8ICkoX18pKCAgKShfXyAgKSBfIDwgKSBfICggIClfX18pIC8oX18pXCAgKShfKSApCihfX19fLyhfX19fX18pKF9fX18pKF9fX18vKF8pIChfKShfX19fKShfXykoX18pKF9fX18vCgpFeHBsYW5hdGlvbiBvZiBmaXJzdCBsaW5lOgpmbGYyIC0gIm1hZ2ljIG51bWJlciIgZm9yIGZpbGUgaWRlbnRpZmljYXRpb24KYSAgICAtIHNob3VsZCBhbHdheXMgYmUgYGEnLCBmb3Igbm93CiQgICAgLSB0aGUgImhhcmRibGFuayIgLS0gcHJpbnRzIGFzIGEgYmxhbmssIGJ1dCBjYW4ndCBiZSBzbXVzaGVkCjQgICAgLSBoZWlnaHQgb2YgYSBjaGFyYWN0ZXIKNCAgICAtIGhlaWdodCBvZiBhIGNoYXJhY3Rlciwgbm90IGluY2x1ZGluZyBkZXNjZW5kZXJzCjk5ICAgLSBtYXggbGluZSBsZW5ndGggKGV4Y2x1ZGluZyBjb21tZW50IGxpbmVzKSArIGEgZnVkZ2UgZmFjdG9yCjAgICAgLSBkZWZhdWx0IHNtdXNobW9kZSBmb3IgdGhpcyBmb250IChsaWtlICItbSAwIiBvbiBjb21tYW5kIGxpbmUpCjEzICAgLSBudW1iZXIgb2YgY29tbWVudCBsaW5lcwoKJCRACiQkQAokJEAKJCRAQAovXEAKKShAClwvQAooKUBACnx8QAogIEAKICBACiAgQEAKIHwgfCBACi18LXwtQAotfC18LUAKIHwgfCBAQAogX3xfIEAKLyB8XylAClxffCBcQAooX3xfL0BACiBfICBfICBACihfKS8gKSBACiAgLyAvXyBACiAoXy8oXylAQAogIF8gIEAKICggKSBACiAvX1wvQAooX18vXEBACi9ACiBACiBACiBAQAogIF8gQAogLyApQAooICggQAogXF8pQEAKIF8gIEAKKCBcIEAKICkgKUAKKF8vIEBACiAgIEAKXHwvQAovfFxACiAgIEBACiAgIF8gICBACiBffCB8XyBACihfICAgXylACiAgfF98ICBAQAogIEAKICBACigpQAovIEBACiAgICAgQAogX19fIEAKKF9fXylACiAgICAgQEAKICBACiAgQAogIEAKKClAQAogICBfIEAKICAvIClACiAvIC8gQAooXy8gIEBACiAgX19fICBACiAvIF8gXCBACiggKF8pIClACiBcX19fLyBAQAogIF9fIEAKIC8gIClACiAgKSggQAogKF9fKUBACiBfX18gIEAKKF9fIFwgQAogLyBfLyBACihfX19fKUBACiBfX18gQAooX18gKUAKIChfIFxACihfX18vQEAKICBfXyAgQAogLy4gfCBACihfICBfKUAKICAoXykgQEAKIF9fXyBACnwgX18pQAp8X18gXEAKKF9fXy9AQAogIF8gIEAKIC8gKSBACi8gXyBcQApcX19fL0BACiBfX18gQAooX18gKUAKIC8gLyBACihfLyAgQEAKIF9fXyBACiggXyApQAovIF8gXEAKXF9fXy9AQAogX19fIEAKLyBfIFxAClxfICAvQAogKF8vIEBACiAgQAooKUAKICBACigpQEAKKClACiAgQAooKUAKLyBAQAogIF9fQAogLyAvQAo8IDwgQAogXF9cQEAKIF9fXyBACihfX18pQAogX19fIEAKKF9fXylAQApfXyAgQApcIFwgQAogPiA+QAovXy8gQEAKIF9fXyBACihfXyApQAogKF8vIEAKIChfKSBAQAogIF9fIEAKIC8gIFxACnwgKCkvQAogXF9fIEBACiAgIF9fICAgQAogIC9fX1wgIEAKIC8oX18pXCBACihfXykoX18pQEAKIF9fX18gQAooICBfIFxACiApIF8gPEAKKF9fX18vQEAKICBfX18gQAogLyBfXylACiggKF9fIEAKIFxfX18pQEAKIF9fX18gIEAKKCAgXyBcIEAKICkoXykgKUAKKF9fX18vIEBACiBfX19fIEAKKCBfX18pQAogKV9fKSBACihfX19fKUBACiBfX19fIEAKKCBfX18pQAogKV9fKSBACihfXykgIEBACiAgX19fIEAKIC8gX18pQAooIChfLS5ACiBcX19fL0BACiBfICAgXyBACiggKV8oIClACiApIF8gKCBACihfKSAoXylAQAogX19fXyBACihfICBfKUAKIF8pKF8gQAooX19fXylAQAogIF9fX18gQAogKF8gIF8pQAouLV8pKCAgQApcX19fXykgQEAKIF8gIF8gQAooICkvIClACiApICAoIEAKKF8pXF8pQEAKIF9fICAgQAooICApICBACiApKF9fIEAKKF9fX18pQEAKIF9fICBfXyBACiggIFwvICApQAogKSAgICAoIEAKKF8vXC9cXylAQAogXyAgXyBACiggXCggKUAKICkgICggQAooXylcXylAQAogX19fX18gQAooICBfICApQAogKShfKSggQAooX19fX18pQEAKIF9fX18gQAooICBfIFxACiApX19fL0AKKF9fKSAgQEAKIF9fX19fIEAKKCAgXyAgKUAKICkoXykoIEAKKF9fXy9cXEBACiBfX19fIEAKKCAgXyBcQAogKSAgIC9ACihfKVxfKUBACiBfX18gQAovIF9fKUAKXF9fIFxACihfX18vQEAKIF9fX18gQAooXyAgXylACiAgKSggIEAKIChfXykgQEAKIF9fICBfXyBACiggICkoICApQAogKShfXykoIEAKKF9fX19fXylAQAogXyAgXyBACiggXC8gKUAKIFwgIC8gQAogIFwvICBAQAogXyAgICBfIEAKKCBcL1wvIClACiApICAgICggQAooX18vXF9fKUBACiBfICBfIEAKKCBcLyApQAogKSAgKCBACihfL1xfKUBACiBfICBfIEAKKCBcLyApQAogXCAgLyBACiAoX18pIEBACiBfX19fIEAKKF8gICApQAogLyAvXyBACihfX19fKUBACiBfX0AKfCAgQAp8ICBACnxfX0BACiBfICAgQAooIFwgIEAKIFwgXCBACiAgXF8pQEAKX18gQAogIHxACiAgfEAKX198QEAKIC8gXCBACihfXl8pQAogICAgIEAKICAgICBAQAogICAgIEAKICAgICBACiBfX18gQAooX19fKUBAClxACiBACiBACiBAQAogICBfXyAgIEAKICAvX19cICBACiAvKF9fKVwgQAooX18pKF9fKUBACiBfX19fIEAKKCAgXyBcQAogKSBfIDxACihfX19fL0BACiAgX19fIEAKIC8gX18pQAooIChfXyBACiBcX19fKUBACiBfX19fICBACiggIF8gXCBACiApKF8pIClACihfX19fLyBAQAogX19fXyBACiggX19fKUAKIClfXykgQAooX19fXylAQAogX19fXyBACiggX19fKUAKIClfXykgQAooX18pICBAQAogIF9fXyBACiAvIF9fKUAKKCAoXy0uQAogXF9fXy9AQAogXyAgIF8gQAooIClfKCApQAogKSBfICggQAooXykgKF8pQEAKIF9fX18gQAooXyAgXylACiBfKShfIEAKKF9fX18pQEAKICBfX19fIEAKIChfICBfKUAKLi1fKSggIEAKXF9fX18pIEBACiBfICBfIEAKKCApLyApQAogKSAgKCBACihfKVxfKUBACiBfXyAgIEAKKCAgKSAgQAogKShfXyBACihfX19fKUBACiBfXyAgX18gQAooICBcLyAgKUAKICkgICAgKCBACihfL1wvXF8pQEAKIF8gIF8gQAooIFwoIClACiApICAoIEAKKF8pXF8pQEAKIF9fX19fIEAKKCAgXyAgKUAKICkoXykoIEAKKF9fX19fKUBACiBfX19fIEAKKCAgXyBcQAogKV9fXy9ACihfXykgIEBACiBfX19fXyBACiggIF8gIClACiApKF8pKCBACihfX18vXFxAQAogX19fXyBACiggIF8gXEAKICkgICAvQAooXylcXylAQAogX19fIEAKLyBfXylAClxfXyBcQAooX19fL0BACiBfX19fIEAKKF8gIF8pQAogICkoICBACiAoX18pIEBACiBfXyAgX18gQAooICApKCAgKUAKICkoX18pKCBACihfX19fX18pQEAKIF8gIF8gQAooIFwvIClACiBcICAvIEAKICBcLyAgQEAKIF8gICAgXyBACiggXC9cLyApQAogKSAgICAoIEAKKF9fL1xfXylAQAogXyAgXyBACiggXC8gKUAKICkgICggQAooXy9cXylAQAogXyAgXyBACiggXC8gKUAKIFwgIC8gQAogKF9fKSBAQAogX19fXyBACihfICAgKUAKIC8gL18gQAooX19fXylAQAogLC1ACl98IEAKIHwgQAogYC1AQAovXEAKfHxACnx8QApcL0BACi0uIEAKIHxfQAogfCBACi0nIEBACiAgIEAKL1wvQAogICBACiAgIEBACiBACiBACiBACiBAQAogQAogQAogQAogQEAKIEAKIEAKIEAKIEBACiBACiBACiBACiBAQAogQAogQAogQAogQEAKIEAKIEAKIEAKIEBACiBACiBACiBACiBAQAo='
);

export default bulbhead;