import { FontFile } from '../../FontFile';

const oldbanner = new FontFile(
    'oldbanner',
    'ZmxmMmEkIDcgNyAyMCAtMSA2CmJhbm5lci5mbGYgYnkgUnlhbiBZb3VjayAoeW91Y2tAY3MudXJlZ2luYS5jYSkKKEZyb20gYSB1bml4IHByb2dyYW0gY2FsbGVkIGJhbm5lcikKSSBhbSBub3QgcmVzcG9uc2libGUgZm9yIHVzZSBvZiB0aGlzIGZvbnQgIApUaGFua3MgdG8gR2xlbm4gQ2hhcHBlbGwgZm9yIGhpcyBoZWxwCk1hcmNoIDcsIDE5OTQKCiQkJEAKJCQkQAokJCRACiQkJEAKJCQkQAokJCRACiQkJEBACiMjIyRACiMjIyRACiMjIyRACiAjICRACiAgICRACiMjIyRACiMjIyRAQAojIyMgIyMjJEAKIyMjICMjIyRACiAjICAgIyAkQAokICAgICAgJEAKJCAgICAgICRACiAgICAgICAkQAogICAgICAgJEBACiAgIyAjICAkQAogICMgIyAgJEAKIyMjIyMjIyRACiAgIyAjICAkQAojIyMjIyMjJEAKICAjICMgICRACiAgIyAjICAkQEAKICMjIyMjICRACiMgICMgICMkQAojICAjICAgJEAKICMjIyMjICRACiAgICMgICMkQAojICAjICAjJEAKICMjIyMjICRAQAojIyMgICAjJEAKIyAjICAjICRACiMjIyAjICAkQAogICAjICAgJEAKICAjICMjIyRACiAjICAjICMkQAojICAgIyMjJEBACiAgIyMgICAkQAogIyAgIyAgJEAKICAjIyAgICRACiAjIyMgICAkQAojICAgIyAjJEAKIyAgICAjICRACiAjIyMgICMkQEAKIyMjJEAKIyMjJEAKICMgJEAKIyAgJEAKICAgJEAKICAgJEAKICAgJEBACiAgIyMkQAogIyAgJEAKIyAgICRACiMgICAkQAojICAgJEAKICMgICRACiAgIyMkQEAKIyMgICRACiAgIyAkQAogICAjJEAKICAgIyRACiAgICMkQAogICMgJEAKIyMgICRAQAogICAgICAgJEAKICMgICAjICRACiAgIyAjICAkQAojIyMjIyMjJEAKICAjICMgICRACiAjICAgIyAkQAogICAgICAgJEBACiAgICAgJEAKICAjICAkQAogICMgICRACiMjIyMjJEAKICAjICAkQAogICMgICRACiAgICAgJEBACiAgICRACiAgICRACiAgICRACiMjIyRACiMjIyRACiAjICRACiMgICRAQAogICAgICRACiAgICAgJEAKICAgICAkQAojIyMjIyRACiAgICAgJEAKICAgICAkQAogICAgICRAQAogICAkQAogICAkQAogICAkQAogICAkQAojIyMkQAojIyMkQAojIyMkQEAKICAgICAgIyRACiAgICAgIyAkQAogICAgIyAgJEAKICAgIyAgICRACiAgIyAgICAkQAogIyAgICAgJEAKIyAgICAgICRAQAogICMjIyAgJEAKICMgICAjICRACiMgICAgICMkQAojICAgICAjJEAKIyAgICAgIyRACiAjICAgIyAkQAogICMjIyAgJEBACiAgICMgICRACiAgIyMgICRACiAjICMgICRACiAgICMgICRACiAgICMgICRACiAgICMgICRACiAjIyMjIyRAQAogIyMjIyMgJEAKIyAgICAgIyRACiAgICAgICMkQAogIyMjIyMgJEAKIyAgICAgICRACiMgICAgICAkQAojIyMjIyMjJEBACiAjIyMjIyAkQAojICAgICAjJEAKICAgICAgIyRACiAjIyMjIyAkQAogICAgICAjJEAKIyAgICAgIyRACiAjIyMjIyAkQEAKIyAgICAgICRACiMgICAgIyAkQAojICAgICMgJEAKIyAgICAjICRACiMjIyMjIyMkQAogICAgICMgJEAKICAgICAjICRAQAojIyMjIyMjJEAKIyAgICAgICRACiMgICAgICAkQAojIyMjIyMgJEAKICAgICAgIyRACiMgICAgICMkQAogIyMjIyMgJEBACiAjIyMjIyAkQAojICAgICAjJEAKIyAgICAgICRACiMjIyMjIyAkQAojICAgICAjJEAKIyAgICAgIyRACiAjIyMjIyAkQEAKIyMjIyMjIyRACiMgICAgIyAkQAogICAgIyAgJEAKICAgIyAgICRACiAgIyAgICAkQAogICMgICAgJEAKICAjICAgICRAQAogIyMjIyMgJEAKIyAgICAgIyRACiMgICAgICMkQAogIyMjIyMgJEAKIyAgICAgIyRACiMgICAgICMkQAogIyMjIyMgJEBACiAjIyMjIyAkQAojICAgICAjJEAKIyAgICAgIyRACiAjIyMjIyMkQAogICAgICAjJEAKIyAgICAgIyRACiAjIyMjIyAkQEAKICMgJEAKIyMjJEAKICMgJEAKICAgJEAKICMgJEAKIyMjJEAKICMgJEBACiMjIyRACiMjIyRACiAgICRACiMjIyRACiMjIyRACiAjICRACiMgICRAQAogICAjJEAKICAjICRACiAjICAkQAojICAgJEAKICMgICRACiAgIyAkQAogICAjJEBACiAgICAgJEAKICAgICAkQAojIyMjIyRACiAgICAgJEAKIyMjIyMkQAogICAgICRACiAgICAgJEBACiMgICAkQAogIyAgJEAKICAjICRACiAgICMkQAogICMgJEAKICMgICRACiMgICAkQEAKICMjIyMjICRACiMgICAgICMkQAogICAgICAjJEAKICAgIyMjICRACiAgICMgICAkQAogICAgICAgJEAKICAgIyAgICRAQAogIyMjIyMgJEAKIyAgICAgIyRACiMgIyMjICMkQAojICMjIyAjJEAKIyAjIyMjICRACiMgICAgICAkQAogIyMjIyMgJEBACiAgICMgICAkQAogICMgIyAgJEAKICMgICAjICRACiMgICAgICMkQAojIyMjIyMjJEAKIyAgICAgIyRACiMgICAgICMkQEAKIyMjIyMjICRACiMgICAgICMkQAojICAgICAjJEAKIyMjIyMjICRACiMgICAgICMkQAojICAgICAjJEAKIyMjIyMjICRAQAogIyMjIyMgJEAKIyAgICAgIyRACiMgICAgICAkQAojICAgICAgJEAKIyAgICAgICRACiMgICAgICMkQAogIyMjIyMgJEBACiMjIyMjIyAkQAojICAgICAjJEAKIyAgICAgIyRACiMgICAgICMkQAojICAgICAjJEAKIyAgICAgIyRACiMjIyMjIyAkQEAKIyMjIyMjIyRACiMgICAgICAkQAojICAgICAgJEAKIyMjIyMgICRACiMgICAgICAkQAojICAgICAgJEAKIyMjIyMjIyRAQAojIyMjIyMjJEAKIyAgICAgICRACiMgICAgICAkQAojIyMjIyAgJEAKIyAgICAgICRACiMgICAgICAkQAojICAgICAgJEBACiAjIyMjIyAkQAojICAgICAjJEAKIyAgICAgICRACiMgICMjIyMkQAojICAgICAjJEAKIyAgICAgIyRACiAjIyMjIyAkQEAKIyAgICAgIyRACiMgICAgICMkQAojICAgICAjJEAKIyMjIyMjIyRACiMgICAgICMkQAojICAgICAjJEAKIyAgICAgIyRAQAojIyMkQAogIyAkQAogIyAkQAogIyAkQAogIyAkQAogIyAkQAojIyMkQEAKICAgICAgIyRACiAgICAgICMkQAogICAgICAjJEAKICAgICAgIyRACiMgICAgICMkQAojICAgICAjJEAKICMjIyMjICRAQAojICAgICMkQAojICAgIyAkQAojICAjICAkQAojIyMgICAkQAojICAjICAkQAojICAgIyAkQAojICAgICMkQEAKIyAgICAgICRACiMgICAgICAkQAojICAgICAgJEAKIyAgICAgICRACiMgICAgICAkQAojICAgICAgJEAKIyMjIyMjIyRAQAojICAgICAjJEAKIyMgICAjIyRACiMgIyAjICMkQAojICAjICAjJEAKIyAgICAgIyRACiMgICAgICMkQAojICAgICAjJEBACiMgICAgICMkQAojIyAgICAjJEAKIyAjICAgIyRACiMgICMgICMkQAojICAgIyAjJEAKIyAgICAjIyRACiMgICAgICMkQEAKIyMjIyMjIyRACiMgICAgICMkQAojICAgICAjJEAKIyAgICAgIyRACiMgICAgICMkQAojICAgICAjJEAKIyMjIyMjIyRAQAojIyMjIyMgJEAKIyAgICAgIyRACiMgICAgICMkQAojIyMjIyMgJEAKIyAgICAgICRACiMgICAgICAkQAojICAgICAgJEBACiAjIyMjIyAkQAojICAgICAjJEAKIyAgICAgIyRACiMgICAgICMkQAojICAgIyAjJEAKIyAgICAjICRACiAjIyMjICMkQEAKIyMjIyMjICRACiMgICAgICMkQAojICAgICAjJEAKIyMjIyMjICRACiMgICAjICAkQAojICAgICMgJEAKIyAgICAgIyRAQAogIyMjIyMgJEAKIyAgICAgIyRACiMgICAgICAkQAogIyMjIyMgJEAKICAgICAgIyRACiMgICAgICMkQAogIyMjIyMgJEBACiMjIyMjIyMkQAogICAjICAgJEAKICAgIyAgICRACiAgICMgICAkQAogICAjICAgJEAKICAgIyAgICRACiAgICMgICAkQEAKIyAgICAgIyRACiMgICAgICMkQAojICAgICAjJEAKIyAgICAgIyRACiMgICAgICMkQAojICAgICAjJEAKICMjIyMjICRAQAojICAgICAjJEAKIyAgICAgIyRACiMgICAgICMkQAojICAgICAjJEAKICMgICAjICRACiAgIyAjICAkQAogICAjICAgJEBACiMgICAgICMkQAojICAjICAjJEAKIyAgIyAgIyRACiMgICMgICMkQAojICAjICAjJEAKIyAgIyAgIyRACiAjIyAjIyAkQEAKIyAgICAgIyRACiAjICAgIyAkQAogICMgIyAgJEAKICAgIyAgICRACiAgIyAjICAkQAogIyAgICMgJEAKIyAgICAgIyRAQAojICAgICAjJEAKICMgICAjICRACiAgIyAjICAkQAogICAjICAgJEAKICAgIyAgICRACiAgICMgICAkQAogICAjICAgJEBACiMjIyMjIyMkQAogICAgICMgJEAKICAgICMgICRACiAgICMgICAkQAogICMgICAgJEAKICMgICAgICRACiMjIyMjIyMkQEAKIyMjIyMkQAojICAgICRACiMgICAgJEAKIyAgICAkQAojICAgICRACiMgICAgJEAKIyMjIyMkQEAKIyAgICAgICRACiAjICAgICAkQAogICMgICAgJEAKICAgIyAgICRACiAgICAjICAkQAogICAgICMgJEAKICAgICAgIyRAQAojIyMjIyRACiAgICAjJEAKICAgICMkQAogICAgIyRACiAgICAjJEAKICAgICMkQAojIyMjIyRAQAogICMgICRACiAjICMgJEAKIyAgICMkQAogICAgICRACiAgICAgJEAKICAgICAkQAogICAgICRAQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAojIyMjIyMjJEBACiMjIyRACiMjIyRACiAjICRACiAgIyRACiAgICRACiAgICRACiAgICRAQAogICAgICAkQAogICMjICAkQAogIyAgIyAkQAojICAgICMkQAojIyMjIyMkQAojICAgICMkQAojICAgICMkQEAKICAgICAgJEAKIyMjIyMgJEAKIyAgICAjJEAKIyMjIyMgJEAKIyAgICAjJEAKIyAgICAjJEAKIyMjIyMgJEBACiAgICAgICRACiAjIyMjICRACiMgICAgIyRACiMgICAgICRACiMgICAgICRACiMgICAgIyRACiAjIyMjICRAQAogICAgICAkQAojIyMjIyAkQAojICAgICMkQAojICAgICMkQAojICAgICMkQAojICAgICMkQAojIyMjIyAkQEAKICAgICAgJEAKIyMjIyMjJEAKIyAgICAgJEAKIyMjIyMgJEAKIyAgICAgJEAKIyAgICAgJEAKIyMjIyMjJEBACiAgICAgICRACiMjIyMjIyRACiMgICAgICRACiMjIyMjICRACiMgICAgICRACiMgICAgICRACiMgICAgICRAQAogICAgICAkQAogIyMjIyAkQAojICAgICMkQAojICAgICAkQAojICAjIyMkQAojICAgICMkQAogIyMjIyAkQEAKICAgICAgJEAKIyAgICAjJEAKIyAgICAjJEAKIyMjIyMjJEAKIyAgICAjJEAKIyAgICAjJEAKIyAgICAjJEBACiAkQAojJEAKIyRACiMkQAojJEAKIyRACiMkQEAKICAgICAgJEAKICAgICAjJEAKICAgICAjJEAKICAgICAjJEAKICAgICAjJEAKIyAgICAjJEAKICMjIyMgJEBACiAgICAgICRACiMgICAgIyRACiMgICAjICRACiMjIyMgICRACiMgICMgICRACiMgICAjICRACiMgICAgIyRAQAogICAgICAkQAojICAgICAkQAojICAgICAkQAojICAgICAkQAojICAgICAkQAojICAgICAkQAojIyMjIyMkQEAKICAgICAgJEAKIyAgICAjJEAKIyMgICMjJEAKIyAjIyAjJEAKIyAgICAjJEAKIyAgICAjJEAKIyAgICAjJEBACiAgICAgICRACiMgICAgIyRACiMjICAgIyRACiMgIyAgIyRACiMgICMgIyRACiMgICAjIyRACiMgICAgIyRAQAogICAgICAkQAogIyMjIyAkQAojICAgICMkQAojICAgICMkQAojICAgICMkQAojICAgICMkQAogIyMjIyAkQEAKICAgICAgJEAKIyMjIyMgJEAKIyAgICAjJEAKIyAgICAjJEAKIyMjIyMgJEAKIyAgICAgJEAKIyAgICAgJEBACiAgICAgICRACiAjIyMjICRACiMgICAgIyRACiMgICAgIyRACiMgICMgIyRACiMgICAjICRACiAjIyMgIyRAQAogICAgICAkQAojIyMjIyAkQAojICAgICMkQAojICAgICMkQAojIyMjIyAkQAojICAgIyAkQAojICAgICMkQEAKICAgICAgJEAKICMjIyMgJEAKIyAgICAgJEAKICMjIyMgJEAKICAgICAjJEAKIyAgICAjJEAKICMjIyMgJEBACiAgICAgJEAKIyMjIyMkQAogICMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRACiAgIyAgJEBACiAgICAgICRACiMgICAgIyRACiMgICAgIyRACiMgICAgIyRACiMgICAgIyRACiMgICAgIyRACiAjIyMjICRAQAogICAgICAkQAojICAgICMkQAojICAgICMkQAojICAgICMkQAojICAgICMkQAogIyAgIyAkQAogICMjICAkQEAKICAgICAgJEAKIyAgICAjJEAKIyAgICAjJEAKIyAgICAjJEAKIyAjIyAjJEAKIyMgICMjJEAKIyAgICAjJEBACiAgICAgICRACiMgICAgIyRACiAjICAjICRACiAgIyMgICRACiAgIyMgICRACiAjICAjICRACiMgICAgIyRAQAogICAgICRACiMgICAjJEAKICMgIyAkQAogICMgICRACiAgIyAgJEAKICAjICAkQAogICMgICRAQAogICAgICAkQAojIyMjIyMkQAogICAgIyAkQAogICAjICAkQAogICMgICAkQAogIyAgICAkQAojIyMjIyMkQEAKICAjIyMkQAogIyAgICRACiAjICAgJEAKIyMgICAkQAogIyAgICRACiAjICAgJEAKICAjIyMkQEAKIyRACiMkQAojJEAKICRACiMkQAojJEAKIyRAQAojIyMgICRACiAgICMgJEAKICAgIyAkQAogICAjIyRACiAgICMgJEAKICAgIyAkQAojIyMgICRAQAogIyMgICAgJEAKIyAgIyAgIyRACiAgICAjIyAkQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEBACkAKQApACkAKQApACkBACkAKQApACkAKQApACkBACkAKQApACkAKQApACkBACkAKQApACkAKQApACkBACkAKQApACkAKQApACkBACkAKQApACkAKQApACkBACkAKQApACkAKQApACkBACg=='
);

export default oldbanner;