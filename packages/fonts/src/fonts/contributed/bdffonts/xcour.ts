import { FontFile } from '../../../FontFile';

const xcour = new FontFile(
    'xcour',
    'ZmxmMmEkIDExIDkgMjggLTEgNTAKQ29udmVydGVkIGZyb20geGNvdXIuYmRmIGJ5IGJkZjJmbGYgKGJ5IEpvaG4gQ293YW4gPGNvd2FuQGNjaWwub3JnPikKRk9OVCAtQWRvYmUtQ291cmllci1NZWRpdW0tUi1Ob3JtYWwtLTEwLTEwMC03NS03NS1NLTYwLUlTTzg4NTktMVNJWkUgMTAgNzUgNzUKQ09NTUVOVCAkWENvbnNvcnRpdW06IGNvdXJSMTAuYmRmLHYgMS4xMSA5NS8wMS8yNiAxODowMTowNSBnaWxkZWEgRXhwICQKQ09NTUVOVCAKQ09NTUVOVCArCkNPTU1FTlQgIENvcHlyaWdodCAxOTg0LTE5ODksIDE5OTQgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuCkNPTU1FTlQgIENvcHlyaWdodCAxOTg4LCAxOTk0IERpZ2l0YWwgRXF1aXBtZW50IENvcnBvcmF0aW9uLgpDT01NRU5UCkNPTU1FTlQgIEFkb2JlIGlzIGEgdHJhZGVtYXJrIG9mIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIHdoaWNoIG1heSBiZQpDT01NRU5UICByZWdpc3RlcmVkIGluIGNlcnRhaW4ganVyaXNkaWN0aW9ucy4KQ09NTUVOVCAgUGVybWlzc2lvbiB0byB1c2UgdGhlc2UgdHJhZGVtYXJrcyBpcyBoZXJlYnkgZ3JhbnRlZCBvbmx5IGluCkNPTU1FTlQgIGFzc29jaWF0aW9uIHdpdGggdGhlIGltYWdlcyBkZXNjcmliZWQgaW4gdGhpcyBmaWxlLgpDT01NRU5UCkNPTU1FTlQgIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGRpc3RyaWJ1dGUgYW5kIHNlbGwgdGhpcyBzb2Z0d2FyZQpDT01NRU5UICBhbmQgaXRzIGRvY3VtZW50YXRpb24gZm9yIGFueSBwdXJwb3NlIGFuZCB3aXRob3V0IGZlZSBpcyBoZXJlYnkKQ09NTUVOVCAgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZXMgYXBwZWFyIGluIGFsbApDT01NRU5UICBjb3BpZXMgYW5kIHRoYXQgYm90aCB0aG9zZSBjb3B5cmlnaHQgbm90aWNlcyBhbmQgdGhpcyBwZXJtaXNzaW9uCkNPTU1FTlQgIG5vdGljZSBhcHBlYXIgaW4gc3VwcG9ydGluZyBkb2N1bWVudGF0aW9uLCBhbmQgdGhhdCB0aGUgbmFtZXMgb2YKQ09NTUVOVCAgQWRvYmUgU3lzdGVtcyBhbmQgRGlnaXRhbCBFcXVpcG1lbnQgQ29ycG9yYXRpb24gbm90IGJlIHVzZWQgaW4KQ09NTUVOVCAgYWR2ZXJ0aXNpbmcgb3IgcHVibGljaXR5IHBlcnRhaW5pbmcgdG8gZGlzdHJpYnV0aW9uIG9mIHRoZSBzb2Z0d2FyZQpDT01NRU5UICB3aXRob3V0IHNwZWNpZmljLCB3cml0dGVuIHByaW9yIHBlcm1pc3Npb24uICBBZG9iZSBTeXN0ZW1zIGFuZApDT01NRU5UICBEaWdpdGFsIEVxdWlwbWVudCBDb3Jwb3JhdGlvbiBtYWtlIG5vIHJlcHJlc2VudGF0aW9ucyBhYm91dCB0aGUKQ09NTUVOVCAgc3VpdGFiaWxpdHkgb2YgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UuICBJdCBpcyBwcm92aWRlZCAiYXMKQ09NTUVOVCAgaXMiIHdpdGhvdXQgZXhwcmVzcyBvciBpbXBsaWVkIHdhcnJhbnR5LgpDT01NRU5UIC0KRk9VTkRSWSAiQWRvYmUiCkZBTUlMWV9OQU1FICJDb3VyaWVyIgpXRUlHSFRfTkFNRSAiTWVkaXVtIgpTTEFOVCAiUiIKU0VUV0lEVEhfTkFNRSAiTm9ybWFsIgpBRERfU1RZTEVfTkFNRSAiIgpQSVhFTF9TSVpFIDEwClBPSU5UX1NJWkUgMTAwClJFU09MVVRJT05fWCA3NQpSRVNPTFVUSU9OX1kgNzUKU1BBQ0lORyAiTSIKQVZFUkFHRV9XSURUSCA2MApDQVBfSEVJR0hUIDYKWF9IRUlHSFQgNQpGT05UX0FTQ0VOVCA4CkZPTlRfREVTQ0VOVCAyCkZBQ0VfTkFNRSAiQ291cmllciIKQ09QWVJJR0hUICJDb3B5cmlnaHQgKGMpIDE5ODQsIDE5ODcgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIENvcHlyaWdodCAoYykgMTk4OCwgMTk5MSBEaWdpdGFsIEVxdWlwbWVudCBDb3Jwb3JhdGlvbi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4iCk5PVElDRSAiTm8gbWFyayIKX0RFQ19ERVZJQ0VfRk9OVE5BTUVTICJQUz1Db3VyaWVyIgpfREVDX1BST0RVQ1RJTkZPICJERUN3aW5kb3dzIEZvbnRzIFYyLjIsIDA3LU5vdi0xOTkxIgpERUZBVUxUX0NIQVIgMzIKUkVMQVRJVkVfU0VUV0lEVEggNTAKUkVMQVRJVkVfV0VJR0hUIDUwCkZVTExfTkFNRSAiQ291cmllciIKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQEAKICRACiAkQAojJEAKIyRACiMkQAojJEAKIyRACiAkQAojJEAKICRACiAkQEAKICAgJEAKICAgJEAKIyAjJEAKIyAjJEAKIyAjJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEBACiAgICAgICRACiAgICAgICRACiAgIyAjICRACiAgIyAjICRACiAjIyMjIyRACiAgIyAjICRACiMjIyMjIyRACiAjICMgICRACiAjICMgICRACiAgICAgICRACiAgICAgICRAQAogICAgJEAKICAgICRACiAgIyAkQAogIyMjJEAKIyAgICRACiAjIyAkQAogICAjJEAKIyAgIyRACiAjIyAkQAogICMgJEAKICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyMgICAkQAojICMgIyAkQAojIyAjICAkQAogICMgIyMkQAogIyAjICMkQAogICAjIyAkQAogICAgICAkQAogICAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAjIyAgJEAKICMgICAgJEAKICMjICAgJEAKIyAgIyAjJEAKIyAgICMgJEAKICMjIyAjJEAKICAgICAgJEAKICAgICAgJEBACiAgJEAKICAkQAogIyRACiAjJEAKIyAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQEAKICAgJEAKICAgJEAKICAjJEAKICMgJEAKICMgJEAKIyAgJEAKIyAgJEAKIyAgJEAKICMgJEAKICMgJEAKICAjJEBACiAgICRACiAgICRACiMgICRACiAjICRACiAjICRACiAgIyRACiAgIyRACiAgIyRACiAjICRACiAjICRACiMgICRAQAogICAgICRACiAgICAgJEAKICAjICAkQAojIyAjIyRACiAgIyAgJEAKICMgIyAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgIyAgJEAKICAjICAkQAojIyMjIyRACiAgIyAgJEAKICAjICAkQAogICAgICRACiAgICAgJEAKICAgICAkQEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAjJEAKICMkQAojICRAQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiMjIyMkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRAQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiMkQAogJEAKICRAQAogICAgICRACiAgICAgJEAKICAgICMkQAogICAjICRACiAgICMgJEAKICAjICAkQAogICMgICRACiAjICAgJEAKICMgICAkQAojICAgICRACiAgICAgJEBACiAgICAkQAogICAgJEAKICMjICRACiMgICMkQAojICAjJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACiAgICAkQAogICAgJEAKICAjICRACiMjIyAkQAogICMgJEAKICAjICRACiAgIyAkQAogICMgJEAKIyMjIyRACiAgICAkQAogICAgJEBACiAgICAkQAogICAgJEAKICMjICRACiMgICMkQAogICAjJEAKICAjICRACiAjICAkQAojICAgJEAKIyMjIyRACiAgICAkQAogICAgJEBACiAgICAkQAogICAgJEAKICMjICRACiMgICMkQAogICAjJEAKICMjICRACiAgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACiAgICAgJEAKICAgICAkQAogICAjICRACiAgIyMgJEAKICMgIyAkQAojICAjICRACiMjIyMjJEAKICAgIyAkQAogICAjICRACiAgICAgJEAKICAgICAkQEAKICAgICRACiAgICAkQAojIyMjJEAKIyAgICRACiMgICAkQAojIyMgJEAKICAgIyRACiAgICMkQAojIyMgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAogIyMjJEAKIyAgICRACiMgICAkQAojIyMgJEAKIyAgIyRACiMgICMkQAogIyMgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAojIyMjJEAKIyAgIyRACiAgICMkQAogICMgJEAKICAjICRACiAjICAkQAogIyAgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAogIyMgJEAKIyAgIyRACiMgICMkQAogIyMgJEAKICAgICRACiAgICAkQEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAogIyMjJEAKICAgIyRACiAgICMkQAojIyMgJEAKICAgICRACiAgICAkQEAKICRACiAkQAogJEAKICRACiAkQAojJEAKICRACiAkQAojJEAKICRACiAkQEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAjJEAKICAkQAogICRACiAjJEAKICMkQAojICRAQAogICAkQAogICAkQAogICAkQAogICMkQAogIyAkQAojICAkQAogIyAkQAogICMkQAogICAkQAogICAkQAogICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiMjIyMkQAogICAgJEAKIyMjIyRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAKICAgJEAKICAgJEAKICAgJEAKIyAgJEAKICMgJEAKICAjJEAKICMgJEAKIyAgJEAKICAgJEAKICAgJEAKICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAjIyAkQAojICAjJEAKICAjICRACiAjICAkQAogICAgJEAKICMgICRACiAgICAkQAogICAgJEBACiAgICAgICRACiAgICAgICRACiAgIyMgICRACiAjICAjICRACiMgICMjICRACiMgIyAjICRACiMgIyAjICRACiMgICMjIyRACiMgICAgICRACiAjIyMjICRACiAgICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyMjICAkQAogICMgIyAkQAogIyAgIyAkQAogIyMjIyAkQAogIyAgIyAkQAojIyAgIyMkQAogICAgICAkQAogICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKIyMjIyAkQAogIyAgIyRACiAjIyMgJEAKICMgICMkQAogIyAgIyRACiMjIyMgJEAKICAgICAkQAogICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICAkQAojICAgJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyMjICRACiAjICAjJEAKICMgICMkQAogIyAgIyRACiAjICAjJEAKIyMjIyAkQAogICAgICRACiAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiMjIyMjJEAKICMgICMkQAogIyMjICRACiAjICAgJEAKICMgICMkQAojIyMjIyRACiAgICAgJEAKICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKIyMjIyMkQAogIyAgIyRACiAjIyMgJEAKICMgIyAkQAogIyAgICRACiMjIyAgJEAKICAgICAkQAogICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICAkQAojICMjJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAojIyAgIyMkQAogIyAgIyAkQAogIyMjIyAkQAogIyAgIyAkQAogIyAgIyAkQAojIyAgIyMkQAogICAgICAkQAogICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKIyMjIyMkQAogICMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRACiMjIyMjJEAKICAgICAkQAogICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMjIyRACiAgICMgJEAKICAgIyAkQAojICAjICRACiMgICMgJEAKICMjICAkQAogICAgICRACiAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjICMjICRACiAjICMgICRACiAjIyAgICRACiAjICMgICRACiAjICAjICRACiMjIyAgIyRACiAgICAgICRACiAgICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyMgICRACiAjICAgJEAKICMgICAkQAogIyAgICRACiAjICAjJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiMgICAjJEAKIyMgIyMkQAojICMgIyRACiMgIyAjJEAKIyAgICMkQAojIyAjIyRACiAgICAgJEAKICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKIyMgIyMkQAogIyAgIyRACiAjIyAjJEAKICMgIyMkQAogIyAgIyRACiMjICAjJEAKICAgICAkQAogICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAojICAjJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyMjICRACiAjICAjJEAKICMgICMkQAogIyMjICRACiAjICAgJEAKIyMjICAkQAogICAgICRACiAgICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAjIyAkQAojICAjJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICMkQAogICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjIyMgICRACiAjICAjICRACiAjICAjICRACiAjIyMgICRACiAjICAjICRACiMjIyAgIyRACiAgICAgICRACiAgICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAogIyMjJEAKIyAgICRACiAjIyAkQAogICAjJEAKIyAgIyRACiMjIyAkQAogICAgJEAKICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyMjIyRACiMgIyAjJEAKICAjICAkQAogICMgICRACiAgIyAgJEAKICMjIyAkQAogICAgICRACiAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjICAjIyRACiAjICAjICRACiAjICAjICRACiAjICAjICRACiAjICAjICRACiAgIyMgICRACiAgICAgICRACiAgICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyAjIyRACiMgICAjJEAKICMgIyAkQAogIyAjICRACiAjICMgJEAKICAjICAkQAogICAgICRACiAgICAgJEBACiAgICAgICAkQAogICAgICAgJEAKICAgICAgICRACiMjIyAjIyMkQAogIyAgICMgJEAKICMgIyAjICRACiAjICMgIyAkQAogICMgIyAgJEAKICAjICMgICRACiAgICAgICAkQAogICAgICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiMjICMjJEAKICMgIyAkQAogICMgICRACiAgIyAgJEAKICMgIyAkQAojIyAjIyRACiAgICAgJEAKICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKIyMgIyMkQAojICAgIyRACiAjICMgJEAKICAjICAkQAogICMgICRACiAjIyMgJEAKICAgICAkQAogICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAojIyMjJEAKIyAgIyRACiAgIyAkQAogIyAgJEAKIyAgIyRACiMjIyMkQAogICAgJEAKICAgICRAQAogICRACiAgJEAKIyMkQAojICRACiMgJEAKIyAkQAojICRACiMgJEAKIyAkQAojICRACiMjJEBACiAgICAgJEAKICAgICAkQAojICAgICRACiAjICAgJEAKICMgICAkQAogICMgICRACiAgIyAgJEAKICAgIyAkQAogICAjICRACiAgICAjJEAKICAgICAkQEAKICAkQAogICRACiMjJEAKICMkQAogIyRACiAjJEAKICMkQAogIyRACiAjJEAKICMkQAojIyRAQAogICAgICRACiAgICAgJEAKICAjICAkQAogIyAjICRACiMgICAjJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjIyMjIyRAQAogICRACiAgJEAKIyAkQAojICRACiAjJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICMjICAkQAogICAjICRACiAjIyMgJEAKIyAgIyAkQAogIyMgIyRACiAgICAgJEAKICAgICAkQEAKICAgICAkQAogICAgICRACiMjICAgJEAKICMgICAkQAogIyMjICRACiAjICAjJEAKICMgICMkQAogIyAgIyRACiMjIyMgJEAKICAgICAkQAogICAgICRAQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICMjICRACiMgICMkQAojICAgJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAogICAgICRACiAgICAgJEAKICAjIyAkQAogICAjICRACiAjIyMgJEAKIyAgIyAkQAojICAjICRACiMgICMgJEAKICMjICMkQAogICAgICRACiAgICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMjIyAkQAojICAgJEAKICMjIyRACiAgICAkQAogICAgJEBACiAgICAkQAogICAgJEAKICAjIyRACiAjICAkQAojIyMjJEAKICMgICRACiAjICAkQAogIyAgJEAKIyMjIyRACiAgICAkQAogICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICMjICMkQAojICAjICRACiMgICMgJEAKIyAgIyAkQAogIyMjICRACiAgICMgJEAKIyMjICAkQEAKICAgICAgJEAKICAgICAgJEAKIyMgICAgJEAKICMgICAgJEAKICMjIyAgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKIyMjICMjJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgJEAKICAgICAkQAogICMgICRACiAgICAgJEAKICMjICAkQAogICMgICRACiAgIyAgJEAKICAjICAkQAojIyMjIyRACiAgICAgJEAKICAgICAkQEAKICAgJEAKICAgJEAKICAjJEAKICAgJEAKIyMjJEAKICAjJEAKICAjJEAKICAjJEAKICAjJEAKICAjJEAKIyMgJEBACiAgICAgJEAKICAgICAkQAojIyAgICRACiAjICAgJEAKICMgIyMkQAogIyAjICRACiAjIyAgJEAKICMgIyAkQAojIyAjIyRACiAgICAgJEAKICAgICAkQEAKICAgICAkQAogICAgICRACiAjIyAgJEAKICAjICAkQAogICMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRACiMjIyMjJEAKICAgICAkQAogICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogICAgICAkQAojIyAjICAkQAojICMgIyAkQAojICMgIyAkQAojICMgIyAkQAojICMgIyMkQAogICAgICAkQAogICAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKIyAjIyAgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKIyMjICMjJEAKICAgICAgJEAKICAgICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKIyAjIyAkQAogIyAgIyRACiAjICAjJEAKICMgICMkQAogIyMjICRACiAjICAgJEAKIyMjICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMgIyRACiMgICMgJEAKIyAgIyAkQAojICAjICRACiAjIyMgJEAKICAgIyAkQAogICMjIyRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiMgIyMjJEAKICMgICAkQAogIyAgICRACiAjICAgJEAKIyMjIyAkQAogICAgICRACiAgICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogIyMjJEAKIyAgICRACiAjIyAkQAogICAjJEAKIyMjICRACiAgICAkQAogICAgJEBACiAgICAgJEAKICAgICAkQAogIyAgICRACiAjICAgJEAKIyMjIyAkQAogIyAgICRACiAjICAgJEAKICMgICMkQAogICMjICRACiAgICAgJEAKICAgICAkQEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKIyMgIyMgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKICAjIyAjJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjICAjIyRACiAjICAgIyRACiAgIyAjICRACiAgIyAjICRACiAgICMgICRACiAgICAgICRACiAgICAgICRAQAogICAgICAkQAogICAgICAkQAogICAgICAkQAogICAgICAkQAojICMgIyMkQAojICMgIyAkQAojICMgIyAkQAogIyAjICAkQAogIyAjICAkQAogICAgICAkQAogICAgICAkQEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyAjIyRACiAjICMgJEAKICAjICAkQAogIyAjICRACiMjICMjJEAKICAgICAkQAogICAgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiMjICMjJEAKICMgICMkQAogIyAgIyRACiAjICAjJEAKICAjIyAkQAogICMgICRACiMjICAgJEBACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAojIyMjJEAKICAjICRACiAjICAkQAojICAjJEAKIyMjIyRACiAgICAkQAogICAgJEBACiAgICRACiAgICRACiAgIyRACiAjICRACiAjICRACiAjICRACiMgICRACiAjICRACiAjICRACiAjICRACiAgIyRAQAogJEAKICRACiMkQAojJEAKIyRACiMkQAojJEAKIyRACiMkQAojJEAKIyRAQAogICAkQAogICAkQAojICAkQAogIyAkQAogIyAkQAogIyAkQAogICMkQAogIyAkQAogIyAkQAogIyAkQAojICAkQEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAjICMkQAojICMgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAKICAgICAgJEAKICAjICMgJEAKICAgICAgJEAKICMjIyAgJEAKICAjICMgJEAKICMgICMgJEAKICMjIyMgJEAKICMgICMgJEAKIyMgICMjJEAKICAgICAgJEAKICAgICAgJEBACiAgICAkQAojICAjJEAKICAgICRACiAjIyAkQAojICAjJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACiAgICAgICRACiAjICAjICRACiAgICAgICRACiMjICAjIyRACiAjICAjICRACiAjICAjICRACiAjICAjICRACiAjICAjICRACiAgIyMgICRACiAgICAgICRACiAgICAgICRAQAogICAgICRACiAgICAgJEAKICMgIyAkQAogICAgICRACiAjIyAgJEAKICAgIyAkQAogIyMjICRACiMgICMgJEAKICMjICMkQAogICAgICRACiAgICAgJEBACiAgICAkQAogICAgJEAKIyAgIyRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACiAgICAgICRACiAgICAgICRACiAjICAjICRACiAgICAgICRACiMjICMjICRACiAjICAjICRACiAjICAjICRACiAjICAjICRACiAgIyMgIyRACiAgICAgICRACiAgICAgICRAQAogICAgICAkQAogICAgICAkQAogICMjICAkQAogIyAgIyAkQAogIyAgIyAkQAogIyAjIyAkQAogIyAgICMkQAogIyAgICMkQAojIyAjIyAkQAogICAgICAkQAogICAgICAkQEAKMTYwIHNwYWNlCiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEBACjE2MSBleGNsYW1kb3duCiAkQAogJEAKICRACiAkQAojJEAKICRACiMkQAojJEAKIyRACiMkQAojJEBACjE2MiBjZW50CiAgICAkQAogICAgJEAKICAjICRACiAgIyAkQAogIyMjJEAKIyAgICRACiMgICAkQAogIyMjJEAKICAjICRACiAgIyAkQAogICAgJEBACjE2MyBzdGVybGluZwogICAgICAkQAogICAgICAkQAogICMjIyAkQAogIyAgICAkQAojIyMjIyAkQAogICMgICAkQAogICMgICAkQAogIyAgICMkQAojIyMjIyMkQAogICAgICAkQAogICAgICAkQEAKMTY0IGN1cnJlbmN5CiAgICAgJEAKICAgICAkQAogICAgICRACiMgICAjJEAKICMjIyAkQAogIyAjICRACiAjIyMgJEAKIyAgICMkQAogICAgICRACiAgICAgJEAKICAgICAkQEAKMTY1IHllbgogICAgICRACiAgICAgJEAKIyAgICMkQAogIyAjICRACiMjIyMjJEAKICAjICAkQAojIyMjIyRACiAgIyAgJEAKICMjIyAkQAogICAgICRACiAgICAgJEBACjE2NiBicm9rZW5iYXIKICRACiAkQAojJEAKIyRACiMkQAogJEAKICRACiMkQAojJEAKIyRACiMkQEAKMTY3IHNlY3Rpb24KICAgICRACiAgICAkQAogICAgJEAKICMjIyRACiMgICAkQAogIyMgJEAKIyAgIyRACiAjIyAkQAogICAjJEAKIyMjICRACiAgICAkQEAKMTY4IGRpZXJlc2lzCiAgICRACiAgICRACiMgIyRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRAQAoxNjkgY29weXJpZ2h0CiAgICAgICRACiAgICAgICRACiAgIyMgICRACiAjICAjICRACiMgIyMgIyRACiMgIyAgIyRACiMgIyMgIyRACiAjICAjICRACiAgIyMgICRACiAgICAgICRACiAgICAgICRAQAoxNzAgb3JkZmVtaW5pbmUKICAgICRACiAgICAkQAogICAgJEAKIyMjICRACiAgICMkQAojIyAjJEAKICAgICRACiMjIyMkQAogICAgJEAKICAgICRACiAgICAkQEAKMTcxIGd1aWxsZW1vdGxlZnQKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAjICAjJEAKIyAgIyAkQAogIyAgIyRACiAgICAgJEAKICAgICAkQAogICAgICRAQAoxNzIgbG9naWNhbG5vdAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiMjIyMjJEAKICAgICMkQAogICAgIyRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjE3MyBoeXBoZW4KICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAojIyMjJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAKMTc0IHJlZ2lzdGVyZWQKICAgICAgJEAKICAgICAgJEAKICAjIyAgJEAKICMgICMgJEAKIyAjIyMjJEAKIyAjIyAjJEAKIyAjICMjJEAKICMgICMgJEAKICAjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjE3NSBtYWNyb24KICAgICRACiAgICAkQAojIyMjJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAKMTc2IGRlZ3JlZQogICAgJEAKICAgICRACiAjIyAkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRAQAoxNzcgcGx1c21pbnVzCiAgICAgJEAKICAgICAkQAogICAgICRACiAgIyAgJEAKIyMjIyMkQAogICMgICRACiAgICAgJEAKIyMjIyMkQAogICAgICRACiAgICAgJEAKICAgICAkQEAKMTc4IHR3b3N1cGVyaW9yCiAgICRACiAgICRACiAjIyRACiMgIyRACiAjICRACiMjIyRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRAQAoxNzkgdGhyZWVzdXBlcmlvcgogICAkQAogICAkQAojIyMkQAogIyAkQAogICMkQAojIyAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQEAKMTgwIGFjdXRlCiAgJEAKICMkQAojICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQEAKMTgxIG11CiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjICMjICRACiAjICAjICRACiAjICAjICRACiAjICAjICRACiAjIyMgIyRACiAjICAgICRACiAjICAgICRAQAoxODIgcGFyYWdyYXBoCiAgICAgICRACiAgICAgICRACiAgICAgICRACiAjIyMjIyRACiMgIyAjICRACiMgIyAjICRACiAjIyAjICRACiAgIyAjICRACiAgIyAjICRACiAjIyAjIyRACiAgICAgICRAQAoxODMgcGVyaW9kY2VudGVyZWQKICRACiAkQAogJEAKICRACiAkQAojJEAKICRACiAkQAogJEAKICRACiAkQEAKMTg0IGNlZGlsbGEKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICMgJEAKICAjJEAKIyMgJEBACjE4NSBvbmVzdXBlcmlvcgogICAkQAogICAkQAojIyAkQAogIyAkQAogIyAkQAojIyMkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQEAKMTg2IG9yZG1hc2N1bGluZQogICAgJEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiAjIyAkQAogICAgJEAKIyMjIyRACiAgICAkQAogICAgJEAKICAgICRAQAoxODcgZ3VpbGxlbW90cmlnaHQKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiMgICMgJEAKICMgICMkQAojICAjICRACiAgICAgJEAKICAgICAkQAogICAgICRAQAoxODggb25lcXVhcnRlcgogICAgICAgJEAKIyMgICAgICRACiAjICAgICMkQAogIyAgICMgJEAKIyMjICMgICRACiAgICMgICAkQAogICMgICMgJEAKICMgICMjICRACiMgICMjIyMkQAogICAgICMgJEAKICAgICAgICRAQAoxODkgb25laGFsZgogICAgICAgJEAKIyMgICAgICRACiAjICAgICMkQAogIyAgICMgJEAKIyMjICMgICRACiAgICMgICAkQAogICMgIyMgJEAKICMgIyAjICRACiMgICAjICAkQAogICAjIyMgJEAKICAgICAgICRAQAoxOTAgdGhyZWVxdWFydGVycwogICAgICAgJEAKIyMjICAgICRACiAjICAgICMkQAogICMgICMgJEAKIyMgICMgICRACiAgICMgICAkQAogICMgICMgJEAKICMgICMjICRACiMgICMjIyMkQAogICAgICMgJEAKICAgICAgICRAQAoxOTEgcXVlc3Rpb25kb3duCiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAjICRACiAgICAkQAogICMgJEAKICMgICRACiMgICMkQAogIyMgJEBACjE5MiBBZ3JhdmUKICAjICAgJEAKICAgIyAgJEAKICAgICAgJEAKICMjIyAgJEAKICAjICMgJEAKICMgICMgJEAKICMjIyMgJEAKICMgICMgJEAKIyMgICMjJEAKICAgICAgJEAKICAgICAgJEBACjE5MyBBYWN1dGUKICAgICMgJEAKICAgIyAgJEAKICAgICAgJEAKICMjIyAgJEAKICAjICMgJEAKICMgICMgJEAKICMjIyMgJEAKICMgICMgJEAKIyMgICMjJEAKICAgICAgJEAKICAgICAgJEBACjE5NCBBY2lyY3VtZmxleAogICAjICAkQAogICMgIyAkQAogICAgICAkQAogIyMjICAkQAogICMgIyAkQAogIyAgIyAkQAogIyMjIyAkQAogIyAgIyAkQAojIyAgIyMkQAogICAgICAkQAogICAgICAkQEAKMTk1IEF0aWxkZQogICMgIyAkQAogIyAjICAkQAogICAgICAkQAogIyMjICAkQAogICMgIyAkQAogIyAgIyAkQAogIyMjIyAkQAogIyAgIyAkQAojIyAgIyMkQAogICAgICAkQAogICAgICAkQEAKMTk2IEFkaWVyZXNpcwogICAgICAkQAogICMgIyAkQAogICAgICAkQAogIyMjICAkQAogICMgIyAkQAogIyAgIyAkQAogIyMjIyAkQAogIyAgIyAkQAojIyAgIyMkQAogICAgICAkQAogICAgICAkQEAKMTk3IEFyaW5nCiAgICMgICRACiAgIyAjICRACiAgICMgICRACiAjIyMgICRACiAgIyAjICRACiAjICAjICRACiAjIyMjICRACiAjICAjICRACiMjICAjIyRACiAgICAgICRACiAgICAgICRAQAoxOTggQUUKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICMjIyMjJEAKICAjIyAgJEAKICMgIyMjJEAKICMjIyAgJEAKIyAgIyAgJEAKIyAgIyMjJEAKICAgICAgJEAKICAgICAgJEBACjE5OSBDY2VkaWxsYQogICAgJEAKICAgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICAkQAojICAgJEAKIyAgIyRACiAjIyAkQAogICMgJEAKIyMgICRAQAoyMDAgRWdyYXZlCiAgIyAgJEAKICAgIyAkQAogICAgICRACiMjIyMjJEAKICMgICMkQAogIyMjICRACiAjICAgJEAKICMgICMkQAojIyMjIyRACiAgICAgJEAKICAgICAkQEAKMjAxIEVhY3V0ZQogICAjICRACiAgIyAgJEAKICAgICAkQAojIyMjIyRACiAjICAjJEAKICMjIyAkQAogIyAgICRACiAjICAjJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACjIwMiBFY2lyY3VtZmxleAogICMgICRACiAjICMgJEAKICAgICAkQAojIyMjIyRACiAjICAjJEAKICMjIyAkQAogIyAgICRACiAjICAjJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACjIwMyBFZGllcmVzaXMKICAgICAkQAogIyAjICRACiAgICAgJEAKIyMjIyMkQAogIyAgIyRACiAjIyMgJEAKICMgICAkQAogIyAgIyRACiMjIyMjJEAKICAgICAkQAogICAgICRAQAoyMDQgSWdyYXZlCiAjICAgJEAKICAjICAkQAogICAgICRACiMjIyMjJEAKICAjICAkQAogICMgICRACiAgIyAgJEAKICAjICAkQAojIyMjIyRACiAgICAgJEAKICAgICAkQEAKMjA1IElhY3V0ZQogICAjICRACiAgIyAgJEAKICAgICAkQAojIyMjIyRACiAgIyAgJEAKICAjICAkQAogICMgICRACiAgIyAgJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACjIwNiBJY2lyY3VtZmxleAogICMgICRACiAjICMgJEAKICAgICAkQAojIyMjIyRACiAgIyAgJEAKICAjICAkQAogICMgICRACiAgIyAgJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACjIwNyBJZGllcmVzaXMKICAgICAkQAogIyAjICRACiAgICAgJEAKIyMjIyMkQAogICMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRACiMjIyMjJEAKICAgICAkQAogICAgICRAQAoyMDggRXRoCiAgICAgJEAKICAgICAkQAogICAgICRACiMjIyMgJEAKICMgICMkQAojIyMgIyRACiAjICAjJEAKICMgICMkQAojIyMjICRACiAgICAgJEAKICAgICAkQEAKMjA5IE50aWxkZQogICMgIyRACiAjICMgJEAKICAgICAkQAojIyAjIyRACiAjICAjJEAKICMjICMkQAogIyAjIyRACiAjICAjJEAKIyMgICMkQAogICAgICRACiAgICAgJEBACjIxMCBPZ3JhdmUKICMgICRACiAgIyAkQAogICAgJEAKICMjICRACiMgICMkQAojICAjJEAKIyAgIyRACiMgICMkQAogIyMgJEAKICAgICRACiAgICAkQEAKMjExIE9hY3V0ZQogICAjJEAKICAjICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAojICAjJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAoyMTIgT2NpcmN1bWZsZXgKICMjICRACiMgICMkQAogICAgJEAKICMjICRACiMgICMkQAojICAjJEAKIyAgIyRACiMgICMkQAogIyMgJEAKICAgICRACiAgICAkQEAKMjEzIE90aWxkZQogIyAjJEAKIyAjICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAojICAjJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAoyMTQgT2RpZXJlc2lzCiAgICAkQAojICAjJEAKICAgICRACiAjIyAkQAojICAjJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACjIxNSBtdWx0aXBseQogICAgICRACiAgICAgJEAKICAgICAkQAojICAgIyRACiAjICMgJEAKICAjICAkQAogIyAjICRACiMgICAjJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjIxNiBPc2xhc2gKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAjIyAjJEAKICMgICMgJEAKICMgIyMgJEAKICMjICMgJEAKICMgICMgJEAKIyAjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxNyBVZ3JhdmUKICAjICAgJEAKICAgIyAgJEAKICAgICAgJEAKIyMgICMjJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKICAjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxOCBVYWN1dGUKICAgIyAgJEAKICAjICAgJEAKICAgICAgJEAKIyMgICMjJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKICAjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjIxOSBVY2lyY3VtZmxleAogICMjICAkQAogIyAgIyAkQAogICAgICAkQAojIyAgIyMkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAogICMjICAkQAogICAgICAkQAogICAgICAkQEAKMjIwIFVkaWVyZXNpcwogICAgICAkQAogIyAgIyAkQAogICAgICAkQAojIyAgIyMkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAogICMjICAkQAogICAgICAkQAogICAgICAkQEAKMjIxIFlhY3V0ZQogICAjICRACiAgIyAgJEAKICAgICAkQAojIyAjIyRACiMgICAjJEAKICMgIyAkQAogICMgICRACiAgIyAgJEAKICMjIyAkQAogICAgICRACiAgICAgJEBACjIyMiBUaG9ybgogICAgICRACiAgICAgJEAKICAgICAkQAojIyAgICRACiAjIyMgJEAKICMgICMkQAogIyMjICRACiAjICAgJEAKIyMjICAkQAogICAgICRACiAgICAgJEBACjIyMyBnZXJtYW5kYmxzCiAgICAgICRACiAgICAgICRACiAgIyMgICRACiAjICAjICRACiAjICAjICRACiAjICMjICRACiAjICAgIyRACiAjICAgIyRACiMjICMjICRACiAgICAgICRACiAgICAgICRAQAoyMjQgYWdyYXZlCiAgICAgJEAKICMgICAkQAogICMgICRACiAgICAgJEAKICMjICAkQAogICAjICRACiAjIyMgJEAKIyAgIyAkQAogIyMgIyRACiAgICAgJEAKICAgICAkQEAKMjI1IGFhY3V0ZQogICAgICRACiAgICMgJEAKICAjICAkQAogICAgICRACiAjIyAgJEAKICAgIyAkQAogIyMjICRACiMgICMgJEAKICMjICMkQAogICAgICRACiAgICAgJEBACjIyNiBhY2lyY3VtZmxleAogICAgICRACiAgIyAgJEAKICMgIyAkQAogICAgICRACiAjIyAgJEAKICAgIyAkQAogIyMjICRACiMgICMgJEAKICMjICMkQAogICAgICRACiAgICAgJEBACjIyNyBhdGlsZGUKICAgICAkQAogIyAjICRACiMgIyAgJEAKICAgICAkQAogIyMgICRACiAgICMgJEAKICMjIyAkQAojICAjICRACiAjIyAjJEAKICAgICAkQAogICAgICRAQAoyMjggYWRpZXJlc2lzCiAgICAgJEAKICAgICAkQAogIyAjICRACiAgICAgJEAKICMjICAkQAogICAjICRACiAjIyMgJEAKIyAgIyAkQAogIyMgIyRACiAgICAgJEAKICAgICAkQEAKMjI5IGFyaW5nCiAgIyAgJEAKICMgIyAkQAogICMgICRACiAgICAgJEAKICMjICAkQAogICAjICRACiAjIyMgJEAKIyAgIyAkQAogIyMgIyRACiAgICAgJEAKICAgICAkQEAKMjMwIGFlCiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAjIyAjIyRACiMgICMgIyRACiAjIyMjIyRACiMgICMgICRACiMjIyAjIyRACiAgICAgICRACiAgICAgICRAQAoyMzEgY2NlZGlsbGEKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAjIyAkQAojICAjJEAKIyAgICRACiMgICMkQAogIyMgJEAKICAjICRACiMjICAkQEAKMjMyIGVncmF2ZQogICAgJEAKICMgICRACiAgIyAkQAogICAgJEAKICMjICRACiMgICMkQAojIyMjJEAKIyAgICRACiAjIyMkQAogICAgJEAKICAgICRAQAoyMzMgZWFjdXRlCiAgICAkQAogICMgJEAKICMgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMjIyMkQAojICAgJEAKICMjIyRACiAgICAkQAogICAgJEBACjIzNCBlY2lyY3VtZmxleAogICAgJEAKICMjICRACiMgICMkQAogICAgJEAKICMjICRACiMgICMkQAojIyMjJEAKIyAgICRACiAjIyMkQAogICAgJEAKICAgICRAQAoyMzUgZWRpZXJlc2lzCiAgICAkQAogICAgJEAKIyAgIyRACiAgICAkQAogIyMgJEAKIyAgIyRACiMjIyMkQAojICAgJEAKICMjIyRACiAgICAkQAogICAgJEBACjIzNiBpZ3JhdmUKICAgICAkQAogIyAgICRACiAgIyAgJEAKICAgICAkQAogIyMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRACiMjIyMjJEAKICAgICAkQAogICAgICRAQAoyMzcgaWFjdXRlCiAgICAgJEAKICAgIyAkQAogICMgICRACiAgICAgJEAKICMjICAkQAogICMgICRACiAgIyAgJEAKICAjICAkQAojIyMjIyRACiAgICAgJEAKICAgICAkQEAKMjM4IGljaXJjdW1mbGV4CiAgICAgJEAKICAjICAkQAogIyAjICRACiAgICAgJEAKICMjICAkQAogICMgICRACiAgIyAgJEAKICAjICAkQAojIyMjIyRACiAgICAgJEAKICAgICAkQEAKMjM5IGlkaWVyZXNpcwogICAgICRACiAgICAgJEAKICMgIyAkQAogICAgICRACiAjIyAgJEAKICAjICAkQAogICMgICRACiAgIyAgJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACjI0MCBldGgKICAgICRACiMjICMkQAogIyMgJEAKIyAjICRACiAjIyMkQAojICAjJEAKIyAgIyRACiMgICMkQAogIyMgJEAKICAgICRACiAgICAkQEAKMjQxIG50aWxkZQogICAgICAkQAogICMgIyAkQAogIyAjICAkQAogICAgICAkQAojICMjICAkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAojIyMgIyMkQAogICAgICAkQAogICAgICAkQEAKMjQyIG9ncmF2ZQogICAgJEAKICMgICRACiAgIyAkQAogICAgJEAKICMjICRACiMgICMkQAojICAjJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAoyNDMgb2FjdXRlCiAgICAkQAogICMgJEAKICMgICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACjI0NCBvY2lyY3VtZmxleAogICAgJEAKICMjICRACiMgICMkQAogICAgJEAKICMjICRACiMgICMkQAojICAjJEAKIyAgIyRACiAjIyAkQAogICAgJEAKICAgICRAQAoyNDUgb3RpbGRlCiAgICAkQAogIyAjJEAKIyAjICRACiAgICAkQAogIyMgJEAKIyAgIyRACiMgICMkQAojICAjJEAKICMjICRACiAgICAkQAogICAgJEBACjI0NiBvZGllcmVzaXMKICAgICRACiAgICAkQAojICAjJEAKICAgICRACiAjIyAkQAojICAjJEAKIyAgIyRACiMgICMkQAogIyMgJEAKICAgICRACiAgICAkQEAKMjQ3IGRpdmlkZQogICAgICRACiAgICAgJEAKICAgICAkQAogICMgICRACiAgICAgJEAKIyMjIyMkQAogICAgICRACiAgIyAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjI0OCBvc2xhc2gKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAjIyAjJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKIyAjIyAgJEAKICAgICAgJEAKICAgICAgJEBACjI0OSB1Z3JhdmUKICAgICAgJEAKICAjICAgJEAKICAgIyAgJEAKICAgICAgJEAKIyMgIyMgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKICAjIyAjJEAKICAgICAgJEAKICAgICAgJEBACjI1MCB1YWN1dGUKICAgICAgJEAKICAgIyAgJEAKICAjICAgJEAKICAgICAgJEAKIyMgIyMgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKICAjIyAjJEAKICAgICAgJEAKICAgICAgJEBACjI1MSB1Y2lyY3VtZmxleAogICAgICAkQAogICMjICAkQAogIyAgIyAkQAogICAgICAkQAojIyAjIyAkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAogICMjICMkQAogICAgICAkQAogICAgICAkQEAKMjUyIHVkaWVyZXNpcwogICAgICAkQAogICAgICAkQAogIyAgIyAkQAogICAgICAkQAojIyAjIyAkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAogICMjICMkQAogICAgICAkQAogICAgICAkQEAKMjUzIHlhY3V0ZQogICAgICRACiAgICMgJEAKICAjICAkQAogICAgICRACiMjICMjJEAKICMgICMkQAogIyAgIyRACiAjICAjJEAKICAjIyAkQAogICMgICRACiMjICAgJEBACjI1NCB0aG9ybgogICAgICRACiAgICAgJEAKIyMgICAkQAogIyAgICRACiAjIyMgJEAKICMgICMkQAogIyAgIyRACiAjICAjJEAKICMjIyAkQAogIyAgICRACiMjIyAgJEBACjI1NSB5ZGllcmVzaXMKICAgICAkQAogICAgICRACiAjICAjJEAKICAgICAkQAojIyAjIyRACiAjICAjJEAKICMgICMkQAogIyAgIyRACiAgIyMgJEAKICAjICAkQAojIyAgICRAQAozMDUgZG90bGVzc2kKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogIyMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRACiMjIyMjJEAKICAgICAkQAogICAgICRAQAozMjEgTHNsYXNoCiAgICAgJEAKICAgICAkQAogICAgICRACiMjIyAgJEAKICMgICAkQAogIyMgICRACiMjICAgJEAKICMgICMkQAojIyMjIyRACiAgICAgJEAKICAgICAkQEAKMzIyIGxzbGFzaAogICAgICRACiAgICAgJEAKICMjICAkQAogICMgICRACiAgIyMgJEAKICMjICAkQAogICMgICRACiAgIyAgJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACjMzOCBPRQogICAgICAkQAogICAgICAkQAogICAgICAkQAogIyMjIyMkQAojICAjICAkQAojICAjIyMkQAojICAjICAkQAojICAjICMkQAogIyMjIyMkQAogICAgICAkQAogICAgICAkQEAKMzM5IG9lCiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAjIyAjIyRACiMgICMgIyRACiMgICMjIyRACiMgICMgICRACiAjIyAjIyRACiAgICAgICRACiAgICAgICRAQAozNTIgU2Nhcm9uCiAjICMkQAogICMgJEAKICAgICRACiAjIyMkQAojICAgJEAKICMjICRACiAgICMkQAojICAjJEAKIyMjICRACiAgICAkQAogICAgJEBACjM1MyBzY2Fyb24KICAgICRACiAjICMkQAogICMgJEAKICAgICRACiAjIyMkQAojICAgJEAKICMjICRACiAgICMkQAojIyMgJEAKICAgICRACiAgICAkQEAKMzc2IFlkaWVyZXNpcwogICAgICRACiAjICMgJEAKICAgICAkQAojIyAjIyRACiMgICAjJEAKICMgIyAkQAogICMgICRACiAgIyAgJEAKICMjIyAkQAogICAgICRACiAgICAgJEBACjM4MSBaY2Fyb24KICMgIyRACiAgIyAkQAogICAgJEAKIyMjIyRACiMgICMkQAogICMgJEAKICMgICRACiMgICMkQAojIyMjJEAKICAgICRACiAgICAkQEAKMzgyIHpjYXJvbgogICAgJEAKIyAjICRACiAjICAkQAogICAgJEAKIyMjIyRACiAgIyAkQAogIyAgJEAKIyAgIyRACiMjIyMkQAogICAgJEAKICAgICRAQAo0MDIgZmxvcmluCiAgICAgJEAKICAgICAkQAogICAjIyRACiAgIyAgJEAKICMjIyAkQAogICMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRACiMjICAgJEAKICAgICAkQEAKNzExIGNhcm9uCiAgICRACiMgIyRACiAjICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRACiAgICRAQAo3MjggYnJldmUKICAgICRACiMgICMkQAogIyMgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAKNzI5IGRvdGFjY2VudAogJEAKICRACiMkQAogJEAKICRACiAkQAogJEAKICRACiAkQAogJEAKICRAQAo3MzAgcmluZwogICAkQAogIyAkQAojICMkQAogIyAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQEAKNzMxIG9nb25lawogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogICAkQAogIyAkQAojICAkQAogIyMkQEAKNzMzIGh1bmdhcnVtbGF1dAogICAgICRACiAjICAjJEAKIyAgIyAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjgyMTEgZW1kYXNoCiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjIyMjIyRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRAQAo4MjEyIGVuZGFzaAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiMjIyMkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRAQAo4MjE2IHF1b3Rlc2luZ2xlCiAkQAogJEAKIyRACiMkQAojJEAKICRACiAkQAogJEAKICRACiAkQAogJEBACjgyMTggcXVvdGVzaW5nbGJhc2UKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAjJEAKICMkQAojICRAQAo4MjIwIHF1b3RlZGJsbGVmdAogICAgJEAKICAgICRACiMgIyAkQAojICMgJEAKICMgIyRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRAQAo4MjIxIHF1b3RlZGJscmlnaHQKICAgICRACiAgICAkQAogIyAjJEAKICMgIyRACiMgIyAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAKODIyMiBxdW90ZWRibGJhc2UKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogIyAjJEAKICMgIyRACiMgIyAkQEAKODIyNCBkYWdnZXIKICAgJEAKICAgJEAKICMgJEAKIyMjJEAKICMgJEAKICMgJEAKICMgJEAKICMgJEAKICMgJEAKICAgJEAKICAgJEBACjgyMjUgZGFnZ2VyZGJsCiAgICRACiAgICRACiAjICRACiMjIyRACiAjICRACiAjICRACiAjICRACiMjIyRACiAjICRACiAgICRACiAgICRAQAo4MjI2IGJ1bGxldAogICRACiAgJEAKICAkQAogICRACiAgJEAKIyMkQAojIyRACiAgJEAKICAkQAogICRACiAgJEBACjgyMzAgZWxsaXBzaXMKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiMgIyAjJEAKICAgICAkQAogICAgICRAQAo4MjQwIHBlcnRob3VzYW5kCiAgICAgICRACiAjIyAgICRACiMgIyAgICRACiMjICAjIyRACiAgIyMgICRACiMjICAgICRACiAjIyAjIyRACiMgIyMgIyRACiMjICMjICRACiAgICAgICRACiAgICAgICRAQAo4MjQ5IGd1aWxzaW5nbGxlZnQKICAkQAogICRACiAgJEAKICAkQAogICRACiAjJEAKIyAkQAogIyRACiAgJEAKICAkQAogICRAQAo4MjUwIGd1aWxzaW5nbHJpZ2h0CiAgJEAKICAkQAogICRACiAgJEAKICAkQAojICRACiAjJEAKIyAkQAogICRACiAgJEAKICAkQEAKODI2MCBmcmFjdGlvbgogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRACiAgICMjJEAKICAjIyAkQAogIyMgICRACiMjICAgJEAKICAgICAkQAogICAgICRACiAgICAgJEBACjg0ODIgdHJhZGVtYXJrCiAgICAgICRACiAgICAgICRACiAgICAgICRACiMjIyMgIyRACiAjICMjIyRACiAjICMjIyRACiAjICMgIyRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRAQAo2NDI1NyBmaQogICAgICAkQAogICAgICAkQAogICMgIyAkQAogIyAgICAkQAojIyMjIyAkQAogIyAgIyAkQAogIyAgIyAkQAogIyAgIyAkQAojIyMjIyMkQAogICAgICAkQAogICAgICAkQEAKNjQyNTggZmwKICAgICAgJEAKICAgICAgJEAKICAjIyMgJEAKICMgICMgJEAKIyMjICMgJEAKICMgICMgJEAKICMgICMgJEAKICMgICMgJEAKIyMjIyMjJEAKICAgICAgJEAKICAgICAgJEBACi0xIGNpcmN1bWZsZXgKICAgJEAKICMgJEAKIyAjJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEAKICAgJEBACi0yIGdyYXZlCiAgJEAKIyAkQAogIyRACiAgJEAKICAkQAogICRACiAgJEAKICAkQAogICRACiAgJEAKICAkQEAKLTMgdGlsZGUKICAgICRACiAjICMkQAojICMgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQAogICAgJEAKICAgICRACiAgICAkQEAK'
);

export default xcour;
