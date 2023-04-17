import { FontFile } from '../../FontFile';

const basic = new FontFile(
    'basic',
    'ZmxmMmEkIDggOCAxNyAtMSAyCmJhc2ljLmZsZiBieSBDcmFpZyBPJ0ZsYWhlcnR5IDxjb2ZsQGl0Lm50dS5lZHUuYXU+CkF1Z3VzdCAxNywgMTk5NAokJEAKJCRACiQkQAokJEAKJCRACiQkQAokJEAKJCRAQApkYiRACjg4JEAKWVAkQAogICRACmRiJEAKWVAkQAogICRACiAgJEBACi5vLiAuby4kQApgOCcgYDgnJEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEBACiAgICAgICAkQAogZGIgZGIgJEAKQzg4ODg4RCRACiA4OCA4OCAkQApDODg4ODhEJEAKIFlQIFlQICRACiAgICAgICAkQAogICAgICAgJEBACiAgIEEgICAkQAouZDg4ODguJEAKODgnOCBZUCRACmA4YjguICAkQAogIGBWOGIuJEAKZGIgOCA4RCRACmA4ODg4WSckQAogICBWICAgJEBACmRiICAgZEQkQApZUCAgZDgnJEAKICAgZDgnICRACiAgZDgnICAkQAogZDgnIGRiJEAKZDgnICBZUCRACiAgICAgICAkQAogICAgICAgJEBACi5kODg4Yi4gJEAKOFAgICA4RCAkQApgVmIgZDgnICRACiBkODhDIGREJEAKQzgnIGQ4RCAkQApgODg4UCBZYiRACiAgICAgICAgJEAKICAgICAgICAkQEAKQ2IkQApgRCRACiAnJEAKICAkQAogICRACiAgJEAKICAkQAogICRAQAogICAgZEQkQAogIGQ4JyAkQAogZDggICAkQApDODggICAkQAogVjggICAkQAogIFY4LiAkQAogICAgVkQkQAogICAgICAkQEAKQ2IgICAgJEAKIGA4YiAgJEAKICAgOGIgJEAKICAgODhEJEAKICAgOFAgJEAKIC44UCAgJEAKQ1AgICAgJEAKICAgICAgJEBACiAgICAgICAkQAo4LiBBIC44JEAKYDguOC44JyRACiAgODg4ICAkQAouZCc4YGIuJEAKOCcgViBgOCRACiAgICAgICAkQAogICAgICAgJEBACiAgICAgICRACiAgZGIgICRACiAgODggICRACkM4ODg4RCRACiAgODggICRACiAgVlAgICRACiAgICAgICRACiAgICAgICRAQAogICRACiAgJEAKICAkQAogICRACmRiJEAKVjgkQAogUCRACiAgJEBACiAgICAgICRACiAgICAgICRACiAgICAgICRACkM4ODg4RCRACiAgICAgICRACiAgICAgICRACiAgICAgICRACiAgICAgICRAQAogICRACiAgJEAKICAkQAogICRACmRiJEAKVlAkQAogICRACiAgJEBACiAgICAgZEQkQAogICAgZDgnJEAKICAgZDgnICRACiAgZDgnICAkQAogZDgnICAgJEAKQzgnICAgICRACiAgICAgICAkQAogICAgICAgJEBACiAuZDg4Yi4gJEAKLjhQICA4OC4kQAo4OCAgZCc4OCRACjg4IGQnIDg4JEAKYDg4ICBkOCckQAogYFk4OFAnICRACiAgICAgICAgJEAKICAgICAgICAkQEAKIGRiJEAKbzg4JEAKIDg4JEAKIDg4JEAKIDg4JEAKIFZQJEAKICAgJEAKICAgJEBACi5kODg4Yi4kQApWUCAgYDhEJEAKICAgb2REJyRACiAuODgnICAkQApqODguICAgJEAKODg4ODg4RCRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4Yi4kQApWUCAgYDhEJEAKICBvb29ZJyRACiAgfn5+Yi4kQApkYiAgIDhEJEAKWTg4ODhQJyRACiAgICAgICAkQAogICAgICAgJEBACiAgajg4RCAkQAogajh+ODggJEAKajgnIDg4ICRAClY4ODg4OEQkQAogICAgODggJEAKICAgIFZQICRACiAgICAgICAkQAogICAgICAgJEBACiAgb29vb28kQAogOFB+fn5+JEAKZFAgICAgICRAClY4ODg4Yi4kQAogICAgYDhEJEAKODhvb2JZJyRACiAgICAgICAkQAogICAgICAgJEBACiAgIGREICAkQAogIGQ4JyAgJEAKIGQ4JyAgICRACmQ4ODg4Yi4kQAo4OCcgYDhEJEAKYDg4ODhQICRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4OEQkQApWUCAgZDgnJEAKICAgZDgnICRACiAgZDgnICAkQAogZDgnICAgJEAKZDgnICAgICRACiAgICAgICAkQAogICAgICAgJEBACi5kODg4Yi4kQAo4OCAgIDhEJEAKYFZvb29ZJyRACi5kfn5+Yi4kQAo4OCAgIDhEJEAKYFk4ODhQJyRACiAgICAgICAkQAogICAgICAgJEBACi5kODg4Yi4kQAo4OCcgYDhEJEAKYFY4bzg4JyRACiAgIGQ4JyAkQAogIGQ4JyAgJEAKIGQ4JyAgICRACiAgICAgICAkQAogICAgICAgJEBACiAgJEAKZGIkQApWUCRACiAgJEAKZGIkQApWUCRACiAgJEAKICAkQEAKICAkQApkYiRAClZQJEAKICAkQApkYiRAClY4JEAKIFAkQAogICRAQAogICAgICAkQAogICAuZFAkQAogLmQ4ICAkQAosUCAgICAkQApgYiAgICAkQAogYFZiICAkQAogICBgVmIkQAogICAgICAkQEAKICAgICAgJEAKQzg4ODhEJEAKICAgICAgJEAKQzg4ODhEJEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEAKICAgICAgJEBACiAgICAgICRAClZiICAgICRACiBgVmIgICRACiAgIGBWLiRACiAgIC5kJyRACiAuZFAgICRACmRQICAgICRACiAgICAgICRAQAouZDg4OGIuJEAKVlAgIGA4RCRACiAgIG9kRCckQAogIDhQJyAgJEAKICBvbyAgICRACiAgVlAgICAkQAogICAgICAgJEAKICAgICAgICRAQAogLm84ODhiLiRACmQ4JyAgIFk4JEAKOFAgZGIgZFAkQAo4YiBWOG84UCRAClk4LiAgICBkJEAKIGBZODg4UCckQAogICAgICAgICRACiAgICAgICAgJEBACiAuZDhiLiAkQApkOCcgYDhiJEAKODhvb284OCRACjg4fn5+ODgkQAo4OCAgIDg4JEAKWVAgICBZUCRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4Yi4kQAo4OCAgYDhEJEAKODhvb29ZJyRACjg4fn5+Yi4kQAo4OCAgIDhEJEAKWTg4ODhQJyRACiAgICAgICAkQAogICAgICAgJEBACiAubzg4Yi4kQApkOFAgIFk4JEAKOFAgICAgICRACjhiICAgICAkQApZOGIgIGQ4JEAKIGBZODhQJyRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4Yi4kQAo4OCAgYDhEJEAKODggICA4OCRACjg4ICAgODgkQAo4OCAgLjhEJEAKWTg4ODhEJyRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4OGIkQAo4OCcgICAgJEAKODhvb29vbyRACjg4fn5+fn4kQAo4OC4gICAgJEAKWTg4ODg4UCRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4OGIkQAo4OCcgICAgJEAKODhvb28gICRACjg4fn5+ICAkQAo4OCAgICAgJEAKWVAgICAgICRACiAgICAgICAkQAogICAgICAgJEBACiBkODg4YiAkQAo4OCcgWThiJEAKODggICAgICRACjg4ICBvb28kQAo4OC4gfjh+JEAKIFk4ODhQICRACiAgICAgICAkQAogICAgICAgJEBACmRiICAgZGIkQAo4OCAgIDg4JEAKODhvb284OCRACjg4fn5+ODgkQAo4OCAgIDg4JEAKWVAgICBZUCRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4ODhiJEAKICBgODgnICAkQAogICA4OCAgICRACiAgIDg4ICAgJEAKICAuODguICAkQApZODg4ODg4UCRACiAgICAgICAgJEAKICAgICAgICAkQEAKICAgZDg4YiRACiAgIGA4UCckQAogICAgODggJEAKICAgIDg4ICRACmRiLiA4OCAkQApZODg4OFAgJEAKICAgICAgICRACiAgICAgICAkQEAKZGIgICBkRCRACjg4ICw4UCckQAo4OCw4UCAgJEAKODhgOGIgICRACjg4IGA4OC4kQApZUCAgIFlEJEAKICAgICAgICRACiAgICAgICAkQEAKZGIgICAgICRACjg4ICAgICAkQAo4OCAgICAgJEAKODggICAgICRACjg4Ym9vby4kQApZODg4ODhQJEAKICAgICAgICRACiAgICAgICAkQEAKLjg4YiAgZDg4LiRACjg4J1liZFBgODgkQAo4OCAgODggIDg4JEAKODggIDg4ICA4OCRACjg4ICA4OCAgODgkQApZUCAgWVAgIFlQJEAKICAgICAgICAgICRACiAgICAgICAgICAkQEAKZDhiICAgZGIkQAo4ODhvICA4OCRACjg4VjhvIDg4JEAKODggVjhvODgkQAo4OCAgVjg4OCRAClZQICAgVjhQJEAKICAgICAgICAkQAogICAgICAgICRAQAogLmQ4OGIuICRACi44UCAgWTguJEAKODggICAgODgkQAo4OCAgICA4OCRACmA4YiAgZDgnJEAKIGBZODhQJyAkQAogICAgICAgICRACiAgICAgICAgJEBACmQ4ODg4Yi4kQAo4OCAgYDhEJEAKODhvb2REJyRACjg4fn5+ICAkQAo4OCAgICAgJEAKODggICAgICRACiAgICAgICAkQAogICAgICAgJEBACiAuZDg4Yi4gJEAKLjhQICBZOC4kQAo4OCAgICA4OCRACjg4ICAgIDg4JEAKYDhQICBkOCckQAogYFk4OCdZOCRACiAgICAgICAgJEAKICAgICAgICAkQEAKZDg4ODhiLiRACjg4ICBgOEQkQAo4OG9vYlknJEAKODhgOGIgICRACjg4IGA4OC4kQAo4OCAgIFlEJEAKICAgICAgICRACiAgICAgICAkQEAKLmQ4ODg4LiRACjg4JyAgWVAkQApgOGJvLiAgJEAKICBgWThiLiRACmRiICAgOEQkQApgODg4OFknJEAKICAgICAgICRACiAgICAgICAkQEAKZDg4ODg4OGIkQApgfn44OH5+JyRACiAgIDg4ICAgJEAKICAgODggICAkQAogICA4OCAgICRACiAgIFlQICAgJEAKICAgICAgICAkQAogICAgICAgICRAQApkYiAgICBkYiRACjg4ICAgIDg4JEAKODggICAgODgkQAo4OCAgICA4OCRACjg4YiAgZDg4JEAKflk4ODg4UCckQAogICAgICAgICRACiAgICAgICAgJEBACmRiICAgIGRiJEAKODggICAgODgkQApZOCAgICA4UCRACmA4YiAgZDgnJEAKIGA4YmQ4JyAkQAogICBZUCAgICRACiAgICAgICAgJEAKICAgICAgICAkQEAKZGIgICBkOGIgICBkYiRACjg4ICAgSThJICAgODgkQAo4OCAgIEk4SSAgIDg4JEAKWTggICBJOEkgICA4OCRACmA4YiBkOCc4YiBkOCckQAogYDhiOCcgYDhkOCcgJEAKICAgICAgICAgICAgICRACiAgICAgICAgICAgICAkQEAKZGIgICAgZGIkQApgOGIgIGQ4JyRACiBgOGJkOCcgJEAKIC5kUFliLiAkQAouOFAgIFk4LiRACllQICAgIFlQJEAKICAgICAgICAkQAogICAgICAgICRAQApkYiAgICBkYiRACmA4YiAgZDgnJEAKIGA4YmQ4JyAkQAogICA4OCAgICRACiAgIDg4ICAgJEAKICAgWVAgICAkQAogICAgICAgICRACiAgICAgICAgJEBACmQ4ODg4OEQkQApZUCAgZDgnJEAKICAgZDgnICRACiAgZDgnICAkQAogZDgnIGRiJEAKZDg4ODg4UCRACiAgICAgICAkQAogICAgICAgJEBACmQ4OEQkQAo4OCAgJEAKODggICRACjg4ICAkQAo4OCAgJEAKTDg4RCRACiAgICAkQAogICAgJEBACkNiICAgICAkQApgOGIgICAgJEAKIGA4YiAgICRACiAgYDhiICAkQAogICBgOGIgJEAKICAgIGA4RCRACiAgICAgICAkQAogICAgICAgJEBACkM4OEQkQAogIDg4JEAKICA4OCRACiAgODgkQAogIDg4JEAKQzg4OCRACiAgICAkQAogICAgJEBACiAgIGRiICAgJEAKIC5kUFZiLiAkQApkUCcgIGBWYiRACiAgICAgICAgJEAKICAgICAgICAkQAogICAgICAgICRACiAgICAgICAgJEAKICAgICAgICAkQEAKICAgICAgICRACiAgICAgICAkQAogICAgICAgJEAKICAgICAgICRACiAgICAgICAkQApDODg4ODhEJEAKICAgICAgICRACiAgICAgICAkQEAKZEQkQApDJyRACiBgJEAKICAkQAogICRACiAgJEAKICAkQAogICRAQAogLmQ4Yi4gJEAKZDgnIGA4YiRACjg4b29vODgkQAo4OH5+fjg4JEAKODggICA4OCRACllQICAgWVAkQAogICAgICAgJEAKICAgICAgICRAQApkODg4OGIuJEAKODggIGA4RCRACjg4b29vWSckQAo4OH5+fmIuJEAKODggICA4RCRAClk4ODg4UCckQAogICAgICAgJEAKICAgICAgICRAQAogLm84OGIuJEAKZDhQICBZOCRACjhQICAgICAkQAo4YiAgICAgJEAKWThiICBkOCRACiBgWTg4UCckQAogICAgICAgJEAKICAgICAgICRAQApkODg4OGIuJEAKODggIGA4RCRACjg4ICAgODgkQAo4OCAgIDg4JEAKODggIC44RCRAClk4ODg4RCckQAogICAgICAgJEAKICAgICAgICRAQApkODg4ODhiJEAKODgnICAgICRACjg4b29vb28kQAo4OH5+fn5+JEAKODguICAgICRAClk4ODg4OFAkQAogICAgICAgJEAKICAgICAgICRAQApkODg4ODhiJEAKODgnICAgICRACjg4b29vICAkQAo4OH5+fiAgJEAKODggICAgICRACllQICAgICAkQAogICAgICAgJEAKICAgICAgICRAQAogZDg4OGIgJEAKODgnIFk4YiRACjg4ICAgICAkQAo4OCAgb29vJEAKODguIH44fiRACiBZODg4UCAkQAogICAgICAgJEAKICAgICAgICRAQApkYiAgIGRiJEAKODggICA4OCRACjg4b29vODgkQAo4OH5+fjg4JEAKODggICA4OCRACllQICAgWVAkQAogICAgICAgJEAKICAgICAgICRAQApkODg4ODg4YiRACiAgYDg4JyAgJEAKICAgODggICAkQAogICA4OCAgICRACiAgLjg4LiAgJEAKWTg4ODg4OFAkQAogICAgICAgICRACiAgICAgICAgJEBACiAgIGQ4OGIkQAogICBgOFAnJEAKICAgIDg4ICRACiAgICA4OCAkQApkYi4gODggJEAKWTg4ODhQICRACiAgICAgICAkQAogICAgICAgJEBACmRiICAgZEQkQAo4OCAsOFAnJEAKODgsOFAgICRACjg4YDhiICAkQAo4OCBgODguJEAKWVAgICBZRCRACiAgICAgICAkQAogICAgICAgJEBACmRiICAgICAkQAo4OCAgICAgJEAKODggICAgICRACjg4ICAgICAkQAo4OGJvb28uJEAKWTg4ODg4UCRACiAgICAgICAkQAogICAgICAgJEBACi44OGIgIGQ4OC4kQAo4OCdZYmRQYDg4JEAKODggIDg4ICA4OCRACjg4ICA4OCAgODgkQAo4OCAgODggIDg4JEAKWVAgIFlQICBZUCRACiAgICAgICAgICAkQAogICAgICAgICAgJEBACmQ4YiAgIGRiJEAKODg4byAgODgkQAo4OFY4byA4OCRACjg4IFY4bzg4JEAKODggIFY4ODgkQApWUCAgIFY4UCRACiAgICAgICAgJEAKICAgICAgICAkQEAKIC5kODhiLiAkQAouOFAgIFk4LiRACjg4ICAgIDg4JEAKODggICAgODgkQApgOGIgIGQ4JyRACiBgWTg4UCcgJEAKICAgICAgICAkQAogICAgICAgICRAQApkODg4OGIuJEAKODggIGA4RCRACjg4b29kRCckQAo4OH5+fiAgJEAKODggICAgICRACjg4ICAgICAkQAogICAgICAgJEAKICAgICAgICRAQAogLmQ4OGIuICRACi44UCAgWTguJEAKODggICAgODgkQAo4OCAgICA4OCRACmA4UCAgZDgnJEAKIGBZODgnWTgkQAogICAgICAgICRACiAgICAgICAgJEBACmQ4ODg4Yi4kQAo4OCAgYDhEJEAKODhvb2JZJyRACjg4YDhiICAkQAo4OCBgODguJEAKODggICBZRCRACiAgICAgICAkQAogICAgICAgJEBACi5kODg4OC4kQAo4OCcgIFlQJEAKYDhiby4gICRACiAgYFk4Yi4kQApkYiAgIDhEJEAKYDg4ODhZJyRACiAgICAgICAkQAogICAgICAgJEBACmQ4ODg4ODhiJEAKYH5+ODh+fickQAogICA4OCAgICRACiAgIDg4ICAgJEAKICAgODggICAkQAogICBZUCAgICRACiAgICAgICAgJEAKICAgICAgICAkQEAKZGIgICAgZGIkQAo4OCAgICA4OCRACjg4ICAgIDg4JEAKODggICAgODgkQAo4OGIgIGQ4OCRACn5ZODg4OFAnJEAKICAgICAgICAkQAogICAgICAgICRAQApkYiAgICBkYiRACjg4ICAgIDg4JEAKWTggICAgOFAkQApgOGIgIGQ4JyRACiBgOGJkOCcgJEAKICAgWVAgICAkQAogICAgICAgICRACiAgICAgICAgJEBACmRiICAgZDhiICAgZGIkQAo4OCAgIEk4SSAgIDg4JEAKODggICBJOEkgICA4OCRAClk4ICAgSThJICAgODgkQApgOGIgZDgnOGIgZDgnJEAKIGA4YjgnIGA4ZDgnICRACiAgICAgICAgICAgICAkQAogICAgICAgICAgICAgJEBACmRiICAgIGRiJEAKYDhiICBkOCckQAogYDhiZDgnICRACiAuZFBZYi4gJEAKLjhQICBZOC4kQApZUCAgICBZUCRACiAgICAgICAgJEAKICAgICAgICAkQEAKZGIgICAgZGIkQApgOGIgIGQ4JyRACiBgOGJkOCcgJEAKICAgODggICAkQAogICA4OCAgICRACiAgIFlQICAgJEAKICAgICAgICAkQAogICAgICAgICRAQApkODg4ODhEJEAKWVAgIGQ4JyRACiAgIGQ4JyAkQAogIGQ4JyAgJEAKIGQ4JyBkYiRACmQ4ODg4OFAkQAogICAgICAgJEAKICAgICAgICRAQAogICAuOFAkQAogICA4JyAkQAogLmRQICAkQApDODggICAkQAogYFliICAkQAogICA4LiAkQAogICBgOGIkQAogICAgICAkQEAKOCRACjgkQAo4JEAKICRACjgkQAo4JEAKOCRACiAkQEAKVjguICAgJEAKIGA4ICAgJEAKICBWYi4gJEAKICAgODhEJEAKICBkUCcgJEAKIC44ICAgJEAKQzgnICAgJEAKICAgICAgJEBACiAub28uICAuJEAKUCcgIGBWUCckQAogICAgICAgICRACiAgICAgICAgJEAKICAgICAgICAkQAogICAgICAgICRACiAgICAgICAgJEAKICAgICAgICAkQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQApACkAKQApACkAKQApACkBACkAKQApACkAKQApACkAKQEAKQApACkAKQApACkAKQApAQAo='
);

export default basic;
