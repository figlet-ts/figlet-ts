import { FontFile } from '../../FontFile';

const morse2 = new FontFile(
    'morse2',
    'ZmxmMmEkIDEgMSAzMCAtMSA0MApNb3JzZSBieSBHbGVubiBDaGFwcGVsbCA8Z2djQHVpdWMuZWR1PiAxMC85NQpCYXNlZCBvbiBpbmZvIGZyb20gIk1vcnNlIENvZGUgYW5kIHRoZSBQaG9uZXRpYyBBbHBoYWJldHMiClVSTDogaHR0cDovL3d3dy5zb3Rvbi5hYy51ay9+c2NwOTNjaC9yZWZlci9hbHBoYWJldC5odG1sCkluY2x1ZGVzIHNvbWUgSVNPIExhdGluLTEgY2hhcmFjdGVycwpQZXJtaXNzaW9uIGlzIGhlcmVieSBnaXZlbiB0byBtb2RpZnkgdGhpcyBmb250LCBhcyBsb25nIGFzIHRoZQptb2RpZmllcidzIG5hbWUgaXMgcGxhY2VkIG9uIGEgY29tbWVudCBsaW5lLgoKVXNlIG9mIHRoaXMgZm9udCBhbGxvd3MgZmlnbGV0IHRvIGNvbnZlcnQgQVNDSUkgdG8gSW50ZXJuYXRpb25hbCBNb3JzZQpDb2RlLgoKVGhlIGZvbGxvd2luZyBzdWJzdGl0dXRpb25zIGhhdmUgYmVlbiBtYWRlLCBpLmUuLCBpZiBmaWdsZXQgcmVjZWl2ZXMgYQpjaGFyYWN0ZXIgb24gdGhlIGxlZnQgYXMgaW5wdXQsIGl0IHdpbGwgcHJpbnQgdGhlIE1vcnNlIENvZGUgZm9yIHRoZQpjaGFyYWN0ZXIgb24gdGhlIHJpZ2h0OgohICAgICAgICAgICAgICAgLT4gLgo7ICAgICAgICAgICAgICAgLT4gOgpbXXt9ICAgICAgICAgICAgLT4gKCkKR2VybWFuIHMteiAgICAgIC0+IHNzCkxhdGluLTEgInByaW1lIiAtPiAnCiMgICAgICAgICAgICAgICAtPiA8RGVsZXRlIGxhc3Qgd29yZD4KKiAgICAgICAgICAgICAgIC0+IENoCgpFeGNlcHQgYXMgbm90ZWQgYWJvdmUsIGNoYXJhY3RlcnMgbm90IGF2YWlsYWJsZSBpbiBNb3JzZSBDb2RlIHdpbGwgcHJpbnQKYXMgIj8iLgoKSW50ZXItd29yZCBzcGFjZXMgaGF2ZSBiZWVuIGVubGFyZ2VkIHRvIGltcHJvdmUgcmVhZGFiaWxpdHkuIFRvIGNvbmZvcm0KdG8gdGhlIHN0YW5kYXJkcyBmb3IgYXV0b21hdGljIHRyYW5zbWlzc2lvbiBvZiBNb3JzZSBDb2RlLCB1c2Ugc211c2htb2RlCnplcm8gKCJmaWdsZXQgLWYgbW9yc2UgLW0wIik7IHdhaXQgdGhlIGR1cmF0aW9uIG9mIGEgZG90IGZvciBlYWNoIGJsYW5rCmluIHRoZSBvdXRwdXQsIGFzIHdlbGwgYXMgYmV0d2VlbiBhbnkgdHdvIG91dHB1dCBjaGFyYWN0ZXJzIChkb3RzLApkYXNoZXMgb3IgYmxhbmtzKS4KCkV4cGxhbmF0aW9uIG9mIGZpcnN0IGxpbmU6CmZsZjIgLSAibWFnaWMgbnVtYmVyIiBmb3IgZmlsZSBpZGVudGlmaWNhdGlvbgphICAgIC0gc2hvdWxkIGFsd2F5cyBiZSBgYScsIGZvciBub3cKJCAgICAtIHRoZSAiaGFyZGJsYW5rIiAtLSBwcmludHMgYXMgYSBibGFuaywgYnV0IGNhbid0IGJlIHNtdXNoZWQKMSAgICAtIGhlaWdodCBvZiBhIGNoYXJhY3RlcgoxICAgIC0gaGVpZ2h0IG9mIGEgY2hhcmFjdGVyLCBub3QgaW5jbHVkaW5nIGRlc2NlbmRlcnMKMzAgICAtIG1heCBsaW5lIGxlbmd0aCAoZXhjbHVkaW5nIGNvbW1lbnQgbGluZXMpICsgYSBmdWRnZSBmYWN0b3IKLTEgICAtIGRlZmF1bHQgc211c2htb2RlIGZvciB0aGlzIGZvbnQKNDAgICAtIG51bWJlciBvZiBjb21tZW50IGxpbmVzCgogICRACi4tLi0uLSRACi4tLi4tLiRACi4uLi4uLi4uJEAKPyQjCj8kIwo/JCMKLi0tLS0uJEAKLS4tLS4tJEAKLS4tLS4tJEAKLS0tLSRACj8kIwotLS4uLS0kQAotLi4uLi0kQAouLS4tLi0kQAotLi4tLiRACi0tLS0tJEAKLi0tLS0kQAouLi0tLSRACi4uLi0tJEAKLi4uLi0kQAouLi4uLiRACi0uLi4uJEAKLS0uLi4kQAotLS0uLiRACi0tLS0uJEAKLS0tLi4uJEAKLS0tLi4uJEAKPyQjCj8kIwo/JCMKLi4tLS4uJEAKPyQjCi4tJEAKLS4uLiRACi0uLS4kQAotLi4kQAouJEAKLi4tLiRACi0tLiRACi4uLi4kQAouLiRACi4tLS0kQAotLi0kQAouLS4uJEAKLS0kQAotLiRACi0tLSRACi4tLS4kQAotLS4tJEAKLi0uJEAKLi4uJEAKLSRACi4uLSRACi4uLi0kQAouLS0kQAotLi4tJEAKLS4tLSRACi0tLi4kQAotLi0tLi0kQAo/JCMKLS4tLS4tJEAKPyQjCj8kIwo/JCMKLi0kQAotLi4uJEAKLS4tLiRACi0uLiRACi4kQAouLi0uJEAKLS0uJEAKLi4uLiRACi4uJEAKLi0tLSRACi0uLSRACi4tLi4kQAotLSRACi0uJEAKLS0tJEAKLi0tLiRACi0tLi0kQAouLS4kQAouLi4kQAotJEAKLi4tJEAKLi4uLSRACi4tLSRACi0uLi0kQAotLi0tJEAKLS0uLiRACi0uLS0uLSRACj8kIwotLi0tLi0kQAo/JCMKLi0uLSRACi0tLS4kQAouLi0tJEAKLi0uLSRACi0tLS4kQAouLi0tJEAKLi4uJC4uLiRACjAKPyQjCjE2MAogICRACjE3MQouLS4uLS4kQAoxODAKLi0tLS0uJEAKMTg3Ci4tLi4tLiRACjE4OAouLS0tLSQtLi4tLiQuLi4uLSRACjE4OQouLS0tLSQtLi4tLiQuLi0tLSRACjE5MAouLi4tLSQtLi4tLiQuLi4uLSRACjE5MwouLS0uLSRACjE5NgouLS4tJEAKMTk3Ci4tLS4tJEAKMjAxCi4uLS4uJEAKMjA5Ci0tLi0tJEAKMjE0Ci0tLS4kQAoyMjAKLi4tLSRACjIyMwouLi4kLi4uJEAKMjI1Ci4tLS4tJEAKMjI4Ci4tLi0kQAoyMjkKLi0tLi0kQAoyMzMKLi4tLi4kQAoyNDEKLS0uLS0kQAoyNDYKLS0tLiRACjI1MgouLi0tJEAK'
);

export default morse2;