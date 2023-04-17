import { FontFile } from '../../FontFile';

const italic = new FontFile(
    'italic',
    'ZmxmMmEkIDQgMyAxMCAwIDMKaXRhbGljLmZsZgkJVmVyc2lvbiAyCmJ5OiAgQmFzIE1laWplciAgIG1laWplckBpbmZvLndpbi50dWUubmwgICBiYXNAZGFtZWsua3RoLnNlCmZpeGVkIGJ5OiBSeWFuIFlvdWNrICB5b3Vja0Bjcy51cmVnaW5hLmNhCiRACiRACiRACiBAQAogIEAKfCBACi4gQAogIEBACi8vIEAKJCQgQAogICBACiAgIEBACiAgICAgIEAKX3xffF8gQAotfC18LSBACiAgICAgIEBACiB8fF8gQAoofHwkIEAKX3x8KSBACiB8fCAgQEAKICAgQAowLyBACi8wIEAKICAgQEAKICAgIEAKKCkvIEAKKFggIEAKICAgIEBACi8gQAokIEAKJCBACiAgQEAKJC8gQAooJCBACiRcIEAKICAgQEAKXCQgQAokKSBACi8kIEAKICAgQEAKJCAgJEAKJFwvJEAKJC9cJEAKJCAgJEBACiQgICAkQAokX3xfJEAKJCB8ICRACiQgICAkQEAKICRACiQkQAosJEAKICRAQAokICAkQAokX18kQAokICAkQAokICAkQEAKICAkQAokICRACi4gJEAKICAkQEAKICAgQAokLyBACi8kIEAKICAgQEAKICBfXyAgQAogLyAgKSBACihfXy8gIEAKICAgICAgQEAKICAgQAotLyBACi8gIEAKICAgQEAKIF8gIEAKIF8pIEAKL19fIEAKICAgIEBACiBfICBACiBfKSBACl9fKSBACiAgICBAQAogICAgQAooXy8gQAogLyAgQAogICAgQEAKIF9fIEAKL18gIEAKX18pIEAKICAgIEBACiAgX18gQAogL18gIEAKKF9fKSBACiAgICAgQEAKX19fIEAKIF8vIEAKLyAgIEAKICAgIEBACiAgXyAgQAogKF8pIEAKKF9fKSBACiAgICAgQEAKIF9fICBACihfXykgQApfXy8gIEAKICAgICBAQAogIEAKLiBACi4gQAogIEBACiAgQAouIEAKLCBACiAgQEAKJCAkQAokLyRACiRcJEAKJCAkQEAKJCAgJEAKJF9fJEAKJC0tJEAKJCAgJEBACiQgJEAKJFwkQAokLyRACiQgJEBACiQgXyBACiQgIClACiQgLiBACiQgICBAQAogQAogQAogQAogQEAKICBfICBACiAvX3wgQAooICB8IEAKICAgICBAQAogIF9fICBACiAvIF8pIEAKLyhfKSAgQAogICAgICBAQAogIF8gIEAKIC8gKSBACihfXyAgQAogICAgIEBACiAgX18gIEAKIC8gICkgQAovKF8vICBACiAgICAgIEBACiBfX18gQAooXyAgIEAKL19fICBACiAgICAgQEAKIF9fXyBACihfICQgQAovJCAgIEAKICAgICBAQAogIF9fICBACiAvIF8gIEAKKF9fKSAgQAogICAgICBAQAogICAgICBACiApX18vIEAKLyAgLyAgQAogICAgICBAQAogICBACiAvIEAKKCAgQAogICBAQAogICAgIEAKICAgLyBACihfLyAgQAogICAgIEBACiAgICAgIEAKIC9fXy8gQAovICApICBACiAgICAgIEBACiAgICBACiAvICBACihfXyBACiAgICBAQAogICAgICBACiAvfC98IEAKLyAgIHwgQAogICAgICBAQAogICAgICBACiAvfCApIEAKLyB8LyAgQAogICAgICBAQAogIF9fICBACiAvICApIEAKKF9fLyAgQAogICAgICBAQAogIF9fICBACiAvX18pIEAKLyAgJCAgQAogICAgICBAQAogIF9fICBACiAvICApIEAKKF9fXCAgQAogICAgICBAQAogIF9fICBACiAvX18pIEAKLyAoJCAgQAogICAgICBAQAogIF9fIEAKICggICBACl9fKSAgQAogICAgIEBACl9fX18gQAogLyAkIEAKKCAgICBACiAgICAgQEAKICAgICAgQAogLyAgLyBACihfXy8gIEAKICAgICAgQEAKICAgICBACiggIC8gQAp8Xy8gIEAKICAgICBAQAogICAgICBACiggICAvIEAKfC98LyAgQAogICAgICBAQAogICAgIEAKIFxfKSBACiggXCAgQAogICAgIEBACiAgICAgQAooX18vIEAKIC8kICBACiAgICAgQEAKIF9fIEAKIF8vIEAKL19fIEAKICAgIEBACiBfIEAKfCQgQAp8XyBACiAgIEBACiAgIEAKXCAgQAogXCBACiAgIEBACl8gIEAKJHwgQApffCBACiAgIEBACiAgIEAKL1wgQAokJCBACiAgIEBACiAgIEAKICAgQApfXyBACiAgIEBAClwgQAokIEAKJCBACiAgQEAKICAgQAogXyBACigvIEAKICAgQEAKICAgQAogLyBACigpIEAKICAgQEAKICAgQAogXyBACigkIEAKICAgQEAKICAgIEAKIF8vIEAKKC8gIEAKICAgIEBACiAgIEAKIF8kQAooLSBACiAgIEBACiBfIEAKKF8gQAovJCBACiAgIEBACiAgICBACiAgXyBACiAoLyBACl8vICBAQAogICBACiAvIEAKLykgQAogICBAQAogICBACiAnIEAKLyAgQAogICBAQAogICAgIEAKICAgJyBACiAgLyAgQApfLyAgIEBACiAgIEAKIC8gQAovKCBACiAgIEBACiAgIEAKIC8gQAooICBACiAgIEBACiAgICBACiBfICBACi8vKSBACiAgICBAQAogICBACiAgIEAKLykgQAogICBAQAogICBACiAgIEAKKCkgQAogICBAQAogICAgQAogICAgQAogLykgQAovICAgQEAKICAgQAogXyBACigvIEAKLyAgQEAKICAgQAogXyBACi8kIEAKICAgQEAKICAgIEAKICRfIEAKXykkIEAKICAgIEBACiAgIEAKXy8gQAovICBACiAgIEBACiAgIEAKICQgQAooLyBACiAgIEBACiAgIEAKJCQgQApcLyBACiAgIEBACiAgICBACiAkJCBACigoLyBACiAgICBAQAogICBACiQkIEAKKSggQAogICBAQAogICBACiAkIEAKKC8gQAovICBAQAogICBACl8gIEAKL18gQAogICBAQAooIEAKPCBACiggQAogIEBACnwgQAp8IEAKfCBACiAgQEAKKSBACj4gQAopIEAKICBAQAogICAgQAovXC8gQAogICAgQAogICAgQEAKIG9fbyBACiAvX3wgQAooICB8IEAKICAgICBAQAogb19fbyBACiAvICApIEAKKF9fLyAgQAogICAgICBAQAogIG8gIG9ACiAvICAvIEAKKF9fLyAgQAogICAgICBAQAogICBACi1fLUAKKC8gQAogICBAQAogICBACi0tIEAKKCkgQAogICBAQAogICBACi0gLUAKKC8gQAogICBAQAogICBfXyAgQAogIC8gXykgQAogLyhfKSAgQAovICAgICAgQEAK'
);

export default italic;