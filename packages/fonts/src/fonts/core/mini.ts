import { FontFile } from '../../FontFile';

const mini = new FontFile(
    'mini',
    'ZmxmMmEkIDQgMyAxMCAwIDEwIDAgMTkyMApNaW5pIGJ5IEdsZW5uIENoYXBwZWxsIDQvOTMKSW5jbHVkZXMgSVNPIExhdGluLTEKZmlnbGV0IHJlbGVhc2UgMi4xIC0tIDEyIEF1ZyAxOTk0ClBlcm1pc3Npb24gaXMgaGVyZWJ5IGdpdmVuIHRvIG1vZGlmeSB0aGlzIGZvbnQsIGFzIGxvbmcgYXMgdGhlCm1vZGlmaWVyJ3MgbmFtZSBpcyBwbGFjZWQgb24gYSBjb21tZW50IGxpbmUuCgpNb2RpZmllZCBieSBQYXVsIEJ1cnRvbiA8c29sdXRpb25AZWFydGhsaW5rLm5ldD4gMTIvOTYgdG8gaW5jbHVkZSBuZXcgcGFyYW1ldGVyCnN1cHBvcnRlZCBieSBGSUdsZXQgYW5kIEZJR1dpbi4gIE1heSBhbHNvIGJlIHNsaWdodGx5IG1vZGlmaWVkIGZvciBiZXR0ZXIgdXNlCm9mIG5ldyBmdWxsLXdpZHRoL2tlcm4vc211c2ggYWx0ZXJuYXRpdmVzLCBidXQgZGVmYXVsdCBvdXRwdXQgaXMgTk9UIGNoYW5nZWQuCgokJEAKJCRACiQkQAokJEBACiAgIEAKIHwkQAogbyRACiAgIEBACiAgICBACiB8fCRACiAgICBACiAgICBAQAogICAgICAgQAogLXwtfC0kQAogLXwtfC0kQAogICAgICAgQEAKICAgXyRACiAofCQgQAogX3wpJEAKICAgICBAQAogICAgQAogTy8kQAogL08kQAogICAgQEAKICAgICBACiAoKSQgQAogKF9YJEAKICAgICBAQAogICBACiAvJEAKICAgQAogICBAQAogICAgQAogIC8kQAogfCQgQAogIFwkQEAKICAgIEAKIFwkIEAKICB8JEAKIC8kIEBACiAgICAgQAogXHwvJEAKIC98XCRACiAgICAgQEAKICAgICBACiBffF8kQAogIHwkIEAKICAgICBAQAogICBACiAgIEAKIG8kQAogLyRAQAogICAgQAogX18kQAogICAgQAogICAgQEAKICAgQAogICBACiBvJEAKICAgQEAKICAgIEAKICAvJEAKIC8kIEAKICAgIEBACiAgXyQgQAogLyBcJEAKIFxfLyRACiAgICAgQEAKICAgIEAKIC98JEAKICB8JEAKICAgIEBACiBfJCBACiAgKSRACiAvXyRACiAgICBAQAogXyQgQAogXykkQAogXykkQAogICAgQEAKICAgICAgQAogfF98XyRACiAgIHwkIEAKICAgICAgQEAKICBfJCBACiB8XyQgQAogIF8pJEAKICAgICBAQAogIF8kIEAKIHxfJCBACiB8XykkQAogICAgIEBACiBfXyRACiAgLyRACiAvJCBACiAgICBAQAogIF8kIEAKIChfKSRACiAoXykkQAogICAgIEBACiAgXyQgQAogKF98JEAKICAgfCRACiAgICAgQEAKICAgQAogbyRACiBvJEAKICAgQEAKICAgQAogbyRACiBvJEAKIC8kQEAKICAgQAogLyRACiBcJEAKICAgQEAKICAgIEAKIC0tJEAKIC0tJEAKICAgIEBACiAgIEAKIFwkQAogLyRACiAgIEBACiBfJCBACiAgKSRACiBvJCBACiAgICBAQAogICBfXyQgQAogIC8gIFwkQAogfCAofC8kQAogIFxfXyQgQEAKICAgICAgQAogIC9cJCBACiAvLS1cJEAKICAgICAgQEAKICBfJCBACiB8XykkQAogfF8pJEAKICAgICBAQAogIF8kQAogLyQgQAogXF8kQAogICAgQEAKICBfJCBACiB8IFwkQAogfF8vJEAKICAgICBAQAogIF8kQAogfF8kQAogfF8kQAogICAgQEAKICBfJEAKIHxfJEAKIHwkIEAKICAgIEBACiAgX18kQAogL19fJEAKIFxffCRACiAgICAgQEAKICAgICBACiB8X3wkQAogfCB8JEAKICAgICBAQAogX19fJEAKICB8JCBACiBffF8kQAogICAgIEBACiAgICAgQAogICB8JEAKIFxffCRACiAgICAgQEAKICAgIEAKIHwvJEAKIHxcJEAKICAgIEBACiAgICBACiB8JCBACiB8XyRACiAgICBAQAogICAgICBACiB8XC98JEAKIHwgIHwkQAogICAgICBAQAogICAgICBACiB8XCB8JEAKIHwgXHwkQAogICAgICBAQAogIF8kIEAKIC8gXCRACiBcXy8kQAogICAgIEBACiAgXyQgQAogfF8pJEAKIHwkICBACiAgICAgQEAKICBfJCBACiAvIFwkQAogXF9YJEAKICAgICBAQAogIF8kIEAKIHxfKSRACiB8IFwkQAogICAgIEBACiAgX18kQAogKF8kIEAKIF9fKSRACiAgICAgQEAKIF9fXyRACiAgfCQgQAogIHwkIEAKICAgICBAQAogICAgIEAKIHwgfCRACiB8X3wkQAogICAgIEBACiAgICAgIEAKIFwgIC8kQAogIFwvJCBACiAgICAgIEBACiAgICAgICAgQAogXCAgICAvJEAKICBcL1wvJCBACiAgICAgICAgQEAKICAgIEAKIFwvJEAKIC9cJEAKICAgIEBACiAgICAgQAogXF8vJEAKICB8JCBACiAgICAgQEAKIF9fJEAKICAvJEAKIC9fJEAKICAgIEBACiAgXyRACiB8JCBACiB8XyRACiAgICBAQAogICAgQAogXCQgQAogIFwkQAogICAgQEAKIF8kIEAKICB8JEAKIF98JEAKICAgIEBACiAvXCRACiAgICBACiAgICBACiAgICBAQAogICAgQAogICAgQAogICAgQAogX18kQEAKICAgQAogXCRACiAgIEAKICAgQEAKICAgICBACiAgXy4kQAogKF98JEAKICAgICBAQAogICAgIEAKIHxfJCBACiB8XykkQAogICAgIEBACiAgICBACiAgXyRACiAoXyRACiAgICBAQAogICAgIEAKICBffCRACiAoX3wkQAogICAgIEBACiAgICAgQAogIF8kIEAKICgvXyRACiAgICAgQEAKICAgXyRACiBffF8kQAogIHwkIEAKICAgICBAQAogICAgIEAKICBfJCBACiAoX3wkQAogIF98JEBACiAgICAgQAogfF8kIEAKIHwgfCRACiAgICAgQEAKICAgQAogbyRACiB8JEAKICAgQEAKICAgIEAKICBvJEAKICB8JEAKIF98JEBACiAgICBACiB8JCBACiB8PCRACiAgICBAQAogICBACiB8JEAKIHwkQAogICBAQAogICAgICAgQAogLl8gXyQgQAogfCB8IHwkQAogICAgICAgQEAKICAgICBACiAuXyQgQAogfCB8JEAKICAgICBAQAogICAgIEAKICBfJCBACiAoXykkQAogICAgIEBACiAgICAgQAogLl8kIEAKIHxfKSRACiB8JCAgQEAKICAgICBACiAgXy4kQAogKF98JEAKICAgfCRAQAogICAgQAogLl8kQAogfCQgQAogICAgQEAKICAgIEAKICBfJEAKIF8+JEAKICAgIEBACiAgICAgQAogX3xfJEAKICB8XyRACiAgICAgQEAKICAgICBACiAgICAgQAogfF98JEAKICAgICBAQAogICAgQAogICAgQAogXC8kQAogICAgQEAKICAgICAgQAogICAgICBACiBcL1wvJEAKICAgICAgQEAKICAgIEAKICAgIEAKID48JEAKICAgIEBACiAgICBACiAgICBACiBcLyRACiAvJCBAQAogICAgQAogXyQgQAogL18kQAogICAgQEAKICAsLSRACiBffCQgQAogIHwkIEAKICBgLSRAQAogfCRACiB8JEAKIHwkQAogfCRAQAogLS4kIEAKICB8XyRACiAgfCQgQAogLSckIEBACiAvXC8kQAogICAgIEAKICAgICBACiAgICAgQEAKIG8gIG8kQAogIC9cJCBACiAvLS1cJEAKICAgICAgQEAKIG9fbyRACiAvIFwkQAogXF8vJEAKICAgICBAQAogbyBvJEAKIHwgfCRACiB8X3wkQAogICAgIEBACiBvIG8kQAogIF8uJEAKIChffCRACiAgICAgQEAKIG8gbyRACiAgXyQgQAogKF8pJEAKICAgICBAQAogbyBvJEAKICAgICBACiB8X3wkQAogICAgIEBACiAgXyQgQAogfCApJEAKIHwgKSRACiB8JCAgQEAKMTYwICBOTy1CUkVBSyBTUEFDRQogJCRACiAkJEAKICQkQAogJCRAQAoxNjEgIElOVkVSVEVEIEVYQ0xBTUFUSU9OIE1BUksKICAgQAogbyRACiB8JEAKICAgQEAKMTYyICBDRU5UIFNJR04KICAgICBACiAgfF8kQAogKF9fJEAKICB8JCBAQAoxNjMgIFBPVU5EIFNJR04KICAgIF8kICBACiAgXy9fYCQgQAogICB8X19fJEAKICAgICAgICBAQAoxNjQgIENVUlJFTkNZIFNJR04KICAgICBACiBgbyckQAogJyBgJEAKICAgICBAQAoxNjUgIFlFTiBTSUdOCiAgICAgICBACiBfXF8vXyRACiAtLXwtLSRACiAgICAgICBAQAoxNjYgIEJST0tFTiBCQVIKIHwkQAogfCRACiB8JEAKIHwkQEAKMTY3ICBTRUNUSU9OIFNJR04KICBfJEAKICgkIEAKICgpJEAKIF8pJEBACjE2OCAgRElBRVJFU0lTCiBvIG8kQAogICAgIEAKICAgICBACiAgICAgQEAKMTY5ICBDT1BZUklHSFQgU0lHTgogIF8kIEAKIHxDfCRACiBgLSckQAogICAgIEBACjE3MCAgRkVNSU5JTkUgT1JESU5BTCBJTkRJQ0FUT1IKICBfLiRACiAoX3wkQAogLS0tJEAKICAgICBAQAoxNzEgIExFRlQtUE9JTlRJTkcgRE9VQkxFIEFOR0xFIFFVT1RBVElPTiBNQVJLCiAgICBACiAvLyRACiBcXCRACiAgICBAQAoxNzIgIE5PVCBTSUdOCiAgICAgQAogX18kIEAKICAgfCRACiAgICAgQEAKMTczICBTT0ZUIEhZUEhFTgogICBACiBfJEAKICAgQAogICBAQAoxNzQgIFJFR0lTVEVSRUQgU0lHTgogIF8kIEAKIHxSfCRACiBgLSckQAogICAgIEBACjE3NSAgTUFDUk9OCiBfXyRACiAgICBACiAgICBACiAgICBAQAoxNzYgIERFR1JFRSBTSUdOCiBPJEAKICAgQAogICBACiAgIEBACjE3NyAgUExVUy1NSU5VUyBTSUdOCiAgICAgQAogX3xfJEAKIF98XyRACiAgICAgQEAKMTc4ICBTVVBFUlNDUklQVCBUV08KIDIkQAogICBACiAgIEAKICAgQEAKMTc5ICBTVVBFUlNDUklQVCBUSFJFRQogMyRACiAgIEAKICAgQAogICBAQAoxODAgIEFDVVRFIEFDQ0VOVAogLyRACiAgIEAKICAgQAogICBAQAoxODEgIE1JQ1JPIFNJR04KICAgICBACiAgICAgQAogfF98JEAKIHwkICBAQAoxODIgIFBJTENST1cgU0lHTgogIF9fJCBACiAofCB8JEAKICB8IHwkQAogICAgICBAQAoxODMgIE1JRERMRSBET1QKICAgQAogbyRACiAgIEAKICAgQEAKMTg0ICBDRURJTExBCiAgIEAKICAgQAogICBACiBTJEBACjE4NSAgU1VQRVJTQ1JJUFQgT05FCiAxJEAKICAgQAogICBACiAgIEBACjE4NiAgTUFTQ1VMSU5FIE9SRElOQUwgSU5ESUNBVE9SCiAgXyQgQAogKF8pJEAKIC0tLSRACiAgICAgQEAKMTg3ICBSSUdIVC1QT0lOVElORyBET1VCTEUgQU5HTEUgUVVPVEFUSU9OIE1BUksKICAgIEAKIFxcJEAKIC8vJEAKICAgIEBACjE4OCAgVlVMR0FSIEZSQUNUSU9OIE9ORSBRVUFSVEVSCiAgICBACiAxLyRACiAvNCRACiAgICBAQAoxODkgIFZVTEdBUiBGUkFDVElPTiBPTkUgSEFMRgogICAgQAogMS8kQAogLzIkQAogICAgQEAKMTkwICBWVUxHQVIgRlJBQ1RJT04gVEhSRUUgUVVBUlRFUlMKICAgIEAKIDMvJEAKIC80JEAKICAgIEBACjE5MSAgSU5WRVJURUQgUVVFU1RJT04gTUFSSwogICAgQAogIG8kQAogKF8kQAogICAgQEAKMTkyICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggR1JBVkUKICAgXCQgQAogIC9cJCBACiAvLS1cJEAKICAgICAgQEAKMTkzICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggQUNVVEUKICAvJCAgQAogIC9cJCBACiAvLS1cJEAKICAgICAgQEAKMTk0ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggQ0lSQ1VNRkxFWAogIC9cJCBACiAgL1wkIEAKIC8tLVwkQAogICAgICBAQAoxOTUgIExBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBUSUxERQogIC9cLyRACiAgL1wkIEAKIC8tLVwkQAogICAgICBAQAoxOTYgIExBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBESUFFUkVTSVMKIG8gIG8kQAogIC9cJCBACiAvLS1cJEAKICAgICAgQEAKMTk3ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRQogICBPJCAgQAogIC8gXCQgQAogLy0tLVwkQAogICAgICAgQEAKMTk4ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBRQogICAgXyRACiAgL3xfJEAKIC8tfF8kQAogICAgICBAQAoxOTkgIExBVElOIENBUElUQUwgTEVUVEVSIEMgV0lUSCBDRURJTExBCiAgXyRACiAvJCBACiBcXyRACiAgUyRAQAoyMDAgIExBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBHUkFWRQogXF8kQAogfF8kQAogfF8kQAogICAgQEAKMjAxICBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQUNVVEUKICBfLyRACiB8XyQgQAogfF8kIEAKICAgICBAQAoyMDIgIExBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBDSVJDVU1GTEVYCiAgL1wkQAogfF8kIEAKIHxfJCBACiAgICAgQEAKMjAzICBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggRElBRVJFU0lTCiBvX28kQAogfF8kIEAKIHxfJCBACiAgICAgQEAKMjA0ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBJIFdJVEggR1JBVkUKIFxfXyRACiAgfCQgQAogX3xfJEAKICAgICBAQAoyMDUgIExBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBBQ1VURQogX18vJEAKICB8JCBACiBffF8kQAogICAgIEBACjIwNiAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgSSBXSVRIIENJUkNVTUZMRVgKICAvXCRACiBfX18kQAogX3xfJEAKICAgICBAQAoyMDcgIExBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBESUFFUkVTSVMKIG9fbyRACiAgfCQgQAogX3xfJEAKICAgICBAQAoyMDggIExBVElOIENBUElUQUwgTEVUVEVSIEVUSAogICBfJCBACiBffF9cJEAKICB8Xy8kQAogICAgICBAQAoyMDkgIExBVElOIENBUElUQUwgTEVUVEVSIE4gV0lUSCBUSUxERQogIC9cLyRACiB8XCB8JEAKIHwgXHwkQAogICAgICBAQAoyMTAgIExBVElOIENBUElUQUwgTEVUVEVSIE8gV0lUSCBHUkFWRQogIFwkIEAKIC8gXCRACiBcXy8kQAogICAgIEBACjIxMSAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIEFDVVRFCiAgLyQgQAogLyBcJEAKIFxfLyRACiAgICAgQEAKMjEyICBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggQ0lSQ1VNRkxFWAogIC9cJEAKIC8gXCRACiBcXy8kQAogICAgIEBACjIxMyAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIFRJTERFCiAvXC8kQAogLyBcJEAKIFxfLyRACiAgICAgQEAKMjE0ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggRElBRVJFU0lTCiBvX28kQAogLyBcJEAKIFxfLyRACiAgICAgQEAKMjE1ICBNVUxUSVBMSUNBVElPTiBTSUdOCiAgIEAKICAgQAogWCRACiAgIEBACjIxNiAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIFNUUk9LRQogIF9fJCBACiAvIC9cJEAKIFwvXy8kQAogICAgICBAQAoyMTcgIExBVElOIENBUElUQUwgTEVUVEVSIFUgV0lUSCBHUkFWRQogIFwkIEAKIHwgfCRACiB8X3wkQAogICAgIEBACjIxOCAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIEFDVVRFCiAgLyQgQAogfCB8JEAKIHxffCRACiAgICAgQEAKMjE5ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggQ0lSQ1VNRkxFWAogIC9cJEAKIHwgfCRACiB8X3wkQAogICAgIEBACjIyMCAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIERJQUVSRVNJUwogbyBvJEAKIHwgfCRACiB8X3wkQAogICAgIEBACjIyMSAgTEFUSU4gQ0FQSVRBTCBMRVRURVIgWSBXSVRIIEFDVVRFCiAgLyQgQAogXF8vJEAKICB8JCBACiAgICAgQEAKMjIyICBMQVRJTiBDQVBJVEFMIExFVFRFUiBUSE9STgogfF8kIEAKIHxfKSRACiB8JCAgQAogICAgIEBACjIyMyAgTEFUSU4gU01BTEwgTEVUVEVSIFNIQVJQIFMKICBfJCBACiB8ICkkQAogfCApJEAKIHwkICBAQAoyMjQgIExBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggR1JBVkUKICBcJCBACiAgXy4kQAogKF98JEAKICAgICBAQAoyMjUgIExBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQUNVVEUKICAvJCBACiAgXy4kQAogKF98JEAKICAgICBAQAoyMjYgIExBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQ0lSQ1VNRkxFWAogIC9cJEAKICBfLiRACiAoX3wkQAogICAgIEBACjIyNyAgTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBUSUxERQogL1wvJEAKICBfLiRACiAoX3wkQAogICAgIEBACjIyOCAgTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBESUFFUkVTSVMKIG8gbyRACiAgXy4kQAogKF98JEAKICAgICBAQAoyMjkgIExBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRQogIE8kIEAKICBfLiRACiAoX3wkQAogICAgIEBACjIzMCAgTEFUSU4gU01BTEwgTEVUVEVSIEFFCiAgICAgICBACiAgX19fJCBACiAoX3wvXyRACiAgICAgICBAQAoyMzEgIExBVElOIFNNQUxMIExFVFRFUiBDIFdJVEggQ0VESUxMQQogICAgQAogIF8kQAogKF8kQAogIFMkQEAKMjMyICBMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIEdSQVZFCiAgXCQgQAogIF8kIEAKICgvXyRACiAgICAgQEAKMjMzICBMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIEFDVVRFCiAgLyQgQAogIF8kIEAKICgvXyRACiAgICAgQEAKMjM0ICBMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIENJUkNVTUZMRVgKICAvXCRACiAgXyQgQAogKC9fJEAKICAgICBAQAoyMzUgIExBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggRElBRVJFU0lTCiBvIG8kQAogIF8kIEAKICgvXyRACiAgICAgQEAKMjM2ICBMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIEdSQVZFCiBcJEAKICAgQAogfCRACiAgIEBACjIzNyAgTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBBQ1VURQogLyRACiAgIEAKIHwkQAogICBAQAoyMzggIExBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQ0lSQ1VNRkxFWAogL1wkQAogICAgQAogfCQgQAogICAgQEAKMjM5ICBMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIERJQUVSRVNJUwogbyBvJEAKICAgICBACiAgfCQgQAogICAgIEBACjI0MCAgTEFUSU4gU01BTEwgTEVUVEVSIEVUSAogWCQgIEAKICBcJCBACiAoX3wkQAogICAgIEBACjI0MSAgTEFUSU4gU01BTEwgTEVUVEVSIE4gV0lUSCBUSUxERQogL1wvJEAKIC5fJCBACiB8IHwkQAogICAgIEBACjI0MiAgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBHUkFWRQogIFwkIEAKICBfJCBACiAoXykkQAogICAgIEBACjI0MyAgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBBQ1VURQogIC8kIEAKICBfJCBACiAoXykkQAogICAgIEBACjI0NCAgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBDSVJDVU1GTEVYCiAgL1wkQAogIF8kIEAKIChfKSRACiAgICAgQEAKMjQ1ICBMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIFRJTERFCiAvXC8kQAogIF8kIEAKIChfKSRACiAgICAgQEAKMjQ2ICBMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJUwogbyBvJEAKICBfJCBACiAoXykkQAogICAgIEBACjI0NyAgRElWSVNJT04gU0lHTgogIG8kIEAKIC0tLSRACiAgbyQgQAogICAgIEBACjI0OCAgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBTVFJPS0UKICAgICBACiAgXyQgQAogKC8pJEAKICAgICBAQAoyNDkgIExBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggR1JBVkUKICBcJCBACiAgICAgQAogfF98JEAKICAgICBAQAoyNTAgIExBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQUNVVEUKICAvJCBACiAgICAgQAogfF98JEAKICAgICBAQAoyNTEgIExBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQ0lSQ1VNRkxFWAogIC9cJEAKICAgICBACiB8X3wkQAogICAgIEBACjI1MiAgTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBESUFFUkVTSVMKIG8gbyRACiAgICAgQAogfF98JEAKICAgICBAQAoyNTMgIExBVElOIFNNQUxMIExFVFRFUiBZIFdJVEggQUNVVEUKICAvJEAKICAgIEAKIFwvJEAKIC8kIEBACjI1NCAgTEFUSU4gU01BTEwgTEVUVEVSIFRIT1JOCiAgICAgQAogfF8kIEAKIHxfKSRACiB8JCAgQEAKMjU1ICBMQVRJTiBTTUFMTCBMRVRURVIgWSBXSVRIIERJQUVSRVNJUwogb28kQAogICAgQAogXC8kQAogLyQgQEAK'
);

export default mini;
