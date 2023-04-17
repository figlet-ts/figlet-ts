import { FontFile } from '../../FontFile';

const poison = new FontFile(
    'poison',
    'ZmxmMmEkIDEyIDEwIDIwIC0xIDE0CnBvaXNvbi5mbGYgY29tcG9zZWQgaW50byBmaWdsZXQgYnkgVmlubmV5IFRoYWkgPHNzZmlpdEBlcmlzLmNjLnVtYi5lZHU+CnBvaXNvbiBmb250IChudW1iZXJzICYgcHVudHVhdGlvbiBtYXJrcykgY29tcG9zZWQgYnkgVmlubmV5IFRoYWkKcG9pc29uIGZvbnQgKHVwcGVyY2FzZSBjaGFyYWN0ZXJzKSBjb21wb3NlZCBEYXZpZCBJc3NlbCA8ZGlzc2VsQG51bmljLm51LmVkdT4KZGF0ZTogT2N0IDIzLCAxOTk0CkV4cGxhbmF0aW9uIG9mIGZpcnN0IGxpbmU6CmZsZjIgLSAibWFnaWMgbnVtYmVyIiBmb3IgZmlsZSBpZGVudGlmaWNhdGlvbgphICAgIC0gc2hvdWxkIGFsd2F5cyBiZSBgYScsIGZvciBub3cKJCAgICAtIHRoZSAiaGFyZGJsYW5rIiAtLSBwcmludHMgYXMgYSBibGFuaywgYnV0IGNhbid0IGJlIHNtdXNoZWQKMTIgICAtIGhlaWdodCBvZiBhIGNoYXJhY3RlcgoxMCAgIC0gaGVpZ2h0IG9mIGEgY2hhcmFjdGVyLCBub3QgaW5jbHVkaW5nIGRlc2NlbmRlcnMKMjAgICAtIG1heCBsaW5lIGxlbmd0aCAoZXhjbHVkaW5nIGNvbW1lbnQgbGluZXMpICsgYSBmdWRnZSBmYWN0b3IKLTEgICAtIGRlZmF1bHQgc211c2htb2RlIGZvciB0aGlzIGZvbnQgKGxpa2UgIi1tIDAiIG9uIGNvbW1hbmQgbGluZSkKMTUgICAtIG51bWJlciBvZiBjb21tZW50IGxpbmVzCgokICRACiQgJEAKJCAkQAokICRACiQgJEAKJCAkQAokICRACiQgJEAKJCAkQAokICRACiQgJEAKJCAkQEAKICAgICBACkBAQCAkQApAQEAgJEAKQEAhICRACiFAICAkQApAIUAgJEAKISEhICRACiAgICAgQAo6ITogJEAKIDo6ICRACjo6OiAkQAogICAgIEBACiAgICAgICAgIEAKQEBAIEBAQCAkQApAQEAgQEBAICRACkBAISBAQCEgJEAKIEAhICBAISAkQAogICQgICAkICBACiAgJCAgICQgIEAKICAkICAgJCAgQAogICQgICAkICBACiAgJCAgICQgIEAKICAkICAgJCAgQAogICAgICAgICBAQAogICAgICAgICAgICAgIEAKICBAQEAgIEBAQCAkICBACiAgQEBAICBAQEAgJCAgQApAIUBAIUAhQEBAQCEgJEAKIUAhQCEhQEAhQCFAICRACiAgQCFAICAhQCEgJCAgQAogICEhISAgISEhICQgIEAKITohITohOiEhISE6ICRACjohOiE6OiEhOiE6ISAkQAogIDo6ICAgOjo6ICQgIEAKICAgOiAgIDogOiAkICBACiAgICAgICAgICAgICAgQEAKICAgICAgICAgICAgQAogICAgQEAgJCAgICBACiBAQEBAQEBAQEAgJEAKIUBAIUBAIUBAISAkQAohQCEgIUAgJCAgICBACiEhIUBAISEhISAkIEAKICEhIUBAQCEhISAkQAogICAgITogITohICRACiE6ISE6ITogOiEgJEAKOiA6Ojo6IDo6ICQgQAogICAgOjogJCAgICBACiAgICAgICAgICAgIEBACiAgICAgICAgICAgICAgQApAQEBAICAgICBAQEAgJEAKQEBAQCAgICBAQEAgJCBACkBAIUAgICBAQCEgJCAgQAogICAgICAhQCEgJCAgIEAKICAgICBAISEgJCAgICBACiAgICAhISEgJCAgICAgQAogICAhITogJCAgICAgIEAKICA6OiEgICA6OiE6ICRACiAgOjogICAgOjo6ICAkQAo6IDogICAgIDogOjogJEAKICAgICAgICAgICAgICBAQAogICAgICAgICAgICAgQAogIEBAQEBAICQgICAgQAogQEBAQEBAQCAkICAgQApAQCEgICBAQEAgJCAgQAogIUAgIEAhQCAkICAgQAogIEAhQCFAICQgICAgQAogICEhIUAgICEhISAkQAogISE6ISE6ISE6ICQgQAo6ITogICE6ITogJCAgQAo6OjogOjo6Ojo6ICQgQAogOjo6IDo6IDo6OiAkQAogICAgICAgICAgICAgQEAKICAgICBACkBAQCAkQAogQEAgJEAKQCEgJCBACiAkICAgQAogJCAgIEAKICQgICBACiAkICAgQAogJCAgIEAKICQgICBACiAkICAgQAogICAgIEBACiAgICAgICAgQAogICBAQEAgJEAKICBAQEAgJCBACiBAQCEgJCAgQAohQCEgJCAgIEAKISFAICQgICBACiEhISAkICAgQAohITogJCAgIEAKIDohOiAkICBACiAgIDo6ICQgQAogICAgIDogJEAKICAgICAgICBAQAogICAgICAgIEAKQEBAICQgICBACiBAQEAgJCAgQAogIEBAISAkIEAKICAgIUAhICRACiAgICEhQCAkQAogICAhISEgJEAKICAgISE6ICRACiAgOiE6ICQgQAogOjogJCAgIEAKOiAkICAgICBACiAgICAgICAgQEAKICAgICAgICAgICAgQAogICAgICAgICAgICBACkBAISAgICAhQEAgJEAKICFAISAgQCEhICQgQAogICFAQCFAISAkICBACkAhQCFAISFAISEgJEAKICAhOiA6ISEgJCAgQAogOiE6ICAhOiEgJCBACjo6OiAgICA6OjogJEAKICAgICAgICAgICAgQAogICAgICAgICAgICBACiAgICAgICAgICAgIEBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgIEBAISAkICAgQAogICAhQCEgJCAgIEAKQCFAIUAhQCFAICRACiEhIUAhQCEhISAkQAogICAhITogJCAgIEAKICAgOiE6ICQgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEAKICAgICBACjohOiAkQAogOjogJEAKOjogJCBACiAgICAgQEAKICAgICAgICAgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQApAIUAhQCFAIUAgJEAKISEhQCFAISEhICRACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQAogICAgICAgICAgIEBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEAKOiE6ICRACjo6OiAkQAo6OjogJEAKICAgICBAQAogICAgICAgICAgICAgIEAKICAgICAgICAgQEBAICRACiAgICAgICAgQEBAICQgQAogICAgICAgQEAhICQgIEAKICAgICAgIUAhICQgICBACiAgICAgQCEhICQgICAgQAogICAgISEhICQgICAgIEAKICAgISE6ICQgICAgICBACiAgOjohICQgICAgICAgQAogIDo6ICQgICAgICAgIEAKOiA6ICQgICAgICAgICBACiAgICAgICAgICAgICAgQEAKICAgICAgICAgICAgQAogQEBAQEBAQEAgJCBACkBAQEBAQEBAQEAgJEAKQEAhICAgQEBAQCAkQAohQCEgIEAhQCFAICRACkAhQCBAISAhQCEgJEAKIUAhISEgICEhISAkQAohITohICAgISEhICRACjohOiAgICAhOiEgJEAKOjo6Ojo6OiA6OiAkQAogOiA6IDogIDogJCBACiAgICAgICAgICAgIEBACiAgICAgICBACiAgQEBAICRACiBAQEBAICRACkBAQCEhICRACiAgIUAhICRACiAgQCFAICRACiAgIUAhICRACiAgISE6ICRACiAgOiE6ICRACiAgOjo6ICRACiAgIDo6ICRACiAgICAgICBAQAogICAgICAgICAgQAogQEBAQEBAICQgQApAQEBAQEBAQCAkQAogICAgIEBAQCAkQAogICAgQCFAICQgQAogICAhIUAgJCAgQAogICEhOiAkICAgQAogITohICQgICAgQAo6ITogJCAgICAgQAo6OiA6Ojo6OiAkQAo6OiA6IDo6OiAkQAogICAgICAgICAgQEAKICAgICAgICAgQApAQEBAQEAgJCBACkBAQEBAQEAgJEAKICAgIEBAQCAkQAogICAgQCFAICRACkAhQCEhQCAkIEAKISFAIUAhICQgQAogICAgISE6ICRACiAgICA6ITogJEAKOjogOjo6OiAkQAogOiA6IDogJCBACiAgICAgICAgIEBACiAgICAgICAgICAgQAogICAgIEBAQCAkIEAKICAgIEBAQEAgJCBACiAgIEBAIUAhICQgQAogICFAISFAISAkIEAKIEAhISBAISEgJCBACiEhISAgIUAhICQgQAo6ISE6ITohITogJEAKITo6OiEhOjo6ICRACiAgICAgOjo6ICQgQAogICAgIDo6OiAkIEAKICAgICAgICAgICBAQAogICAgICAgICBACkBAQEBAQEAgJEAKQEBAQEBAQCAkQAohQEAgJCAgICBACiFAISAkICAgIEAKISFAQCEhICQgQApAISFAISEhICRACiAgICAhOiEgJEAKICAgICE6ISAkQAo6Ojo6IDo6ICRACjo6IDogOiAkIEAKICAgICAgICAgQEAKICAgICAgICAgIEAKICBAQEBAQEAgJEAKIEBAQEBAQEAgJEAKIUBAICQgICAgIEAKIUAhICQgICAgIEAKISFAQCFAISAkIEAKQCEhQCEhISEgJEAKITohICAhOiEgJEAKOiE6ICAhOiEgJEAKOjo6OiA6OjogJEAKIDo6IDogOiAkIEAKICAgICAgICAgIEBACiAgICAgICAgICBACkBAQEBAQEBAICRACkBAQEBAQEBAICRACiAgICAgQEAhICRACiAgICAhQCEgJCBACiAgIEAhISAkICBACiAgISEhICQgICBACiAhITogJCAgICBACjohOiAkICAgICBACiA6OiAkICAgICBACjogOiAkICAgICBACiAgICAgICAgICBAQAogICAgICAgICAgQAogQEBAQEBAICQgQApAQEBAQEBAQCAkQApAQCEgIEBAQCAkQAohQCEgIEAhQCAkQAogIUAhIUAhICQgQAogISFAISEhICQgQAohITogICEhISAkQAo6ITogICE6ISAkQAo6Ojo6OiA6OiAkQAogOiA6ICA6ICQgQAogICAgICAgICAgQEAKICAgICAgICAgIEAKIEBAQEBAQCAkIEAKQEBAQEBAQEAgJEAKQEAhICBAQEAgJEAKIUAhICBAIUAgJEAKISFAISFAISEgJEAKICAhIUAhISEgJEAKICAgICAhISEgJEAKICAgICAhOiEgJEAKOjo6OjogOjogJEAKIDogOiAgOiAkIEAKICAgICAgICAgIEBACiAgICAgQAogICAgIEAKICAgICBACiAgICAgQApAIUAgJEAKIUAhICRACiE6ISAkQAogJCQgIEAKOiE6ICRACjo6OiAkQAo6OjogJEAKICAgICBAQAogICAgIEAKICAgICBACiAgICAgQAogICAgIEAKQCFAICBACiFAISAkQAo6ITogJEAKICQkICBACjohOiAkQAogOjogJEAKOjogJCBACiAgICAgQEAKICAgICAgICAgICAgIEAKICAgICAgICBAQEAgJEAKICAgICAgQEBAICQgIEAKICAgIEBAISAkICAgIEAKICAhQCEgJCAgICAgIEAKISFAICQgICAgICAgIEAKISEhICQgICAgICAgIEAKICAhITogJCAgICAgIEAKICAgIDohOiAkICAgIEAKICAgICAgOjogJCAgIEAKICAgICAgICA6ICQgIEAKICAgICAgICAgICAgIEBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBACiAgICAgICAgICAgQAohQCEhQCEhQCEgJEAKQCFAIUAhQCFAICRACiAkICAgICAgJCAgQAohITohITo6ISEgJEAKOjohOiE6ISE6ICRACiAgICAgICAgICAgQAogICAgICAgICAgIEAKICAgICAgICAgICBAQAogICAgICAgICAgICAgQApAQEAgJCAgICAgICAgQAogIEBAQCAkICAgICAgQAogICAgQEAhICQgICAgQAogICAgICAhQCEgJCAgQAogICAgICAgICEhQCAkQAogICAgICAgICEhISAkQAogICAgICAhITogJCAgQAogICAgOiE6ICQgICAgQAogIDo6ICQgICAgICAgQAo6ICQgICAgICAgICAgQAogICAgICAgICAgICAgQEAKICAgICAgICAgIEAKIEBAQEBAQCAkIEAKQEBAQEBAQEAgJEAKQEAhICBAQEAgJEAKICAgIEAhQCAkIEAKICAgISFAICQgIEAKICAhIUAgJCAgIEAKICAgICAgICAgIEAKICAhOiEgJCAgIEAKICAgOjogJCAgIEAKICA6OjogJCAgIEAKICAgICAgICAgIEBACiAgICAgICAgICAgIEAKIEBAQEBAQEBAICQgQApAQEBAQEBAQEBAICRACkBAISAgICBAQEAgJEAKIUAhIEAhQCEhQCAkQApAIUAgIUBAIUAhICRACiFAISBAQCFAISEgJEAKISE6ICAhOiEhICQgQAo6ITogJCAgICAgICBACjo6Ojo6Ojo6OjogJEAKIDogOiA6OiA6ICQgQAogICAgICAgICAgICBAQAogICAgICAgICAgQAogQEBAQEBAICQgQApAQEBAQEBAQCAkQApAQCEgIEBAQCAkQAohQCEgIEAhQCAkQApAIUAhQCFAISAkQAohISFAISEhISAkQAohITogICEhISAkQAo6ITogICE6ISAkQAo6OiAgIDo6OiAkQAogOiAgIDogOiAkQAogICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAQEBAQCAkIEAKQEBAQEBAQEAgJEAKQEAhICBAQEAgJEAKIUAgICBAIUAgJEAKQCFAIUAhQCAkIEAKISEhQCEhISEgJEAKISE6ICAhISEgJEAKOiE6ICAhOiEgJEAKIDo6IDo6OjogJEAKOjogOiA6OiAkIEAKICAgICAgICAgIEBACiAgICAgICAgICBACiBAQEBAQEBAICRACkBAQEBAQEBAICRACiFAQCAkICAgICBACiFAISAkICAgICBACiFAISAkICAgICBACiEhISAkICAgICBACjohISAkICAgICBACjohOiAkICAgICBACiA6OjogOjo6ICRACiA6OiA6OiA6ICRACiAgICAgICAgICBAQAogICAgICAgICAgQApAQEBAQEBAICQgQApAQEBAQEBAQCAkQApAQCEgIEBAQCAkQAohQCEgIEAhQCAkQApAIUAgICFAISAkQAohQCEgICEhISAkQAohITogICEhISAkQAo6ITogICE6ISAkQAogOjo6OiA6OiAkQAo6OiA6ICA6ICQgQAogICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAQEBAQEAgJEAKQEBAQEBAQEAgJEAKQEAhICQgICAgIEAKIUAhICQgICAgIEAKQCEhITohICQgIEAKISEhISE6ICQgIEAKISE6ICQgICAgIEAKOiE6ICQgICAgIEAKIDo6IDo6OjogJEAKOiA6OiA6OiAkIEAKICAgICAgICAgIEBACiAgICAgICAgICBACkBAQEBAQEBAICRACkBAQEBAQEBAICRACkBAISAkICAgICBACiFAISAkICAgICBACkAhISE6ISAkICBACiEhISEhOiAkICBACiEhOiAkICAgICBACjohOiAkICAgICBACiA6OiAkICAgICBACiA6ICQgICAgICBACiAgICAgICAgICBAQAogICAgICAgICAgIEAKIEBAQEBAQEBAICRACkBAQEBAQEBAQCAkQAohQEAgJCAgICAgIEAKIUAhICQgICAgICBACiFAISBAIUAhQCAkQAohISEgISFAISEgJEAKOiEhICAgISE6ICRACjohOiAgICE6OiAkQAogOjo6IDo6OjogJEAKIDo6IDo6IDogJCBACiAgICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAICBAQEAgJEAKQEBAICBAQEAgJEAKQEAhICBAQEAgJEAKIUAhICBAIUAgJEAKQCFAIUAhQCEgJEAKISEhQCEhISEgJEAKISE6ICAhISEgJEAKOiE6ICAhOiEgJEAKOjogICA6OjogJEAKIDogICA6IDogJEAKICAgICAgICAgIEBACiAgICAgQApAQEAgJEAKQEBAICRACkBAISAkQAohQCEgJEAKISFAICRACiEhISAkQAohITogJEAKOiE6ICRACiA6OiAkQAo6ICQgIEAKICAgICBAQAogICAgICAgICAgQAogICAgIEBAQCAkQAogICAgIEBAQCAkQAogICAgIEBAISAkQAogICAgICFAISAkQAogICAgICEhQCAkQAogICAgICEhISAkQAogICAgICEhOiAkQAohITogIDohOiAkQAo6OjogOiA6OiAkQAogOiA6OjogJCAgQAogICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAICBAQEAgJEAKQEBAICBAQEAgJEAKQEAhICAhQEAgJEAKIUAhICBAISEgJEAKQCFAQCFAISAkIEAKISFAISEhICQgIEAKISE6IDohISAkIEAKOiE6ICAhOiEgJEAKIDo6ICA6OjogJEAKIDogICA6OjogJEAKICAgICAgICAgIEBACiAgICAgICAgICBACkBAQCAgICAgICRACkBAQCAgICAgICRACkBAISAgICAgICRACiFAISAgICAgICRACkAhISAgICAgICRACiEhISAgICAgICRACiEhOiAgICAgICRACiA6ITogICAgICRACiA6OiA6Ojo6ICRACjogOjogOiA6ICRACiAgICAgICAgICBAQAogICAgICAgICAgICAgQApAQEBAQEBAQEBAICQgQApAQEBAQEBAQEBAQCAkQApAQCEgQEAhIEBAISAkQAohQCEgIUAhICFAISAkQApAISEgISFAIEAhQCAkQAohQCEgICAhICFAISAkQAohITogICAgICEhOiAkQAo6ITogICAgIDohOiAkQAo6OjogICAgIDo6ICQgQAogOiAgICAgIDogJCAgQAogICAgICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAICBAQEAgJEAKQEBAQCBAQEAgJEAKQEAhQCFAQEAgJEAKIUAhIUAhQCEgJEAKQCFAICEhQCEgJEAKIUAhICAhISEgJEAKISE6ICAhISEgJEAKOiE6ICAhOiEgJEAKIDo6ICAgOjogJEAKOjogICAgOiAkIEAKICAgICAgICAgIEBACiAgICAgICAgICBACiBAQEBAQEAgJCBACkBAQEBAQEBAICRACkBAISAgQEBAICRACiFAISAgQCFAICRACkAhQCAgIUAhICRACiFAISAgISEhICRACiEhOiAgISEhICRACjohOiAgITohICRACjo6Ojo6IDo6ICRACiA6IDogIDogJCBACiAgICAgICAgICBAQAogICAgICAgICAgQApAQEBAQEBAICQgQApAQEBAQEBAQCAkQApAQCEgIEBAQCAkQAohQCEgIEAhQCAkQApAIUBAIUAhICQgQAohIUAhISEgJCAgQAohITogJCAgICAgQAo6ITogJCAgICAgQAogOjogJCAgICAgQAogOiAkICAgICAgQAogICAgICAgICAgQEAKICAgICAgICAgICBACiBAQEBAQEAgJCAgQApAQEBAQEBAQCAkIEAKQEAhICBAQEAgJCBACiFAISAgQCFAICQgQApAIUAgICFAISAkIEAKIUAhICAhISEgJCBACiEhOiEhOiE6ICQgQAo6ITogOiE6ICAkIEAKOjo6OjogOiEgJCBACiA6IDogIDo6OiAkQAogICAgICAgICAgIEBACiAgICAgICAgICBACkBAQEBAQEAgJCBACkBAQEBAQEBAICRACkBAISAgQEBAICRACiFAISAgQCFAICRACkAhQCEhQCEgJCBACiEhQCFAISAkICBACiEhOiA6ISEgJCBACjohOiAgITohICRACjo6ICAgOjo6ICRACiA6ICAgOiA6ICRACiAgICAgICAgICBAQAogICAgICAgICAgQAogQEBAQEBAICQgQApAQEBAQEBAICQgQAohQEAgJCAgICAgQAohQCEgJCAgICAgQAohIUBAISEgJCAgQAogISFAISEhICQgQAogICAgICE6ISAkQAogICAgITohICQgQAo6Ojo6IDo6ICQgQAo6OiA6IDogJCAgQAogICAgICAgICAgQEAKICAgICAgICAgQApAQEBAQEBAICRACkBAQEBAQEAgJEAKICBAQCEgJCAgQAogICFAISAkICBACiAgQCEhICQgIEAKICAhISEgJCAgQAogICEhOiAkICBACiAgOiE6ICQgIEAKICAgOjogJCAgQAogICA6ICQgICBACiAgICAgICAgIEBACiAgICAgICAgICBACkBAQCAgQEBAICRACkBAQCAgQEBAICRACkBAISAgQEBAICRACiFAISAgQCFAICRACkAhQCAgIUAhICRACiFAISAgISEhICRACiEhOiAgISEhICRACjohOiAgITohICRACjo6Ojo6IDo6ICRACiA6IDogIDogJCBACiAgICAgICAgICBAQAogICAgICAgICAgQApAQEAgIEBAQCAkQApAQEAgIEBAQCAkQApAQCEgIEBAQCAkQAohQCEgIEAhQCAkQApAIUAgICFAISAkQAohQCEgICEhISAkQAo6ITogICEhOiAkQAogOjohITohICQgQAogIDo6OjogJCAgQAogICA6ICQgICAgQAogICAgICAgICAgQEAKICAgICAgICAgICAgICAgQApAQEAgIEBAQCAgQEBAICRACkBAQCAgQEBAICBAQEAgJEAKQEAhICBAQCEgIEBAISAkQAohQCEgICFAISAgIUAhICRACkAhISAgISFAICBAIUAgJEAKIUAhICAhISEgICFAISAkQAohITogICEhOiAgISE6ICRACjohOiAgOiE6ICA6ITogJEAKIDo6OjogOjogOjo6ICQgQAogIDo6IDogIDogOiAkICBACiAgICAgICAgICAgICAgIEBACiAgICAgICAgICBACkBAQCAgQEBAICRACkBAQCAgQEBAICRACkBAISAgIUBAICRACiFAISAgQCEhICRACiAhQEAhQCEgJCBACiAgQCEhISAkICBACiAhOiA6ISEgJCBACjohOiAgITohICRACiA6OiAgOjo6ICRACiA6ICAgOjogJCBACiAgICAgICAgICBAQAogICAgICAgICBACkBAQCBAQEAgJEAKQEBAIEBAQCAkQApAQCEgIUBAICRACiFAISBAISEgJEAKICFAIUAhICQgQAogIEAhISEgJCBACiAgISE6ICQgIEAKICA6ITogJCAgQAogICA6OiAkICBACiAgIDogJCAgIEAKICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAQEBAQEAgJEAKQEBAQEBAQEAgJEAKICAgICBAQCEgJEAKICAgICFAISAkIEAKICAgQCEhICQgIEAKICAhISEgJCAgIEAKICEhOiAkICAgIEAKOiE6ICQgICAgIEAKIDo6IDo6OjogJEAKOiA6OiA6IDogJEAKICAgICAgICAgIEBACiAgICAgICBACkBAQEBAICRACkBAQEBAICRACkBAISAkICBACiFAISAkICBACkAhQCAkICBACiEhISAkICBACiEhOiAkICBACjohOiAkICBACjo6Ojo6ICRACiA6IDogJCBACiAgICAgICBAQAogICAgICAgICAgICAgICBACiBAQEAgJCAgICAgICAgIEAKICBAQEAgJCAgICAgICAgQAogICBAQCEgJCAgICAgICBACiAgICAhQCEgJCAgICAgIEAKICAgICBAISEgJCAgICAgQAogICAgICAhISEgJCAgICBACiAgICAgICAhITogJCAgIEAKICAgICAgICA6OiEgJCAgQAogICAgICAgICA6OiAkICBACiAgICAgICAgICA6IDogJEAKICAgICAgICAgICAgICAgQEAKICAgICAgIEAKQEBAQEAgJEAKQEBAQEAgJEAKICBAQCEgJEAKICAhQCEgJEAKICBAIUAgJEAKICAhISEgJEAKICAhITogJEAKICA6ITogJEAKOjo6OjogJEAKIDogOiAkIEAKICAgICAgIEBACiAgICAgICAgICAgICAgICBACiAgICAgQEBAQEAgJCAgICBACiAgIEBAQEAgQEBAQCAkICBACiBAIUAhICAgICBAIUAhICRACiAgICQgICAgICAgICQgICBACiAgICQgICAgICAgICQgICBACiAgICQgICAgICAgICQgICBACiAgICQgICAgICAgICQgICBACiAgICQgICAgICAgICQgICBACiAgICQgICAgICAgICQgICBACiAgICQgICAgICAgICQgICBACiAgICAgICAgICAgICAgICBAQAogICAgICAgICAgICAgICBACiAgICAgICAgICAgICAgJEAKICAgICAgICAgICAgICAkQAogICAgICAgICAgICAgICRACiAgICAgICAgICAgICAgJEAKICAgICAgICAgICAgICAkQAogICAgICAgICAgICAgICRACiAgICAgICAgICAgICAgJEAKICAgICAgICAgICAgICAkQAo6Ojo6Ojo6Ojo6Ojo6ICRACjo6Ojo6Ojo6Ojo6OjogJEAKICAgICAgICAgICAgICAgQEAKICAgICBACkBAQCAkQApAQCAkIEAKIEAhICRACiAgJCAgQAogICQgIEAKICAkICBACiAgJCAgQAogICQgIEAKICAkICBACiAgJCAgQAogICAgIEBACiAgICAgICAgICBACiBAQEBAQEAgJCBACkBAQEBAQEBAICRACkBAISAgQEBAICRACiFAISAgQCFAICRACkAhQCFAIUAhICRACiEhIUAhISEhICRACiEhOiAgISEhICRACjohOiAgITohICRACjo6ICAgOjo6ICRACiA6ICAgOiA6ICRACiAgICAgICAgICBAQAogICAgICAgICAgQApAQEBAQEBAICQgQApAQEBAQEBAQCAkQApAQCEgIEBAQCAkQAohQCAgIEAhQCAkQApAIUAhQCFAICQgQAohISFAISEhISAkQAohITogICEhISAkQAo6ITogICE6ISAkQAogOjogOjo6OiAkQAo6OiA6IDo6ICQgQAogICAgICAgICAgQEAKICAgICAgICAgIEAKIEBAQEBAQEAgJEAKQEBAQEBAQEAgJEAKIUBAICQgICAgIEAKIUAhICQgICAgIEAKIUAhICQgICAgIEAKISEhICQgICAgIEAKOiEhICQgICAgIEAKOiE6ICQgICAgIEAKIDo6OiA6OjogJEAKIDo6IDo6IDogJEAKICAgICAgICAgIEBACiAgICAgICAgICBACkBAQEBAQEAgJCBACkBAQEBAQEBAICRACkBAISAgQEBAICRACiFAISAgQCFAICRACkAhQCAgIUAhICRACiFAISAgISEhICRACiEhOiAgISEhICRACjohOiAgITohICRACiA6Ojo6IDo6ICRACjo6IDogIDogJCBACiAgICAgICAgICBAQAogICAgICAgICAgQApAQEBAQEBAQCAkQApAQEBAQEBAQCAkQApAQCEgJCAgICAgQAohQCEgJCAgICAgQApAISEhOiEgJCAgQAohISEhITogJCAgQAohITogJCAgICAgQAo6ITogJCAgICAgQAogOjogOjo6OiAkQAo6IDo6IDo6ICQgQAogICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAQEBAQEAgJEAKQEBAQEBAQEAgJEAKQEAhICQgICAgIEAKIUAhICQgICAgIEAKQCEhITohICQgIEAKISEhISE6ICQgIEAKISE6ICQgICAgIEAKOiE6ICQgICAgIEAKIDo6ICQgICAgIEAKIDogJCAgICAgIEAKICAgICAgICAgIEBACiAgICAgICAgICAgQAogQEBAQEBAQEAgJEAKQEBAQEBAQEBAICRACiFAQCAkICAgICAgQAohQCEgJCAgICAgIEAKIUAhIEAhQCFAICRACiEhISAhIUAhISAkQAo6ISEgICAhITogJEAKOiE6ICAgITo6ICRACiA6OjogOjo6OiAkQAogOjogOjogOiAkIEAKICAgICAgICAgICBAQAogICAgICAgICAgQApAQEAgIEBAQCAkQApAQEAgIEBAQCAkQApAQCEgIEBAQCAkQAohQCEgIEAhQCAkQApAIUAhQCFAISAkQAohISFAISEhISAkQAohITogICEhISAkQAo6ITogICE6ISAkQAo6OiAgIDo6OiAkQAogOiAgIDogOiAkQAogICAgICAgICAgQEAKICAgICBACkBAQCAkQApAQEAgJEAKQEAhICRACiFAISAkQAohIUAgJEAKISEhICRACiEhOiAkQAo6ITogJEAKIDo6ICRACjogJCAgQAogICAgIEBACiAgICAgICAgICBACiAgICAgQEBAICRACiAgICAgQEBAICRACiAgICAgQEAhICRACiAgICAgIUAhICRACiAgICAgISFAICRACiAgICAgISEhICRACiAgICAgISE6ICRACiEhOiAgOiE6ICRACjo6OiA6IDo6ICRACiA6IDo6OiAkICBACiAgICAgICAgICBAQAogICAgICAgICAgQApAQEAgIEBAQCAkQApAQEAgIEBAQCAkQApAQCEgICFAQCAkQAohQCEgIEAhISAkQApAIUBAIUAhICQgQAohIUAhISEgJCAgQAohITogOiEhICQgQAo6ITogICE6ISAkQAogOjogIDo6OiAkQAogOiAgIDo6OiAkQAogICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAICAgICAgJEAKQEBAICAgICAgJEAKQEAhICAgICAgJEAKIUAhICAgICAgJEAKQCEhICAgICAgJEAKISEhICAgICAgJEAKISE6ICAgICAgJEAKIDohOiAgICAgJEAKIDo6IDo6OjogJEAKOiA6OiA6IDogJEAKICAgICAgICAgIEBACiAgICAgICAgICAgICBACkBAQEBAQEBAQEAgJCBACkBAQEBAQEBAQEBAICRACkBAISBAQCEgQEAhICRACiFAISAhQCEgIUAhICRACkAhISAhIUAgQCFAICRACiFAISAgICEgIUAhICRACiEhOiAgICAgISE6ICRACjohOiAgICAgOiE6ICRACjo6OiAgICAgOjogJCBACiA6ICAgICAgOiAkICBACiAgICAgICAgICAgICBAQAogICAgICAgICAgQApAQEAgIEBAQCAkQApAQEBAIEBAQCAkQApAQCFAIUBAQCAkQAohQCEhQCFAISAkQApAIUAgISFAISAkQAohQCEgICEhISAkQAohITogICEhISAkQAo6ITogICE6ISAkQAogOjogICA6OiAkQAo6OiAgICA6ICQgQAogICAgICAgICAgQEAKICAgICAgICAgIEAKIEBAQEBAQCAkIEAKQEBAQEBAQEAgJEAKQEAhICBAQEAgJEAKIUAhICBAIUAgJEAKQCFAICAhQCEgJEAKIUAhICAhISEgJEAKISE6ICAhISEgJEAKOiE6ICAhOiEgJEAKOjo6OjogOjogJEAKIDogOiAgOiAkIEAKICAgICAgICAgIEBACiAgICAgICAgICBACkBAQEBAQEAgJCBACkBAQEBAQEBAICRACkBAISAgQEBAICRACiFAISAgQCFAICRACkAhQEAhQCEgJCBACiEhQCEhISAkICBACiEhOiAkICAgICBACjohOiAkICAgICBACiA6OiAkICAgICBACiA6ICQgICAgICBACiAgICAgICAgICBAQAogICAgICAgICAgIEAKIEBAQEBAQCAkICBACkBAQEBAQEBAICQgQApAQCEgIEBAQCAkIEAKIUAhICBAIUAgJCBACkAhQCAgIUAhICQgQAohQCEgICEhISAkIEAKISE6ISE6ITogJCBACjohOiA6ITogICQgQAo6Ojo6OiA6ISAkIEAKIDogOiAgOjo6ICRACiAgICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAQEBAQCAkIEAKQEBAQEBAQEAgJEAKQEAhICBAQEAgJEAKIUAhICBAIUAgJEAKQCFAISFAISAkIEAKISFAIUAhICQgIEAKISE6IDohISAkIEAKOiE6ICAhOiEgJEAKOjogICA6OjogJEAKIDogICA6IDogJEAKICAgICAgICAgIEBACiAgICAgICAgICBACiBAQEBAQEAgJCBACkBAQEBAQEAgJCBACiFAQCAkICAgICBACiFAISAkICAgICBACiEhQEAhISAkICBACiAhIUAhISEgJCBACiAgICAgITohICRACiAgICAhOiEgJCBACjo6OjogOjogJCBACjo6IDogOiAkICBACiAgICAgICAgICBAQAogICAgICAgICBACkBAQEBAQEAgJEAKQEBAQEBAQCAkQAogIEBAISAkICBACiAgIUAhICQgIEAKICBAISEgJCAgQAogICEhISAkICBACiAgISE6ICQgIEAKICA6ITogJCAgQAogICA6OiAkICBACiAgIDogJCAgIEAKICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAICBAQEAgJEAKQEBAICBAQEAgJEAKQEAhICBAQEAgJEAKIUAhICBAIUAgJEAKQCFAICAhQCEgJEAKIUAhICAhISEgJEAKISE6ICAhISEgJEAKOiE6ICAhOiEgJEAKOjo6OjogOjogJEAKIDogOiAgOiAkIEAKICAgICAgICAgIEBACiAgICAgICAgICBACkBAQCAgQEBAICRACkBAQCAgQEBAICRACkBAISAgQEBAICRACiFAISAgQCFAICRACkAhQCAgIUAhICRACiFAISAgISEhICRACjohOiAgISE6ICRACiA6OiEhOiEgJCBACiAgOjo6OiAkICBACiAgIDogJCAgICBACiAgICAgICAgICBAQAogICAgICAgICAgICAgICBACkBAQCAgQEBAICBAQEAgJEAKQEBAICBAQEAgIEBAQCAkQApAQCEgIEBAISAgQEAhICRACiFAISAgIUAhICAhQCEgJEAKQCEhICAhIUAgIEAhQCAkQAohQCEgICEhISAgIUAhICRACiEhOiAgISE6ICAhITogJEAKOiE6ICA6ITogIDohOiAkQAogOjo6OiA6OiA6OjogJCBACiAgOjogOiAgOiA6ICQgIEAKICAgICAgICAgICAgICAgQEAKICAgICAgICAgIEAKQEBAICBAQEAgJEAKQEBAICBAQEAgJEAKQEAhICAhQEAgJEAKIUAhICBAISEgJEAKICFAQCFAISAkIEAKICBAISEhICQgIEAKICE6IDohISAkIEAKOiE6ICAhOiEgJEAKIDo6ICA6OjogJEAKIDogICA6OiAkIEAKICAgICAgICAgIEBACiAgICAgICAgIEAKQEBAIEBAQCAkQApAQEAgQEBAICRACkBAISAhQEAgJEAKIUAhIEAhISAkQAogIUAhQCEgJCBACiAgQCEhISAkIEAKICAhITogJCAgQAogIDohOiAkICBACiAgIDo6ICQgIEAKICAgOiAkICAgQAogICAgICAgICBAQAogICAgICAgICAgQApAQEBAQEBAQCAkQApAQEBAQEBAQCAkQAogICAgIEBAISAkQAogICAgIUAhICQgQAogICBAISEgJCAgQAogICEhISAkICAgQAogISE6ICQgICAgQAo6ITogJCAgICAgQAogOjogOjo6OiAkQAo6IDo6IDogOiAkQAogICAgICAgICAgQEAKICAgICAgICAgIEAKICAgQEBAQEAgJEAKICAgQEBAQEAgJEAKICBAQCEgJCAgIEAKICAhQCEgJCAgIEAKQCFAICQgICAgIEAKISEhICQgICAgIEAKICAhITogJCAgIEAKICA6ITogJCAgIEAKICAgOjo6OjogJEAKICAgIDogOiAkIEAKICAgICAgICAgIEBACiAgICAgQApAQEAgJEAKQEBAICRACkBAISAkQAohQCEgJEAKICQkICBACiEhISAkQAohITogJEAKOiE6ICRACjo6ICQgQAogOiAkIEAKICAgICBAQAogICAgICAgICAgQApAQEBAQCAkICAgQApAQEBAQCAkICAgQAogICBAQCEgJCAgQAogICAhQCEgJCAgQAogICAgIEAhQCAkQAogICAgICEhISAkQAogICAhITogJCAgQAogICA6ITogJCAgQAo6Ojo6OiAkICAgQAogOiA6ICQgICAgQAogICAgICAgICAgQEAKICAgICAgICAgICAgICAgQAogICAgICAgICAgICAgICBACiAgICFAISAgICBAIUAgJEAKIEAhQCFAIUAhQCFAICQgQAohISEgICAgIUAhICQgICBACiAgJCAgICAgICQgICAgIEAKICAkICAgICAgJCAgICAgQAogICQgICAgICAkICAgICBACiAgJCAgICAgICQgICAgIEAKICAkICAgICAgJCAgICAgQAogICQgICAgICAkICAgICBACiAgICAgICAgICAgICAgIEBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBAQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBAQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBACiAgQAogIEAKICBAQAo='
);

export default poison;