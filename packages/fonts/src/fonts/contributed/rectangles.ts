import { FontFile } from '../../FontFile';

const rectangles = new FontFile(
    'rectangles',
    'ZmxmMmEkIDYgNSAxNSAxIDEKcmVjdGFuZ2xlcy5mbGYgYnkgRGF2aWQgVmlsbGVnYXMgPG1uZW1lbnRoQG5ldGNvbS5jb20+IDEyLzk0CiQkQAokJEAKJCRACiQkQAokJEAKJCRAQAogX18gQAp8ICB8QAp8ICB8QAp8X198QAp8X198QAogICAgQEAKIF8gXyBACnwgfCB8QAp8X3xffEAKICQkJCBACiAkJCQgQAogJCQkIEBACiAgIF8gXyAgIEAKIF98IHwgfF8gQAp8XyAgICAgX3xACnxfICAgICBffEAKICB8X3xffCAgQAogICAgICAgICBAQAogICBfICAgQAogX3wgfF8gQAp8ICAgX198QAp8X18gICB8QAp8XyAgIF98QAogIHxffCAgQEAKICAgICAgIEAKIF9fIF9fIEAKfF9ffCAgfEAKfCAgIF9ffEAKfF9ffF9ffEAKICAgICAgIEBACiAgIF8gICBACiBffCB8XyBACnwgICBfX3xACnwgICBfX3xACnxfICAgX3xACiAgfF98ICBAQAogXyBACnwgfEAKfF98QAogJCBACiAkIEAKICQgQEAKICAgXyBACiBffF98QAp8IHwgIEAKfCB8ICBACnxffF8gQAogIHxffEBACiBfICAgQAp8X3xfIEAKICB8IHxACiAgfCB8QAogX3xffEAKfF98ICBAQAogICAgICAgQAogX19fX18gQAp8IHwgfCB8QAp8LSAgIC18QAp8X3xffF98QAogICAgICAgQEAKICAgICAgIEAKICAgXyAgIEAKIF98IHxfIEAKfF8gICBffEAKICB8X3wgIEAKICAgICAgIEBACiAkIEAKICQgQAogJCBACiBfIEAKfCB8QAp8X3xAQAogJCQkIEAKICQkJCBACiBfX18gQAp8X19ffEAKICQkJCBACiAkJCQgQEAKICQgQAogJCBACiAkIEAKIF8gQAp8X3xACiAkIEBACiAgICAgQAogICBfIEAKICAvIHxACiAvIC8gQAp8Xy8gIEAKICAgICBAQAogICAgIEAKIF9fXyBACnwgICB8QAp8IHwgfEAKfF9fX3xACiAgICAgQEAKICAgICAgIEAKIF9fXyAgIEAKfF8gIHwgIEAKIF98IHxfIEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgQAogX19fIEAKfF8gIHxACnwgIF98QAp8X19ffEAKICAgICBAQAogICAgIEAKIF9fXyBACnxfICB8QAp8XyAgfEAKfF9fX3xACiAgICAgQEAKICAgICBACiBfX18gQAp8IHwgfEAKfF8gIHxACiAgfF98QAogICAgIEBACiAgICAgQAogX19fIEAKfCAgX3xACnxfICB8QAp8X19ffEAKICAgICBAQAogICAgIEAKIF9fXyBACnwgIF98QAp8IC4gfEAKfF9fX3xACiAgICAgQEAKICAgICBACiBfX18gQAp8XyAgfEAKICB8IHxACiAgfF98QAogICAgIEBACiAgICAgQAogX19fIEAKfCAuIHxACnwgLiB8QAp8X19ffEAKICAgICBAQAogICAgIEAKIF9fXyBACnwgLiB8QAp8XyAgfEAKfF9fX3xACiAgICAgQEAKICAgQAogXyBACnxffEAKIF8gQAp8X3xACiAgIEBACiAgIEAKIF8gQAp8X3xACiBfIEAKfCB8QAp8X3xAQAogICBfX0AKICAvIC9ACiAvIC8gQAo8IDwgIEAKIFwgXCBACiAgXF9cQEAKICQkJCQkIEAKICQkJCQkIEAKIF9fX19fIEAKfF9fX19ffEAKfF9fX19ffEAKICQkJCQkIEBACl9fICAgQApcIFwgIEAKIFwgXCBACiAgPiA+QAogLyAvIEAKL18vICBAQAogX19fX18gQAp8X19fICB8QAogIHwgIF98QAogIHxffCAgQAogIHxffCAgQAogICAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfCAgX18gfEAKfCB8X19ffEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnwgIF8gIHxACnwgICAgIHxACnxfX3xfX3xACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8IF9fICB8QAp8IF9fIC18QAp8X19fX198QAogICAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfCAgICAgfEAKfCAgIC0tfEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgICBACiBfX19fICBACnwgICAgXCBACnwgIHwgIHxACnxfX19fLyBACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8ICAgX198QAp8ICAgX198QAp8X19fX198QAogICAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfCAgIF9ffEAKfCAgIF9ffEAKfF9ffCAgIEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnwgICBfX3xACnwgIHwgIHxACnxfX19fX3xACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8ICB8ICB8QAp8ICAgICB8QAp8X198X198QAogICAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfCAgICAgfEAKfC0gICAtfEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgICBACiAgICBfXyBACiBfX3wgIHxACnwgIHwgIHxACnxfX19fX3xACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8ICB8ICB8QAp8ICAgIC18QAp8X198X198QAogICAgICAgQEAKICAgICAgIEAKIF9fICAgIEAKfCAgfCAgIEAKfCAgfF9fIEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnwgICAgIHxACnwgfCB8IHxACnxffF98X3xACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8ICAgfCB8QAp8IHwgfCB8QAp8X3xfX198QAogICAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfCAgICAgfEAKfCAgfCAgfEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnwgIF8gIHxACnwgICBfX3xACnxfX3wgICBACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8ICAgICB8QAp8ICB8ICB8QAp8X18gIF98QAogICB8X198QEAKICAgICAgIEAKIF9fX19fIEAKfCBfXyAgfEAKfCAgICAtfEAKfF9ffF9ffEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnwgICBfX3xACnxfXyAgIHxACnxfX19fX3xACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8XyAgIF98QAogIHwgfCAgQAogIHxffCAgQAogICAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfCAgfCAgfEAKfCAgfCAgfEAKfF9fX19ffEAKICAgICAgIEBACiAgICAgICBACiBfX19fXyBACnwgIHwgIHxACnwgIHwgIHxACiBcX19fLyBACiAgICAgICBAQAogICAgICAgQAogXyBfIF8gQAp8IHwgfCB8QAp8IHwgfCB8QAp8X19fX198QAogICAgICAgQEAKICAgICAgIEAKIF9fIF9fIEAKfCAgfCAgfEAKfC0gICAtfEAKfF9ffF9ffEAKICAgICAgIEBACiAgICAgICBACiBfXyBfXyBACnwgIHwgIHxACnxfICAgX3xACiAgfF98ICBACiAgICAgICBAQAogICAgICAgQAogX19fX18gQAp8X18gICB8QAp8ICAgX198QAp8X19fX198QAogICAgICAgQEAKIF9fXyBACnwgIF98QAp8IHwgIEAKfCB8ICBACnwgfF8gQAp8X19ffEBACiAgICAgQAogXyAgIEAKfCBcICBACiBcIFwgQAogIFxffEAKICAgICBAQAogX19fIEAKfF8gIHxACiAgfCB8QAogIHwgfEAKIF98IHxACnxfX198QEAKIF9fX19fIEAKfCAgXyAgfEAKfF98IHxffEAKICQkJCQkIEAKICQkJCQkIEAKICQkJCQkIEBACiAkJCQkJCBACiAkJCQkJCBACiAkJCQkJCBACiAkJCQkJCBACiBfX19fXyBACnxfX19fX3xAQAogX19fIEAKfF8gIHxACiAgfF98QAogJCQkIEAKICQkJCBACiAkJCQgQEAKICAgICBACiAgICAgQAogX19fIEAKfCAuJ3xACnxfXyx8QAogICAgIEBACiAgICAgQAogXyAgIEAKfCB8XyBACnwgLiB8QAp8X19ffEAKICAgICBAQAogICAgIEAKICAgICBACiBfX18gQAp8ICBffEAKfF9fX3xACiAgICAgQEAKICAgICBACiAgIF8gQAogX3wgfEAKfCAuIHxACnxfX198QAogICAgIEBACiAgICAgQAogICAgIEAKIF9fXyBACnwgLV98QAp8X19ffEAKICAgICBAQAogICAgIEAKIF9fXyBACnwgIF98QAp8ICBffEAKfF98ICBACiAgICAgQEAKICAgICBACiAgICAgQAogX19fIEAKfCAuIHxACnxfICB8QAp8X19ffEBACiAgICAgQAogXyAgIEAKfCB8XyBACnwgICB8QAp8X3xffEAKICAgICBAQAogICBACiBfIEAKfF98QAp8IHxACnxffEAKICAgQEAKICAgICBACiAgIF8gQAogIHxffEAKICB8IHxACiBffCB8QAp8X19ffEBACiAgICAgQAogXyAgIEAKfCB8XyBACnwgJ198QAp8XyxffEAKICAgICBAQAogICBACiBfIEAKfCB8QAp8IHxACnxffEAKICAgQEAKICAgICAgIEAKICAgICAgIEAKIF9fX19fIEAKfCAgICAgfEAKfF98X3xffEAKICAgICAgIEBACiAgICAgQAogICAgIEAKIF9fXyBACnwgICB8QAp8X3xffEAKICAgICBAQAogICAgIEAKICAgICBACiBfX18gQAp8IC4gfEAKfF9fX3xACiAgICAgQEAKICAgICBACiAgICAgQAogX19fIEAKfCAuIHxACnwgIF98QAp8X3wgIEBACiAgICAgQAogICAgIEAKIF9fXyBACnwgLiB8QAp8XyAgfEAKICB8X3xAQAogICAgIEAKICAgICBACiBfX18gQAp8ICBffEAKfF98ICBACiAgICAgQEAKICAgICBACiAgICAgQAogX19fIEAKfF8gLXxACnxfX198QAogICAgIEBACiAgICAgQAogXyAgIEAKfCB8XyBACnwgIF98QAp8X3wgIEAKICAgICBAQAogICAgIEAKICAgICBACiBfIF8gQAp8IHwgfEAKfF9fX3xACiAgICAgQEAKICAgICBACiAgICAgQAogXyBfIEAKfCB8IHxACiBcXy8gQAogICAgIEBACiAgICAgICBACiAgICAgICBACiBfIF8gXyBACnwgfCB8IHxACnxfX19fX3xACiAgICAgICBAQAogICAgIEAKICAgICBACiBfIF8gQAp8XydffEAKfF8sX3xACiAgICAgQEAKICAgICBACiAgICAgQAogXyBfIEAKfCB8IHxACnxfICB8QAp8X19ffEBACiAgICAgQAogICAgIEAKIF9fXyBACnwtIF98QAp8X19ffEAKICAgICBAQAogICBfX18gQAogIHwgIF98QAogX3wgfCAgQAp8XyAgfCAgQAogIHwgfF8gQAogIHxfX198QEAKIF8gQAp8IHxACnwgfEAKfCB8QAp8IHxACnxffEBACiBfX18gICBACnxfICB8ICBACiAgfCB8XyBACiAgfCAgX3xACiBffCB8ICBACnxfX198ICBAQAogX19fX18gQAp8ICAgfCB8QAp8X3xfX198QAogJCQkJCQgQAogJCQkJCQgQAogJCQkJCQgQEAKIF9fIF9fIEAKfF9ffF9ffEAKfCAgXyAgfEAKfCAgICAgfEAKfF9ffF9ffEAKICAgICAgIEBACiBfXyBfXyBACnxfX3xfX3xACnwgICAgIHxACnwgIHwgIHxACnxfX19fX3xACiAgICAgICBAQAogX18gX18gQAp8X198X198QAp8ICB8ICB8QAp8ICB8ICB8QAp8X19fX198QAogICAgICAgQEAKIF8gXyBACnxffF98QAogX19fIEAKfCAuJ3xACnxfXyx8QAogICAgIEBACiBfIF8gQAp8X3xffEAKIF9fXyBACnwgLiB8QAp8X19ffEAKICAgICBAQAogXyBfIEAKfF98X3xACiBfIF8gQAp8IHwgfEAKfF9fX3xACiAgICAgQEAKICAgICAgIEAKIF9fX19fIEAKfCBfXyAgfEAKfCBfXyAtfEAKfCAgX19ffEAKfF98ICAgIEBACg=='
);

export default rectangles;