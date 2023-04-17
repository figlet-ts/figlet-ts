import { FontFile } from '../../FontFile';

const cosmike = new FontFile(
    'cosmike',
    'ZmxmMmElIDYgNiAyMSAwIDMKY29zbWljLmZsZiBieSBNaWtlIFJvc3VsZWsgPG1qckBuZXRpbnMubmV0PiwgNy8xMS85NS4gQ2hlY2sgb3V0IG15CmhvbWVwYWdlIGF0OiBodHRwOi8vd3d3Lm5ldGlucy5uZXQvc2hvd2Nhc2UvbWlrZXdybGQvCi0tLS0gTW9kaWZpZWQgYW5kIGNvcnJlY3RlZCBieSBNaWNoZWwgRWZ0aW1ha2lzIChNaWNoZWwuRWZ0aW1ha2lzQHZsc2kuY29tKSAtLS0tCiUlJSUjCiUlJSUjCiUlJSUjCiUlJSUjCiUlJSUjCiUlJSUjIwogLjojCjs7OyMKJ1tbIwogJCQjCiAiIiMKIE1NIyMKJTo6IDo6JSMKJSI7IDsiJSMKICAgICAgICMKICAgICAgICMKICAgICAgICMKICAgICAgICMjCiAgIDo6ICA6OiAjCl9fLDsnXyw7J18jCicnW1snJ1tbJycjCiAsJCIgLCQiICAjCm84OG9vODhvbyAjCixNIiAsTSIgICAjIwogIC46ICAgIwogLDs7Oy4gIwpbWywsX2AgIwogYCIiIllvIwogWW9fLGQiIwogICdNJyAgIyMKICAuLiAgIC46YCMKIDsgIDsgLDtgICMKICBeXiAsW2AgICMKICAgIGNQICwsICMKICAsOCIgOCAgOCMKLGRQICAgICIiICMjCiA6XCAgICMKIC47OycgIwooW19fICAjCmMkIiIgICMKIllvLG9QIwogICAiTSwjIwo6OiMKLCcjCiAgIwogICMKICAjCiAgIyMKICAuOiMKLDsnICMKblsgICMKWSQgICMKIDhvLCMKICAiTSMjCjouICAjCiAnOywjCiAgW24jCiAgJFkjCixvOCAjCk0iICAjIwogICAgIwpcfC8gIwovfFwgIwogICAgIwogICAgIwogICAgIyMKICAgICAgICMKICAgICAgICMKICAgWyAgICMKJSQkJCQkJSMKICAgOCAgICMKICAgICAgICMjCiAgICMKICAgIwogICAjCiAgICMKZDhiIwosTSIjIwogICAgICAjCiAgICAgICMKICAgICAgIwolY2NjYyUjCiAgICAgICMKICAgICAgIyMKICAgIwogICAjCiAgICMKICAgIwpkOGIjCllNUCMjCiAgICAgLzpgIwogICAgLztgICMKICAgblsnICAjCiAgYyQiICAgIwogbzgiICAgICMKbU0iICAgICAjIwogICAgICAgICMKICAsOzssICAjCixbJyAgW24gIwokJCAgICAkJCMKWTgsICAsOCIjCiAiWW1tUCAgIyMKOi4jCjs7IwpbWyMKJCQjCjg4IwpNTSMjCiAgLjo6Oi4gICMKICw7J2BgOy4gIwogJycgICxbWycjCiAuYyQkUCcgICMKZDg4IF8sb28sIwpNTU1VUCoiXl4jIwogLjo6LiAgICAjCjsnYCc7OywgICMKICAgLm5bWyAgIwogIGBgIiQkJC4jCiAgLCxvODg4IiMKICBZTU1QIiAgIyMKICAgLjo6ICMKICw7Jzs7ICMKLFsnIFtbICMKJFBfXyQkYyMKYCIiIjg4IiMKICAgIE1NICMjCjo6Ojo6Ojo6IwpgOztgYCcnOyMKIFtbLF8gICAjCiBgIiIqWWNjIwogX18sb2Q4IiMKIE1NUCIgICAjIwogICAgLjouICAjCiAgLDsnICAgICMKLFtbLm9kOGIgIwokJCQiICAiJCQjCiBZOGIsLGQ4UCMKICAiWU1QIiAgIyMKLi4uOjo6OjojCicnJ2BgOzsnIwogICAgLlsnICMKICAsJCQnICAjCiAgODg4ICAgIwogIE1NTSAgICMjCiAuOjo6Oi4gIwpgOy4gICw7JyMKICBbbm5bLCAjCiAkIiAgICRjIwogWWIsXyw4UCMKICAiWU1QIiAjIwogIC4sLC4gICMKLDs7J2AnOywjCltbLCBfLFtbIwogWSQkUCIkJCMKICwsXyxkOCIjCiAgIk1QIiAgIyMKICAgIwosOywjCidbJyMKICAgIwpkOGIjCllNUCMjCiAgICMKLDssIwonWycjCiAgICMKZDhiIwosTSIjIwogICAgICMKICAgLCwjCiAsW1snIwpjJCAgICMKIjhibywjCiAgIk1QIyMKICAgICAgICMKICAgICAgICMKJSwsLCwsJSMKJSAiIiIiJSMKICVvb29vJSMKICUiIiIiJSMjCiAgICAgIwosLCAgICMKJ1tbLCAjCiAgICRjIwosb2Q4IiMKWU0iICAjIwogLi06Ojo6LS4jCjs7J2BgYDs7OyMKICAgLG5bWycgIwogIGQkUCIgICAjCiAgIiIgICAgICMKICBNTSAgICAgIyMKICAuOjo6JycnJycnJzo6Oi4gICMKIDs7JyAsOzs7Ozs7LC47IGA7LiMKOltbICBbLiAgIC5bJ1tbICBbWyMKICQkLCAgJ1kkJCRQJ1kkJFAnICMKICAnWThvLF8gICAgIF9fLG9vICMKICAgIGAiWVVNTU1NTU1VWSIgICMjCiAgOjo6LiAgICAgIwogIDs7YDs7ICAgICMKICxbWyAnW1ssICAjCmMkJCRjYyQkJGMgIwogODg4ICAgODg4LCMKIFlNTSAgICIiYCAjIwo6Ojo6Ojo6LiAgIwogOzs7Jyc7OycgIwogW1tbX19bW1wuIwogJCQiIiIiWSQkIwpfODhvLCxvZDhQIwoiIllVTU1NUCIgIyMKICAuLC06Ojo6OiAgIwosOzs7J2BgYGAnICAjCltbWyAgICAgICAgICMKJCQkICAgICAgICAgIwpgODhibyxfXyxvLCAjCiAgIllVTU1NTU1QIiMjCjo6Ojo6OjotLiAgIwogOzssICAgYCc7LCMKIGBbWyAgICAgW1sjCiAgJCQsICAgICQkIwogIDg4OF8sbzhQJyMKICBNTU1NUCJgICAjIwouLDo6Ojo6OiAgIwo7Ozs7JycnJyAgIwogW1tjY2NjICAgIwogJCQiIiIiICAgIwogODg4b28sX18gIwogIiIiIllVTU1NIyMKLi06Ojo6OicjCjs7OycnJycgIwpbW1ssLD09ICMKYCQkJCJgYCAjCiA4ODggICAgIwogIk1NLCAgICMjCiAgLiwtOjo6OjovICAjCiw7Oy0nYGBgYCcgICAjCltbWyAgIFtbW1tbWy8jCiIkJGMuICAgICIkJCAjCiBgWThibywsLG84OG8jCiAgIGAnWU1VUCJZTU0jIwogIDo6ICAgLjogICMKICw7OyAgIDs7LCAjCixbW1ssLCxbW1sgIwoiJCQkIiIiJCQkICMKIDg4OCAgICI4OG8jCiBNTU0gICAgWU1NIyMKOjo6Iwo7OzsjCltbWyMKJCQkIwo4ODgjCk1NTSMjCiAgICAuLi4uOjo6Ojo6IwogOzs7Ozs7Ozs7YGBgYCMKICcnYCAgYFtbLiAgICAjCiwsLCAgICBgJCQgICAgIwo4ODhib29vZDg4ICAgICMKIk1NTU1NTU1NIiAgICAjIwogOjo6ICAuICAgIwogOzs7IC47OywuIwogW1tbW1svJyAgIwpfJCQkJCwgICAgIwoiODg4Ijg4bywgIwogTU1NICJNTVAiIyMKIDo6OiAgICAgIwogOzs7ICAgICAjCiBbW1sgICAgICMKICQkJyAgICAgIwpvODhvbywuX18jCiIiIiJZVU1NTSMjCi4gICAgICAgIDogICAjCjs7LC4gICAgOzs7ICAjCltbW1ssICxbW1tbLCAjCiQkJCQkJCQkIiQkJCAjCjg4OCBZODgiIDg4OG8jCk1NTSAgTScgICJNTU0jIwo6OjouICAgIDo6Oi4jCmA7Ozs7LCAgYDs7OyMKICBbW1tbWy4gJ1tbIwogICQkJCAiWSRjJCQjCiAgODg4ICAgIFk4OCMKICBNTU0gICAgIFlNIyMKICAgIC4uLiAgICAgIwogLjs7Ozs7OzsuICAjCixbWyAgICAgXFtbLCMKJCQkLCAgICAgJCQkIwoiODg4LF8gXyw4OFAjCiAgIllNTU1NTVAiICMjCjo6Ojo6Ojo6OjouICMKIGA7OztgYGAuOzs7IwogIGBdXW5ubl1dJyAjCiAgICQkJCIiICAgICMKICAgODg4byAgICAgIwogICBZTU1NYiAgICAjIwogLjo6Ojo6Oi4gICAjCiw7OydgYGAnOzssICMKW1tbICAgICBbW1tcIwoiJCRjICBjYyQkJCIjCiAiKjhibyxZODhiLCMKICAgIipZUCIgIk0iIyMKOjo6Ojo6Oi4uICAgIwo7Ozs7YGA7Ozs7ICAjCiBbW1ssL1tbWycgICMKICQkJCQkJGMgICAgIwogODg4YiAiODhibywjCiBNTU1NICAgIlciICMjCiAuOjo6Ojo6LiAjCjs7O2AgICAgYCAjCidbPT0vW1tbWywjCiAgJycnICAgICQjCiA4OGIgICAgZFAjCiAgIllNbU1ZIiAjIwo6Ojo6Ojo6Ojo6OjojCjs7Ozs7Ozs7JycnJyMKICAgICBbWyAgICAgIwogICAgICQkICAgICAjCiAgICAgODgsICAgICMKICAgICBNTU0gICAgIyMKIC4uLiAgICA6OjojCiA7OyAgICAgOzs7IwpbWycgICAgIFtbWyMKJCQgICAgICAkJCQjCjg4ICAgIC5kODg4IwogIlltbU1NTU0iIiMjCjo6OiAgICAgIC46Oi4jCic7OywgICAsOzs7JyAjCiBcW1sgIC5bWy8gICAjCiAgWSRjLiQkIiAgICAjCiAgIFk4OFAgICAgICAjCiAgICBNUCAgICAgICAjIwouOjogICAgLiAgIC46OjojCic7OywgIDs7ICA7OzsnICMKICdbWywgW1ssIFtbJyAgIwogICBZJGMkJCRjJFAgICAjCiAgICAiODgiODg4ICAgICMKICAgICAiTSAiTSIgICAgIyMKICAuLDo6ICAgICAgLjojCiAgYDs7OywgIC4sOzsgIwogICAgJ1tbLCxbWycgICMKICAgICBZJCQkUCAgICAjCiAgIG9QImBgIllvLCAgIwosbSIgICAgICAgIk1tLCMjCi4tOi4gICAgIDo6LS4jCiAnOzsuICAgOzs7OycjCiAgICdbWyxbW1snICAjCiAgICAgYyQkIiAgICAjCiAgICw4UCJgICAgICAjCiAgbU0iICAgICAgICAjIwo6Ojo6Ojo6OjojCidgYGBgYDs7OyMKICAgIC5uW1snIwogICwkJFAiICAjCiw4ODhibyxfICMKIGAiIipVTU0gIyMKOjo6OiMKOzsnICMKW1sgICMKJCQgICMKODgsICMKIllNTSMjCmA6XCAgICAgIwogYDtcICAgICMKICAnW24gICAjCiAgICIkYyAgIwogICAgIjhvICMKICAgICAiTW0jIwo6Ojo6IwogJzs7IwogIFtbIwogICQkIwogLDg4IwpNTVAiIyMKIC46LiAjCjsnIGA7IwogICAgICMKICAgICAjCiAgICAgIwogICAgICMjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCm1tbW1tbW0jIwpgOi4gIwogYDssIwogICAgIwogICAgIwogICAgIwogICAgIyMKICA6OjouICAgICAjCiAgOztgOzsgICAgIwogLFtbICdbWywgICMKYyQkJGNjJCQkYyAjCiA4ODggICA4ODgsIwogWU1NICAgIiJgICMjCjo6Ojo6OjouICAjCiA7OzsnJzs7JyAjCiBbW1tfX1tbXC4jCiAkJCIiIiJZJCQjCl84OG8sLG9kOFAjCiIiWVVNTU1QIiAjIwogIC4sLTo6Ojo6ICAjCiw7OzsnYGBgYCcgICMKW1tbICAgICAgICAgIwokJCQgICAgICAgICAjCmA4OGJvLF9fLG8sICMKICAiWVVNTU1NTVAiIyMKOjo6Ojo6Oi0uICAjCiA7OywgICBgJzssIwogYFtbICAgICBbWyMKICAkJCwgICAgJCQjCiAgODg4XyxvOFAnIwogIE1NTU1QImAgICMjCi4sOjo6Ojo6ICAjCjs7OzsnJycnICAjCiBbW2NjY2MgICAjCiAkJCIiIiIgICAjCiA4ODhvbyxfXyAjCiAiIiIiWVVNTU0jIwouLTo6Ojo6JyMKOzs7JycnJyAjCltbWywsPT0gIwpgJCQkImBgICMKIDg4OCAgICAjCiAiTU0sICAgIyMKICAuLC06Ojo6Oi8gICMKLDs7LSdgYGBgJyAgICMKW1tbICAgW1tbW1tbLyMKIiQkYy4gICAgIiQkICMKIGBZOGJvLCwsbzg4byMKICAgYCdZTVVQIllNTSMjCiAgOjogICAuOiAgIwogLDs7ICAgOzssICMKLFtbWywsLFtbWyAjCiIkJCQiIiIkJCQgIwogODg4ICAgIjg4byMKIE1NTSAgICBZTU0jIwo6OjojCjs7OyMKW1tbIwokJCQjCjg4OCMKTU1NIyMKICAgIC4uLi46Ojo6OjojCiA7Ozs7Ozs7OztgYGBgIwogJydgICBgW1suICAgICMKLCwsICAgIGAkJCAgICAjCjg4OGJvb29kODggICAgIwoiTU1NTU1NTU0iICAgICMjCiA6OjogIC4gICAjCiA7OzsgLjs7LC4jCiBbW1tbWy8nICAjCl8kJCQkLCAgICAjCiI4ODgiODhvLCAjCiBNTU0gIk1NUCIjIwogOjo6ICAgICAjCiA7OzsgICAgICMKIFtbWyAgICAgIwogJCQnICAgICAjCm84OG9vLC5fXyMKIiIiIllVTU1NIyMKLiAgICAgICAgOiAgICMKOzssLiAgICA7OzsgICMKW1tbWywgLFtbW1ssICMKJCQkJCQkJCQiJCQkICMKODg4IFk4OCIgODg4byMKTU1NICBNJyAgIk1NTSMjCjo6Oi4gICAgOjo6LiMKYDs7OzssICBgOzs7IwogIFtbW1tbLiAnW1sjCiAgJCQkICJZJGMkJCMKICA4ODggICAgWTg4IwogIE1NTSAgICAgWU0jIwogICAgLi4uICAgICAjCiAuOzs7Ozs7Oy4gICMKLFtbICAgICBcW1ssIwokJCQsICAgICAkJCQjCiI4ODgsXyBfLDg4UCMKICAiWU1NTU1NUCIgIyMKOjo6Ojo6Ojo6Oi4gIwogYDs7O2BgYC47OzsjCiAgYF1dbm5uXV0nICMKICAgJCQkIiIgICAgIwogICA4ODhvICAgICAjCiAgIFlNTU1iICAgICMjCiAuOjo6Ojo6LiAgICMKLDs7J2BgYCc7OywgIwpbW1sgICAgIFtbW1wjCiIkJGMgIGNjJCQkIiMKICIqOGJvLFk4OGIsIwogICAiKllQIiAiTSIjIwo6Ojo6Ojo6Li4gICAjCjs7OztgYDs7OzsgICMKIFtbWywvW1tbJyAgIwogJCQkJCQkYyAgICAjCiA4ODhiICI4OGJvLCMKIE1NTU0gICAiVyIgIyMKIC46Ojo6OjouICMKOzs7YCAgICBgICMKJ1s9PS9bW1tbLCMKICAnJycgICAgJCMKIDg4YiAgICBkUCMKICAiWU1tTVkiICMjCjo6Ojo6Ojo6Ojo6OiMKOzs7Ozs7OzsnJycnIwogICAgIFtbICAgICAjCiAgICAgJCQgICAgICMKICAgICA4OCwgICAgIwogICAgIE1NTSAgICAjIwogLi4uICAgIDo6OiMKIDs7ICAgICA7OzsjCltbJyAgICAgW1tbIwokJCAgICAgICQkJCMKODggICAgLmQ4ODgjCiAiWW1tTU1NTSIiIyMKOjo6ICAgICAgLjo6LiMKJzs7LCAgICw7OzsnICMKIFxbWyAgLltbLyAgICMKICBZJGMuJCQiICAgICMKICAgWTg4UCAgICAgICMKICAgIE1QICAgICAgICMjCi46OiAgICAuICAgLjo6OiMKJzs7LCAgOzsgIDs7OycgIwogJ1tbLCBbWywgW1snICAjCiAgIFkkYyQkJGMkUCAgICMKICAgICI4OCI4ODggICAgIwogICAgICJNICJNIiAgICAjIwogIC4sOjogICAgICAuOiMKICBgOzs7LCAgLiw7OyAjCiAgICAnW1ssLFtbJyAgIwogICAgIFkkJCRQICAgICMKICAgb1AiYGAiWW8sICAjCixtIiAgICAgICAiTW0sIyMKLi06LiAgICAgOjotLiMKICc7Oy4gICA7Ozs7JyMKICAgJ1tbLFtbWycgICMKICAgICBjJCQiICAgICMKICAgLDhQImAgICAgICMKICBtTSIgICAgICAgICMjCjo6Ojo6Ojo6OiMKJ2BgYGBgOzs7IwogICAgLm5bWycjCiAgLCQkUCIgICMKLDg4OGJvLF8gIwogYCIiKlVNTSAjIwouOiMKOycjCiBbIwokIiMKOCAjCiJNIyMKYDojCiw7IwpbWyMKJCQjCjg4IwpNTSMjCjouIwonOyMKWyAjCiIkIwogOCMKTSIjIwonOi46JzouIwogYDsnIGA7IwogICAgICAgIwogICAgICAgIwogICAgICAgIwogICAgICAgIyMKOjogOjouIDo6ICAjCiAgOztgOzsgICAgIwogLFtbICdbWywgICMKYyQkJGNjJCQkYyAjCiA4ODggICA4ODgsIwogWU1NICAgIiJgICMjCiA6OiAuLi4gOjogICMKIC47Ozs7Ozs7LiAgIwosW1sgICAgIFxbWywjCiQkJCwgICAgICQkJCMKIjg4OCxfIF8sODhQIwogICJZTU1NTU1QIiAjIwogLi46OiA6OiA6OiMKIDs7ICAgICA7OzsjCltbJyAgICAgW1tbIwokJCAgICAgICQkJCMKODggICAgLmQ4ODgjCiAiWW1tTU1NTSIiIyMKOjogOjouIDo6ICAjCiAgOztgOzsgICAgIwogLFtbICdbWywgICMKYyQkJGNjJCQkYyAjCiA4ODggICA4ODgsIwogWU1NICAgIiJgICMjCiA6OiAuLi4gOjogICMKIC47Ozs7Ozs7LiAgIwosW1sgICAgIFxbWywjCiQkJCwgICAgICQkJCMKIjg4OCxfIF8sODhQIwogICJZTU1NTU1QIiAjIwogLi46OiA6OiA6OiMKIDs7ICAgICA7OzsjCltbJyAgICAgW1tbIwokJCAgICAgICQkJCMKODggICAgLmQ4ODgjCiAiWW1tTU1NTSIiIyMKOjo6Ojo6Oi4gICMKIDs7OycnOzsnICMKIFtbW19fW1tcLiMKICQkIiIiIlkkJCMKIDg4bywsb2Q4UCMKIE1NYFlNTVAiICMjCg=='
);

export default cosmike;