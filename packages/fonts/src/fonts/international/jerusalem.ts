import { FontFile } from '../../FontFile';

const jerusalem = new FontFile(
    'jerusalem',
    'ZmxmMmEkIDcgNiAxMDAgMTUgMzEgMQpKZXJ1c2FsZW0gYnkgR2VkYWxpYWggRnJpZWRlbmJlcmcgLSBiYXNlZCBvbiBTdGFuZGFyZCBieSBHLiBDaGFwcGVsbCAmIElhbiBDaGFpClF1ZXN0aW9ucyBhbmQgY29tbWVudHMgcmVnYXJkaW5nIGplcnVzYWxlbS5mbGYgdG8gZ2ZyaWVkZW5Abnl4LmNzLmR1LmVkdQpNb2RpZmllZCBmb3IgZmlnbGV0IDIuMSBieSBHbGVubiBDaGFwcGVsbCAxNiBEZWMgMTk5MwpEYXRlOiAxMyBGZWIgMTk5NAoKRXhwbGFuYXRpb24gb2YgZmlyc3QgbGluZToKZmxmMiAtICJtYWdpYyBudW1iZXIiIGZvciBmaWxlIGlkZW50aWZpY2F0aW9uCmEgICAgLSBzaG91bGQgYWx3YXlzIGJlIGBhJywgZm9yIG5vdwokICAgIC0gdGhlICJoYXJkYmxhbmsiIC0tIHByaW50cyBhcyBhIGJsYW5rLCBidXQgY2FuJ3QgYmUgc211c2hlZAo3ICAgIC0gaGVpZ2h0IG9mIGEgY2hhcmFjdGVyCjYgICAgLSBoZWlnaHQgb2YgYSBjaGFyYWN0ZXIsIG5vdCBpbmNsdWRpbmcgZGVzY2VuZGVycwoxMDAgIC0gIG1heCBsaW5lIGxlbmd0aCAoZXhjbHVkaW5nIGNvbW1lbnQgbGluZXMpICsgYSBmdWRnZSBmYWN0b3IKMTUgICAtIGRlZmF1bHQgc211c2htb2RlIGZvciB0aGlzIGZvbnQKMzEgICAtIG51bWJlciBvZiBjb21tZW50IGxpbmVzCjEgICAgLSBwcmludCByaWdodC10by1sZWZ0IChmaWdsZXQgMi4xIG9yIGxhdGVyIG9ubHkpCgpIZWJyZXcga2V5Ym9hcmQgbWFwczoKCkFsbCBjYXBpdGFsIGxldHRlcnMgcHJpbnQgdGhlIGVuZ2xpc2ggY2hhcmFjdGVyIGZvciB0aGF0IGtleS4gIEFsbCBudW1iZXJzIAphbmQgc3ltYm9scyBhcmUgdGhlIHNhbWUgaW4gaW4gSGVicmV3L0VuZ2xpc2ggZXhjZXB0IGZvciB0aG9zZSBzaG93biBoZXJlLgpUaGUgKiBzeW1ib2wgcHJpbnRzIGFzIGEgSmV3aXNoIHN0YXIgKFN0YXIgb2YgRGF2aWQpLgpXaGlsZSBpbiBmaWdsZXQsIHR5cGUgfiBvbiBhIGxpbmUgYnkgaXRzZWxmIHRvIHNlZSB0aGlzIGxpc3Q6CgphbGVwaCAgID0gdCB8IHpheWluICAgID0geiB8IGxhbWVkICAgPSBrIHwgYXlpbiAgICA9IGcgfCBzaGluL3NpbiAgPSBhCmJldC92ZXQgPSBjIHwgY2hldCAgICAgPSBqIHwgbWVtICAgICA9IG4gfCBwZXkvZmV5ID0gcCB8IHRhZi9zYWYgICA9ICwKZ2ltbWVsICA9IGQgfCB0ZXQgICAgICA9IHkgfCBmaW5hbCAiID0gbyB8IGZpbmFsICIgPSA7IHwgLChjb21tYSkgID0gJwpkYWxlZCAgID0gcyB8IHl1ZCAgICAgID0gaCB8IG51biAgICAgPSBiIHwgdHphYWRpICA9IG0gfCAuKHBlcmlvZCkgPSAvCmhheSAgICAgPSB2IHwga2FmL2NoYWYgPSBmIHwgZmluYWwgIiA9IGkgfCBmaW5hbCAiID0gLiB8IDsgICAgICAgICA9IGAKdmF2ICAgICA9IHUgfCBmaW5hbCAiICA9IGwgfCBzYW1la2ggID0geCB8IGt1ZiAgICAgPSBlIHwgLyAgICAgICAgID0gcQpUaGUgYXN0ZXJpc2sgKCopIGlzIGEgU3RhciBvZiBEYXZpZCAgICAgIHwgcmVzaCAgICA9IHIgfCAnKGFwb3N0LikgPSB3CgokQAokQAokQAokQAokQAokQAokQEAKICAgQAogXyBACnwgfEAKfCB8QAp8X3xACihfKUAKICAgQEAKICAgICBACiBfIF8gQAooIHwgKUAKIFYgViBACiAgJCAgQAogICQgIEAKICAgICBAQAogICAgICAgICAgQAogICBfICBfICAgQAogX3wgfHwgfF8gQAp8XyAgLi4gIF98QAp8XyAgICAgIF98QAogIHxffHxffCAgQAogICAgICAgICAgQEAKICAgICBACiAgXyAgQAogfCB8IEAKLyBfXylAClxfXyBcQAooICAgL0AKIHxffCBAQAogICAgICBACiBfICBfX0AKKF8pLyAvQAogIC8gLyBACiAvIC9fIEAKL18vKF8pQAogICAgICBAQAogICAgICAgIEAKICBfX18gICBACiAoIF8gKSAgQAogLyBfIFwvXEAKfCAoXz4gIDxACiBcX19fL1wvQAogICAgICAgIEBACiAgIEAKICAgQAogICBACiAgIEAKIF8gQAooIClACnwvIEBACiAgICBACiAgX19ACiAvIC9ACnwgfCBACnwgfCBACnwgfCBACiBcX1xAQAogICAgQApfXyAgQApcIFwgQAogfCB8QAogfCB8QAogfCB8QAovXy8gQEAKICAgICAgQAogICAgICBACl9fL1xfX0AKXCAgICAvQAovXyAgX1xACiAgXC8gIEAKICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKICAgXyAgIEAKIF98IHxfIEAKfF8gICBffEAKICB8X3wgIEAKICAgICAgIEBACiAgICAgICAgICBACiAgIF9fX19fXyBACiAgfCAgX18gIHxACiAgfCB8ICB8IHxACiBffCB8ICB8IHxACnxfX198ICB8X3xACiAgICAgICAgICBAQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogX19fX18gQAp8X19fX198QAogICAkICAgQAogICAgICAgQEAKICAgICAgICBACiBfXyAgIF8gQAp8LiB8IHwgfEAKIHwgfCAvLyBACiB8IHwvLyAgQAogfCB8ICAgIEAKIHxffCAgICBAQAogICBACiAgIEAKICAgQAogICBACiBfIEAKKF8pQAogICBAQAogICAgICAgQAogIF9fXyAgQAogLyBfIFwgQAp8IHwgfCB8QAp8IHxffCB8QAogXF9fXy8gQAogICAgICAgQEAKICAgQAogXyBACi8gfEAKfCB8QAp8IHxACnxffEAKICAgQEAKICAgICAgIEAKIF9fX18gIEAKfF9fXyBcIEAKICBfXykgfEAKIC8gX18vIEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnxfX18gLyBACiAgfF8gXCBACiBfX18pIHxACnxfX19fLyBACiAgICAgICBAQAogICAgICAgIEAKIF8gIF8gICBACnwgfHwgfCAgQAp8IHx8IHxfIEAKfF9fICAgX3xACiAgIHxffCAgQAogICAgICAgIEBACiAgICAgICBACiBfX19fICBACnwgX19ffCBACnxfX18gXCBACiBfX18pIHxACnxfX19fLyBACiAgICAgICBAQAogICAgICAgQAogIF9fICAgQAogLyAvXyAgQAp8ICdfIFwgQAp8IChfKSB8QAogXF9fXy8gQAogICAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfF9fXyAgfEAKICAgLyAvIEAKICAvIC8gIEAKIC9fLyAgIEAKICAgICAgIEBACiAgICAgICBACiAgX19fICBACiAoIF8gKSBACiAvIF8gXCBACnwgKF8pIHxACiBcX19fLyBACiAgICAgICBAQAogICAgICAgQAogIF9fXyAgQAogLyBfIFwgQAp8IChfKSB8QAogXF9fLCB8QAogICAvXy8gQAogICAgICAgQEAKICAgQAogICBACiBfIEAKKF8pQAogXyBACihfKUAKICAgQEAKICAgICAgICBACiBfX19fX18gQAp8ICBfXyAgfEAKfCB8XyB8IHxACnxfX198fCB8QAogICAgIHwgfEAKICAgICB8X3xAQAogICAgQAogIF9fQAogLyAvQAovIC8gQApcIFwgQAogXF9cQAogICAgQEAKICAgICAgIEAKICAgICAgIEAKIF9fX19fIEAKfF9fX19ffEAKfF9fX19ffEAKICAgJCAgIEAKICAgICAgIEBACiAgICBACl9fICBAClwgXCBACiBcIFxACiAvIC9ACi9fLyBACiAgICBAQAogICAgIEAKIF9fXyBACnxfXyBcQAogIC8gL0AKIHxffCBACiAoXykgQAogICAgIEBACiAgICAgICAgIEAKICAgX19fXyAgQAogIC8gX18gXCBACiAvIC8gX2AgfEAKfCB8IChffCB8QAogXCBcX18sX3xACiAgXF9fX18vIEBACiAgICAgICAgIEAKICAgIF8gICAgQAogICAvIFwgICBACiAgLyBfIFwgIEAKIC8gX19fIFwgQAovXy8gICBcX1xACiAgICAgICAgIEBACiAgICAgICBACiBfX19fICBACnwgX18gKSBACnwgIF8gXCBACnwgfF8pIHxACnxfX19fLyBACiAgICAgICBAQAogICAgICAgQAogIF9fX18gQAogLyBfX198QAp8IHwgICAgQAp8IHxfX18gQAogXF9fX198QAogICAgICAgQEAKICAgICAgIEAKIF9fX18gIEAKfCAgXyBcIEAKfCB8IHwgfEAKfCB8X3wgfEAKfF9fX18vIEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnwgX19fX3xACnwgIF98ICBACnwgfF9fXyBACnxfX19fX3xACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8ICBfX198QAp8IHxfICAgQAp8ICBffCAgQAp8X3wgICAgQAogICAgICAgQEAKICAgICAgIEAKICBfX19fIEAKIC8gX19ffEAKfCB8ICBfIEAKfCB8X3wgfEAKIFxfX19ffEAKICAgICAgIEBACiAgICAgICBACiBfICAgXyBACnwgfCB8IHxACnwgfF98IHxACnwgIF8gIHxACnxffCB8X3xACiAgICAgICBAQAogICAgIEAKIF9fXyBACnxfIF98QAogfCB8IEAKIHwgfCBACnxfX198QAogICAgIEBACiAgICAgICBACiAgICAgXyBACiAgICB8IHxACiBfICB8IHxACnwgfF98IHxACiBcX19fLyBACiAgICAgICBAQAogICAgICBACiBfICBfX0AKfCB8LyAvQAp8ICcgLyBACnwgLiBcIEAKfF98XF9cQAogICAgICBAQAogICAgICAgQAogXyAgICAgQAp8IHwgICAgQAp8IHwgICAgQAp8IHxfX18gQAp8X19fX198QAogICAgICAgQEAKICAgICAgICBACiBfXyAgX18gQAp8ICBcLyAgfEAKfCB8XC98IHxACnwgfCAgfCB8QAp8X3wgIHxffEAKICAgICAgICBAQAogICAgICAgQAogXyAgIF8gQAp8IFwgfCB8QAp8ICBcfCB8QAp8IHxcICB8QAp8X3wgXF98QAogICAgICAgQEAKICAgICAgIEAKICBfX18gIEAKIC8gXyBcIEAKfCB8IHwgfEAKfCB8X3wgfEAKIFxfX18vIEAKICAgICAgIEBACiAgICAgICBACiBfX19fICBACnwgIF8gXCBACnwgfF8pIHxACnwgIF9fLyBACnxffCAgICBACiAgICAgICBAQAogICAgICAgQAogIF9fXyAgQAogLyBfIFwgQAp8IHwgfCB8QAp8IHxffCB8QAogXF9fXF9cQAogICAgICAgQEAKICAgICAgIEAKIF9fX18gIEAKfCAgXyBcIEAKfCB8XykgfEAKfCAgXyA8IEAKfF98IFxfXEAKICAgICAgIEBACiAgICAgICBACiBfX19fICBACi8gX19ffCBAClxfX18gXCBACiBfX18pIHxACnxfX19fLyBACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8XyAgIF98QAogIHwgfCAgQAogIHwgfCAgQAogIHxffCAgQAogICAgICAgQEAKICAgICAgIEAKIF8gICBfIEAKfCB8IHwgfEAKfCB8IHwgfEAKfCB8X3wgfEAKIFxfX18vIEAKICAgICAgIEBACiAgICAgICAgIEAKX18gICAgIF9fQApcIFwgICAvIC9ACiBcIFwgLyAvIEAKICBcIFYgLyAgQAogICBcXy8gICBACiAgICAgICAgIEBACiAgICAgICAgICAgIEAKX18gICAgICAgIF9fQApcIFwgICAgICAvIC9ACiBcIFwgL1wgLyAvIEAKICBcIFYgIFYgLyAgQAogICBcXy9cXy8gICBACiAgICAgICAgICAgIEBACiAgICAgIEAKX18gIF9fQApcIFwvIC9ACiBcICAvIEAKIC8gIFwgQAovXy9cX1xACiAgICAgIEBACiAgICAgICBACl9fICAgX19AClwgXCAvIC9ACiBcIFYgLyBACiAgfCB8ICBACiAgfF98ICBACiAgICAgICBAQAogICAgICBACiBfX19fX0AKfF9fICAvQAogIC8gLyBACiAvIC9fIEAKL19fX198QAogICAgICBAQAogICAgQAogX18gQAp8IF98QAp8IHwgQAp8IHwgQAp8IHwgQAp8X198QEAKICAgICAgQApfXyAgICBAClwgXCAgIEAKIFwgXCAgQAogIFwgXCBACiAgIFxfXEAKICAgICAgQEAKICAgIEAKIF9fIEAKfF8gfEAKIHwgfEAKIHwgfEAKIHwgfEAKfF9ffEBACiAgICBACiAvXCBACnwvXHxACiAgJCBACiAgJCBACiAgJCBACiAgICBAQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogICAgICAgQAogX19fX18gQAp8X19fX198QEAKICAgQAogICBACiBfIEAKKF8pQAogXyBACiggKUAKfC8gQEAKICAgICAgICAgICBACiBfICAgXyAgIF8gQAp8IHwgfCB8IHwgfEAKfCB8IHwgfCB8IHxACnwgfC8gL18vIC8gQAp8X19fX19fXy8gIEAKICAgICAgICAgICBAQAogICAgICBACiAgX19fIEAKIHxfICB8QAogICB8IHxACiBfX3wgfEAKfF9fX198QAogICAgICBAQAogICAgICAgICAgQAogIF9fX19fXyAgQAogfF9fX18gIHwgQAogICAgICB8IHwgQAogX19fX198IHxfQAovX19fX19fX18vQAogICAgICAgICAgQEAKICAgICAgICAgQAogICBfX19fICBACiAgfF9fICB8IEAKICAgICB8IHwgQAogX19fX3wgfCBACi9fX19fL1xfXEAKICAgICAgICAgQEAKICAgICAgICBACiBfX19fX18gQAp8X19fXyAgfEAKICBfICB8IHxACiB8IHwgfF98QAogfCB8ICAgIEAKIHxffCAgICBAQAogICAgICAgIEAKIF9fX19fICBACnxfX19fIFwgQAogICAgIHwgfEAKIF9fX198IHxACnxfX19fXy8gQAogICAgICAgIEBACiAgICAgICAgQAogX18gICBfIEAKIFwgXCB8IHxACiAgXCBcfCB8QAogX19cIGAgfEAKfF9fX19fX3xACiAgICAgICAgQEAKICAgICBACiBfX18gQAp8XyAgfEAKICB8X3xACiAgICQgQAogICAkIEAKICAgICBAQAogICAgIEAKIF9fXyBACnxfICB8QAogIHwgfEAKICB8IHxACiAgfCB8QAogIHxffEBACiAgICAgICAgIEAKIF9fX19fX18gQAp8LiAgX18gIHxACiB8IHwgIHwgfEAKIHwgfCAgfCB8QAogfF98ICB8X3xACiAgICAgICAgIEBACiBfICAgICAgQAp8IHxfX19fIEAKfF9fX18gIHxACiAgICAvIC8gQAogICAvIC8gIEAKICAvXy8gICBACiAgICAgICAgQEAKICAgICAgICAgQAogX19fX19fXyBACnxfX19fICAufEAKICAgICB8IHwgQAogICAgIHwgfCBACiAgICAgfCB8IEAKICAgICB8X3wgQEAKICAgICAgICAgIEAKICBfXyAgIF9fLkAKICBcIFwgLyAvIEAKICAgXCBWIC8gIEAKIF9fX1wgIFwgIEAKfF9fX19fX3wgIEAKICAgICAgICAgIEBACiAgICAgICAgIEAKIF9fX19fX18gQAp8LiAgX18gIHxACiB8IHwgIHwgfEAKIHwgfCBffCB8QAogfF98fF9fX3xACiAgICAgICAgIEBACiAgICAgICAgICBACiBfX19fX19fXyBACnwuICBfX18gIHxACiB8IHwgICB8IHxACiB8IHxfX198IHxACiB8X19fX19fX3xACiAgICAgICAgICBAQAogICAgICAgICBACiBfX19fX19fIEAKfCAgX19fICB8QAogXF9cICB8IHxACiBfX19fX3wgfEAKfF9fX19fX198QAogICAgICAgICBAQAogICAgICBACiAgICBfX0AKICAgLyAvQAogIC8gLyBACiAvIC8gIEAKL18vICAgQAogICAgICBAQAogICAgICAgIEAKIF9fX19fXyBACnxfX19fICB8QAogICAgIHwgfEAKICAgICB8IHxACiAgICAgfF98QAogICAgICAgIEBACiAgICAgICAgIEAKIF9fX19fX18gQAp8X19fXyAgIHxACiAgICAgfCB8IEAKICAgICB8IHwgQAogICAgIHxffCBACiAgICAgICAgIEBACiAgICAgICBACl9fICAgX19AClwgXCAvIC9ACnwgIFYgLyBACnwgfFwgXCBACnxffCBcX1xACiAgICAgICBAQAogICAgIEAKIF9fXyBACnxfICB8QAogIHwgfEAKICB8IHxACiAgfF98QAogICAgIEBACiAgICAgICAgIEAKIF9fX19fX18gQAp8X19fX18gIHxACiAgXyAgIHwgfEAKIHwgfCAgfCB8QAogfF98ICB8X3xACiAgICAgICAgIEBACiAgIEAKIF8gQAooIClACnwvIEAKICQgQAogJCBACiAgIEBACiAgICAgICAgIEAKIF9fX19fX18gQAp8LiAgX18gIHxACiB8IHwgIHwgfEAKIHwgfF9fLyB8QAogfF9fX19fLyBACiAgICAgICAgIEBACiAgICAgICAgICBACiBfXyAgIF9fXyBACnwuIHwgL18gIHxACiB8IHwgICB8IHxACiB8IHxfX198IHxACiB8X19fX19fX3xACiAgICAgICAgICBAQAogICAgICAgICBACl9fX19fX19fIEAKXF9fICAgX19cQAogICB8IHwgICBACiAgIHwgfCAgIEAKICAgfF98ICAgQAogICAgICAgICBAQAogICAgIEAKICAgX19ACiAgLyAvQAogfCB8IEAKPCA8ICBACiB8IHwgQAogIFxfXEBACiAgIEAKIF8gQAp8IHxACnwgfEAKfCB8QAp8IHxACnxffEBACiAgICAgQApfXyAgIEAKXCBcICBACiB8IHwgQAogID4gPkAKIHwgfCBACi9fLyAgQEAKYWxlcGggICA9IHQgfCB6YXlpbiAgICA9IHogfCBsYW1lZCAgID0gayB8IGF5aW4gICAgPSBnIHwgc2hpbi9zaW4gID0gYUAKYmV0L3ZldCA9IGMgfCBjaGV0ICAgICA9IGogfCBtZW0gICAgID0gbiB8IHBleS9mZXkgPSBwIHwgdGFmL3NhZiAgID0gLEAKZ2ltbWVsICA9IGQgfCB0ZXQgICAgICA9IHkgfCBmaW5hbCAiID0gbyB8IGZpbmFsICIgPSA7IHwgLChjb21tYSkgID0gJ0AKZGFsZWQgICA9IHMgfCB5dWQgICAgICA9IGggfCBudW4gICAgID0gYiB8IHR6YWFkaSAgPSBtIHwgLihwZXJpb2QpID0gL0AKaGF5ICAgICA9IHYgfCBrYWYvY2hhZiA9IGYgfCBmaW5hbCAiID0gaSB8IGZpbmFsICIgPSAuIHwgOyAgICAgICAgID0gYEAKdmF2ICAgICA9IHUgfCBmaW5hbCAiICA9IGwgfCBzYW1la2ggID0geCB8IGt1ZiAgICAgPSBlIHwgLyAgICAgICAgID0gcUAKVGhlIGFzdGVyaXNrICgqKSBpcyBhIFN0YXIgb2YgRGF2aWQgICAgICB8IHJlc2ggICAgPSByIHwgJyhhcG9zdC4pID0gd0BACiAgICAgICBACiBfICAgXyBACihfKV8oXylACiAgL19cICBACiAvIF8gXCBACi9fLyBcX1xACiAgICAgICBAQAogICAgICAgQAogXyAgIF8gQAooXylfKF8pQAogLyBfIFwgQAp8IHxffCB8QAogXF9fXy8gQAogICAgICAgQEAKICAgICAgIEAKIF8gICBfIEAKKF8pIChfKUAKfCB8IHwgfEAKfCB8X3wgfEAKIFxfX18vIEAKICAgICAgIEBACiAgICAgICBACiBfICAgXyBACihfKV8oXylACiAvIF9gIHxACnwgKF98IHxACiBcX18sX3xACiAgICAgICBAQAogICAgICAgQAogXyAgIF8gQAooXylfKF8pQAogLyBfIFwgQAp8IChfKSB8QAogXF9fXy8gQAogICAgICAgQEAKICAgICAgIEAKIF8gICBfIEAKKF8pIChfKUAKfCB8IHwgfEAKfCB8X3wgfEAKIFxfXyxffEAKICAgICAgIEBACiAgICAgIEAKICBfX18gQAogLyBfIFxACnwgfC8gL0AKfCB8XCBcQAp8IHx8Xy9ACnxffCAgIEBACg=='
);

export default jerusalem;
