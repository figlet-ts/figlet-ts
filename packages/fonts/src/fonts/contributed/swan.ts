import { FontFile } from '../../FontFile';

const swan = new FontFile(
    'swan',
    'ZmxmMmEkIDkgNyAxNSAwIDExIDAgODA2MyAyMDAKQXV0aG9yIDogQ2hyaXN0aWFuICdDZWVKYXknIEplbnNlbgpEYXRlICAgOiAyMDA1LzYvMTkKVmVyc2lvbjogMC45MCBiZXRhCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KICAgICAgLi0uCiAgICAgKCAgIGAKIC4tLS0uYC0uICAvIC4gLiBcICAuLS4gIC4tLS4KKCAgICAgYCAgKSggICA6ICAgKSggICApIHwgIHwKIGAtLS0tLS0nICBgLScgYC0nICBgLSdgLScgIGAtCiAiU3dhbiIgLSBBIGZpZ2ZvbnQgYnkgQ2VlSmF5Ci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KICAkJCAjCiAgJCQgIwogICQkICMKICAkJCAjCiAgJCQgIwogICQkICMKICAkJCAjCiAgJCQgIwogICQkICMjCiAjCiAjCi4jCnwjCnwjCicjCm8jCiAjCiAjIwogICAjCiAgICMKLiAuIwp8IHwjCiQgJCMKJCAkIwokICQjCiQgJCMKJCAkIyMKICAgICAgIwogICAgICAjCiAuICAuICMKX3xfX3xfIwogfCAgfCAjCi18LS18LSMKICcgICcgIwogICAgICAjCiAgICAgICMjCiAgICAjCiAgICAjCiAuLiAjCi58LS4jCmAtfC4jCmB8LScjCiAnJyAjCiAgICAjCiAgICAjIwogICAgICAjCiAgICAgICMKICAgICAgIwogXyAgICAjCihfKSAsJyMKICAsJ18gIwosJyAoXykjCiAgICAgICMKICAgICAgIyMKICAgICAgICMKICAgICAgICMKICAuLS4gICMKICggICApICMKIC4tLScgICMKKCAgIGAuKSMKIGAtLS0nYCMKICAgICAgICMKICAgICAgICMjCiAjCiAjCi4jCnwjCiQjCiQjCiQjCiQjCiAjIwogICAjCiAgICMKICwtIwo6ICQjCnwgJCMKOiAkIwpgLl8jCiAgICMKICAgIyMKICAgIwogICAjCi0uICMKJCA6IwokIHwjCiQgOiMKXy4nIwogICAjCiAgICMjCiAgICAgICAjCiAgICAgICAjCiAgIC4gICAjCl8gIHwgIF8jCiBgLTotJyAjCiAkLyBcJCAjCiAnICAgYCAjCiAgICAgICAjCiAgICAgICAjIwogICAgICAgIwogICAgICAgIwogICAgICAgIwokICAuICAkIwokX198X18kIwokICB8ICAkIwokICAnICAkIwogICAgICAgIwogICAgICAgIyMKICAjCiAgIwogICMKICAjCiAgIwogICMKIG8jCi0nIwogICMjCiAgICAgICMKICAgICAgIwokICAgICQjCiQgICAgJCMKJF9fX18kIwokICAgICQjCiQgICAgJCMKICAgICAkIwogICAgICQjIwogIwogIwogIwogIwogIwogIwpvIwogIwogIyMKICAgICAjCiAgICAgIwogICAgLCMKICAgLyAjCiAgLyAgIwogLyAgICMKJyAgICAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKIC4tLiAjCjogICA6Iwp8ICAgfCMKOiAgIDsjCiBgLScgIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCiAgLiAgIwouJ3wgICMKICB8ICAjCiAgfCAgIwonLS0tJyMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwogLi0uICMKKCAgICkjCiAgLicgIwogLyAgICMKJy0tLScjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKLi0tLiAjCiQgICApIwokLS06ICMKJCAgICkjCmAtLScgIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCi4gIC4gIwp8ICB8ICMKJy0tfC0jCiAgIHwgIwogICAnICMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwouLS0tLiMKfCAgICQjCictLS4kIwouICAgKSMKIGAtJyAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKJCAgLCQjCiQgLyAkIwokLy0uJCMKKCAgICkjCiBgLScgIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCi4tLS0uIwogICAgLyMKICAgLyAjCiAgLyAgIwogJyAgICMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwogLi0uICMKKCAgICkjCiA+LTwgIwooICAgKSMKIGAtJyAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKIC4tLiAjCiggICApIwogYC0vICMKICAvICAjCiAnICAgIwogICAgICMKICAgICAjIwogICAjCiAgICMKICAgIwogICAjCiBvICMKICAgIwogbyAjCiAgICMKICAgIyMKICAgIwogICAjCiAgICMKICAgIwogbyAjCiAgICMKIG8gIwotJyAjCiAgICMjCiAgICAgIwogICAgICMKICAgICAjCiAgIC4nIwogLicgICMKYC4gICAjCiAgYC4gIwogICAgYCMKICAgICAjIwogICAgICAjCiAgICAgICMKICAgICAgIwokICAgICQjCiQtLS0tJCMKJC0tLS0kIwokICAgICQjCiQgICAgJCMKICAgICAgIyMKICAgICAjCiAgICAgIwpgLiAgICMKICBgLiAjCiAgIC5gIwogLicgICMKJyAgICAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKIC4tLiAjCicgICApIwogICAvICMKICAnICAjCiAgbyAgIwogICAgICMKICAgICAjIwogICAgICAgICAjCiAgICAgICAgICMKICAgICAgICAgIwogIC4tYC0uICAjCi4nIC4tLiBgLiMKfCAoICAgKSA7IwpgLiBgLSdgJyAjCiAgYC0tLSAgICMKICAgICAgICAgIyMKICAgICAgICAgIwogICAgICAgICAjCiAgICAuICAgICMKICAgLyBcICAgIwogIC9fX19cICAjCiAvICAgICBcICMKJyAgICAgICBgIwogICAgICAgICAjCiAgICAgICAgICMjCiAgICAgIwogICAgICMKLi0tLiAjCnwgICApIwp8LS06ICMKfCAgICkjCictLScgIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCiAuLS0uIwo6ICAgICMKfCAgICAjCjogICAgIwogYC0tJyMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwouLS0uICMKfCAgIDojCnwgICB8Iwp8ICAgOyMKJy0tJyAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKLi0tLS4jCnwgICAgIwp8LS0tJCMKfCAgICAjCictLS0nIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCi4tLS0uIwp8ICAgICMKfC0tLSQjCnwgICAgIwonICAgICMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwogLi0tLiMKOiAgICAjCnwgLS0uIwo6ICAgfCMKIGAtLScjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKLiAgIC4jCnwgICB8Iwp8LS0tfCMKfCAgIHwjCicgICAnIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCi0tLi0tIwokIHwgJCMKJCB8ICQjCiQgfCAkIwotLSctLSMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwouLS0tLiMKICAgIHwjCiAgICB8IwogICAgOyMKYC0tJyAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKLiAgIC4jCnwgIC8gIwp8LScgICMKfCAgXCAjCicgICBgIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCi4gICAgIwp8ICAgICMKfCAgICAjCnwgICAgIwonLS0tJyMKICAgICAjCiAgICAgIyMKICAgICAgIwogICAgICAjCi4gICAgLiMKfFwgIC98Iwp8IFwvIHwjCnwgICAgfCMKJyAgICAnIwogICAgICAjCiAgICAgICMjCiAgICAgIwogICAgICMKLiAgIC4jCnxcICB8Iwp8IFwgfCMKfCAgXHwjCicgICAnIwogICAgICMKICAgICAjIwogICAgICAjCiAgICAgICMKIC4tLS4gIwo6ICAgIDojCnwgICAgfCMKOiAgICA7IwogYC0tJyAjCiAgICAgICMKICAgICAgIyMKICAgICAjCiAgICAgIwouLS0uICMKfCAgICkjCnwtLScgIwp8ICAgICMKJyAgICAjCiAgICAgIwogICAgICMjCiAgICAgICMKICAgICAgIwogLi0tLiAjCjogICAgOiMKfCAgICB8Iwo6ICAoIDsjCiBgLS1gLSMKICAgICAgIwogICAgICAjIwogICAgICMKICAgICAjCi4tLS4gIwp8ICAgKSMKfC0tJyAjCnwgIFwgIwonICAgYCMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwogLi0uICMKKCAgICkjCiBgLS4gIwooICAgKSMKIGAtJyAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKLi0tLS4jCiAgfCAgIwogIHwgICMKICB8ICAjCiAgJyAgIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCi4gICAuIwp8ICAgfCMKfCAgIHwjCjogICA7IwogYC0nICMKICAgICAjCiAgICAgIyMKICAgICAgICAgIwogICAgICAgICAjCi4gICAgICAgLiMKIFwgICAgIC8gIwogIFwgICAvICAjCiAgIFwgLyAgICMKICAgICcgICAgIwogICAgICAgICAjCiAgICAgICAgICMjCiAgICAgICAgICAgIwogICAgICAgICAgICMKLiAgLiAgIC4gIC4jCiBcICBcIC8gIC8gIwogIFwgIFwgIC8gICMKICAgXC8gXC8gICAjCiAgICAnICcgICAgIwogICAgICAgICAgICMKICAgICAgICAgICAjIwogICAgICMKICAgICAjCi4gICAuIwogXCAvICMKICAvICAjCiAvIFwgIwonICAgJyMKICAgICAjCiAgICAgIyMKICAgICAjCiAgICAgIwouICAgLiMKIFwgLyAjCiAgOiAgIwogIHwgICMKICAnICAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKLi0tLS4jCiAgIC8gIwogIC8gICMKIC8gICAjCictLS0nIwogICAgICMKICAgICAjIwogICAjCiAgICMKLi0tIwp8ICAjCnwgICMKfCAgIwonLS0jCiAgICMKICAgIyMKICAgICAjCiAgICAgIwouICAgICMKIFwgICAjCiAgXCAgIwogICBcICMKICAgIGAjCiAgICAgIwogICAgICMjCiAgICMKICAgIwotLS4jCiAgfCMKICB8IwogIHwjCi0tJyMKICAgIwogICAjIwogICAgICMKICAgICAjCiAgLiAgIwouJyBgLiMKICAgICAjCiAgICAgIwogICAgICMKICAgICAjCiAgICAgIyMKICAgICMKICAgICMKICAgICMKICAgICMKICAgICMKICAgICMKX19fXyMKICAgICMKICAgICMjCiAgICMKICAgIwogbyAjCiAgXCMKICAgIwogICAjCiAgICMKICAgIwogICAjIwogICAgICAjCiAgICAgICMKICAgICAgIwogICAgICAjCiAuLS4gICMKKCAgICkgIwogYC0nYC0jCiAgICAgICMKICAgICAgIyMKICAgICAjCiAgICAgIwouICAgICMKfCAgICAjCnwuLS4gIwp8ICAgKSMKJ2AtJyAjCiAgICAgIwogICAgICMjCiAgICAjCiAgICAjCiAgICAjCiAgICAjCiAuLS4jCiggICAjCiBgLScjCiAgICAjCiAgICAjIwogICAgICAjCiAgICAgICMKICAgIC4gIwogICAgfCAjCiAuLS58ICMKKCAgIHwgIwogYC0nYC0jCiAgICAgICMKICAgICAgIyMKICAgICAjCiAgICAgIwogICAgICMKICAgICAjCiAuLS4gIwooLi0nICMKIGAtLScjCiAgICAgIwogICAgICMjCiAgICAjCiAgICAjCiAuLS4jCiB8ICAjCi18LSAjCiB8ICAjCiAnICAjCiAgICAjCiAgICAjIwogICAgICMKICAgICAjCiAgICAgIwogICAgICMKIC4tLi4jCiggICB8IwogYC1gfCMKIC5fLicjCiAgICAgIyMKICAgICAjCiAgICAgIwouICAgICMKfCAgICAjCnwtLS4gIwp8ICB8ICMKJyAgYC0jCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKICAgICAjCiAgbyAgIwogIC4gICMKICB8ICAjCi0nIGAtIwogICAgICMKICAgICAjIwogICAgIwogICAgIwogICAgIwogICBvIwogICAuIwogICB8IwogICB8IwogICA7IwpgLScgIyMKICAgICAjCiAgICAgIwouICAgICMKfCAgICAjCnwuLS4gIwp8LS4nICMKJyAgYC0jCiAgICAgIwogICAgICMjCiAgIwogICMKLiAjCnwgIwp8ICMKfCAjCmAtIwogICMKICAjIwogICAgICAgICMKICAgICAgICAjCiAgICAgICAgIwogICAgICAgICMKLi0tLi0tLiAjCnwgIHwgIHwgIwonICAnICBgLSMKICAgICAgICAjCiAgICAgICAgIyMKICAgICAjCiAgICAgIwogICAgICMKICAgICAjCi4tLS4gIwp8ICB8ICMKJyAgYC0jCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKICAgICAjCiAgICAgIwogLi0uICMKKCAgICkjCiBgLScgIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCiAgICAgIwogICAgICMKLiwtLiAjCnwgICApIwp8YC0nICMKfCAgICAjCicgICAgIyMKICAgICAgIwogICAgICAjCiAgICAgICMKICAgICAgIwogLi0uLCAjCiggICB8ICMKIGAtJ3wgIwogICAtfC0jCiAgICAnICMjCiAgICAjCiAgICAjCiAgICAjCiAgICAjCi4tLS4jCnwgICAjCicgICAjCiAgICAjCiAgICAjIwogICAgIwogICAgIwogICAgIwogICAgIwouLS0uIwpgLS0uIwpgLS0nIwogICAgIwogICAgIyMKICAgICMKICAgICMKIC4gICMKX3xfICMKIHwgICMKIHwgICMKIGAtJyMKICAgICMKICAgICMjCiAgICAgIwogICAgICMKICAgICAjCiAgICAgIwouICAuICMKfCAgfCAjCmAtLWAtIwogICAgICMKICAgICAjIwogICAgICAgIwogICAgICAgIwogICAgICAgIwogICAgICAgIwouICAgIC5fIwogXCAgLyAgIwogIGAnICAgIwogICAgICAgIwogICAgICAgIyMKICAgICAgICAgICMKICAgICAgICAgICMKICAgICAgICAgICMKICAgICAgICAgICMKLiAgLiAgICAuXyMKIFwgIFwgIC8gICMKICBgJyBgJyAgICMKICAgICAgICAgICMKICAgICAgICAgICMjCiAgICAgIwogICAgICMKICAgICAjCiAgICAgIwotLiAsLSMKICA6ICAjCi0nIGAtIwogICAgICMKICAgICAjIwogICAgIwogICAgIwogICAgIwogICAgIwouICAuIwp8ICB8IwpgLS18IwogICA7IwpgLScgIyMKICAgICMKICAgICMKICAgICMKICAgICMKLS0tLiMKIC4nICMKJy0tLSMKICAgICMKICAgICMjCiAgICAjCiAgICAjCiAuLSAjCiB8ICAjCjwgICAjCiB8ICAjCiBgLSAjCiAgICAjCiAgICAjIwogIwogIwouIwp8Iwp8Iwp8Iwp8Iwp8IwonIyMKICAgICMKICAgICMKIC0uICMKICB8ICMKICAgPiMKICB8ICMKIF8nICMKICAgICMKICAgICMjCiAgICAgICAgIwogICAgICAgICMKICAgICAgICAjCiAgICAgICAgIwogLi0uICAgLiMKJyAgIGAtJyAjCiAgICAgICAgIwogICAgICAgICMKICAgICAgICAjIwogICAgICAgICAjCiAgIG8gbyAgICMKICAgIC4gICAgIwogICAvIFwgICAjCiAgL19fX1wgICMKIC8gICAgIFwgIwonICAgICAgIGAjCiAgICAgICAgICMKICAgICAgICAgIyMKICAgICAgIwogbyAgbyAjCiAuLS0uICMKOiAgICA6Iwp8ICAgIHwjCjogICAgOyMKIGAtLScgIwogICAgICAjCiAgICAgICMjCiAgICAgIwogbyBvICMKLiAgIC4jCnwgICB8Iwp8ICAgfCMKOiAgIDsjCiBgLScgIwogICAgICMKICAgICAjIwogICAgICAjCiAgICAgICMKICAgICAgIwogbyBvICAjCiAuLS4gICMKKCAgICkgIwogYC0nYC0jCiAgICAgICMKICAgICAgIyMKICAgICAjCiAgICAgIwogICAgICMKIG8gbyAjCiAuLS4gIwooICAgKSMKIGAtJyAjCiAgICAgIwogICAgICMjCiAgICAgIwogICAgICMKICAgICAjCm8gIG8gIwouICAuICMKfCAgfCAjCmAtLWAtIwogICAgICMKICAgICAjIwogICAgICMKICAgICAjCi4tLiAgIwp8ICApICMKfCAtOiAjCnwgICApIwp8IC0nICMKJyAgICAjCiAgICAgIyMKMTk3ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRQogICAgXyAgICAjCiAgIChfKSAgICMKICAgIC4gICAgIwogICAvIFwgICAjCiAgL19fX1wgICMKIC8gICAgIFwgIwonICAgICAgIGAjCiAgICAgICAgICMKICAgICAgICAgIyMKMTk4ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBBRQogICAgICAgICAjCiAgICAgICAgICMKICAgIC4tLS0uIwogICAvfCAgICAjCiAgLy18LS0tICMKIC8gIHwgICAgIwonICAgJy0tLScjCiAgICAgICAgICMKICAgICAgICAgIyMKMjE2ICBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggU1RST0tFCiAgICAgICMKICAgICAgIwogLi0tLi8jCjogICAvOiMKfCAgLyB8Iwo6IC8gIDsjCiAvLS0nICMKICAgICAgIwogICAgICAjIwoyMjkgIExBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRQogICAgICAjCiAgICAgICMKICBfICAgIwogKF8pICAjCiAuLS4gICMKKCAgICkgIwogYC0nYC0jCiAgICAgICMKICAgICAgIyMKMjMwICBMQVRJTiBTTUFMTCBMRVRURVIgQUUKICAgICAjCiAgICAgIwogICAgICMKICAgICAjCiAuLS4gIwooICggKSMKIGAtYC0jCiAgICAgIwogICAgICMjCjI0OCAgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBTVFJPS0UKICAgICAjCiAgICAgIwogICAgICMKICAgICAjCiAuLS8gIwooIC8gKSMKIC8tJyAjCiAgICAgIwogICAgICMj'
);

export default swan;
