import { FontFile } from '../../FontFile';

const alphabet = new FontFile(
    'alphabet',
    'ZmxmMmF/IDcgNSAxMCAtMSAxMgpBbHBoYWJldCBieSBXZW5kZWxsIEhpY2tlbiAxMS85MyAod2hpY2tlbkBwYXJhc29mdC5jb20pCgpFeHBsYW5hdGlvbiBvZiBmaXJzdCBsaW5lOgpmbGYyIC0gIm1hZ2ljIG51bWJlciIgZm9yIGZpbGUgaWRlbnRpZmljYXRpb24KYSAgICAtIHNob3VsZCBhbHdheXMgYmUgYGEnLCBmb3Igbm93CiQgICAgLSB0aGUgImhhcmRibGFuayIgLS0gcHJpbnRzIGFzIGEgYmxhbmssIGJ1dCBjYW4ndCBiZSBzbXVzaGVkCjYgICAgLSBoZWlnaHQgb2YgYSBjaGFyYWN0ZXIKNSAgICAtIGhlaWdodCBvZiBhIGNoYXJhY3Rlciwgbm90IGluY2x1ZGluZyBkZXNjZW5kZXJzCjIwICAgLSBtYXggbGluZSBsZW5ndGggKGV4Y2x1ZGluZyBjb21tZW50IGxpbmVzKSArIGEgZnVkZ2UgZmFjdG9yCjE1ICAgLSBkZWZhdWx0IHNtdXNobW9kZSBmb3IgdGhpcyBmb250IChsaWtlICItbSAxNSIgb24gY29tbWFuZCBsaW5lKQoxMiAgIC0gbnVtYmVyIG9mIGNvbW1lbnQgbGluZXMKCn9ACn9ACn9ACn9ACn9ACn9ACn9AQAohISEgQAohISEgQAohISEgQAogICAgQAohISEgQAogICAgQAogICAgQEAKJycgJycgQAonJyAnJyBACiAgICAgIEAKICAgICAgQAogICAgICBACiAgICAgIEAKICAgICAgQEAKICMgIyAgQAojIyMjIyBACiAjICMgIEAKIyMjIyMgQAogIyAjICBACiAgICAgIEAKICAgICAgQEAKICAkICQgICBACiAkJCQkJCAgQAokICQgJCAgIEAKICQkJCQkICBACiAgJCAkICQgQAogJCQkJCQgIEAKICAkICQgICBAQAolICAgJSUgQAogICAlJSAgQAogICUlICAgQAogJSUgICAgQAolJSAgICUgQAogICAgICAgQAogICAgICAgQEAKICYmICAgQAomICAmICBACiAmJiYgJkAKJiAmICYgQAogJiYmJiBACiAgICAgIEAKICAgICAgQEAKJycgQAonJyBACiAgIEAKICAgQAogICBACiAgIEAKICAgQEAKICgoIEAKKCggIEAKKCggIEAKKCggIEAKICgoIEAKICAgIEAKICAgIEBACikpICBACiApKSBACiApKSBACiApKSBACikpICBACiAgICBACiAgICBAQAogICAgICBACiogKiAqIEAKICoqKiAgQAoqKioqKiBACiAqKiogIEAKKiAqICogQAogICAgICBAQAogICAgQAogKyAgQAorKysgQAogKyAgQAogICAgQAogICAgQAogICAgQEAKICAgQAogICBACiAgIEAKICAgQAosLCBACiAsIEAKICAgQEAKICAgIEAKICAgIEAKLS0tIEAKICAgIEAKICAgIEAKICAgIEAKICAgIEBACiAgIEAKICAgQAogICBACi4uIEAKLi4gQAogICBACiAgIEBACiAgICAvL0AKICAgLy8gQAogIC8vICBACiAvLyAgIEAKLy8gICAgQAogICAgICBACiAgICAgIEBACiAwMDAgIEAKMCAgMDAgQAowIDAgMCBACjAwICAwIEAKIDAwMCAgQAogICAgICBACiAgICAgIEBACiAxMSAgQAoxMTEgIEAKIDExICBACiAxMSAgQAoxMWwxIEAKICAgICBACiAgICAgQEAKIDIyICBACjIgIDIgQAogIDIgIEAKIDIgICBACjIyMjIgQAogICAgIEAKICAgICBAQAozMzMgIEAKICAgMyBACiAzMyAgQAogICAzIEAKMzMzICBACiAgICAgQAogICAgIEBACjQgIDQgQAo0ICA0IEAKNDQ0NCBACiAgIDQgQAogICA0IEAKICAgICBACiAgICAgQEAKNTU1NSBACjUgICAgQAo1NTUgIEAKICAgNSBACjU1NSAgQAogICAgIEAKICAgICBAQAogIDYgICBACiA2ICAgIEAKNjY2NiAgQAo2ICAgNiBACiA2NjYgIEAKICAgICAgQAogICAgICBAQAo3Nzc3NyBACiAgIDcgIEAKICA3ICAgQAogIDcgICBACiAgNyAgIEAKICAgICAgQAogICAgICBAQAogODg4ICBACjggICA4IEAKIDg4OCAgQAo4ICAgOCBACiA4ODggIEAKICAgICAgQAogICAgICBAQAogOTk5OSBACjkgICA5IEAKIDk5OTkgQAogICA5ICBACiAgOSAgIEAKICAgICAgQAogICAgICBAQAogICBACjo6IEAKICAgQAo6OiBACiAgIEAKICAgQAogICBAQAogICBACjs7IEAKICAgQAo7OyBACiA7IEAKICAgQAogICBAQAogIDw8IEAKIDw8ICBACjw8ICAgQAogPDwgIEAKICA8PCBACiAgICAgQAogICAgIEBACiAgICBACj09PSBACiAgICBACj09PSBACiAgICBACiAgICBACiAgICBAQAo+PiAgIEAKID4+ICBACiAgPj4gQAogPj4gIEAKPj4gICBACiAgICAgQAogICAgIEBACiA/Pz8gIEAKPyAgID8gQAogICA/ICBACiAgPyAgIEAKICA/ICAgQAogICAgICBACiAgICAgIEBACiBAQEAgIEAKQCAgIEAgQApAICBAQCBACkAgICAgIEAKIEBAQCAgQAogICAgICBACiAgICAgIEBACiBBQSAgQApBICBBIEAKQUFBQSBACkEgIEEgQApBICBBIEAKICAgICBACiAgICAgQEAKQkJCQiAgQApCICAgQiBACkJCQkIgIEAKQiAgIEIgQApCQkJCICBACiAgICAgIEAKICAgICAgQEAKIENDQyBACkMgICAgQApDICAgIEAKQyAgICBACiBDQ0MgQAogICAgIEAKICAgICBAQApEREQgIEAKRCAgRCBACkQgIEQgQApEICBEIEAKREREICBACiAgICAgQAogICAgIEBACkVFRUUgQApFICAgIEAKRUVFICBACkUgICAgQApFRUVFIEAKICAgICBACiAgICAgQEAKRkZGRiBACkYgICAgQApGRkYgIEAKRiAgICBACkYgICAgQAogICAgIEAKICAgICBAQAogR0dHICBACkcgICAgIEAKRyAgR0cgQApHICAgRyBACiBHR0cgIEAKICAgICAgQAogICAgICBAQApIICBIIEAKSCAgSCBACkhISEggQApIICBIIEAKSCAgSCBACiAgICAgQAogICAgIEBACklJSSBACiBJICBACiBJICBACiBJICBACklJSSBACiAgICBACiAgICBAQAogICAgSiBACiAgICBKIEAKICAgIEogQApKICAgSiBACiBKSkogIEAKICAgICAgQAogICAgICBAQApLICBLIEAKSyBLICBACktLICAgQApLIEsgIEAKSyAgSyBACiAgICAgQAogICAgIEBACkwgICAgQApMICAgIEAKTCAgICBACkwgICAgQApMTExMIEAKICAgICBACiAgICAgQEAKTSAgIE0gQApNTSBNTSBACk0gTSBNIEAKTSAgIE0gQApNICAgTSBACiAgICAgIEAKICAgICAgQEAKTiAgIE4gQApOTiAgTiBACk4gTiBOIEAKTiAgTk4gQApOICAgTiBACiAgICAgIEAKICAgICAgQEAKIE9PTyAgQApPICAgTyBACk8gICBPIEAKTyAgIE8gQAogT09PICBACiAgICAgIEAKICAgICAgQEAKUFBQUCAgQApQICAgUCBAClBQUFAgIEAKUCAgICAgQApQICAgICBACiAgICAgIEAKICAgICAgQEAKIFFRUSAgIEAKUSAgIFEgIEAKUSAgIFEgIEAKUSAgUVEgIEAKIFFRUVEgIEAKICAgICBRIEAKICAgICAgIEBAClJSUlIgIEAKUiAgIFIgQApSUlJSICBAClIgUiAgIEAKUiAgUlIgQAogICAgICBACiAgICAgIEBACiBTU1MgIEAKUyAgICAgQAogU1NTICBACiAgICBTIEAKU1NTUyAgQAogICAgICBACiAgICAgIEBAClRUVFRUVCBACiAgVFQgICBACiAgVFQgICBACiAgVFQgICBACiAgVFQgICBACiAgICAgICBACiAgICAgICBAQApVICAgVSBAClUgICBVIEAKVSAgIFUgQApVICAgVSBACiBVVVUgIEAKICAgICAgQAogICAgICBAQApWICAgICBWIEAKViAgICAgViBACiBWICAgViAgQAogIFYgViAgIEAKICAgViAgICBACiAgICAgICAgQAogICAgICAgIEBAClcgICAgIFcgQApXICAgICBXIEAKVyAgVyAgVyBACiBXIFcgVyAgQAogIFcgVyAgIEAKICAgICAgICBACiAgICAgICAgQEAKWCAgIFggQAogWCBYICBACiAgWCAgIEAKIFggWCAgQApYICAgWCBACiAgICAgIEAKICAgICAgQEAKWSAgIFkgQAogWSBZICBACiAgWSAgIEAKICBZICAgQAogIFkgICBACiAgICAgIEAKICAgICAgQEAKWlpaWlogQAogICBaICBACiAgWiAgIEAKIFogICAgQApaWlpaWiBACiAgICAgIEAKICAgICAgQEAKW1tbWyBACltbICAgQApbWyAgIEAKW1sgICBACltbW1sgQAogICAgIEAKICAgICBAQApcXCAgICBACiBcXCAgIEAKICBcXCAgQAogICBcXCBACiAgICBcXEAKICAgICAgQAogICAgICBAQApdXV1dIEAKICBdXSBACiAgXV0gQAogIF1dIEAKXV1dXSBACiAgICAgQAogICAgIEBACiBeXiAgQApeICBeIEAKICAgICBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQEAKICAgIEAKICAgIEAKICAgIEAKICAgIEAKX19fX0AKX19fX0AKICAgIEBACmBgIEAKICAgQAogICBACiAgIEAKICAgQAogICBACiAgIEBACiAgICBACiAgICBACiBhYSBACmEgYSBACmFhYSBACiAgICBACiAgICBAQApiICAgIEAKYiAgICBACmJiYiAgQApiICBiIEAKYmJiICBACiAgICAgQAogICAgIEBACiAgICAgQAogICAgIEAKIGNjYyBACmMgICAgQAogY2NjIEAKICAgICBACiAgICAgQEAKICAgZCBACiAgIGQgQAogZGRkIEAKZCAgZCBACiBkZGQgQAogICAgIEAKICAgICBAQAogICAgQAogICAgQAplZWUgQAplIGUgQAplZSAgQAogICAgQAogICAgQEAKIGZmIEAKIGYgIEAKZmZmIEAKIGYgIEAKIGYgIEAKICAgIEAKICAgIEBACiAgICBACiAgICBACmdnZyBACmcgZyBACmdnZyBACiAgZyBACmdnZyBAQApoICAgIEAKaCAgICBACmhoaCAgQApoICBoIEAKaCAgaCBACiAgICAgQAogICAgIEBACiAgIEAKaWkgQAogICBACmlpIEAKaWkgQAogICBACiAgIEBACiAgICAgQAogICBqIEAKICAgICBACiAgIGogQAogICBqIEAKaiAgaiBACiBqaiAgQEAKayAgICBACmsgayAgQAprayAgIEAKayBrICBACmsgIGsgQAogICAgIEAKICAgICBAQApsIEAKbCBACmwgQApsIEAKbCBACiAgQAogIEBACiAgICAgIEAKICAgICAgQAptbW1tICBACm0gbSBtIEAKbSBtIG0gQAogICAgICBACiAgICAgIEBACiAgICAgQAogICAgIEAKbm5uICBACm4gIG4gQApuICBuIEAKICAgICBACiAgICAgQEAKICAgIEAKICAgIEAKb29vIEAKbyBvIEAKb29vIEAKICAgIEAKICAgIEBACiAgICAgQAogICAgIEAKcHBwICBACnAgIHAgQApwcHAgIEAKcCAgICBACnAgICAgQEAKICAgICAgQAogICAgICBACiBxcXEgIEAKcSAgcSAgQAogcXFxICBACiAgIHEgIEAKICAgcXEgQEAKICAgIEAKICAgIEAKcnJyIEAKciAgIEAKciAgIEAKICAgIEAKICAgIEBACiAgICBACiAgICBACiBzcyBACiBzICBACnNzICBACiAgICBACiAgICBAQAogdCAgQAogdCAgQAp0dHQgQAogdCAgQAogdHQgQAogICAgQAogICAgQEAKICAgICBACiAgICAgQAp1ICB1IEAKdSAgdSBACiB1dXUgQAogICAgIEAKICAgICBAQAogICAgQAogICAgQAp2IHYgQAp2IHYgQAogdiAgQAogICAgQAogICAgQEAKICAgICAgQAogICAgICBACncgICB3IEAKdyB3IHcgQAogdyB3ICBACiAgICAgIEAKICAgICAgQEAKICAgIEAKICAgIEAKeCB4IEAKIHggIEAKeCB4IEAKICAgIEAKICAgIEBACiAgICAgQAogICAgIEAKeSAgeSBACnkgIHkgQAogeXl5IEAKICAgeSBACnl5eSAgQEAKICAgIEAKICAgIEAKenogIEAKIHogIEAKIHp6IEAKICAgIEAKICAgIEBACiAge3sgQAoge3sgIEAKe3sgICBACiB7eyAgQAogIHt7IEAKICAgICBACiAgICAgQEAKfHxACnx8QAp8fEAKfHxACnx8QAp8fEAKICBAQAp9fSAgIEAKIH19ICBACiAgfX0gQAogfX0gIEAKfX0gICBACiAgICAgQAogICAgIEBACiAgICAgQAogfiB+IEAKfiB+ICBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQEAKbyAgbyBACiBBQSAgQApBICBBIEAKQUFBQSBACkEgIEEgQAogICAgIEAKICAgICBAQApvICAgbyBACiBPT08gIEAKTyAgIE8gQApPICAgTyBACiBPT08gIEAKICAgICAgQAogICAgICBAQApvICAgbyBAClUgICBVIEAKVSAgIFUgQApVICAgVSBACiBVVVUgIEAKICAgICAgQAogICAgICBAQApvIG8gQAogICAgQAogYWEgQAphIGEgQAphYWEgQAogICAgQAogICAgQEAKbyBvIEAKICAgIEAKb29vIEAKbyBvIEAKb29vIEAKICAgIEAKICAgIEBACm8gIG8gQAogICAgIEAKdSAgdSBACnUgIHUgQAogdXV1IEAKICAgICBACiAgICAgQEAKQkJCQiAgQApCICAgQiBACkJCQkIgIEAKQiAgIEIgQApCQkJCICBACkIgICAgIEAKICAgICAgQEAK'
);

export default alphabet;