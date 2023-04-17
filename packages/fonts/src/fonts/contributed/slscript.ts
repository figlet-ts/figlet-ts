import { FontFile } from '../../FontFile';

const slscript = new FontFile(
    'slscript',
    'ZmxmMmEkIDYgNCAyMCAwIDExCgpCYXNlZCBvbiBjdXJzaXZlKDYpIGJ5IEphbiBXb2x0ZXIgICAgIDxqYW5jQGNyaW0uZWVjcy51bWljaC5lZHU+IG9uIDI0IEp1bCAxOTg1CkZpZ2xldC1pemVkIGFuZCAgICAgYnkgV2VuZGVsbCBIaWNrZW4gPHdoaWNrZW5AcGFyYXNvZnQuY29tPiAgICAgb24gIDUgTWFyIDE5OTQKICAgIEFkZGVkIG1pc3NpbmcgcHVuY3R1YXRpb24gYW5kIG51bWJlcnMKQW1tZW5kZWQgICAgICAgICAgICBieSBKZXJyYWQgUGllcmNlICA8anBpZXJjZUBjcGFuLm9yZz4gICAgICAgICBvbiAgOCBBdWcgMjAwMgogICAgVW5kZXJzY29yZSBhbmQgZGFzaCBoYXZlIGJlZW4gdXBkYXRlZCB0byBtb3JlIGNsb3NlbHkgbWF0Y2ggY3Vyc2l2ZSg2KQoKICAgICAgIFRoZSAgJ18nIGNoYXJhY3RlciBpcyB0cmVhdGVkIGluIGEgc3BlY2lhbCB3YXkuICBJdCBtYXkgYmUKICAgICAgIGluc2VydGVkIGluIHRoZSB0ZXh0IGFueXdoZXJlIHlvdSB3aXNoIHRvIGxlbmd0aGVuIGEgIGNvbi0KICAgICAgIG5lY3RpbmcgbGluZSBiZXR3ZWVuIHR3byBsZXR0ZXJzLgoKJCRACiQkQAokJEAKJCRACiQkQAokJEBACiAgICBACiAgIC9ACiAgLyBACiAnICBACm8gICBACiAgICBAQAogICBACm8gb0AKJyAnQAogICBACiAgIEAKICAgQEAKICAgLyAvQAogLS8tLy1ACi0vLS8tIEAKLyAvICAgQAogICAgICBACiAgICAgIEBACiAgLC0vLUAKIChfLyAgQAogIC8gKSBACi0vLScgIEAKICAgICAgQAogICAgICBAQAooKSAvQAogIC8gQAogLyAgQAovICgpQAogICAgQAogICAgQEAKICgpICBACiAvXCAgQAooICBYIEAKIFwvIFxACiAgICAgQAogICAgIEBACiBACm9ACidACiBACiBACiBAQAogIF8vQAogLyAgQAovICAgQAovICAgQAogICAgQAogICAgQEAKICAgL0AKICAgL0AKIF8vIEAKLyAgIEAKICAgIEAKICAgIEBACiAgICAgQAogXCAvIEAKLS1YLS1ACiAvIFwgQAogICAgIEAKICAgICBAQAogICAgIEAKICAgLyBACi0tLy0tQAogLyAgIEAKICAgICBACiAgICAgQEAKIEAKIEAKIEAKb0AKJ0AKIEBACiQkJEAKJCQkQAotLS1ACiQkJEAKJCQkQAokJEBACiBACiBACiBACm9ACiBACiBAQAogICAvQAogIC8gQAogLyAgQAovICAgQAogICAgQAogICAgQEAKICAgX18gQAogIC8gIClACiAvICAvIEAKKF9fLyAgQAogICAgICBACiAgICAgIEBACiAgX0AKICAvQAogLyBACi8gIEAKICAgQAogICBAQAogICBfXyBACiAgICAgKUAKIC4tLScgQAooX18gICBACiAgICAgIEAKICAgICAgQEAKICAgX18gQAogICAgIClACiAgIC0vIEAKX19fLyAgQAogICAgICBACiAgICAgIEBACiAgICAgQAogLyAgL0AKJy0tLyBACiAgLyAgQAogICAgIEAKICAgICBAQAogIF9fX0AKIC8gICBACictLS4gQApfX18pIEAKICAgICBACiAgICAgQEAKICAgIEAKICAvIEAKIC9fIEAKKF9fKUAKICAgIEAKICAgIEBACl9fX0AKICAvQAotLy1ACi8gIEAKICAgQAogICBAQAogIF9fIEAKICggIClACiAuLycgQAooX18pIEAKICAgICBACiAgICAgQEAKIF9fIEAKKF9fKUAKICAvIEAKIC8gIEAKICAgIEAKICAgIEBACiAgIEAKICAgQAogIG9ACiAgIEAKbyAgQAogICBAQAogICBACiAgIEAKICBvQAogICBACm8gIEAKJyAgQEAKIC9ACi8gQApcIEAKIFxACiAgQAogIEBACiAgIEAKICAgQAotLS1ACi0tLUAKICAgQAogICBAQApcIEAKIFxACiAvQAovIEAKICBACiAgQEAKICBfXyBACiAgX18pQAogLyAgIEAKbyAgICBACiAgICAgQAogICAgIEBACiAgICAgQAogIF8gIEAKIC9vXCBACihfX19fQAogICAgIEAKICAgICBAQAogICBfXyBACiAgLyAgKUAKIC8tLS8gQAovICAoXyBACiAgICAgIEAKICAgICAgQEAKICAgX18gQAogIC8gIClACiAvLS08IEAKL19fXy9fQAogICAgICBACiAgICAgIEBACiAgIF9fIEAKICAvICApQAogLyAgICBACihfXy8gIEAKICAgICAgQAogICAgICBAQAogICBfXyBACiAgLyAgKUAKIC8gIC8gQAovX18vXyBACiAgICAgIEAKICAgICAgQEAKICAgX18gQAogIC8gIGBACiAvLS0gIEAKKF9fXywgQAogICAgICBACiAgICAgIEBACiAgIF9fX19fQAogICAgLyAgJ0AKICwtLy0sICBACihfLyAgICAgQAogICAgICAgIEAKICAgICAgICBAQAogICgpICAsQAogIC9gLSd8QAogLyAgIC8gQAovX18tPF8gQAogICAgICAgQAogICAgICAgQEAKIF8gICAgLEAKJyApICAvIEAKIC8tLS8gIEAKLyAgKF8gIEAKICAgICAgIEAKICAgICAgIEBACiAgICAgXyBACiAgICB8IClACiwtLS18LyBACiBcXy8gXF9ACiAgICAgICBACiAgICAgICBAQAogIF9fXyBACiAoICAgPkAKICBfXy9fQAogLyAvICBACjxfLyAgIEAKICAgICAgQEAKIF8gICAsQAonICkgLyBACiAvLTwgIEAKLyAgICkgQAogICAgICBACiAgICAgIEBACiAgIF9ACiBfLy9ACiAvICBACi9fX19ACiAgICBACiAgICBAQAogXyBfIF8gQAonICkgKSApQAogLyAvIC8gQAovICcgKF8gQAogICAgICAgQAogICAgICAgQEAKIF8gX18gQAonICkgIClACiAvICAvIEAKLyAgKF8gQAogICAgICBACiAgICAgIEBACiAgIF9fIEAKICAvICcpQAogLyAgLyBACihfXy8gIEAKICAgICAgQAogICAgICBAQAogXyBfXyBACicgKSAgKUAKIC8tLScgQAovICAgICBACiAgICAgIEAKICAgICAgQEAKICAgX18gQAogIC8gIClACiAvICAvIEAKKF9cLyAgQAogICBgICBACiAgICAgIEBACiBfIF9fIEAKJyApICApQAogLy0tJyBACi8gIFxfIEAKICAgICAgQAogICAgICBAQAogICgpICBACiAgL1wgIEAKIC8gICkgQAovX18vX19ACiAgICAgIEAKICAgICAgQEAKICBfX19fX19ACiAgICAvICAgQAogLS0vICAgIEAKKF8vICAgICBACiAgICAgICAgQAogICAgICAgIEBACiBfICAgIF9fQAonICkgIC8gIEAKIC8gIC8gICBACihfXy8gICAgQAogICAgICAgIEAKICAgICAgICBAQAogXyAgICBfQAonICkgIC8gQAogKCAgLyAgQAogIFwvICAgQAogICAgICAgQAogICAgICAgQEAKIF8gICAgIF9ACicgKSAgIC8gQAogLyAvIC8gIEAKKF8oXy8gICBACiAgICAgICAgQAogICAgICAgIEBACiBfICAgLEAKJyBcIC8gQAogICBYICBACiAgLyBcX0AKICAgICAgQAogICAgICBAQAogXyAgICAsQAonICkgIC8gQAogLyAgLyAgQAooX18vXyAgQAogLy8gICAgQAooLyAgICAgQEAKX19fQAogIC9ACiAvIEAKL19fQAogICBACiAgIEBACiAgIF9ACiAgLyBACiAvICBACi9fICBACiAgICBACiAgICBAQApcICAgQAogXCAgQAogIFwgQAogICBcQAogICAgQAogICAgQEAKICAgX0AKICAgL0AKICAvIEAKXy8gIEAKICAgIEAKICAgIEBACi9cQAogIEAKICBACiAgQAogIEAKICBAQAogQAogQAogQApfQAogQAogQEAKIEAKb0AKYEAKIEAKIEAKIEBACiAgICAgQAogICAgIEAKIF9fLiBACihfL3xfQAogICAgIEAKICAgICBAQAogICAgQAogIC8gQAogL19fQAovXykgQAogICAgQAogICAgQEAKICAgQAogICBACiBfLkAKKF9fQAogICBACiAgIEBACiAgICAgQAogICAgL0AKIF9fLyBACihfL18gQAogICAgIEAKICAgICBAQAogICBACiAgIEAKIF8gQAo8L19ACiAgIEAKICAgQEAKICAgICAgQAogICAgLylACiAgIC8vIEAKICAvL18gQAogLz4gICBACjwvICAgIEBACiAgICBACiAgICBACiBfLCBACihfKV9ACiAvfCBACnwvICBAQAogICAgQAogIC8gQAogL18gQAovIC9fQAogICAgQAogICAgQEAKICBACiAgQAogb0AKPF9ACiAgQAogIEBACiAgICAgQAogICAgIEAKICAgIG9ACiAgIC9fQAogIC8gIEAKLScgICBAQAogICAgQAogIC8gQAogL18gQAovIDxfQAogICAgQAogICAgQEAKICAgX0AKICAvL0AKIC8vIEAKPC9fIEAKICAgIEAKICAgIEBACiAgICAgICAgQAogICAgICAgIEAKIF9fX19fXyBACi8gLyAvIDxfQAogICAgICAgIEAKICAgICAgICBAQAogICAgICBACiAgICAgIEAKIF9fX18gQAovIC8gPF9ACiAgICAgIEAKICAgICAgQEAKICAgQAogICBACiBfX0AKKF8pQAogICBACiAgIEBACiAgICAgIEAKICAgICAgQAogICBfICBACiAgL18pX0AKIC8gICAgQAonICAgICBAQAogICAgQAogICAgQAogXywgQAooXylfQAogLz4gQAp8LyAgQEAKICAgIEAKICAgIEAKIF9fIEAKLyAoX0AKICAgIEAKICAgIEBACiAgICBACiAgICBACiBfICBACi9fKV9ACiAgICBACiAgICBAQAogICAgQAogXy9fQAogLyAgQAo8X18gQAogICAgQAogICAgQEAKICAgIEAKICAgIEAKIC4gLkAKKF8vX0AKICAgIEAKICAgIEBACiAgIEAKICAgQAosIF9AClwvIEAKICAgQAogICBAQAogICAgICBACiAgICAgIEAKICwgLCAsQAooXyhfL19ACiAgICAgIEAKICAgICAgQEAKICAgICBACiAgICAgQAogXy4sIEAKLyAvXF9ACiAgICAgQAogICAgIEBACiAgICAgIEAKICAgICAgQAogX18gICxACi8gKF8vX0AKICAgLyAgQAogICcgICBAQAogICAgIEAKICAgICBACiBfXy4gQAovICB8X0AKICAofCBACiAgICAgQEAKICBfL0AKXy8gIEAKLyAgIEAKLyAgIEAKICAgIEAKICAgIEBACiAgIC9ACiAgLyBACiAvICBACi8gICBACiAgICBACiAgICBAQAogICAvIEAKICAgL19ACiBfLyAgQAovICAgIEAKICAgICBACiAgICAgQEAKIF8gICBACi8gXF8vQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEBACiAgb19fb0AKICAvICApQAogLy0tLyBACi8gIChfIEAKICAgICAgQAogICAgICBAQAogIG9fX29ACiAgLyAnKUAKIC8gIC8gQAooX18vICBACiAgICAgIEAKICAgICAgQEAKIF9vICBvX19ACicgKSAgLyAgQAogLyAgLyAgIEAKKF9fLyAgICBACiAgICAgICAgQAogICAgICAgIEBACiAgICAgQAogbyBvIEAKIF9fLiBACihfL3xfQAogICAgIEAKICAgICBAQAogICBACm8gb0AKIF9fQAooXylACiAgIEAKICAgQEAKICAgIEAKIG8gb0AKIC4gLkAKKF8vX0AKICAgIEAKICAgIEBACiAgICBfXyBACiAgIC8gIClACiAgLy0tPCBACl8vX19fL19ACi8gICAgICBACiAgICAgICBAQAo='
);

export default slscript;
