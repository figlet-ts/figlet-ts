import { FontFile } from '../../../FontFile';

const helvi = new FontFile(
    'helvi',
    'ZmxmMmEkIDExIDkgMzIgLTEgNTAKQ29udmVydGVkIGZyb20gaGVsdmkuYmRmIGJ5IGJkZjJmbGYgKGJ5IEpvaG4gQ293YW4gPGNvd2FuQGNjaWwub3JnPikKRk9OVCAtQWRvYmUtSGVsdmV0aWNhLU1lZGl1bS1PLU5vcm1hbC0tOC04MC03NS03NS1QLTQ3LUlTTzg4NTktMVNJWkUgOCA3NSA3NQpDT01NRU5UICRYQ29uc29ydGl1bTogaGVsdk8wOC5iZGYsdiAxLjEzIDk1LzAxLzI2IDE4OjAyOjIyIGdpbGRlYSBFeHAgJApDT01NRU5UIApDT01NRU5UICsKQ09NTUVOVCAgQ29weXJpZ2h0IDE5ODQtMTk4OSwgMTk5NCBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4KQ09NTUVOVCAgQ29weXJpZ2h0IDE5ODgsIDE5OTQgRGlnaXRhbCBFcXVpcG1lbnQgQ29ycG9yYXRpb24uCkNPTU1FTlQKQ09NTUVOVCAgQWRvYmUgaXMgYSB0cmFkZW1hcmsgb2YgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQgd2hpY2ggbWF5IGJlCkNPTU1FTlQgIHJlZ2lzdGVyZWQgaW4gY2VydGFpbiBqdXJpc2RpY3Rpb25zLgpDT01NRU5UICBQZXJtaXNzaW9uIHRvIHVzZSB0aGVzZSB0cmFkZW1hcmtzIGlzIGhlcmVieSBncmFudGVkIG9ubHkgaW4KQ09NTUVOVCAgYXNzb2NpYXRpb24gd2l0aCB0aGUgaW1hZ2VzIGRlc2NyaWJlZCBpbiB0aGlzIGZpbGUuCkNPTU1FTlQKQ09NTUVOVCAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgZGlzdHJpYnV0ZSBhbmQgc2VsbCB0aGlzIHNvZnR3YXJlCkNPTU1FTlQgIGFuZCBpdHMgZG9jdW1lbnRhdGlvbiBmb3IgYW55IHB1cnBvc2UgYW5kIHdpdGhvdXQgZmVlIGlzIGhlcmVieQpDT01NRU5UICBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlcyBhcHBlYXIgaW4gYWxsCkNPTU1FTlQgIGNvcGllcyBhbmQgdGhhdCBib3RoIHRob3NlIGNvcHlyaWdodCBub3RpY2VzIGFuZCB0aGlzIHBlcm1pc3Npb24KQ09NTUVOVCAgbm90aWNlIGFwcGVhciBpbiBzdXBwb3J0aW5nIGRvY3VtZW50YXRpb24sIGFuZCB0aGF0IHRoZSBuYW1lcyBvZgpDT01NRU5UICBBZG9iZSBTeXN0ZW1zIGFuZCBEaWdpdGFsIEVxdWlwbWVudCBDb3Jwb3JhdGlvbiBub3QgYmUgdXNlZCBpbgpDT01NRU5UICBhZHZlcnRpc2luZyBvciBwdWJsaWNpdHkgcGVydGFpbmluZyB0byBkaXN0cmlidXRpb24gb2YgdGhlIHNvZnR3YXJlCkNPTU1FTlQgIHdpdGhvdXQgc3BlY2lmaWMsIHdyaXR0ZW4gcHJpb3IgcGVybWlzc2lvbi4gIEFkb2JlIFN5c3RlbXMgYW5kCkNPTU1FTlQgIERpZ2l0YWwgRXF1aXBtZW50IENvcnBvcmF0aW9uIG1ha2Ugbm8gcmVwcmVzZW50YXRpb25zIGFib3V0IHRoZQpDT01NRU5UICBzdWl0YWJpbGl0eSBvZiB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZS4gIEl0IGlzIHByb3ZpZGVkICJhcwpDT01NRU5UICBpcyIgd2l0aG91dCBleHByZXNzIG9yIGltcGxpZWQgd2FycmFudHkuCkNPTU1FTlQgLQpGT1VORFJZICJBZG9iZSIKRkFNSUxZX05BTUUgIkhlbHZldGljYSIKV0VJR0hUX05BTUUgIk1lZGl1bSIKU0xBTlQgIk8iClNFVFdJRFRIX05BTUUgIk5vcm1hbCIKQUREX1NUWUxFX05BTUUgIiIKUElYRUxfU0laRSA4ClBPSU5UX1NJWkUgODAKUkVTT0xVVElPTl9YIDc1ClJFU09MVVRJT05fWSA3NQpTUEFDSU5HICJQIgpBVkVSQUdFX1dJRFRIIDQ3CkNBUF9IRUlHSFQgNgpYX0hFSUdIVCA1CkZPTlRfQVNDRU5UIDgKRk9OVF9ERVNDRU5UIDIKRkFDRV9OQU1FICJIZWx2ZXRpY2EgT2JsaXF1ZSIKQ09QWVJJR0hUICJDb3B5cmlnaHQgKGMpIDE5ODQsIDE5ODcgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIENvcHlyaWdodCAoYykgMTk4OCwgMTk5MSBEaWdpdGFsIEVxdWlwbWVudCBDb3Jwb3JhdGlvbi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4iCk5PVElDRSAiSGVsdmV0aWNhIGlzIGEgdHJhZGVtYXJrIG9mIExpbm90eXBlLUhlbGwgQUcgYW5kL29yIGl0cyBzdWJzaWRpYXJpZXMuICAiCl9ERUNfREVWSUNFX0ZPTlROQU1FUyAiUFM9SGVsdmV0aWNhLU9ibGlxdWUiCl9ERUNfUFJPRFVDVElORk8gIkRFQ3dpbmRvd3MgRm9udHMgVjIuMiwgMDctTm92LTE5OTEiCkRFRkFVTFRfQ0hBUiAzMgpSRUxBVElWRV9TRVRXSURUSCA1MApSRUxBVElWRV9XRUlHSFQgNTAKRlVMTF9OQU1FICJIZWx2ZXRpY2EgT2JsaXF1ZSIKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQEAKICAgJEAKICAgJEAKICAgJEAKICAjJEAKICAjJEAKICMgJEAKICMgJEAKICAgJEAKIyAgJEAKICAgJEAKICAgJEBACiAgICRACiAgICRACiAgICRACiMgIyRACiMgIyRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogICMgIyAkQAogIyMjIyMkQAogICMgIyAkQAojIyMjIyAkQAogIyAjICAkQAogIyAjICAkQAogICAgICAkQAogICAgICAkQEAKICAgICAkQAogICAgICRACiAgICMgJEAKICAjIyAkQAogIyAgIyRACiAjIyAgJEAKICAjIyAkQAojICAjICRACiAjIyAgJEAKICMgICAkQAogICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyMgICMkQAojICMgIyAkQAojIyAjICAkQAogICMgIyMkQAogIyAjICMkQAojICAjIyAkQAogICAgICAkQAogICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgIyMkQAogICMgIyRACiAgIyMgJEAKICMgIyMkQAojIyAjICRACiAjIyAjJEAKICAgICAkQAogICAgICRAQAogICRACiAgJEAKICAkQAogIyRACiAjJEAKIyAkQAogICRACiAgJEAKICAkQAogICRACiAgJEBACiAgICRACiAgICRACiAgICRACiAgIyRACiAjICRACiAjICRACiMgICRACiMgICRACiMgICRACiAjICRACiAjICRAQAogICAkQAogICAkQAogICAkQAogIyAkQAogICMkQAogICMkQAogICMkQAogICMkQAogIyAkQAogIyAkQAojICAkQEAKICAgJEAKICAgJEAKICMgJEAKIyMjJEAKIyMgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICMgJEAKICAjICRACiMjIyMkQAogIyAgJEAKICMgICRACiAgICAkQAogICAgJEBACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogIyRACiAjJEAKIyAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKIyMjIyRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQAojJEAKICRACiAkQEAKICAkQAogICRACiAgJEAKICMkQAogIyRACiAjJEAKIyAkQAojICRACiMgJEAKICAkQAogICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICMjICRACiAjICAjJEAKIyAgICMkQAojICAgIyRACiMgICMgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACiAgICRACiAgICRACiAgICRACiAgIyRACiMjIyRACiAgIyRACiAjICRACiAjICRACiAjICRACiAgICRACiAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICMjICRACiAjICAjJEAKICAgIyMkQAogIyMgICRACiMgICAgJEAKIyMjIyAkQAogICAgICRACiAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgIyMgJEAKICMgICMkQAogICMjICRACiAgICMgJEAKIyAgIyAkQAogIyMgICRACiAgICAgJEAKICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgIyAkQAogICMjICRACiAjICMgJEAKIyMjIyMkQAogICMgICRACiAgIyAgJEAKICAgICAkQAogICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMjIyRACiAjICAgJEAKICMjIyAkQAogICAjICRACiMgICMgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgIyMgJEAKICMgICMkQAojIyMgICRACiMgICMgJEAKIyAgIyAkQAogIyMgICRACiAgICAgJEAKICAgICAkQEAKICAgICRACiAgICAkQAogICAgJEAKIyMjIyRACiAgICMkQAogICMgJEAKICMgICRACiMgICAkQAojICAgJEAKICAgICRACiAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAjIyAkQAogIyAgIyRACiAjIyMgJEAKIyAgIyAkQAojICAjICRACiAjIyAgJEAKICAgICAkQAogICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICMjICRACiAjICAjJEAKICMgICMkQAogICMjIyRACiMgICMgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACiAgJEAKICAkQAogICRACiAgJEAKICMkQAogICRACiAgJEAKICAkQAojICRACiAgJEAKICAkQEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAjJEAKICAgJEAKICAgJEAKICAgJEAKICMgJEAKICMgJEAKIyAgJEBACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgIyRACiAjICRACiMgICRACiAjICRACiAgICRACiAgICRAQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAjIyMkQAogICAgJEAKIyMjICRACiAgICAkQAogICAgJEAKICAgICRAQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogIyAkQAogICMkQAogIyAkQAojICAkQAogICAkQAogICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICMjICRACiAgICMkQAogICMgJEAKICMgICRACiAgICAkQAojICAgJEAKICAgICRACiAgICAkQEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEAKICMjIyMjICRACiMjICAgICMkQAojICMjIyAjJEAKIyAjICMgIyRACiMgIyMjIyAkQAojIyAgICAgJEAKICMjIyAgICRACiAgICAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAgICMgJEAKICAgIyMgJEAKICAjICAjJEAKICMjIyMjJEAKICMgICAjJEAKIyAgICAjJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAjIyMjJEAKICMgICMkQAogIyMjICRACiMgICAjJEAKIyAgICMkQAojIyMjICRACiAgICAgJEAKICAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAjIyMgJEAKICMgICAjJEAKIyAgICAgJEAKIyAgICAgJEAKIyMgICMgJEAKICMjIyAgJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAjIyMjICRACiAjICAgIyRACiAjICAgIyRACiMgICAgIyRACiMgICAjICRACiMjIyMgICRACiAgICAgICRACiAgICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyMjIyMkQAogIyAgICAkQAogIyMjIyAkQAojICAgICAkQAojICAgICAkQAojIyMjICAkQAogICAgICAkQAogICAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICMjIyMjJEAKICMgICAgJEAKICMjIyAgJEAKIyAgICAgJEAKIyAgICAgJEAKIyAgICAgJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgIyMjICRACiAjICAgIyRACiAjICAgICRACiMgICMjIyRACiMjICAjICRACiAjIyMgICRACiAgICAgICRACiAgICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyAgICMkQAogIyAgICMkQAogIyMjIyMkQAojICAgIyAkQAojICAgIyAkQAojICAgIyAkQAogICAgICAkQAogICAgICAkQEAKICAkQAogICRACiAgJEAKICMkQAogIyRACiAjJEAKIyAkQAojICRACiMgJEAKICAkQAogICRAQAogICAgJEAKICAgICRACiAgICAkQAogICAjJEAKICAgIyRACiAgICMkQAojICMgJEAKIyAjICRACiAjICAkQAogICAgJEAKICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyAgIyRACiAjICMgJEAKICMjICAkQAojIyMgICRACiMgICMgJEAKIyAgICMkQAogICAgICRACiAgICAgJEBACiAgICRACiAgICRACiAgICRACiAjICRACiAjICRACiAjICRACiMgICRACiMgICRACiMjIyRACiAgICRACiAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyAgICMkQAogIyAgICMkQAogIyMgIyMkQAojICMgIyMkQAojICMjICMkQAojICAjICMkQAogICAgICAkQAogICAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICMgICAjJEAKICMjICAjJEAKICMjICAjJEAKIyAgIyMgJEAKIyAgIyMgJEAKIyAgICMgJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgIyMjICRACiAjICAjIyRACiMgICAgIyRACiMgICAgIyRACiMjICAjICRACiAjIyMgICRACiAgICAgICRACiAgICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMjICRACiAjICAjJEAKICMgICMkQAojIyMjICRACiMgICAgJEAKIyAgICAkQAogICAgICRACiAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgIyMjICRACiAjICAjIyRACiMgICAgIyRACiMgICMgIyRACiMjICMjICRACiAjIyMjICRACiAgICAjICRACiAgICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMjICRACiAjICAjJEAKICMgICMkQAojIyMjICRACiMgICMgJEAKIyAgIyAkQAogICAgICRACiAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgIyMjICRACiAjICAgIyRACiAjIyMgICRACiAgICMjICRACiMgICAjICRACiAjIyMgICRACiAgICAgICRACiAgICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAojIyMjJEAKICMgICRACiAjICAkQAojICAgJEAKIyAgICRACiMgICAkQAogICAgJEAKICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyAgICMkQAogIyAgICMkQAogIyAgICMkQAojICAgIyAkQAojICAgIyAkQAogIyMjICAkQAogICAgICAkQAogICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKIyAgICMkQAojICAjICRACiMgICMgJEAKIyAjICAkQAojICMgICRACiAjICAgJEAKICAgICAkQAogICAgICRAQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAojICAjICAjJEAKIyAgIyAgIyRACiMgIyMgIyAkQAogIyAjICMgJEAKICMgICMgICRACiAjICAjICAkQAogICAgICAgJEAKICAgICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyAgICMkQAogIyAgIyAkQAogICMjICAkQAogICMjICAkQAogIyAgIyAkQAojICAgIyAkQAogICAgICAkQAogICAgICAkQEAKICAgICRACiAgICAkQAogICAgJEAKIyAgIyRACiMgICMkQAojICMgJEAKIyMgICRACiMgICAkQAojICAgJEAKICAgICRACiAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICMjIyMjJEAKICAgICMgJEAKICAgIyAgJEAKICAjICAgJEAKICMgICAgJEAKIyMjIyMgJEAKICAgICAgJEAKICAgICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgIyMkQAogICMgJEAKICAjICRACiAjICAkQAogIyAgJEAKICMgICRACiMgICAkQAojIyAgJEBACiAgJEAKICAkQAogICRACiMgJEAKIyAkQAojICRACiAjJEAKICMkQAogIyRACiAgJEAKICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAjIyRACiAgICMkQAogICAjJEAKICAjICRACiAgIyAkQAogICMgJEAKICMgICRACiMjICAkQEAKICAgJEAKICAgJEAKICAgJEAKICAjJEAKICMjJEAKIyAjJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiMjIyMjJEAKICAgICAkQEAKICAkQAogICRACiAgJEAKICMkQAojICRACiMgJEAKICAkQAogICRACiAgJEAKICAkQAogICRAQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICMjICRACiAgICMkQAogIyMjJEAKIyAjICRACiMjIyMkQAogICAgJEAKICAgICRAQAogICAgJEAKICAgICRACiAgIyAkQAogIyAgJEAKICMjICRACiAjICMkQAojICAjJEAKIyAgIyRACiMjIyAkQAogICAgJEAKICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAjIyRACiAjICMkQAojICAgJEAKIyAgICRACiAjIyAkQAogICAgJEAKICAgICRAQAogICAgICRACiAgICAgJEAKICAgICMkQAogICAgIyRACiAgIyMgJEAKICMgIyAkQAojICAjICRACiMgIyAgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICMjJEAKICMgIyRACiMjIyAkQAojICAgJEAKICMjICRACiAgICAkQAogICAgJEBACiAgICAkQAogICAgJEAKICAjIyRACiAjICAkQAojIyMgJEAKICMgICRACiMgICAkQAojICAgJEAKIyAgICRACiAgICAkQAogICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgIyMkQAogICMgIyRACiAjICAjJEAKICMgIyAkQAogICMjICRACiAgIyAgJEAKIyMgICAkQEAKICAgICAkQAogICAgICRACiAgIyAgJEAKICAjICAkQAogIyMjICRACiAjICAjJEAKICMgICMkQAojICAjICRACiMgICMgJEAKICAgICAkQAogICAgICRAQAogICRACiAgJEAKICMkQAogICRACiAjJEAKICMkQAogIyRACiMgJEAKIyAkQAogICRACiAgJEBACiAgICRACiAgICRACiAgIyRACiAgICRACiAgIyRACiAgIyRACiAgIyRACiAjICRACiAjICRACiAjICRACiMgICRAQAogICAgICRACiAgICAgJEAKICAjICAkQAogICMgICRACiAjICAjJEAKICMgIyAkQAojIyMgICRACiMgICMgJEAKIyAgIyAkQAogICAgICRACiAgICAgJEBACiAgICRACiAgICRACiAgIyRACiAgIyRACiAjICRACiAjICRACiAjICRACiMgICRACiMgICRACiAgICRACiAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyMgIyMkQAogIyAjICMkQAojICMgIyAkQAojICMgIyAkQAojICMgIyAkQAogICAgICAkQAogICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMjICRACiAjICAjJEAKICMgICMkQAojICAjICRACiMgICMgJEAKICAgICAkQAogICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgIyMgJEAKICMgICMkQAojICAgIyRACiMgICMgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAjIyAkQAogICMgIyRACiAjICAjJEAKICMgIyAkQAogIyMgICRACiMgICAgJEAKIyAgICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgIyMkQAogIyAjJEAKIyAgIyRACiMgIyAkQAogIyMgJEAKICMgICRACiAjICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAjICMkQAogIyMgJEAKIyMgICRACiMgICAkQAojICAgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgIyMkQAogIyAgJEAKICMjICRACiAgIyAkQAojIyAgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAjICRACiMjIyMkQAogIyAgJEAKICMgICRACiMgICAkQAogIyMgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAjICMkQAogIyAjJEAKIyAgIyRACiMgIyAkQAogIyMgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiMgICMkQAojICAjJEAKIyAjICRACiAjICAkQAogIyAgJEAKICAgICRACiAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAojICMgIyRACiMgIyAjJEAKIyAjICMkQAojIyMjICRACiMgICMgJEAKICAgICAkQAogICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAjICAjJEAKICMgIyAkQAogICMgICRACiAjICMgJEAKIyAgIyAkQAogICAgICRACiAgICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAojICAjJEAKIyAgIyRACiAjIyAkQAogIyAgJEAKICMgICRACiMgICAkQAogICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogIyMjJEAKICAgIyRACiAgIyAkQAogIyAgJEAKIyMjICRACiAgICAkQAogICAgJEBACiAgICRACiAgICRACiAgICRACiAgIyRACiAjICRACiAjICRACiMjICRACiAjICRACiMgICRACiMgICRACiAjICRAQAogICRACiAgJEAKICAkQAogIyRACiAjJEAKICMkQAojICRACiMgJEAKIyAkQAojICRACiAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAjICAkQAogICMgJEAKICAjICRACiAgIyMkQAogICMgJEAKICMgICRACiAjICAkQAojICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMgIyRACiMgIyMgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQEAKICAgICAgJEAKICAgIyAjJEAKICAgICAgJEAKICAgICMgJEAKICAgIyMgJEAKICAjICAjJEAKICMjIyMjJEAKICMgICAjJEAKIyAgICAjJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgICRACiAgIyAjICRACiAgICAgICRACiAgIyMjICRACiAjICAjIyRACiMgICAgIyRACiMgICAgIyRACiMjICAjICRACiAjIyMgICRACiAgICAgICRACiAgICAgICRAQAogICAgICAkQAogICMgIyAkQAogICAgICAkQAogIyAgICMkQAogIyAgICMkQAogIyAgICMkQAojICAgIyAkQAojICAgIyAkQAogIyMjICAkQAogICAgICAkQAogICAgICAkQEAKICAgICRACiAgICAkQAogIyAjJEAKICAgICRACiAjIyAkQAogICAjJEAKIyMjIyRACiMgIyAkQAojIyMjJEAKICAgICRACiAgICAkQEAKICAgICAkQAogICAgICRACiAgIyAjJEAKICAgICAkQAogICMjICRACiAjICAjJEAKIyMgIyMkQAojICAjICRACiAjIyAgJEAKICAgICAkQAogICAgICRAQAogICAgJEAKICAgICRACiAjICMkQAogICAgJEAKICMgIyRACiAjICMkQAojICAjJEAKIyAjICRACiAjIyAkQAogICAgJEAKICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICMjICRACiAjICAjJEAKICMjIyAkQAojICAjICRACiMgICMgJEAKIyAjICAkQAogICAgICRACiAgICAgJEBACjE2MCBzcGFjZQogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRAQAoxNjEgZXhjbGFtZG93bgogICAkQAogICAkQAogICAkQAogICAkQAogICMkQAogICAkQAogIyAkQAogIyAkQAogIyAkQAojICAkQAojICAkQEAKMTYyIGNlbnQKICAgICRACiAgICAkQAogICAgJEAKICAjICRACiAjIyAkQAojICAjJEAKIyAgICRACiMjIyAkQAogIyAgJEAKICAgICRACiAgICAkQEAKMTYzIHN0ZXJsaW5nCiAgICAgJEAKICAgICAkQAogICAgICRACiAgIyMgJEAKICMgICMkQAojIyMgICRACiAjICAgJEAKICMgIyAkQAojICMgICRACiAgICAgJEAKICAgICAkQEAKMTY0IGN1cnJlbmN5CiAgICAgJEAKICAgICAkQAogICAgICRACiAjICAjJEAKICAjIyAkQAogIyAjICRACiAjIyAgJEAKIyAgIyAkQAogICAgICRACiAgICAgJEAKICAgICAkQEAKMTY1IHllbgogICAgICRACiAgICAgJEAKICAgICAkQAogIyAgIyRACiMjIyMjJEAKICMgIyAkQAojIyMjIyRACiAjIyAgJEAKICMgICAkQAogICAgICRACiAgICAgJEBACjE2NiBicm9rZW5iYXIKICAkQAogICRACiAgJEAKICMkQAogIyRACiAjJEAKICAkQAojICRACiMgJEAKIyAkQAogICRAQAoxNjcgc2VjdGlvbgogICAgICRACiAgICAgJEAKICAgICAkQAogICAjIyRACiAgIyAgJEAKICMjIyAkQAogIyAjICRACiAjIyMgJEAKICAjICAkQAogICMgICRACiMjICAgJEBACjE2OCBkaWVyZXNpcwogICAkQAogICAkQAogICAkQAojICMkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQEAKMTY5IGNvcHlyaWdodAogICAgICAkQAogICAgICAkQAogICMjICAkQAogIyAgIyAkQAojICMjICMkQAojICMgICMkQAojICMjICMkQAogIyAgIyAkQAogICMjICAkQAogICAgICAkQAogICAgICAkQEAKMTcwIG9yZGZlbWluaW5lCiAgICAkQAogICAgJEAKICMjICRACiAgIyMkQAogIyMgJEAKICAgICRACiMjIyAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEBACjE3MSBndWlsbGVtb3RsZWZ0CiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICMgIyRACiMgIyAkQAojICMgJEAKICAgICRACiAgICAkQAogICAgJEBACjE3MiBsb2dpY2Fsbm90CiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKIyMjIyRACiAgICMkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEBACjE3MyBoeXBoZW4KICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKIyMjJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEBACjE3NCByZWdpc3RlcmVkCiAgICAgICRACiAgICAgICRACiAgIyMgICRACiAjICAjICRACiMgIyMgIyRACiMgIyMgIyRACiMgIyAjIyRACiAjICAjICRACiAgIyMgICRACiAgICAgICRACiAgICAgICRAQAoxNzUgbWFjcm9uCiAgICRACiAgICRACiAgICRACiMjIyRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRAQAoxNzYgZGVncmVlCiAgICRACiAgICRACiAgICRACiAjIyRACiMgIyRACiMjICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRAQAoxNzcgcGx1c21pbnVzCiAgICAkQAogICAgJEAKICAgICRACiAgIyAkQAogICMgJEAKICMjIyRACiAgIyAkQAogICAgJEAKIyMjICRACiAgICAkQAogICAgJEBACjE3OCB0d29zdXBlcmlvcgogICAkQAogICAkQAogICAkQAogIyMkQAojICMkQAogIyAkQAojIyMkQAogICAkQAogICAkQAogICAkQAogICAkQEAKMTc5IHRocmVlc3VwZXJpb3IKICAgJEAKICAgJEAKICAgJEAKIyMjJEAKICMgJEAKICAjJEAKIyMgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEBACjE4MCBhY3V0ZQogICRACiAgJEAKICMkQAojICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEBACjE4MSBtdQogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICMgIyRACiAjICMkQAojICAjJEAKIyAjICRACiMjIyAkQAojICAgJEAKIyAgICRAQAoxODIgcGFyYWdyYXBoCiAgICAgJEAKICAgICAkQAogICAgICRACiAjIyMjJEAKIyMgICMkQAojIyAjICRACiMjICMgJEAKICMgIyAkQAojICMgICRACiMgIyAgJEAKIyAjICAkQEAKMTgzIHBlcmlvZGNlbnRlcmVkCiAkQAogJEAKICRACiAkQAogJEAKIyRACiMkQAogJEAKICRACiAkQAogJEBACjE4NCBjZWRpbGxhCiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogIyRACiMjJEAKICAkQEAKMTg1IG9uZXN1cGVyaW9yCiAgICRACiAgICRACiAgICRACiAgIyRACiMjIyRACiAjICRACiAjICRACiAgICRACiAgICRACiAgICRACiAgICRAQAoxODYgb3JkbWFzY3VsaW5lCiAgICAkQAogICAgJEAKICAjIyRACiAjICMkQAogIyMgJEAKICAgICRACiMjIyAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEBACjE4NyBndWlsbGVtb3RyaWdodAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAjICMkQAogIyAjJEAKIyAjICRACiAgICAkQAogICAgJEAKICAgICRAQAoxODggb25lcXVhcnRlcgogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAogICMgICAjJEAKIyMjICAjICRACiAjICAjICAkQAogIyAjICMgJEAKICAjICMjICRACiAjICMjIyMkQAogICAgIyAgJEAKICAgICAgICRAQAoxODkgb25laGFsZgogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAogICMgICAjJEAKIyMjICAjICRACiAjICAjICAkQAogIyAjICMjJEAKICAjICMgIyRACiAjICAgIyAkQAogICAgIyMjJEAKICAgICAgICRAQAoxOTAgdGhyZWVxdWFydGVycwogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAojIyMgICAjJEAKICMgICAjICRACiAgIyAjICAkQAojIyAjICMgJEAKICAjICMjICRACiAjICMjIyMkQAogICAgIyAgJEAKICAgICAgICRAQAoxOTEgcXVlc3Rpb25kb3duCiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAjJEAKICAgICRACiAgIyAkQAogIyAgJEAKIyAgICRACiMgICAkQAogIyMgJEBACjE5MiBBZ3JhdmUKICAgIyAgJEAKICAgICMgJEAKICAgICAgJEAKICAgICMgJEAKICAgIyMgJEAKICAjICAjJEAKICMjIyMjJEAKICMgICAjJEAKIyAgICAjJEAKICAgICAgJEAKICAgICAgJEBACjE5MyBBYWN1dGUKICAgICAjJEAKICAgICMgJEAKICAgICAgJEAKICAgICMgJEAKICAgIyMgJEAKICAjICAjJEAKICMjIyMjJEAKICMgICAjJEAKIyAgICAjJEAKICAgICAgJEAKICAgICAgJEBACjE5NCBBY2lyY3VtZmxleAogICAgIyMkQAogICAjICMkQAogICAgICAkQAogICAgIyAkQAogICAjIyAkQAogICMgICMkQAogIyMjIyMkQAogIyAgICMkQAojICAgICMkQAogICAgICAkQAogICAgICAkQEAKMTk1IEF0aWxkZQogICAgIyAjJEAKICAgIyAjICRACiAgICAgICAkQAogICAgIyAgJEAKICAgIyMgICRACiAgIyAgIyAkQAogIyMjIyMgJEAKICMgICAjICRACiMgICAgIyAkQAogICAgICAgJEAKICAgICAgICRAQAoxOTYgQWRpZXJlc2lzCiAgICAgICRACiAgICMgIyRACiAgICAgICRACiAgICAjICRACiAgICMjICRACiAgIyAgIyRACiAjIyMjIyRACiAjICAgIyRACiMgICAgIyRACiAgICAgICRACiAgICAgICRAQAoxOTcgQXJpbmcKICAgICMgJEAKICAgIyAjJEAKICAgICMgJEAKICAgICMgJEAKICAgIyMgJEAKICAjICAjJEAKICMjIyMjJEAKICMgICAjJEAKIyAgICAjJEAKICAgICAgJEAKICAgICAgJEBACjE5OCBBRQogICAgICAgICRACiAgICAgICAgJEAKICAgICAgICAkQAogICAjIyMjIyRACiAgIyAjICAgJEAKICAjICMjIyAkQAogIyMjICAgICRACiMgICMgICAgJEAKIyAgIyMjIyAkQAogICAgICAgICRACiAgICAgICAgJEBACjE5OSBDY2VkaWxsYQogICAgICAkQAogICAgICAkQAogICAgICAkQAogICMjIyAkQAogIyAgICMkQAogIyAgICAkQAojICAgICAkQAojICAgIyAkQAogIyMjICAkQAogICMgICAkQAogIyMgICAkQEAKMjAwIEVncmF2ZQogICMgICAkQAogICAjICAkQAogICAgICAkQAogIyMjIyMkQAogIyAgICAkQAogIyMjIyAkQAojICAgICAkQAojICAgICAkQAojIyMjICAkQAogICAgICAkQAogICAgICAkQEAKMjAxIEVhY3V0ZQogICAgIyAkQAogICAjICAkQAogICAgICAkQAogIyMjIyMkQAogIyAgICAkQAogIyMjIyAkQAojICAgICAkQAojICAgICAkQAojIyMjICAkQAogICAgICAkQAogICAgICAkQEAKMjAyIEVjaXJjdW1mbGV4CiAgICMgICRACiAgIyAjICRACiAgICAgICRACiAjIyMjIyRACiAjICAgICRACiAjIyMjICRACiMgICAgICRACiMgICAgICRACiMjIyMgICRACiAgICAgICRACiAgICAgICRAQAoyMDMgRWRpZXJlc2lzCiAgICAgICRACiAgIyAjICRACiAgICAgICRACiAjIyMjIyRACiAjICAgICRACiAjIyMjICRACiMgICAgICRACiMgICAgICRACiMjIyMgICRACiAgICAgICRACiAgICAgICRAQAoyMDQgSWdyYXZlCiMgJEAKICMkQAogICRACiAjJEAKICMkQAogIyRACiMgJEAKIyAkQAojICRACiAgJEAKICAkQEAKMjA1IElhY3V0ZQogICMkQAogIyAkQAogICAkQAogIyAkQAogIyAkQAogIyAkQAojICAkQAojICAkQAojICAkQAogICAkQAogICAkQEAKMjA2IEljaXJjdW1mbGV4CiAjICRACiMgIyRACiAgICRACiAjICRACiAjICRACiAjICRACiMgICRACiMgICRACiMgICRACiAgICRACiAgICRAQAoyMDcgSWRpZXJlc2lzCiAgICRACiMgIyRACiAgICRACiAjICRACiAjICRACiAjICRACiMgICRACiMgICRACiMgICRACiAgICRACiAgICRAQAoyMDggRXRoCiAgICAgICRACiAgICAgICRACiAgICAgICRACiAjIyMjICRACiAjICAgIyRACiAjIyAgIyRACiMgICAgIyRACiMgICAjICRACiMjIyMgICRACiAgICAgICRACiAgICAgICRAQAoyMDkgTnRpbGRlCiAgICMgIyRACiAgIyAjICRACiAgICAgICRACiAjICAgIyRACiAjIyAgIyRACiAjIyAgIyRACiMgICMjICRACiMgICMjICRACiMgICAjICRACiAgICAgICRACiAgICAgICRAQAoyMTAgT2dyYXZlCiAgIyAgICRACiAgICMgICRACiAgICAgICRACiAgIyMjICRACiAjICAjIyRACiMgICAgIyRACiMgICAgIyRACiMjICAjICRACiAjIyMgICRACiAgICAgICRACiAgICAgICRAQAoyMTEgT2FjdXRlCiAgICAjICRACiAgICMgICRACiAgICAgICRACiAgIyMjICRACiAjICAjIyRACiMgICAgIyRACiMgICAgIyRACiMjICAjICRACiAjIyMgICRACiAgICAgICRACiAgICAgICRAQAoyMTIgT2NpcmN1bWZsZXgKICAgIyAgJEAKICAjICMgJEAKICAgICAgJEAKICAjIyMgJEAKICMgICMjJEAKIyAgICAjJEAKIyAgICAjJEAKIyMgICMgJEAKICMjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxMyBPdGlsZGUKICAgIyAjJEAKICAjICMgJEAKICAgICAgJEAKICAjIyMgJEAKICMgICMjJEAKIyAgICAjJEAKIyAgICAjJEAKIyMgICMgJEAKICMjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxNCBPZGllcmVzaXMKICAgICAgJEAKICAjICMgJEAKICAgICAgJEAKICAjIyMgJEAKICMgICMjJEAKIyAgICAjJEAKIyAgICAjJEAKIyMgICMgJEAKICMjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxNSBtdWx0aXBseQogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAjICAjJEAKICAjIyAkQAogIyMgICRACiMgICMgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjIxNiBPc2xhc2gKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAjIyMjJEAKICMgICMjJEAKIyAgIyAjJEAKIyAjICAjJEAKIyMgICMgJEAKIyMjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxNyBVZ3JhdmUKICAjICAgJEAKICAgIyAgJEAKICAgICAgJEAKICMgICAjJEAKICMgICAjJEAKICMgICAjJEAKIyAgICMgJEAKIyAgICMgJEAKICMjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxOCBVYWN1dGUKICAgICMgJEAKICAgIyAgJEAKICAgICAgJEAKICMgICAjJEAKICMgICAjJEAKICMgICAjJEAKIyAgICMgJEAKIyAgICMgJEAKICMjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxOSBVY2lyY3VtZmxleAogICAjICAkQAogICMgIyAkQAogICAgICAkQAogIyAgICMkQAogIyAgICMkQAogIyAgICMkQAojICAgIyAkQAojICAgIyAkQAogIyMjICAkQAogICAgICAkQAogICAgICAkQEAKMjIwIFVkaWVyZXNpcwogICAgICAkQAogICMgIyAkQAogICAgICAkQAogIyAgICMkQAogIyAgICMkQAogIyAgICMkQAojICAgIyAkQAojICAgIyAkQAogIyMjICAkQAogICAgICAkQAogICAgICAkQEAKMjIxIFlhY3V0ZQogICAjJEAKICAjICRACiAgICAkQAojICAjJEAKIyAgIyRACiMgIyAkQAojIyAgJEAKIyAgICRACiMgICAkQAogICAgJEAKICAgICRAQAoyMjIgVGhvcm4KICAgICAkQAogICAgICRACiAgICAgJEAKICMgICAkQAogIyMjICRACiAjICAjJEAKICMgICMkQAojIyMjICRACiMgICAgJEAKICAgICAkQAogICAgICRAQAoyMjMgZ2VybWFuZGJscwogICAgICRACiAgICAgJEAKICAgICAkQAogICMjICRACiAjICAjJEAKICMjIyAkQAojICAjICRACiMgICMgJEAKIyAjICAkQAogICAgICRACiAgICAgJEBACjIyNCBhZ3JhdmUKICAgICRACiAjICAkQAogICMgJEAKICAgICRACiAjIyAkQAogICAjJEAKICMjIyRACiMgIyAkQAojIyMjJEAKICAgICRACiAgICAkQEAKMjI1IGFhY3V0ZQogICAgJEAKICAgIyRACiAgIyAkQAogICAgJEAKICMjICRACiAgICMkQAogIyMjJEAKIyAjICRACiMjIyMkQAogICAgJEAKICAgICRAQAoyMjYgYWNpcmN1bWZsZXgKICAgICRACiAgIyAkQAogIyAjJEAKICAgICRACiAjIyAkQAogICAjJEAKICMjIyRACiMgIyAkQAojIyMjJEAKICAgICRACiAgICAkQEAKMjI3IGF0aWxkZQogICAgICRACiAgIyAjJEAKICMgIyAkQAogICAgICRACiAjIyAgJEAKICAgIyAkQAogIyMjICRACiMgIyAgJEAKIyMjIyAkQAogICAgICRACiAgICAgJEBACjIyOCBhZGllcmVzaXMKICAgICRACiAgICAkQAogIyAjJEAKICAgICRACiAjIyAkQAogICAjJEAKIyMjIyRACiMgIyAkQAojIyMjJEAKICAgICRACiAgICAkQEAKMjI5IGFyaW5nCiAgICAkQAogICMgJEAKICMgIyRACiAgICAkQAogIyMgJEAKICAgIyRACiAjIyMkQAojICMgJEAKIyMjIyRACiAgICAkQAogICAgJEBACjIzMCBhZQogICAgICAkQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyMgIyMkQAogICAjICMkQAogIyMjIyAkQAojICMgICAkQAojIyMjIyAkQAogICAgICAkQAogICAgICAkQEAKMjMxIGNjZWRpbGxhCiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICMjJEAKICMgIyRACiMgICAkQAojICMgJEAKIyMgICRACiAjICAkQAojIyAgJEBACjIzMiBlZ3JhdmUKICAgICRACiAgIyAkQAogICAjJEAKICAgICRACiAgIyMkQAogIyAjJEAKIyMjICRACiMgICAkQAogIyMgJEAKICAgICRACiAgICAkQEAKMjMzIGVhY3V0ZQogICAgICRACiAgICAjJEAKICAgIyAkQAogICAgICRACiAgIyMgJEAKICMgIyAkQAojIyMgICRACiMgICAgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACjIzNCBlY2lyY3VtZmxleAogICAgICRACiAgICMgJEAKICAjICMkQAogICAgICRACiAgIyMgJEAKICMgIyAkQAojIyMgICRACiMgICAgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACjIzNSBlZGllcmVzaXMKICAgICAkQAogICAgICRACiAgIyAjJEAKICAgICAkQAogICMjICRACiAjICMgJEAKIyMjICAkQAojICAgICRACiAjIyAgJEAKICAgICAkQAogICAgICRAQAoyMzYgaWdyYXZlCiAgJEAKIyAkQAogIyRACiAgJEAKICMkQAogIyRACiAjJEAKIyAkQAojICRACiAgJEAKICAkQEAKMjM3IGlhY3V0ZQogICAkQAogICMkQAogIyAkQAogICAkQAogIyAkQAogIyAkQAogIyAkQAojICAkQAojICAkQAogICAkQAogICAkQEAKMjM4IGljaXJjdW1mbGV4CiAgICRACiAjICRACiMgIyRACiAgICRACiAjICRACiAjICRACiAjICRACiMgICRACiMgICRACiAgICRACiAgICRAQAoyMzkgaWRpZXJlc2lzCiAgICRACiAgICRACiMgIyRACiAgICRACiAjICRACiAjICRACiAjICRACiMgICRACiMgICRACiAgICRACiAgICRAQAoyNDAgZXRoCiAgICAgJEAKICAgICAkQAojIyAjICRACiAjIyAgJEAKIyAjIyAkQAogIyAgIyRACiMgICAjJEAKIyAgIyAkQAogIyMgICRACiAgICAgJEAKICAgICAkQEAKMjQxIG50aWxkZQogICAgICAkQAogICAjICMkQAogICMgIyAkQAogICAgICAkQAogIyMjICAkQAogIyAgIyAkQAogIyAgIyAkQAojICAjICAkQAojICAjICAkQAogICAgICAkQAogICAgICAkQEAKMjQyIG9ncmF2ZQogICAgICRACiAgIyAgJEAKICAgIyAkQAogICAgICRACiAgIyMgJEAKICMgICMkQAojICAgIyRACiMgICMgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACjI0MyBvYWN1dGUKICAgICAgJEAKICAgICAjJEAKICAgICMgJEAKICAgICAgJEAKICAjIyAgJEAKICMgICMgJEAKIyAgICMgJEAKIyAgIyAgJEAKICMjICAgJEAKICAgICAgJEAKICAgICAgJEBACjI0NCBvY2lyY3VtZmxleAogICAgICRACiAgICMgJEAKICAjICMkQAogICAgICRACiAgIyMgJEAKICMgICMkQAojICAgIyRACiMgICMgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACjI0NSBvdGlsZGUKICAgICAkQAogICMgIyRACiAjICMgJEAKICAgICAkQAogICMjICRACiAjICAjJEAKIyMgIyMkQAojICAjICRACiAjIyAgJEAKICAgICAkQAogICAgICRAQAoyNDYgb2RpZXJlc2lzCiAgICAgJEAKICAgICAkQAogICMgIyRACiAgICAgJEAKICAjIyAkQAogIyAgIyRACiMjICMjJEAKIyAgIyAkQAogIyMgICRACiAgICAgJEAKICAgICAkQEAKMjQ3IGRpdmlkZQogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAjICRACiAgICAkQAojIyMjJEAKICAgICRACiAjICAkQAogICAgJEAKICAgICRAQAoyNDggb3NsYXNoCiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAjJEAKICAjIyMkQAogIyAgIyRACiMgICAjJEAKIyAgIyAkQAojIyMgICRACiMgICAgJEAKICAgICAkQEAKMjQ5IHVncmF2ZQogICAgJEAKICMgICRACiAgIyAkQAogICAgJEAKICMgIyRACiAjICMkQAojICAjJEAKIyAjICRACiAjIyAkQAogICAgJEAKICAgICRAQAoyNTAgdWFjdXRlCiAgICAkQAogICAjJEAKICAjICRACiAgICAkQAogIyAjJEAKICMgIyRACiMgICMkQAojICMgJEAKICMjICRACiAgICAkQAogICAgJEBACjI1MSB1Y2lyY3VtZmxleAogICAgJEAKICAjICRACiAjICMkQAogICAgJEAKICMgIyRACiAjICMkQAojICAjJEAKIyAjICRACiAjIyAkQAogICAgJEAKICAgICRAQAoyNTIgdWRpZXJlc2lzCiAgICAkQAogICAgJEAKICMgIyRACiAgICAkQAogIyAjJEAKICMgIyRACiMgICMkQAojICMgJEAKICMjICRACiAgICAkQAogICAgJEBACjI1MyB5YWN1dGUKICAgICRACiAgICMkQAogICMgJEAKICAgICRACiMgICMkQAojICAjJEAKICMjICRACiAjICAkQAogIyAgJEAKIyAgICRACiAgICAkQEAKMjU0IHRob3JuCiAgICAgJEAKICAgICAkQAogICAgICRACiAgIyAgJEAKICAjIyAkQAogICMgIyRACiAjICAjJEAKICMgIyAkQAogIyMgICRACiMgICAgJEAKIyMgICAkQEAKMjU1IHlkaWVyZXNpcwogICAgJEAKICAgICRACiAjICMkQAogICAgJEAKIyAgIyRACiMgICMkQAogIyMgJEAKICMgICRACiAjICAkQAojICAgJEAKICAgICRAQAozMDUgZG90bGVzc2kKICAkQAogICRACiAgJEAKICMkQAogIyRACiAjJEAKIyAkQAojICRACiMgJEAKICAkQAogICRAQAozMjEgTHNsYXNoCiAgICAkQAogICMgJEAKICAjICRACiAjICAkQAogIyMgJEAKIyMgICRACiAjICAkQAojICAgJEAKIyMjIyRACiAgICAkQAogICAgJEBACjMyMiBsc2xhc2gKICAgJEAKICAjJEAKICAjJEAKICMgJEAKIyMjJEAKICMgJEAKIyAgJEAKIyAgJEAKIyAgJEAKICAgJEAKICAgJEBACjMzOCBPRQogICAgICAgICAgICAkQAogICAjIyMgIyMjIyMkQAogICMgICAjIyAgICAkQAogICMgICAjICAgICAkQAogIyAgICAjIyMjIyAkQAogIyAgICAjICAgICAkQAojICAgICMgICAgICAkQAojICAgIyMgICAgICAkQAogIyMjICMjIyMjICAkQAogICAgICAgICAgICAkQAogICAgICAgICAgICAkQEAKMzM5IG9lCiAgICAgICAgICRACiAgICAgICAgICRACiAgICAgICAgICRACiAgIyMjICMjIyRACiAjICAgIyAgIyRACiAjICAgIyMjICRACiMgICAjICAgICRACiMgICAjICAjICRACiAjIyMgIyMgICRACiAgICAgICAgICRACiAgICAgICAgICRAQAozNTIgU2Nhcm9uCiAgICMgIyAkQAogICAgIyAgJEAKICAgICAgICRACiAgICMjIyAkQAogICMgICAjJEAKICAgIyAgICRACiMgICAjICAkQAojICAgICMgJEAKICMjIyMgICRACiAgICAgICAkQAogICAgICAgJEBACjM1MyBzY2Fyb24KICMgIyAkQAogICMgICRACiAgICAgJEAKICAjIyAkQAogIyAgIyRACiAgIyAgJEAKICAgIyAkQAojICAjICRACiAjIyAgJEAKICAgICAkQAogICAgICRAQAozNzYgWWRpZXJlc2lzCiAgICAgICRACiAgIyAjICRACiAgICAgICRACiMgICAgIyRACiMgICAjICRACiMgICMgICRACiAjIyAgICRACiAjICAgICRACiAjICAgICRACiAgICAgICRACiAgICAgICRAQAozODEgWmNhcm9uCiAgICMgIyAkQAogICAgIyAgJEAKICAgICAgICRACiAgIyMjIyMkQAogICAgICMgJEAKICAgIyMgICRACiAgIyAgICAkQAogIyAgICAgJEAKIyMjIyMgICRACiAgICAgICAkQAogICAgICAgJEBACjM4MiB6Y2Fyb24KICMgIyAkQAogICMgICRACiAgICAgJEAKICMjIyMkQAogICAgIyRACiAgICMgJEAKICAjICAkQAogIyAgICRACiMjIyMgJEAKICAgICAkQAogICAgICRAQAo0MDIgZmxvcmluCiAgICAgICRACiAgICAgICRACiAgICAjIyRACiAgICMgICRACiAgIyMjICRACiAgICMgICRACiAgICMgICRACiAgIyAgICRACiAgIyAgICRACiAgIyAgICRACiMjICAgICRAQAo3MTEgY2Fyb24KICAgJEAKIyAjJEAKICMgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEBACjcyOCBicmV2ZQogICAgJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRAQAo3MjkgZG90YWNjZW50CiAkQAojJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEBACjczMCByaW5nCiAgICRACiAjICRACiMgIyRACiAjICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRAQAo3MzEgb2dvbmVrCiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogIyRACiMgJEAKICMkQEAKNzMzIGh1bmdhcnVtbGF1dAogICAgICRACiAjICAjJEAKIyAgIyAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjgyMTEgZW1kYXNoCiAgICAgICAgICAkQAogICAgICAgICAgJEAKICAgICAgICAgICRACiAgICAgICAgICAkQAogICAgICAgICAgJEAKIyMjIyMjIyMjIyRACiAgICAgICAgICAkQAogICAgICAgICAgJEAKICAgICAgICAgICRACiAgICAgICAgICAkQAogICAgICAgICAgJEBACjgyMTIgZW5kYXNoCiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjIyMjIyRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRAQAo4MjE2IHF1b3Rlc2luZ2xlCiAkQAojJEAKIyRACiMkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEBACjgyMTggcXVvdGVzaW5nbGJhc2UKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiMjJEAKICMkQAojICRAQAo4MjIwIHF1b3RlZGJsbGVmdAogICAgICRACiAjICAjJEAKIyAgIyAkQAojIyAjIyRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjgyMjEgcXVvdGVkYmxyaWdodAogICAgICRACiMjICMjJEAKICMgICMkQAojICAjICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjgyMjIgcXVvdGVkYmxiYXNlCiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyAjIyRACiAjICAjJEAKIyAgIyAkQEAKODIyNCBkYWdnZXIKICAgICAkQAogICAjICRACiAgICMgJEAKICMjIyMkQAogICMgICRACiAgIyAgJEAKICMgICAkQAogIyAgICRACiAjICAgJEAKIyAgICAkQAojICAgICRAQAo4MjI1IGRhZ2dlcmRibAogICAgICAkQAogICAgIyAkQAogICAgIyAkQAogICMjIyMkQAogICAjICAkQAogICAjICAkQAogICMgICAkQAogICMgICAkQAojIyMjICAkQAogIyAgICAkQAogIyAgICAkQEAKODIyNiBidWxsZXQKICAkQAogICRACiAgJEAKICAkQAojIyRACiMjJEAKICAkQAogICRACiAgJEAKICAkQAogICRAQAo4MjMwIGVsbGlwc2lzCiAgICAgICAkQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEAKIyAgIyAgIyRACiAgICAgICAkQAogICAgICAgJEBACjgyNDAgcGVydGhvdXNhbmQKICAgICAgICAgICRACiAgICAgICAgICAkQAogICMjICAjICAgJEAKICMgIyAjICAgICRACiAgIyAjICAgICAkQAogICAjICAgICAgJEAKICAjICMjICAjIyRACiAjICMgIyAjICMkQAojICAgIyAgICMgJEAKICAgICAgICAgICRACiAgICAgICAgICAkQEAKODI0OSBndWlsc2luZ2xsZWZ0CiAgICRACiAgICRACiAgICRACiAgICRACiAgIyRACiAjICRACiMgICRACiAjICRACiAgICRACiAgICRACiAgICRAQAo4MjUwIGd1aWxzaW5nbHJpZ2h0CiAgICRACiAgICRACiAgICRACiAgICRACiAjICRACiAgIyRACiAjICRACiMgICRACiAgICRACiAgICRACiAgICRAQAo4MjYwIGZyYWN0aW9uCiAgICAgJEAKICAgICAkQAogICAgIyRACiAgICMgJEAKICAgIyAkQAogICMgICRACiAjICAgJEAKICMgICAkQAojICAgICRACiAgICAgJEAKICAgICAkQEAKODQ4MiB0cmFkZW1hcmsKICAgICAgICAgJEAKICAgICAgICAgJEAKIyMjICMgICAjJEAKICMgICMjICMjJEAKICMgICMgIyAjJEAKICMgICMgIyAjJEAKICAgICAgICAgJEAKICAgICAgICAgJEAKICAgICAgICAgJEAKICAgICAgICAgJEAKICAgICAgICAgJEBACjY0MjU3IGZpCiAgICAgICRACiAgIyMgIyRACiAjICAgICRACiMjIyAjICRACiAjICAjICRACiAjICAjICRACiMgICMgICRACiMgICMgICRACiMgICMgICRACiAgICAgICRACiAgICAgICRAQAo2NDI1OCBmbAogICAgICAkQAogICMjICMkQAogIyAgICMkQAojIyMgIyAkQAogIyAgIyAkQAogIyAgIyAkQAojICAjICAkQAojICAjICAkQAojICAjICAkQAogICAgICAkQAogICAgICAkQEAKLTEgY2lyY3VtZmxleAogICAkQAogIyAkQAojICMkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQEAKLTIgZ3JhdmUKICAkQAojICRACiAjJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRAQAotMyB0aWxkZQogICAgJEAKICMgIyRACiMgIyAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRAQAo='
);

export default helvi;