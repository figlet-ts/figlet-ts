import { FontFile } from '../../FontFile';

const rozzo = new FontFile(
    'rozzo',
    'ZmxmMmEkIDcgNSAyMCAtMSAyCnJvenpvLmZsZiBmb250IGJ5IE1pa2UgUm9zdWxlayBbdW5hcjJAc2ZhLm9wZS5lZC5nb3ZdIDEvMTIvOTUKVGhpcyB3YXMgYmFzZWQgb24gRnVqaXlhbWFCbGFjayBUcnVlVHlwZSBGb250LgokJCMKJCQjCiQkIwokJCMKJCQjCiQkIwokJCMjCjg4OCQjCjg4OCQjCiI4IiQjCiBlICQjCiI4IiQjCiAgICQjCiAgICQjIwo4IDgkIwo4IDgkIwogICAkIwogICAkIwogICAkIwogICAkIwogICAkIyMKICAgIGQ4UCBkOCIkIwo4ODg4ODg4ODg4OCQjCiAgZDhQIGQ4UCAgJCMKODg4ODg4ODg4ODgkIwplOFAgZDhQICAgICQjCiAgICAgICAgICAgJCMKICAgICAgICAgICAkIyMKICAgOCAgICQjCiBkOCA4ZSAkIwpDODggICAgJCMKIFk4IDhiICQjCiAgICA4OEQkIwogIjggOFAgJCMKICAgOCAgICQjIwosOCwgLyAgJCMKIjgiLyAgICQjCiAgLyAgICAkIwogLyw4LCAgJCMKLyAiOCIgICQjCiAgICAgICAkIwogICAgICAgJCMjCiAgICAgZDhiLCQjCiAgLGRiIFlQJyQjCiBlIFk4YiAgLCQjCmQ4YiBZOGIiICQjClk4OGIgWThiICQjCiAgICAgICAgICQjCiAgICAgICAgICQjIwpkOGIkIwpZOFAkIwosUCAkIwpQICAkIwogICAkIwogICAkIwogICAkIyMKICBlODgkIwogZDg4OCQjCmU4ODg4JCMKODg4ODgkIwoiODg4OCQjCiBZODg4JCMKICAiODgkIyMKODhlICAkIwo4ODhiICQjCjg4ODhlJCMKODg4ODgkIwo4ODg4IiQjCjg4OFAgJCMKODgiICAkIyMKWWIgOCBkUCQjCiBgRDhLJyAkIwpkUCA4IFliJCMKICAgICAgICQjCiAgICAgICAkIwogICAgICAgJCMKICAgICAgICQjIwogICAgICQjCiAgOCAgJCMKODg4ODgkIwogIDggICQjCiAgICAgJCMKICAgICAkIwogICAgICQjIwogICAkIwogICAkIwogICAkIwpkOGIkIwpZOFAkIwosUCAkIwpQICAkIyMKICAgJCMKICAgJCMKODg4JCMKICAgJCMKICAgJCMKICAgJCMKICAgJCMjCiAgICQjCiAgICQjCiAgICQjCmQ4YiQjClk4UCQjCiAgICQjCiAgICQjIwogICAgZDhQJCMKICAgZDhQICQjCiAgZDhQICAkIwogZDhQICAgJCMKZDhQICAgICQjCiAgICAgICAkIwogICAgICAgJCMjCiAgZTg4IDg4ZSAgJCMKIGQ4ODggODg4YiAkIwpDODg4OCA4ODg4RCQjCiBZODg4IDg4OFAgJCMKICAiODggODgiICAkIwogICAgICAgICAgICQjCiAgICAgICAgICAgJCMjCiAgZDg4JCMKIGQ4ODgkIwpkIjg4OCQjCiAgODg4JCMKICA4ODgkIwogICAgICQjCiAgICAgJCMjCiw4LCI4OGUgJCMKICIgIDg4OEQkIwogICAgODhQICQjCiAgICwqIiAgJCMKIDg4ODg4ODgkIwogICAgICAgICQjCiAgICAgICAgJCMjCiw4LCI4OGIsJCMKICIgLDg4UCckIwogICBDOEsgICQjCiBlIGA4OGIsJCMKIjgiLDg4UCckIwogICAgICAgICQjCiAgICAgICAgJCMjCiAgZCA4ODggJCMKIGQ4IDg4OCAkIwpkODggODg4ZSQjCiIiIiA4ODgiJCMKICAgIDg4OCAkIwogICAgICAgICQjCiAgICAgICAgJCMjCjg4ODg4ODgkIwo4OCAgICAgJCMKIiIiWTg4YiQjCiBlICA4ODgkIwoiOCIsODhQJCMKICAgICAgICQjCiAgICAgICAkIyMKICBlODgiLDgsICQjCiBkODg4ICAiICAkIwpDODg4OCA4OGUgJCMKIFk4ODggODg4RCQjCiAgIjg4IDg4IiAkIwogICAgICAgICAgJCMKICAgICAgICAgICQjIwo4ODg4ODgkIwogICAgLGUkIwogICxlUCAkIwosZThQICAkIwo4OFAgICAkIwogICAgICAkIwogICAgICAkIyMKICxkOCA4YiwgJCMKICJZOCA4UCIgJCMKICxkOCA4YiwgJCMKQzg4OCA4ODhEJCMKICJZOCA4UCIgJCMKICAgICAgICAgJCMKICAgICAgICAgJCMjCiBlODggODhlICAkIwpDODg4IDg4OGIgJCMKICI4OCA4ODg4RCQjCiAgZSAgODg4UCAkIwogIjgiLDg4IiAgJCMKICAgICAgICAgICQjCiAgICAgICAgICAkIyMKZDhiJCMKWThQJCMKICAgJCMKZDhiJCMKWThQJCMKICAgJCMKICAgJCMjCmQ4YiQjClk4UCQjCiAgICQjCmQ4YiQjClk4UCQjCixQICQjClAgICQjIwogIGQ4UCQjCiBkOFAgJCMKQzhLICAkIwogWThiICQjCiAgWThiJCMKICAgICAkIwogICAgICQjIwogICAgICAgJCMKODg4ODg4OCQjCiAgICAgICAkIwo4ODg4ODg4JCMKICAgICAgICQjCiAgICAgICAkIwogICAgICAgJCMjClk4YiAgJCMKIFk4YiAkIwogIEQ4RCQjCiBkOFAgJCMKZDhQICAkIwogICAgICQjCiAgICAgJCMjCiw4LCc4OGIgJCMKICIgIDg4OEQkIwogICAgODhQICQjCiAgICwiJyAgJCMKICAiOCIgICAkIwogICAgICAgICQjCiAgICAgICAgJCMjCiAsZSIiIiJlLCAkIwplIiBlIiIiZSJlJCMKOCBDICAgIDggOCQjCiJlICIqZWUiKiIkIwogYCJlZWVlZSIgJCMKICAgICAgICAgICQjCiAgICAgICAgICAkIyMKICAgIGUgWThiICAgICQjCiAgIGQ4YiBZOGIgICAkIwogIGQ4ODhiIFk4YiAgJCMKIGQ4ODg4ODg4ODhiICQjCmQ4ODg4ODg4YiBZOGIkIwogICAgICAgICAgICAgJCMKICAgICAgICAgICAgICQjIwo4ODggODhiLCQjCjg4OCA4OFAnJCMKODg4IDhLICAkIwo4ODggODhiLCQjCjg4OCA4OFAnJCMKICAgICAgICAkIwogICAgICAgICQjIwogIGU4OCdZODgkIwogZDg4OCAgJ1kkIwpDODg4OCAgICAkIwogWTg4OCAgLGQkIwogICI4OCxkODgkIwogICAgICAgICAkIwogICAgICAgICAkIyMKODg4IDg4ZSAgJCMKODg4IDg4OGIgJCMKODg4IDg4ODhEJCMKODg4IDg4OFAgJCMKODg4IDg4IiAgJCMKICAgICAgICAgJCMKICAgICAgICAgJCMjCjg4OCdZODgkIwo4ODggLCdZJCMKODg4QzggICQjCjg4OCAiLGQkIwo4ODgsZDg4JCMKICAgICAgICQjCiAgICAgICAkIyMKODg4J1k4OCQjCjg4OCAsJ1kkIwo4ODhDOCAgJCMKODg4ICIgICQjCjg4OCAgICAkIwogICAgICAgJCMKICAgICAgICQjIwogIGU4OCdZODggJCMKIGQ4ODggICdZICQjCkM4ODg4IGVlZWUkIwogWTg4OCA4ODhQJCMKICAiODggODgiICQjCiAgICAgICAgICAkIwogICAgICAgICAgJCMjCjg4OCA4ODgkIwo4ODggODg4JCMKODg4ODg4OCQjCjg4OCA4ODgkIwo4ODggODg4JCMKICAgICAgICQjCiAgICAgICAkIyMKODg4JCMKODg4JCMKODg4JCMKODg4JCMKODg4JCMKICAgJCMKICAgJCMjCiAgICA4ODgkIwogICAgODg4JCMKICAgIDg4OCQjCiBlICA4OFAkIwoiOCIsUCcgJCMKICAgICAgICQjCiAgICAgICAkIyMKODg4IDg4UCQjCjg4OCA4UCAkIwo4ODggSyAgJCMKODg4IDhiICQjCjg4OCA4OGIkIwogICAgICAgJCMKICAgICAgICQjIwo4ODggICAgJCMKODg4ICAgICQjCjg4OCAgICAkIwo4ODggICxkJCMKODg4LGQ4OCQjCiAgICAgICAkIwogICAgICAgJCMjCiAgICBlICAgZSAgICAkIwogICBkOGIgZDhiICAgJCMKICBlIFk4YiBZOGIgICQjCiBkOGIgWThiIFk4YiAkIwpkODg4YiBZOGIgWThiJCMKICAgICAgICAgICAgICQjCiAgICAgICAgICAgICAkIyMKWTg4YiBZODgkIwogWTg4YiBZOCQjCmIgWTg4YiBZJCMKOGIgWTg4YiAkIwo4OGIgWTg4YiQjCiAgICAgICAgJCMKICAgICAgICAkIyMKICBlODggODhlICAkIwogZDg4OCA4ODhiICQjCkM4ODg4IDg4ODhEJCMKIFk4ODggODg4UCAkIwogICI4OCA4OCIgICQjCiAgICAgICAgICAgJCMKICAgICAgICAgICAkIyMKODg4IDg4ZSAkIwo4ODggODg4RCQjCjg4OCA4OCIgJCMKODg4ICAgICAkIwo4ODggICAgICQjCiAgICAgICAgJCMKICAgICAgICAkIyMKICBlODggODhlICAkIwogZDg4OCA4ODhiICQjCkM4ODg4IDg4ODhEJCMKIFk4ODggODg4UCAkIwogICI4OCA4OCIgICQjCiAgICAgIGIgICAgJCMKICAgICAgOGIsICAkIyMKODg4IDg4ZSAkIwo4ODggODg4RCQjCjg4OCA4OCIgJCMKODg4IGIsICAkIwo4ODggODhiLCQjCiAgICAgICAgJCMKICAgICAgICAkIyMKIGRQIjgkIwpDOGIgWSQjCiBZOGIgJCMKYiBZOEQkIwo4ZWRQICQjCiAgICAgJCMKICAgICAkIyMKODhQJzg4OCdZODgkIwpQJyAgODg4ICAnWSQjCiAgICA4ODggICAgJCMKICAgIDg4OCAgICAkIwogICAgODg4ICAgICQjCiAgICAgICAgICAgJCMKICAgICAgICAgICAkIyMKODg4OCA4ODg4JCMKODg4OCA4ODg4JCMKODg4OCA4ODg4JCMKODg4OCA4ODg4JCMKJ1k4OCA4OFAnJCMKICAgICAgICAgJCMKICAgICAgICAgJCMjClk4YiBZODg4ODhQJCMKIFk4YiBZODg4UCAkIwogIFk4YiBZOFAgICQjCiAgIFk4YiBZICAgJCMKICAgIFk4UCAgICAkIwogICAgICAgICAgICQjCiAgICAgICAgICAgJCMjClk4YiBZOGIgWTg4OFAkIwogWThiIFk4YiBZOFAgJCMKICBZOGIgWThiIFkgICQjCiAgIFk4YiBZOGIgICAkIwogICAgWThQIFkgICAgJCMKICAgICAgICAgICAgICQjCiAgICAgICAgICAgICAkIyMKWThiIFk4UCQjCiBZOGIgWSAkIwogIFk4YiAgJCMKIGUgWThiICQjCmQ4YiBZOGIkIwogICAgICAgJCMKICAgICAgICQjIwpZODhiIFk4UCQjCiBZODhiIFkgJCMKICBZODhiICAkIwogICA4ODggICQjCiAgIDg4OCAgJCMKICAgICAgICAkIwogICAgICAgICQjIwogOFAgZDhQJCMKIFAgZDhQICQjCiAgZDhQIGQkIwogZDhQIGQ4JCMKZDhQIGQ4OCQjCiAgICAgICAkIwogICAgICAgJCMjCjg4ODgkIwo4OCAgJCMKODggICQjCjg4ICAkIwo4OCAgJCMKODggICQjCjg4ODgkIyMKICAgIGQ4UCQjCiAgIGQ4UCAkIwogIGQ4UCAgJCMKIGQ4UCAgICQjCmQ4UCAgICAkIwogICAgICAgJCMKICAgICAgICQjIwo4ODg4JCMKICA4OCQjCiAgODgkIwogIDg4JCMKICA4OCQjCiAgODgkIwo4ODg4JCMjCiBkOGIgJCMKZFAgWWIkIwogICAgICQjCiAgICAgJCMKICAgICAkIwogICAgICQjCiAgICAgJCMjCiAgICQjCiAgICQjCiAgICQjCiAgICQjCiAgICQjCjg4OCQjCiAgICQjIwpZODgkIwogWTgkIwogIFkkIwogICAkIwogICAkIwogICAkIwogICAkIyMKICAgICAgICQjCiAsIlk4OGIkIwoiOCIgODg4JCMKLGVlIDg4OCQjCiI4OCA4ODgkIwogICAgICAgJCMKICAgICAgICQjIwo4ODggICAgICQjCjg4OCA4OGUgJCMKODg4IDg4OGIkIwo4ODggODg4UCQjCjg4OCA4OCIgJCMKICAgICAgICAkIwogICAgICAgICQjIwogICAgICAgICQjCiBlODgnODg4JCMKZDg4OCAgJzgkIwpZODg4ICAgLCQjCiAiODgsZTgnJCMKICAgICAgICAkIwogICAgICAgICQjIwogICAgIDg4OCQjCiBlODggODg4JCMKZDg4OCA4ODgkIwpZODg4IDg4OCQjCiAiODggODg4JCMKICAgICAgICAkIwogICAgICAgICQjIwogICAgICAgJCMKICxlIGUsICQjCmQ4OCA4OGIkIwo4ODggICAsJCMKICJZZWVQIiQjCiAgICAgICAkIwogICAgICAgJCMjCiBkUCxlLCQjCiA4YiAiICQjCjg4ODg4OCQjCiA4ODggICQjCiA4ODggICQjCiAgICAgICQjCiAgICAgICQjIwogICAgICAgICQjCiBlODggODg4JCMKZDg4OCA4ODgkIwpZODg4IDg4OCQjCiAiODggODg4JCMKICAsICA4OFAkIwogIjgiLFAiICQjIwo4ODggICAgJCMKODg4IGVlICQjCjg4OCA4OGIkIwo4ODggODg4JCMKODg4IDg4OCQjCiAgICAgICAkIwogICAgICAgJCMjCixlLCQjCiAiICQjCjg4OCQjCjg4OCQjCjg4OCQjCiAgICQjCiAgICQjIwosZSwkIwogIiAkIwo4ODgkIwo4ODgkIwo4ODgkIwo4OFAkIwo4IiAkIyMKODg4ICAgJCMKODg4IGVlJCMKODg4IFAgJCMKODg4IGIgJCMKODg4IDhiJCMKICAgICAgJCMKICAgICAgJCMjCjg4OCQjCjg4OCQjCjg4OCQjCjg4OCQjCjg4OCQjCiAgICQjCiAgICQjIwogICAgICAgICAgICQjCjg4OCA4ODggOGUgJCMKODg4IDg4OCA4OGIkIwo4ODggODg4IDg4OCQjCjg4OCA4ODggODg4JCMKICAgICAgICAgICAkIwogICAgICAgICAgICQjIwogICAgICAgJCMKODg4IDhlICQjCjg4OCA4OGIkIwo4ODggODg4JCMKODg4IDg4OCQjCiAgICAgICAkIwogICAgICAgJCMjCiAgICAgICAgICQjCiBlODggODhlICQjCmQ4ODggODg4YiQjClk4ODggODg4UCQjCiAiODggODgiICQjCiAgICAgICAgICQjCiAgICAgICAgICQjIwogICAgICAgICQjCjg4OCA4OGUgJCMKODg4IDg4OGIkIwo4ODggODg4UCQjCjg4OCA4OCIgJCMKODg4ICAgICAkIwo4ODggICAgICQjIwogICAgICAgICQjCiBlODggODg4JCMKZDg4OCA4ODgkIwpZODg4IDg4OCQjCiAiODggODg4JCMKICAgICA4ODgkIwogICAgIDg4OCQjIwogICAgICAkIwo4ODgsOCwkIwo4ODggIiAkIwo4ODggICAkIwo4ODggICAkIwogICAgICAkIwogICAgICAkIyMKICAgICAkIwogZFAiWSQjCkM4OGIgJCMKIFk4OEQkIwpkLGRQICQjCiAgICAgJCMKICAgICAkIyMKICBkOCAgJCMKIGQ4OCAgJCMKZDg4ODg4JCMKIDg4OCAgJCMKIDg4OCAgJCMKICAgICAgJCMKICAgICAgJCMjCiAgICAgICAgICQjCjg4ODggODg4OCQjCjg4ODggODg4OCQjClk4ODggODg4UCQjCiAiODggODgiICQjCiAgICAgICAgICQjCiAgICAgICAgICQjIwogICAgICAgICAkIwpZOGIgWTg4OFAkIwogWThiIFk4UCAkIwogIFk4YiAiICAkIwogICBZOFAgICAkIwogICAgICAgICAkIwogICAgICAgICAkIyMKICAgICAgICAgICAgICQjClk4YiBZOGIgWTg4OFAkIwogWThiIFk4YiBZOFAgJCMKICBZOGIgWThiICIgICQjCiAgIFlQICBZOFAgICAkIwogICAgICAgICAgICAgJCMKICAgICAgICAgICAgICQjIwogICAgICAgICQjCiBZOGIgWThZJCMKICBZOGIgWSAkIwogZSBZOGIgICQjCmQ4YiBZOGIgJCMKICAgICAgICAkIwogICAgICAgICQjIwogICAgICAgICAkIwpZOGIgWTg4OFAkIwogWThiIFk4UCAkIwogIFk4YiBZICAkIwogICA4ODggICAkIwogICA4ODggICAkIwogICA4ODggICAkIyMKICAgICAgJCMKOFAgZDhQJCMKUCBkOFAgJCMKIGQ4UCBkJCMKZDhQIGQ4JCMKICAgICAgJCMKICAgICAgJCMjCiAgLDg4OCQjCiAgODggICQjCiBlOFAgICQjCkM4SyAgICQjCiAiOGIgICQjCiAgODggICQjCiAgIjg4OCQjIwo4OCQjCjg4JCMKODgkIwo4OCQjCjg4JCMKODgkIwo4OCQjIwo4ODgsICAkIwogIDg4ICAkIwogIFk4ICAkIwogICBEOEQkIwogIGQ4ICAkIwogIDg4ICAkIwo4ODgiICAkIyMKLGQ4YixkOCQjCjhQIlk4UCIkIwogICAgICAgJCMKICAgICAgICQjCiAgICAgICAkIwogICAgICAgJCMKICAgICAgICQjIwogZSAgZSBZOGIgIGUgJCMKIjgiZDhiIFk4YiI4IiQjCiAgZDg4OGIgWThiICAkIwogZDg4ODg4ODg4OGIgJCMKZDg4ODg4ODhiIFk4YiQjCiAgICAgICAgICAgICAkIwogICAgICAgICAgICAgJCMjCiBlICBlODggODhlICBlICQjCiI4ImQ4ODggODg4YiI4IiQjCiAgQzg4ODggODg4OEQgICQjCiAgIFk4ODggODg4UCAgICQjCiAgICAiODggODgiICAgICQjCiAgICAgICAgICAgICAgICQjCiAgICAgICAgICAgICAgICQjIwogZSAgODg4OCA4ODg4ICBlICQjCiI4IiA4ODg4IDg4ODggIjgiJCMKICAgIDg4ODggODg4OCAgICAkIwogICAgWTg4OCA4ODhQICAgICQjCiAgICAgIjg4IDg4IiAgICAgJCMKICAgICAgICAgICAgICAgICAkIwogICAgICAgICAgICAgICAgICQjIwogZSAgICAgICAgZSAkIwoiOCIsIlk4OGIiOCIkIwogICI4IiA4ODggICAkIwogICxlZSA4ODggICAkIwogICI4OCA4ODggICAkIwogICAgICAgICAgICAkIwogICAgICAgICAgICAkIyMKICAgICAgICAgICAgICAgJCMKIGUgIGU4OCA4OGUgIGUgJCMKIjgiZDg4OCA4ODhiIjgiJCMKICAgWTg4OCA4ODhQICAgJCMKICAgICI4OCA4OCIgICAgJCMKICAgICAgICAgICAgICAgJCMKICAgICAgICAgICAgICAgJCMjCiBlICAgICAgICAgICBlICQjCiI4Ijg4ODggODg4OCI4IiQjCiAgIDg4ODggODg4OCAgICQjCiAgIFk4ODggODg4UCAgICQjCiAgICAiODggODgiICAgICQjCiAgICAgICAgICAgICAgICQjCiAgICAgICAgICAgICAgICQjIwogICAgICQjCiBkUCJZJCMKQzg4YiAkIwogWTg4RCQjCmQsZFAgJCMKICAgICAkIwogICAgICQjIwo='
);

export default rozzo;
