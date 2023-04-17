import { FontFile } from '../../FontFile';

const puffy = new FontFile(
    'puffy',
    'ZmxmMmEkIDggNiAxNCAxIDMKcHVmZnkuZmxmIGJ5IEp1YW4gQ2FyIChqY0BqdWd1ZXRlLnF1aW0udWNtLmVzKQpWZXJzaW9uIDEuMSA1L01hci8xOTk0CgokJCRACiQkJEAKJCQkQAokJCRACiQkJEAKJCQkQAokJCRACiQkJEBACiBfIEAKKCApQAp8IHxACnwgfEAKfCB8QAooXylACihfKUAKICAgQEAKJCBfICBfICRACiQoICkoICkkQAokKF8pKF8pJEAKJCAgICAgICRACiQgICAgICAkQAokICAgICAgJEAKJCAgICAgICRACiQgICAgICAkQEAKICAgICAgICAgIEAKICAgXyAgXyAgIEAKIF8oICkoIClfIEAKKF8gIC4uICBfKUAKKF8gICAgICBfKUAKICAoXykoXykgIEAKICAgICAgICAgIEAKICAgICAgICAgIEBACiAgKCApICBACiAvJ18gXCBACiggKF8oXylACiBcX18gXCBACiggKV8pIClACmBcXyBfLydACiAgKF8pICBACiAgICAgICBAQAogXyAgICAgICBfIEAKKF8pICAgIC8nIClACiAgICAgLycgLycgQAogICAvJyAvJyAgIEAKIC8nIC8nICAgXyBACihfLycgICAgKF8pQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogX19fX18gICBACiggIF8gICkgIEAKYFwgICwvJyAgQAogLydfYFwvXCBACnwgKF8+ICw8YEAKYFxfX18vXC8nQAogICAgICAgICBACiAgICAgICAgIEBACiRfJEAKKCApQAp8LyRACiQgJEAKJCAkQAokICRACiQgJEAKJCAkQEAKICAgXyBACiAvJyApQAp8ICwvJ0AKfCB8ICBACnwgYFwgQApgXF9fKUAKICAgICBACiAgICAgQEAKIF8gICBACiggYFwgQApgXCAgfEAKICB8IHxACiAvJyB8QAooX18vJ0AKICAgICBACiAgICAgQEAKICAgXyAgIEAKIF8oIClfIEAKKCBgICcgKUAKID4gICA8IEAKKF8sICxfKUAKICAoXykgIEAKICAgICAgIEAKICAgICAgIEBACiAgICBfICAgIEAKICAgKCApICAgQAogX198IHxfXyBACihfXyAgIF9fKUAKICAgfCB8ICAgQAogICAoXykgICBACiAgICAgICAgIEAKICAgICAgICAgQEAKJCAkQAokICRACiQgJEAKJCAkQAokXyRACiggKUAKfC8kQAokICRAQAogICAgICAgIEAKICAgICAgICBACiBfX19fX18gQAooX19fX19fKUAKICAgICAgICBACiAgICAgICAgQAogICAgICAgIEAKICAgICAgICBAQAokICRACiQgJEAKJCAkQAokICRACiRfJEAKKF8pQAokICRACiQgJEBACiAgICAgICAgX18gQAogICAgICAgLyAgKUAKICAgICAvJyAvJyBACiAgIC8nIC8nICAgQAogLycgLycgICAgIEAKKF8vJyAgICAgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEBACiAgX18gICBACi8nIF9gXCBACnwgKCApIHxACnwgfCB8IHxACnwgKF8pIHxACmBcX19fLydACiAgICAgICBACiAgICAgICBAQAogICBfIEAKIC8nIClACihfLCB8QAogIHwgfEAKICB8IHxACiAgKF8pQAogICAgIEAKICAgICBAQAogICBfXyAgIEAKIC8nX19gXCBACihfKSAgKSApQAogICAvJyAvIEAKIC8nIC8oIClACihfX19fXy8nQAogICAgICAgIEAKICAgICAgICBAQAogICBfX18gQAogLydfICApQAooXylfKSB8QAogXyhfIDwgQAooIClfKSB8QApgXF9fX18pQAogICAgICAgQAogICAgICAgQEAKIF8gIF8gICBACiggKSggKSAgQAp8IHx8IHwgIEAKfCB8fCB8XyBACihfXyAsX18pQAogICAoXykgIEAKICAgICAgICBACiAgICAgICAgQEAKIF9fX19fIEAKKCAgX19fKUAKfCAoX18gIEAKfF9fXyBgXEAKKCApXykgfEAKYFxfX18vJ0AKICAgICAgIEAKICAgICAgIEBACiBfX19fXyBACiggIF9fXylACnwgKF9fICBACnwgIF8gYFxACnwgKF8pIHxACmBcX19fLydACiAgICAgICBACiAgICAgICBAQAogX19fX19fXyBACihfX19fXyAgKUAKICAgICAvJy8nQAogICAvJy8nICBACiAvJy8nICAgIEAKKF8vICAgICAgQAogICAgICAgICBACiAgICAgICAgIEBACiAgIF8gICBACiAvJ19gXCBACiggKF8pIClACiA+IF8gPCdACiggKF8pIClACmBcX19fLydACiAgICAgICBACiAgICAgICBAQAogICBfXyAgQAogLydfIGBcQAooIChfKSB8QAogXF9fLCB8QAogICAgfCB8QAogICAgKF8pQAogICAgICAgQAogICAgICAgQEAKJCAkQAokICRACiRfJEAKKF8pQAokXyRACihfKUAKJCAkQAokICRAQAokICRACiQgJEAKJF8kQAooXylACiRfJEAKKCApQAp8LyRACiQgJEBACiAgICAgXyBACiAgIC8nIClACiAvJyAvJyBACjwgIDwgICBACiBcICBgXCBACiAgYFxfXylACiAgICAgICBACiAgICAgICBAQAogICAgICAgIEAKICAgICAgICBACiBfX19fX18gQAooX19fX19fKUAKKF9fX19fXylACiAgICAgICAgQAogICAgICAgIEAKICAgICAgICBAQAogXyAgICAgQAooIGBcICAgQAogYFwgYFwgQAogICA+ICA+QAogLycgLycgQAooXy8nICAgQAogICAgICAgQAogICAgICAgQEAKICAgXyAgIEAKIC8nX2BcIEAKKF8pICkgfEAKICAgLycvJ0AKICB8X3wgIEAKICAoXykgIEAKICAgICAgIEAKICAgICAgIEBACiAgICAgICAgICBACiAgICAgXyAgICBACiAgIC8nX2BcICBACiAvJy8nX2AgKSBACiggKCAoX3wgfCBACiBcIGBcX18sXylACiAgYFxfX19fXylACiAgICAgICAgICBAQAogX19fX18gQAooICBfICApQAp8IChfKSB8QAp8ICBfICB8QAp8IHwgfCB8QAooXykgKF8pQAogICAgICAgQAogICAgICAgQEAKIF9fXyAgIEAKKCAgX2BcIEAKfCAoXykgKUAKfCAgXyA8J0AKfCAoXykgKUAKKF9fX18vJ0AKICAgICAgIEAKICAgICAgIEBACiBfX18gICBACiggIF9gXCBACnwgKCAoXylACnwgfCAgXyBACnwgKF8oIClACihfX19fLydACiAgICAgICBACiAgICAgICBAQAogX19fICAgQAooICBfYFwgQAp8IHwgKSB8QAp8IHwgfCApQAp8IHxfKSB8QAooX19fXy8nQAogICAgICAgQAogICAgICAgQEAKIF9fXyAgIEAKKCAgX2BcIEAKfCAoXyhfKUAKfCAgXylfIEAKfCAoXyggKUAKKF9fX18vJ0AKICAgICAgIEAKICAgICAgIEBACiBfX18gICBACiggIF9gXCBACnwgKF8oXylACnwgIF8pICBACnwgfCAgICBACihfKSAgICBACiAgICAgICBACiAgICAgICBAQAogX19fICAgQAooICBfYFwgQAp8ICggKF8pQAp8IHxfX18gQAp8IChfLCApQAooX19fXy8nQAogICAgICAgQAogICAgICAgQEAKIF8gICBfIEAKKCApICggKUAKfCB8X3wgfEAKfCAgXyAgfEAKfCB8IHwgfEAKKF8pIChfKUAKICAgICAgIEAKICAgICAgIEBACiBfIEAKKF8pQAp8IHxACnwgfEAKfCB8QAooXylACiAgIEAKICAgQEAKIF9fX19fIEAKKF9fXyAgKUAKICAgIHwgfEAKIF8gIHwgfEAKKCApX3wgfEAKYFxfX18vJ0AKICAgICAgIEAKICAgICAgIEBACiBfICAgXyBACiggKSAoIClACnwgfC8nLydACnwgLCA8ICBACnwgfFxgXCBACihfKSAoXylACiAgICAgICBACiAgICAgICBAQAogXyAgICAgQAooICkgICAgQAp8IHwgICAgQAp8IHwgIF8gQAp8IHxfKCApQAooX19fXy8nQAogICAgICAgQAogICAgICAgQEAKICAgICAgIEAKLydcXy9gXEAKfCAgICAgfEAKfCAoXykgfEAKfCB8IHwgfEAKKF8pIChfKUAKICAgICAgIEAKICAgICAgIEBACiBfICAgXyBACiggKSAoIClACnwgYFx8IHxACnwgLCBgIHxACnwgfGBcIHxACihfKSAoXylACiAgICAgICBACiAgICAgICBAQAogX19fX18gQAooICBfICApQAp8ICggKSB8QAp8IHwgfCB8QAp8IChfKSB8QAooX19fX18pQAogICAgICAgQAogICAgICAgQEAKIF9fXyAgIEAKKCAgX2BcIEAKfCB8XykgKUAKfCAsX18vJ0AKfCB8ICAgIEAKKF8pICAgIEAKICAgICAgIEAKICAgICAgIEBACiBfX19fXyBACiggIF8gIClACnwgKCApIHxACnwgfCB8IHxACnwgKCgnXHxACihfX19cXylACiAgICAgICBACiAgICAgICBAQAogX19fICAgQAp8ICBfYFwgQAp8IChfKSApQAp8ICwgIC8gQAp8IHxcIFwgQAooXykgKF8pQAogICAgICAgQAogICAgICAgQEAKIF9fXyAgIEAKKCAgX2BcIEAKfCAoXyhfKUAKYFxfXyBcIEAKKCApXykgfEAKYFxfX19fKUAKICAgICAgIEAKICAgICAgIEBACiBfX19fXyBACihfICAgXylACiAgfCB8ICBACiAgfCB8ICBACiAgfCB8ICBACiAgKF8pICBACiAgICAgICBACiAgICAgICBAQAogXyAgIF8gQAooICkgKCApQAp8IHwgfCB8QAp8IHwgfCB8QAp8IChfKSB8QAooX19fX18pQAogICAgICAgQAogICAgICAgQEAKIF8gICBfIEAKKCApICggKUAKfCB8IHwgfEAKfCB8IHwgfEAKfCBcXy8gfEAKYFxfX18vJ0AKICAgICAgIEAKICAgICAgIEBACiBfICAgICAgIF8gQAooICkgIF8gICggKUAKfCB8ICggKSB8IHxACnwgfCB8IHwgfCB8QAp8IChfLyBcXykgfEAKYFxfX194X19fLydACiAgICAgICAgICAgQAogICAgICAgICAgIEBACiBfICAgIF8gQAooICkgICggKUAKYFxgXC8nLydACiAgPiAgPCAgQAogLycvXGBcIEAKKF8pICAoXylACiAgICAgICAgQAogICAgICAgIEBACiBfICAgICBfIEAKKCApICAgKCApQApgXGBcXy8nLydACiAgYFwgLycgIEAKICAgfCB8ICAgQAogICAoXykgICBACiAgICAgICAgIEAKICAgICAgICAgQEAKIF9fX19fX18gQAooX19fX18gIClACiAgICAgLycvJ0AKICAgLycvJyAgQAogLycvJ19fXyBACihfX19fX19fKUAKICAgICAgICAgQAogICAgICAgICBAQAogX19fIEAKKCAgXylACnwgfCAgQAp8IHwgIEAKfCB8XyBACihfX18pQAogICAgIEAKICAgICBAQAogXyAgICAgICAgIEAKKCBgXCAgICAgICBACiBgXCBgXCAgICAgQAogICBgXCBgXCAgIEAKICAgICBgXCBgXCBACiAgICAgICBgXF8pQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogX19fIEAKKF8gIClACiAgfCB8QAogIHwgfEAKIF98IHxACihfX18pQAogICAgIEAKICAgICBAQAokIF9fICRACiQvICBcJEAKKF8vXF8pQAokICAgICRACiQgICAgJEAKJCAgICAkQAokICAgICRACiQgICAgJEBACiAkICAgICQgQAogJCAgICAkIEAKICQgICAgJCBACiAkICAgICQgQAogJCAgICAkIEAKICQgICAgJCBACiBfX19fX18gQAooX19fX19fKUBACiRfJEAKKCApQAokXHxACiQgJEAKJCAkQAokICRACiQgJEAKJCAkQEAKICAgICAgIEAKICAgICAgIEAKICAgXyBfIEAKIC8nX2AgKUAKKCAoX3wgfEAKYFxfXyxfKUAKICAgICAgIEAKICAgICAgIEBACiBfICAgICBACiggKSAgICBACnwgfF8gICBACnwgJ19gXCBACnwgfF8pIClACihfLF9fLydACiAgICAgICBACiAgICAgICBAQAogICAgICAgQAogICAgICAgQAogICBfX18gQAogLydfX18pQAooIChfX18gQApgXF9fX18pQAogICAgICAgQAogICAgICAgQEAKICAgICBfIEAKICAgICggKUAKICAgX3wgfEAKIC8nX2AgfEAKKCAoX3wgfEAKYFxfXyxfKUAKICAgICAgIEAKICAgICAgIEBACiAgICAgICBACiAgICAgICBACiAgIF9fICBACiAvJ19fYFxACiggIF9fXy9ACmBcX19fXylACiAgICAgICBACiAgICAgICBAQAogICBfX18gQAogLydfX18pQAp8IChfXyAgQAp8ICxfXykgQAp8IHwgICAgQAooXykgICAgQAogICAgICAgQAogICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKICAgX18gIEAKIC8nXyBgXEAKKCAoXykgfEAKYFxfXyAgfEAKKCApXykgfEAKIFxfX18vJ0BACiBfICAgICBACiggKSAgICBACnwgfF9fICBACnwgIF8gYFxACnwgfCB8IHxACihfKSAoXylACiAgICAgICBACiAgICAgICBAQAogICBACiBfIEAKKF8pQAp8IHxACnwgfEAKKF8pQAogICBACiAgIEBACiAgICAgICBACiAgICAgXyBACiAgICAoXylACiAgICB8IHxACiAgICB8IHxACiBfICB8IHxACiggKV98IHxACmBcX19fLydAQAogXyAgICAgQAooICkgICAgQAp8IHwvJykgQAp8ICwgPCAgQAp8IHxcYFwgQAooXykgKF8pQAogICAgICAgQAogICAgICAgQEAKIF8gICBACihfICkgQAogfCB8IEAKIHwgfCBACiB8IHwgQAooX19fKUAKICAgICBACiAgICAgQEAKICAgICAgICAgICBACiAgICAgICAgICAgQAogIF9fXyBfX18gIEAKLycgXyBgIF8gYFxACnwgKCApICggKSB8QAooXykgKF8pIChfKUAKICAgICAgICAgICBACiAgICAgICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKICBfX18gIEAKLycgXyBgXEAKfCAoICkgfEAKKF8pIChfKUAKICAgICAgIEAKICAgICAgIEBACiAgICAgICBACiAgICAgICBACiAgIF8gICBACiAvJ19gXCBACiggKF8pIClACmBcX19fLydACiAgICAgICBACiAgICAgICBAQAogICAgICAgQAogICAgICAgQAogXyBfICAgQAooICdfYFwgQAp8IChfKSApQAp8ICxfXy8nQAp8IHwgICAgQAooXykgICAgQEAKICAgICAgIEAKICAgICAgIEAKICAgXyBfIEAKIC8nX2AgKUAKKCAoXykgfEAKYFxfXywgfEAKICAgIHwgfEAKICAgIChfKUBACiAgICAgIEAKICAgICAgQAogXyBfXyBACiggJ19fKUAKfCB8ICAgQAooXykgICBACiAgICAgIEAKICAgICAgQEAKICAgICAgQAogICAgICBACiAgX19fIEAKLycsX18pQApcX18sIFxACihfX19fL0AKICAgICAgQAogICAgICBAQAogXyAgIEAKKCApXyBACnwgLF8pQAp8IHwgIEAKfCB8XyBACmBcX18pQAogICAgIEAKICAgICBAQAogICAgICAgQAogICAgICAgQAogXyAgIF8gQAooICkgKCApQAp8IChfKSB8QApgXF9fXy8nQAogICAgICAgQAogICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKIF8gICBfIEAKKCApICggKUAKfCBcXy8gfEAKYFxfX18vJ0AKICAgICAgIEAKICAgICAgIEBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKIF8gICBfICAgXyBACiggKSAoICkgKCApQAp8IFxfLyBcXy8gfEAKYFxfX194X19fLydACiAgICAgICAgICAgQAogICAgICAgICAgIEBACiAgICAgIEAKICAgICAgQAogICAgICBACihgXC8nKUAKID4gIDwgQAooXy9cXylACiAgICAgIEAKICAgICAgQEAKICAgICAgIEAKICAgICAgIEAKIF8gICBfIEAKKCApICggKUAKfCAoXykgfEAKYFxfXywgfEAKKCApX3wgfEAKYFxfX18vJ0BACiAgICAgIEAKICAgICAgQAogX19fXyBACihfICAsKUAKIC8nL18gQAooX19fXylACiAgICAgIEAKICAgICAgQEAKICAgIF8gQAogIC8nIClACiB8ICwvJ0AKPCcgfCAgQAogfCBgXCBACiBgXF9fKUAKICAgICAgQAogICAgICBAQAogICBACiBfIEAKKCApQAp8IHxACnwgfEAKfCB8QAooXylACiAgIEBACiBfICAgIEAKKCBgXCAgQApgXCAgfCBACiAgfCBgPkAKIC8nIHwgQAooX18vJyBACiAgICAgIEAKICAgICAgQEAKICAgXyAgIF8gQAogLycgXC8nIClACihfL1xfXy8nIEAKICAgICAgICAgQAogICAgICAgICBACiAgICAgICAgIEAKICAgICAgICAgQAogICAgICAgICBAQAooXylfKF8pQAooICBfICApQAp8IChfKSB8QAp8ICBfICB8QAp8IHwgfCB8QAooXykgKF8pQAogICAgICAgQAogICAgICAgQEAKKF8pXyhfKUAKKCAgXyAgKUAKfCAoICkgfEAKfCB8IHwgfEAKfCAoXykgfEAKKF9fX19fKUAKICAgICAgIEAKICAgICAgIEBACihfKSAoXylACiggKSAoIClACnwgfCB8IHxACnwgfCB8IHxACnwgKF8pIHxACihfX19fXylACiAgICAgICBACiAgICAgICBAQAogXyAgIF8gQAooXykgKF8pQAogICBfIF8gQAogLydfYCApQAooIChffCB8QApgXF9fLF8pQAogICAgICAgQAogICAgICAgQEAKIF8gICBfIEAKKF8pIChfKUAKICAgXyAgIEAKIC8nX2BcIEAKKCAoXykgKUAKYFxfX18vJ0AKICAgICAgIEAKICAgICAgIEBACiBfICAgXyBACihfKSAoXylACiBfICAgXyBACiggKSAoIClACnwgKF8pIHxACmBcX19fLydACiAgICAgICBACiAgICAgICBAQAogICAgICAgQAogICAgICAgQAogX19fX18gQAooICBfICApQAp8IHwvIC8nQAp8IHxcYFwgQAp8IHx8Xy8nQAooXykgICAgQEAK'
);

export default puffy;
