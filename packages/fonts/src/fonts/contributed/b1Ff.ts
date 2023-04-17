import { FontFile } from '../../FontFile';

const b1Ff = new FontFile(
    'b1Ff',
    'ZmxmMmF/IDEgMSAxMCAtMSAxNgpCMUZGIGJ5IEpvZSBSdW1zZXkgMTIvOTQgYmFzZWQgb24gVGVybWluYWwgYnkgR2xlbm4gQ2hhcHBlbGwKSW5jbHVkZXMgY2hhcmFjdGVycyAxMjgtMjU1CmZpZ2xldCByZWxlYXNlIDIuMSAtLSAxMiBBdWcgMTk5NApQZXJtaXNzaW9uIGlzIGhlcmVieSBnaXZlbiB0byBtb2RpZnkgdGhpcyBmb250LCBhcyBsb25nIGFzIHRoZQptb2RpZmllcidzIG5hbWUgaXMgcGxhY2VkIG9uIGEgY29tbWVudCBsaW5lLgoKRXhwbGFuYXRpb24gb2YgZmlyc3QgbGluZToKZmxmMiAtICJtYWdpYyBudW1iZXIiIGZvciBmaWxlIGlkZW50aWZpY2F0aW9uCmEgICAgLSBzaG91bGQgYWx3YXlzIGJlIGBhJywgZm9yIG5vdwp/ICAgLSB0aGUgImhhcmRibGFuayIgLS0gcHJpbnRzIGFzIGEgYmxhbmssIGJ1dCBjYW4ndCBiZSBzbXVzaGVkCjEgICAgLSBoZWlnaHQgb2YgYSBjaGFyYWN0ZXIKMSAgICAtIGhlaWdodCBvZiBhIGNoYXJhY3Rlciwgbm90IGluY2x1ZGluZyBkZXNjZW5kZXJzCjEwICAgLSBtYXggbGluZSBsZW5ndGggKGV4Y2x1ZGluZyBjb21tZW50IGxpbmVzKSArIGEgZnVkZ2UgZmFjdG9yCi0xICAgLSBkZWZhdWx0IHNtdXNobW9kZSBmb3IgdGhpcyBmb250CjE2ICAgLSBudW1iZXIgb2YgY29tbWVudCBsaW5lcwoKf0AKIUAKIkAKI0AKJEAKJUAKJkAKJ0AKKEAKKUAKKkAKK0AKLEAKLUAKLkAKL0AKMEAKMUAKMkAKM0AKNEAKNUAKNkAKN0AKOEAKOUAKOkAKO0AKPEAKPUAKPkAKP0AKQCMKLy1cQAp8M0AKKEAKfClACjNACkZACjZACkhACjFACl8vQAovPEAKfF9ACi9cL1xACi9cL0AKMEAKUEAKUUAKUkAKNUAKVEAKfF98QApcL0AKXC9cL0AKWEAKWUAKWkAKW0AKXEAKXUAKXkAKX0AKYEAKLy1cQAp8M0AKKEAKfClACjNACkZACjZACkhACjFACl8vQAovPEAKfF9ACi9cL1xACi9cL0AKMEAKUEAKUUAKUkAKNUAKVEAKfF98QApcL0AKXC9cL0AKWEAKWUAKWkAKe0AKfEAKfUAKfkAKxEAK1kAK3EAK5EAK9kAK/EAK30AKMTI4CoBACjEyOQqBQAoxMzAKgkAKMTMxCoNACjEzMgqEQAoxMzMKhUAKMTM0CoZACjEzNQqHQAoxMzYKiEAKMTM3ColACjEzOAqKQAoxMzkKi0AKMTQwCoxACjE0MQqNQAoxNDIKjkAKMTQzCo9ACjE0NAqQQAoxNDUKkUAKMTQ2CpJACjE0NwqTQAoxNDgKlEAKMTQ5CpVACjE1MAqWQAoxNTEKl0AKMTUyCphACjE1MwqZQAoxNTQKmkAKMTU1CptACjE1NgqcQAoxNTcKnUAKMTU4Cp5ACjE1OQqfQAoxNjAKoEAKMTYxCqFACjE2MgqiQAoxNjMKo0AKMTY0CqRACjE2NQqlQAoxNjYKpkAKMTY3CqdACjE2OAqoQAoxNjkKqUAKMTcwCqpACjE3MQqrQAoxNzIKrEAKMTczCq1ACjE3NAquQAoxNzUKr0AKMTc2CrBACjE3NwqxQAoxNzgKskAKMTc5CrNACjE4MAq0QAoxODEKtUAKMTgyCrZACjE4Mwq3QAoxODQKuEAKMTg1CrlACjE4Ngq6QAoxODcKu0AKMTg4CrxACjE4OQq9QAoxOTAKvkAKMTkxCr9ACjE5MgrAQAoxOTMKwUAKMTk0CsJACjE5NQrDQAoxOTYKxEAKMTk3CsVACjE5OArGQAoxOTkKx0AKMjAwCshACjIwMQrJQAoyMDIKykAKMjAzCstACjIwNArMQAoyMDUKzUAKMjA2Cs5ACjIwNwrPQAoyMDgK0EAKMjA5CtFACjIxMArSQAoyMTEK00AKMjEyCtRACjIxMwrVQAoyMTQK1kAKMjE1CtdACjIxNgrYQAoyMTcK2UAKMjE4CtpACjIxOQrbQAoyMjAK3EAKMjIxCt1ACjIyMgreQAoyMjMK30AKMjI0CuBACjIyNQrhQAoyMjYK4kAKMjI3CuNACjIyOArkQAoyMjkK5UAKMjMwCuZACjIzMQrnQAoyMzIK6EAKMjMzCulACjIzNArqQAoyMzUK60AKMjM2CuxACjIzNwrtQAoyMzgK7kAKMjM5Cu9ACjI0MArwQAoyNDEK8UAKMjQyCvJACjI0MwrzQAoyNDQK9EAKMjQ1CvVACjI0Ngr2QAoyNDcK90AKMjQ4CvhACjI0OQr5QAoyNTAK+kAKMjUxCvtACjI1Mgr8QAoyNTMK/UAKMjU0Cv5ACjI1NQr/QAo='
);

export default b1Ff;