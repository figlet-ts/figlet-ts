import { FontFile } from '../../FontFile';

const puzzle = new FontFile(
    'puzzle',
    'ZmxmMmEkIDUgNSAxMiAwIDExIDAgMCAwCkF1dGhvciA6IG15ZmxpeCBhbmQgTWlrZWNoYXQKRGF0ZSAgIDogMjAwNi80LzkgMTQ6Mzc6MDQKVmVyc2lvbjogMS4wCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KVGhpcyBmb250IGhhcyBiZWVuIGNyZWF0ZWQgdXNpbmcgSmF2RSdzIEZJR2xldCBmb250IGV4cG9ydCBhc3Npc3RhbnQuCkhhdmUgYSBsb29rIGF0OiBodHRwOi8vd3d3LmphdmUuZGUKClBlcm1pc3Npb24gaXMgaGVyZWJ5IGdpdmVuIHRvIG1vZGlmeSB0aGlzIGZvbnQsIGFzIGxvbmcgYXMgdGhlCm1vZGlmaWVyJ3MgbmFtZSBpcyBwbGFjZWQgb24gYSBjb21tZW50IGxpbmUuCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfICAgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyAhIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gIiBfIChfICMKICB8XyggKV9ffCMjCiMjCiAjCiAjCiAjCiAjIwokIwogIwogIwogIwogIyMKJSMKICMKICMKICMKICMjCiYjCiAjCiAjCiAjCiAjIwonIwogIwogIwogIwogIyMKKCMKICMKICMKICMKICMjCikjCiAjCiAjCiAjCiAjIwoqIwogIwogIwogIwogIyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gKyBfIChfICMKICB8XyggKV9ffCMjCiwjCiAjCiAjCiAjCiAjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyAtIF8gKF8gIwogIHxfKCApX198IyMKLiMKICMKICMKICMKICMjCi8jCiAjCiAjCiAjCiAjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyAwIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gMSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIDIgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyAzIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gNCBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIDUgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyA2IF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gNyBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIDggXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyA5IF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gOiBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIDsgXyAoXyAjCiAgfF8oIClfX3wjIwo8IwogIwogIwogIwogIyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gPSBfIChfICMKICB8XyggKV9ffCMjCj4jCiAjCiAjCiAjCiAjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyA/IF8gKF8gIwogIHxfKCApX198IyMKQCMKICMKICMKICMKICMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEEgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBCIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gQyBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEQgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBFIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gRiBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEcgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBIIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gSSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEogXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBLIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gTCBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIE0gXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBOIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gTyBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFAgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBRIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gUiBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFMgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBUIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gVSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFYgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBXIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gWCBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFkgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBaIF8gKF8gIwogIHxfKCApX198IyMKWyMKICMKICMKICMKICMjClwjCiAjCiAjCiAjCiAjIwpdIwogIwogIwogIwogIyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gXiBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIF8gXyAoXyAjCiAgfF8oIClfX3wjIwpgIwogIwogIwogIwogIyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gQSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEIgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBDIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gRCBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEUgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBGIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gRyBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEggXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBJIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gSiBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIEsgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBMIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gTSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIE4gXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBPIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gUCBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFEgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBSIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gUyBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFQgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBVIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gViBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFcgXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBYIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gWSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIFogXyAoXyAjCiAgfF8oIClfX3wjIwp7IwogIwogIwogIwogIyMKfCMKICMKICMKICMKICMjCn0jCiAjCiAjCiAjCiAjIwp+IwogIwogIwogIwogIyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gQSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIE8gXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBVIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gQSBfIChfICMKICB8XyggKV9ffCMjCiAgICAgXyAgICAjCiAgIF8oIClfXyAjCiBffCAgICAgX3wjCihfIE8gXyAoXyAjCiAgfF8oIClfX3wjIwogICAgIF8gICAgIwogICBfKCApX18gIwogX3wgICAgIF98IwooXyBVIF8gKF8gIwogIHxfKCApX198IyMKICAgICBfICAgICMKICAgXyggKV9fICMKIF98ICAgICBffCMKKF8gICBfIChfICMKICB8XyggKV9ffCMjCg=='
);

export default puzzle;
