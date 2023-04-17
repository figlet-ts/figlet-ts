import { FontFile } from '../../FontFile';

const nancyj_underlined = new FontFile(
    'nancyj_underlined',
    'ZmxmMmEkIDggNiAxNSAtMSA5CgoJCQkJICAgbmFuY3lqLmZsZgoKCSAgbmFtZWQgYWZ0ZXIgdGhlIGxvZ2luIG9mIGEgd29tYW4gd2hvICBhc2tlZCBtZSB0byBtYWtlIGhlciBhCgkgIHNpZy4gdGhpcyBpcyB0aGUgZm9udCB0aGF0IGNhbWUgb3V0IG9mIGl0LiAgdGhpcyBpcyBteSBmaXJzdAoJCSAgYXR0ZW1wdCBhdCBhIGZpZ2xldCBmb250LCBzbyBsZWF2ZSBtZSBhbG9uZS4KCgkJCSAgICAgICB2YW1weXJAYWNzLmJ1LmVkdQoKJCQgQAokJCBACiQkIEAKJCQgQAokJCBACiQkIEAKb29vQAokJCBAQApkUCBACjg4IEAKODggQApkUCBACiAgIEAKb28gQApvb29ACiAgIEBACmRQIGRQIEAKZFAgZFAgQAogICAgICBACiAgICAgIEAKICAgICAgQAogICAgICBACm9vb29vb0AKICAgICAgQEAKICAgICAgICBACiBkUCBkUCAgQAo4ODg4ODg4IEAKIDg4IDg4ICBACjg4ODg4ODggQAogZFAgZFAgIEAKb29vb29vb29ACiAgICAgICAgQEAKICAjICAjICAgQAouZDg4ODhQJyBAClk4I29vI28uIEAKICAjICAjODggQApgODg4ODhQJyBACiAgIyAgIyAgIEAKb29vb29vb29vQAogICAgICAgICBAQApkOFAgICBkUCAgIEAKOCA4ICBkOCcgICBAClk4UCBkOCcgICAgQAogICBkOCcgZDhQIEAKICBkOCcgIDggOCBACiA4OCAgICBZOFAgQApvb29vb29vb29vb0AKICAgICAgICAgICBAQAogICBkODhiICAgIEAKICAgOGAnOCAgICBACiAgIGQ4YiAgICAgQAogZDhQYDhiICAgIEAKIGQ4JyBgOGJQICBACiBgODg4UCdgWVAgQApvb29vb29vb29vb0AKICAgICAgICAgICBAQApkOCBACjg4IEAKLlAgQAogICBACiAgIEAKICAgQApvb29ACiAgIEBACiBhODhQIEAKZDgnICAgQAo4OCAgICBACjg4ICAgIEAKWTguICAgQAogWTg4YiBACm9vb29vb0AKICAgICAgQEAKWTg4byAgQAogIGA4YiBACiAgIDg4IEAKICAgODggQAogIC44UCBACmQ4OFkgIEAKb29vb29vQAogICAgICBAQAogICAgZFAgICAgIEAKOGIuIDg4IC5kOCBACiBgOGI4OGQ4JyAgQAogLjhQODhZOC4gIEAKOFAnIDg4IGBZOCBACiAgICBkUCAgICAgQApvb29vb29vb29vb0AKICAgICAgICAgICBAQAogICAgICAgICBACiAgIGRQICAgIEAKICAgODggICAgQAo4ODg4ODg4OCBACiAgIDg4ICAgIEAKICAgZFAgICAgQApvb29vb29vb29ACiAgICAgICAgIEBACiAgICBACiAgICBACiAgICBACiAgICBACiBkUCBACiA4OCBACn4uUH5ACiAgICBAQAogICAgICAgICBACiAgICAgICAgIEAKICAgICAgICAgQAo4ODg4ODg4OCBACiAgICAgICAgIEAKICAgICAgICAgQApvb29vb29vb29ACiAgICAgICAgIEBACiAgIEAKICAgQAogICBACiAgIEAKZFAgQAo4OCBACm9vb0AKICAgQEAKICAgICBkOCcgQAogICAgZDgnICBACiAgIGQ4JyAgIEAKICBkOCcgICAgQAogZDgnICAgICBACjg4ICAgICAgIEAKb29vb29vb29vQAogICAgICAgICBAQAogYTg4ODhhICBACmQ4JyAuLjhiIEAKODggLlAgODggQAo4OCBkJyA4OCBAClk4JycgLjhQIEAKIFk4ODg4UCAgQApvb29vb29vb29ACiAgICAgICAgIEBACmQ4OCAgQAogODggIEAKIDg4ICBACiA4OCAgQAogODggIEAKZDg4UCBACm9vb29vQAogICAgIEBACmQ4ODg4Yi4gQAogICAgYDg4IEAKLmFhYWRQJyBACjg4JyAgICAgQAo4OC4gICAgIEAKWTg4ODg4UCBACm9vb29vb29vQAogICAgICAgIEBACmQ4ODg4Yi4gQAogICAgYDg4IEAKIGFhYWQ4JyBACiAgICBgODggQAogICAgLjg4IEAKZDg4ODg4UCBACm9vb29vb29vQAogICAgICAgIEBACmRQICAgZFAgQAo4OCAgIDg4IEAKODhhYWE4OCBACiAgICAgODggQAogICAgIDg4IEAKICAgICBkUCBACm9vb29vb29vQAogICAgICAgIEBACjg4ODg4OFAgQAo4OCcgICAgIEAKODhiYWFhLiBACiAgICBgODggQAogICAgIDg4IEAKZDg4ODg4UCBACm9vb29vb29vQAogICAgICAgIEBACi5kODg4OFAgQAo4OCcgICAgIEAKODhiYWFhLiBACjg4YCBgODggQAo4Yi4gLmQ4IEAKYFk4ODhQJyBACm9vb29vb29vQAogICAgICAgIEBACmQ4ODg4OFAgQAogICAgZDgnIEAKICAgZDgnICBACiAgZDgnICAgQAogZDgnICAgIEAKZDgnICAgICBACm9vb29vb29vQAogICAgICAgIEBACi5kODg4Yi4gQApZOCcgYDhQIEAKZDhiYWQ4YiBACjg4YCBgODggQAo4Yi4gLjg4IEAKWTg4ODg4UCBACm9vb29vb29vQAogICAgICAgIEBACi5kODg4Yi4gQApZOCcgYDg4IEAKYDhiYWQ4OCBACiAgICBgODggQApkLiAgLjg4IEAKYDg4ODhQICBACm9vb29vb29vQAogICAgICAgIEBACmRQIEAKODggQAogICBACiAgIEAKZFAgQAo4OCBACm9vb0AKICAgQEAKIGRQIEAKIDg4IEAKICAgIEAKICAgIEAKIGRQIEAKIDg4IEAKfi5QfkAKICAgIEBACiAgIGQ4IEAKICBkOCcgQAogZDgnICBACiBZOC4gIEAKICBZOC4gQAogICBZOCBACm9vb29vb0AKICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACmFhYWFhYWFhIEAKICAgICAgICAgQAo4ODg4ODg4OCBACiAgICAgICAgIEAKb29vb29vb29vQAogICAgICAgICBAQAo4YiAgIEAKYDhiICBACiBgOGIgQAogLjhQIEAKLjhQICBACjhQICAgQApvb29vb0AKICAgICBAQAouZDg4ODhiYSAgQApgOCcgICBgOGIgQAogICAgIC5kOCcgQAogICBkOFAnICAgQAogICAiIiAgICAgQAogICBvbyAgICAgQApvb29vb29vb29vQAogICAgICAgICAgQEAKIGE4ODg4OGIuIEAKZDgnICAgYDg4IEAKODggZDhQIDg4IEAKODggWW84Yjg4IEAKWTguICAgICAgIEAKIFk4ODg4OFAnIEAKb29vb29vb29vb0AKICAgICAgICAgIEBACiAuZDg4ODg4OCAgQApkOCcgICAgODggIEAKODhhYWFhYTg4YSBACjg4ICAgICA4OCAgQAo4OCAgICAgODggIEAKODggICAgIDg4ICBACm9vb29vb29vb29vQAogICAgICAgICAgIEBACiA4ODg4ODhiYSAgQAogODggICAgYDhiIEAKYTg4YWFhYThQJyBACiA4OCAgIGA4Yi4gQAogODggICAgLjg4IEAKIDg4ODg4ODg4UCBACm9vb29vb29vb29vQAogICAgICAgICAgIEBACiBhODg4ODhiLiBACmQ4JyAgIGA4OCBACjg4ICAgICAgICBACjg4ICAgICAgICBAClk4LiAgIC44OCBACiBZODg4ODhQJyBACm9vb29vb29vb29ACiAgICAgICAgICBAQAo4ODg4ODhiYSAgQAo4OCAgICBgOGIgQAo4OCAgICAgODggQAo4OCAgICAgODggQAo4OCAgICAuOFAgQAo4ODg4ODg4UCAgQApvb29vb29vb29vQAogICAgICAgICAgQEAKIDg4ODg4ODg4YiBACiA4OCAgICAgICAgQAphODhhYWFhICAgIEAKIDg4ICAgICAgICBACiA4OCAgICAgICAgQAogODg4ODg4ODhQIEAKb29vb29vb29vb29ACiAgICAgICAgICAgQEAKIDg4ODg4ODg4YiBACiA4OCAgICAgICAgQAphODhhYWFhICAgIEAKIDg4ICAgICAgICBACiA4OCAgICAgICAgQAogZFAgICAgICAgIEAKb29vb29vb29vb29ACiAgICAgICAgICAgQEAKIC44ODg4OC4gIEAKZDgnICAgYDg4IEAKODggICAgICAgIEAKODggICBZUDg4IEAKWTguICAgLjg4IEAKIGA4ODg4OCcgIEAKb29vb29vb29vb0AKICAgICAgICAgIEBACmRQICAgICBkUCAgQAo4OCAgICAgODggIEAKODhhYWFhYTg4YSBACjg4ICAgICA4OCAgQAo4OCAgICAgODggIEAKZFAgICAgIGRQICBACm9vb29vb29vb29vQAogICAgICAgICAgIEBACmRQIEAKODggQAo4OCBACjg4IEAKODggQApkUCBACm9vb0AKICAgQEAKICAgICAgIGRQIEAKICAgICAgIDg4IEAKICAgICAgIDg4IEAKICAgICAgIDg4IEAKODguICAuZDhQIEAKIGBZODg4OCcgIEAKb29vb29vb29vb0AKICAgICAgICAgIEBACmRQICAgICBkUCBACjg4ICAgLmQ4JyBACjg4YWFhOFAnICBACjg4ICAgYDhiLiBACjg4ICAgICA4OCBACmRQICAgICBkUCBACm9vb29vb29vb29ACiAgICAgICAgICBAQApkUCAgICAgICAgQAo4OCAgICAgICAgQAo4OCAgICAgICAgQAo4OCAgICAgICAgQAo4OCAgICAgICAgQAo4ODg4ODg4OFAgQApvb29vb29vb29vQAogICAgICAgICAgQEAKODg4OGJhLjg4YmEgIEAKODggIGA4YiAgYDhiIEAKODggICA4OCAgIDg4IEAKODggICA4OCAgIDg4IEAKODggICA4OCAgIDg4IEAKZFAgICBkUCAgIGRQIEAKb29vb29vb29vb29vb0AKICAgICAgICAgICAgIEBACjg4ODg4OGJhICBACjg4ICAgIGA4YiBACjg4ICAgICA4OCBACjg4ICAgICA4OCBACjg4ICAgICA4OCBACmRQICAgICBkUCBACm9vb29vb29vb29ACiAgICAgICAgICBAQAogLjg4ODg4LiAgQApkOCcgICBgOGIgQAo4OCAgICAgODggQAo4OCAgICAgODggQApZOC4gICAuOFAgQAogYDg4ODhQJyAgQApvb29vb29vb29vQAogICAgICAgICAgQEAKIDg4ODg4OGJhICBACiA4OCAgICBgOGIgQAphODhhYWFhOFAnIEAKIDg4ICAgICAgICBACiA4OCAgICAgICAgQAogZFAgICAgICAgIEAKb29vb29vb29vb29ACiAgICAgICAgICAgQEAKIC44ODg4OC4gICBACmQ4JyAgIGA4YiAgQAo4OCAgICAgODggIEAKODggIGRiIDg4ICBAClk4LiAgWTg4UCAgQAogYDg4ODhQWThiIEAKb29vb29vb29vb29ACiAgICAgICAgICAgQEAKIDg4ODg4OGJhICBACiA4OCAgICBgOGIgQAphODhhYWFhOFAnIEAKIDg4ICAgYDhiLiBACiA4OCAgICAgODggQAogZFAgICAgIGRQIEAKb29vb29vb29vb29ACiAgICAgICAgICAgQEAKLmQ4ODg4OGIgIEAKODguICAgICInIEAKYFk4ODg4OGIuIEAKICAgICAgYDhiIEAKZDgnICAgLjhQIEAKIFk4ODg4OFAgIEAKb29vb29vb29vb0AKICAgICAgICAgIEBACmQ4ODg4ODhQIEAKICAgODggICAgQAogICA4OCAgICBACiAgIDg4ICAgIEAKICAgODggICAgQAogICBkUCAgICBACm9vb29vb29vb0AKICAgICAgICAgQEAKZFAgICAgIGRQIEAKODggICAgIDg4IEAKODggICAgIDg4IEAKODggICAgIDg4IEAKWTguICAgLjhQIEAKYFk4ODg4OFAnIEAKb29vb29vb29vb0AKICAgICAgICAgIEBACmRQICAgICBkUCBACjg4ICAgICA4OCBACjg4ICAgIC44UCBACjg4ICAgIGQ4JyBACjg4ICAuZDhQICBACjg4ODg4OCcgICBACm9vb29vb29vb29ACiAgICAgICAgICBAQApkUCAgIGRQICAgZFAgQAo4OCAgIDg4ICAgODggQAo4OCAgLjhQICAuOFAgQAo4OCAgZDgnICBkOCcgQAo4OC5kOFA4LmQ4UCAgQAo4ODg4JyBZODgnICAgQApvb29vb29vb29vb29vQAogICAgICAgICAgICAgQEAKZFAgICAgZFAgQApZOC4gIC44UCBACiBZOGFhOFAgIEAKZDgnICBgOGIgQAo4OCAgICA4OCBACmRQICAgIGRQIEAKb29vb29vb29vQAogICAgICAgICBAQApkUCAgICBkUCBAClk4LiAgLjhQIEAKIFk4YWE4UCAgQAogICA4OCAgICBACiAgIDg4ICAgIEAKICAgZFAgICAgQApvb29vb29vb29ACiAgICAgICAgIEBACmQ4ODg4ODg4UCBACiAgICAgLmQ4JyBACiAgIC5kOCcgICBACiAuZDgnICAgICBACmQ4JyAgICAgICBAClk4ODg4ODg4UCBACm9vb29vb29vb29ACiAgICAgICAgICBAQAo4ODg4UCBACjg4ICAgIEAKODggICAgQAo4OCAgICBACjg4ICAgIEAKODg4ODggQApvb29vb29ACiAgICAgIEBAClliICAgICAgQApgWWIgICAgIEAKIGBZYiAgICBACiAgYFliICAgQAogICBgWWIgIEAKICAgICA4OCBACm9vb29vb29vQAogICAgICAgIEBACmQ4ODg4IEAKICAgODggQAogICA4OCBACiAgIDg4IEAKICAgODggQAo4ODg4OCBACm9vb29vb0AKICAgICAgQEAKICAgZGIgICAgQAogZDgnYDhiICBACmAiICAgICInIEAKICAgICAgICAgQAogICAgICAgICBACiAgICAgICAgIEAKb29vb29vb29vQAogICAgICAgICBAQAogICAgICAgICAgICAgQAogICAgICAgICAgICAgQAogICAgICAgICAgICAgQAogICAgICAgICAgICAgQAogICAgICAgICAgICAgQAogICAgICAgICAgICAgQAogdnZ2dnZ2dnZ2dnYgQAogIiIiIiIiIiIiIiIgQEAKZFAgQAo4OCBAClkuIEAKICAgQAogICBACiAgIEAKb29vQAogICBAQAogICAgICAgICBACiAgICAgICAgIEAKLmQ4ODg4Yi4gQAo4OCcgIGA4OCBACjg4LiAgLjg4IEAKYDg4ODg4UDggQApvb29vb29vb29ACiAgICAgICAgIEBACmRQICAgICAgIEAKODggICAgICAgQAo4OGQ4ODhiLiBACjg4JyAgYDg4IEAKODguICAuODggQAo4OFk4ODg4JyBACm9vb29vb29vb0AKICAgICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACi5kODg4OGIuIEAKODgnICBgIiIgQAo4OC4gIC4uLiBACmA4ODg4OFAnIEAKb29vb29vb29vQAogICAgICAgICBAQAogICAgICBkUCBACiAgICAgIDg4IEAKLmQ4ODhiODggQAo4OCcgIGA4OCBACjg4LiAgLjg4IEAKYDg4ODg4UDggQApvb29vb29vb29ACiAgICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQAouZDg4ODhiLiBACjg4b29vb2Q4IEAKODguICAuLi4gQApgODg4ODhQJyBACm9vb29vb29vb0AKICAgICAgICAgQEAKLjg4ODhiIEAKODggICAiIEAKODhhYWEgIEAKODggICAgIEAKODggICAgIEAKZFAgICAgIEAKb29vb29vb0AKICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQAouZDg4ODhiLiBACjg4JyAgYDg4IEAKODguICAuODggQApgODg4OFA4OCBACm9+fn5+Ljg4fkAKIGQ4ODg4UCAgQEAKZFAgICAgICAgQAo4OCAgICAgICBACjg4ZDg4OGIuIEAKODgnICBgODggQAo4OCAgICA4OCBACmRQICAgIGRQIEAKb29vb29vb29vQAogICAgICAgICBAQApvbyBACiAgIEAKZFAgQAo4OCBACjg4IEAKZFAgQApvb29ACiAgIEBACm9vIEAKICAgQApkUCBACjg4IEAKODggQAo4OCBACjg4fkAKZFAgQEAKZFAgICAgICAgQAo4OCAgICAgICBACjg4ICAuZFAgIEAKODg4ODgiICAgQAo4OCAgYDhiLiBACmRQICAgYFlQIEAKb29vb29vb29vQAogICAgICAgICBAQApkUCBACjg4IEAKODggQAo4OCBACjg4IEAKZFAgQApvb29ACiAgIEBACiAgICAgICAgICAgQAogICAgICAgICAgIEAKODhkOGIuZDhiLiBACjg4J2A4OCdgODggQAo4OCAgODggIDg4IEAKZFAgIGRQICBkUCBACm9vb29vb29vb29vQAogICAgICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQAo4OGQ4ODhiLiBACjg4JyAgYDg4IEAKODggICAgODggQApkUCAgICBkUCBACm9vb29vb29vb0AKICAgICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACi5kODg4OGIuIEAKODgnICBgODggQAo4OC4gIC44OCBACmA4ODg4OFAnIEAKb29vb29vb29vQAogICAgICAgICBAQAogICAgICAgICAgQAogICAgICAgICAgQAogODhkODg4Yi4gQAogODgnICBgODggQAogODguICAuODggQAogODhZODg4UCcgQAp+ODh+b29vb29vQAogZFAgICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACi5kODg4OGIuIEAKODgnICBgODggQAo4OC4gIC44OCBACmA4ODg4UDg4IEAKb29vb29+ODh+QAogICAgICBkUCBAQAogICAgICAgICBACiAgICAgICAgIEAKODhkODg4Yi4gQAo4OCcgIGA4OCBACjg4ICAgICAgIEAKZFAgICAgICAgQApvb29vb29vb29ACiAgICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQAouZDg4ODhiLiBAClk4b29vb28uIEAKICAgICAgODggQApgODg4ODhQJyBACm9vb29vb29vb0AKICAgICAgICAgQEAKICBkUCAgIEAKICA4OCAgIEAKZDg4ODhQIEAKICA4OCAgIEAKICA4OCAgIEAKICBkUCAgIEAKb29vb29vb0AKICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQApkUCAgICBkUCBACjg4ICAgIDg4IEAKODguICAuODggQApgODg4ODhQJyBACm9vb29vb29vb0AKICAgICAgICAgQEAKICAgICAgICAgQAogICAgICAgICBACmRQICAgLmRQIEAKODggICBkOCcgQAo4OCAuODgnICBACjg4ODhQJyAgIEAKb29vb29vb29vQAogICAgICAgICBAQAogICAgICAgICAgIEAKICAgICAgICAgICBACmRQICBkUCAgZFAgQAo4OCAgODggIDg4IEAKODguODhiLjg4JyBACjg4ODhQIFk4UCAgQApvb29vb29vb29vb0AKICAgICAgICAgICBAQAogICAgICAgICBACiAgICAgICAgIEAKZFAuICAuZFAgQAogYDhiZDgnICBACiAuZDg4Yi4gIEAKZFAnICBgZFAgQApvb29vb29vb29ACiAgICAgICAgIEBACiAgICAgICAgIEAKICAgICAgICAgQApkUCAgICBkUCBACjg4ICAgIDg4IEAKODguICAuODggQApgODg4OFA4OCBACm9+fn5+Ljg4fkAKIGQ4ODg4UCAgQEAKICAgICAgICAgQAogICAgICAgICBACmQ4ODg4ODhiIEAKICAgLmQ4UCcgQAogLlk4UCAgICBACmQ4ODg4ODhQIEAKb29vb29vb29vQAogICAgICAgICBAQAogIC5kODhQIEAKICA4OiAgICBACi5vWTguICAgQAogIGQ4ICAgIEAKICA4OiAgICBACiAgYFk4OGIgQApvb29vb29vb0AKICAgICAgICBAQApkUCBACjg4IEAKIicgQApkUCBACjg4IEAKIicgQApvb29ACiAgIEBACmQ4OGIuICAgQAogICA6OCAgIEAKICAuOFlvLiBACiAgIDhiICAgQAogICA6OCAgIEAKWTg4UCcgICBACm9vb29vb29vQAogICAgICAgIEBACiAub28uICAuZCBACmRQIiAiZDhQICBACiAgICAgICAgICBACiAgICAgICAgICBACiAgICAgICAgICBACiAgICAgICAgICBACm9vb29vb29vb29ACiAgICAgICAgICBAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACg=='
);

export default nancyj_underlined;