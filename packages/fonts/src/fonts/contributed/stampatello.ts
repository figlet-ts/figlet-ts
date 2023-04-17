import { FontFile } from '../../FontFile';

const stampatello = new FontFile(
    'stampatello',
    'ZmxmMmEkIDYgNCAxNSAwIDQKU2Vjb25kYSB2ZXJzaW9uZSBkZWwgZm9udCAic3RhbXBhdGVsbG8iIHBlciBmaWdsZXQKcml2ZWR1dGEgZSBjb3JyZXR0YSBpbCAyOSBGZWJicmFpbyAxOTk2IGRhCk1hcmNvIEJvZHJhdG8gPGJvZHJhdG9AZ2VuaW8uc25zLml0PiBodHRwOi8vd3d3LnNucy5pdC9+Ym9kcmF0by8KVXNhIGNhcmF0dGVyaSBzZWNvbmRvIGxhIHRhYmVsbGEgaXNvODg1OSAoK3F1YWxjaGUgc2xhbmNpbyBkaSBmYW50YXNpYSkKICQgQAogJCRACiAkJEAKICQgQAokICBACiQgIEBACi9cJEAKKSgkQApcLyRACjo7JEAKICAgQAogICBAQAo7IDskQAogICQgQAogJCAgQAogICAgQAogICAgQAogICAgQEAKIC4gLiQgQAotfC18LSRACi18LXwtJEAKICcgYCQgQAogICAgICBACiAgICAgIEBACiAgICBACix8LiRACmArLiRACmB8JyRACiAgICBACiAgICBAQAogICAgICBACiwuICwgJEAKYCcvLC4kQAogJyBgJyRACiAgICAgIEAKICAgICAgQEAKICAgICBACiwuICAkQAo+LTosJEAKYC0nYCRACiAgICAgQAogICAgIEBACi4kQAonJEAKICRACiAgQAogIEAKICBAQAogLC0kQAovJCAgQAp8JCAgQApcJCAgQAogYC0kQAogICAgQEAKLS4kIEAKICBcJEAKICB8JEAKICAvJEAKLSckIEAKICAgIEBACiAgICBACi4gLCRACi1YLSRACicgYCRACiAgICBACiAgICBAQAogICAgQAogLiAkQAotfC0kQAogJyAkQAogICAgQAogICAgQEAKICAgQAogICRACiAkJEAKOjskQAonJCBACiAgIEBACiAgIEAKICAgQAotLSRACiAgIEAKICAgQAogICBAQAogICBACiAgJEAKICQkQAo6OyRACiAkIEAKICAgQEAKICAgIEAKICAsJEAKIC8kIEAKJyQgIEAKICAgIEAKICAgIEBACiAgICBACiwtLiRACnwvfCRACmAtJyRACiAgICBACiAgICBAQAogICBACiAsJEAKJ3wkQAogYCRACiAgIEAKICAgQEAKICAgIEAKLC0sJEAKJC8gJEAKJy1gJEAKICAgIEAKICAgIEBACiAgICBACiwtLiRACiQtPCRACmAtJyRACiAgICBACiAgICBAQAogICAgQAokLC4kQAp7X3wkQAokICckQAogICAgQAogICAgQEAKICAgIEAKLi0tJEAKYC0uJEAKYC0nJEAKICAgIEAKICAgIEBACiAgICBACiwtLiRACnwtLiRACmAtJyRACiAgICBACiAgICBAQAogICAgQAotLSwkQAokLyAkQAonICQgQAogICAgQAogICAgQEAKICAgIEAKLC0uJEAKPi08JEAKYC0nJEAKICAgIEAKICAgIEBACiAgICBACiwtLiRACmAtfCRACmAtJyRACiAgICBACiAgICBAQAogICRACjo7JEAKICAkQAo6OyRACiAkIEAKICAgQEAKICAkQAo6OyRACiAgJEAKOjskQAosJyBACiAgIEBACiAkIEAKJCwkQAo8ICRACiRgJEAKICQgQAogICBAQAogJCBACl9fJEAKX18kQAogJCBACiAgIEAKICAgQEAKICAgQAouJCBACiQ+JEAKJyQgQAogICBACiAgIEBACiwtLiRACmAgKSRACiAoJCBACiBvJCBACiAgICBACiAgICBAQAogLC0uJCBACi8sLS5cJEAKfCwtfHwkQApcYC1eLyRACiBgLSckIEAKICAgICAgQEAKICAgICwuJCAgQAogICAvIHwkJCBACiAgL35+fC0uJEAKLCcgICBgLSckQAogICAgICAgICBACiAgICAgICAgIEBACiwtLC0tLS4kQAogJ3xfX18vJEAKICx8ICAgXCRACmAtXi0tLSckQAogICAgICAgIEAKICAgICAgICBAQAogLC0tLiRACnwgYC0nJEAKfCAgIC4kQApgLS0nICRACiAgICAgIEAKICAgICAgQEAKLi0sLS0uJCBACicgfCAgIFwkQAosIHwgICAvJEAKYC1eLS0nJCBACiAgICAgICAgQAogICAgICAgIEBACi4tLC0tLiRACiBgXF9fJCBACiAgLyAgJCBACiAnYC0tJyRACiAgICAgICBACiAgICAgICBAQAouLSwtLSckQAogXHxfXyQgQAogIHwkICAgQAogYCckICAgQAogICAgICAgQAogICAgICAgQEAKLC0tLS4kIEAKfCAgLSckIEAKfCAgLC0nJEAKYC0tLXwkIEAKICwtLnwkIEAKIGAtKyckIEBACiwtXy8sLiRACicgfF98LyRACiAvfCB8JCBACiBgJyBgJyRACiAgICAgICBACiAgICAgICBAQAosLV8vJEAKJyAgfCRACi5eIHwkQApgLS0nJEAKICAgICBACiAgICAgQEAKLC1fLyRACicgIHwkQAogICB8JEAKICAgfCRACi9gIHwkQApgLS0nJEBACiwtLCAsJEAKICl8LyQgQAogIHxcJCBACiAsJyBgJEAKICAgICAgQAogICAgICBAQAogLCQgIEAKICkkICBACi8gICQgQApgLS0nJEAKICAgICBACiAgICAgQEAKLC0sLSwtLiQgIEAKYCx8IHwgfCAkIEAKICB8IDsgfCAuJEAKICAnICAgYC0nJEAKICAgICAgICAgIEAKICAgICAgICAgIEBACiwtLC0uJCAgQApgIHwgfCAkIEAKICB8IHwtLiRACiAsJyBgLSckQAogICAgICAgIEAKICAgICAgICBAQAosLC0tLiRACnxgLCB8JEAKfCAgIHwkQApgLS0tJyRACiAgICAgIEAKICAgICAgQEAKLi0sLS0uJEAKICd8X18vJEAKICx8ICAkIEAKIGAnICQgIEAKICAgICAgIEAKICAgICAgIEBACiwsLS0uJEAKfGAuIHwkQAp8ICAufCRACmAtLS1cJEAKICAgICBgQAogICAgICBAQAouLSwtLS4kQAogYHxfXy8kQAogKXwgXCAkQAogYCcgIGAkQAogICAgICAgQAogICAgICAgQEAKLi0tLS4kQApcX19fJCBACiAgICBcJEAKYC0tLSckQAogICAgICBACiAgICAgIEBACiwtLSwtLSdACmAtIHwkICBACiAsIHwkICBACiBgLSckICBACiAgICAgICBACiAgICAgICBAQAosLS4gIC4kICBACiAgfCAgfCQgIEAKICB8ICB8IC4kQAogIGAtLV4tJyRACiAgICAgICAgIEAKICAgICAgICAgQEAKLC4gICAsLiRACmB8ICAvJCAgQAogfCAvJCAgIEAKIGAnJCAgICBACiAgICAgICAgQAogICAgICAgIEBACiwuICAgLCAgICwuJEAKYHwgIC98ICAvJCAgQAogfCAvIHwgLyQgICBACiBgJyAgYCckICAgIEAKICAgICAgICAgICAgQAogICAgICAgICAgICBAQAosLiAgLC4kQApgIFwvICckQAogIC9cICQgQApgJyAgYCckQAogICAgICAgQAogICAgICAgQEAKLiAgLiRACnwgIHwkQAp8ICB8JEAKYC0tfCRACi4tIHwkQApgLS0nJEBACiwtXy8kQAogIC8kIEAKIC8kICBACi8tLSwkQAogICAgIEAKICAgICBAQAouLSRACnwkIEAKfCQgQAp8JCBACmAtJEAKICAgQEAKICAgIEAKLiQgIEAKIFwkIEAKICBgJEAKICAgIEAKICAgIEBACi0uJEAKIHwkQAogfCRACiB8JEAKLSckQAogICBAQAogICBACi9cJEAKICQgQAokICBACiAgIEAKICAgQEAKJCRACiQgQAogJEAKJCRACn5+QAogIEBACi4gJEAKIGAkQAogICRACiAgIEAKICAgQAogICBAQAogICAgQAosLS4kQAosLXwkQApgLV4kQAogICAgQAogICAgQEAKLiQgIEAKfC0uJEAKfCB8JEAKXi0nJEAKICAgIEAKICAgIEBACiAgICBACiwtLiRACnwgICRACmAtJyRACiAgICBACiAgICBAQAogIC4kQAosLXwkQAp8IHwkQApgLV4kQAogICAgQAogICAgQEAKICAgIEAKLC0uJEAKfC0nJEAKYC0nJEAKICAgIEAKICAgIEBACiAgJEAKLCIkQAp8LSRACnwkIEAKJyQgQAogICBAQAogICAgQAosLS4kQAp8IHwkQApgLXwkQAogLHwkQAogYCckQEAKLiQgIEAKfC0uJEAKfCB8JEAKJyAnJEAKICAgIEAKICAgIEBACiAgQAouJEAKfCRACickQAogIEAKICBAQAogICBACiAuJEAKIHwkQAogfCRACiB8JEAKYCckQEAKLiAkIEAKfCAsJEAKfDwkIEAKJyBgJEAKICAgIEAKICAgIEBACi4kIEAKfCQgQAp8JCBACmAnJEAKICAgQAogICBAQAogICAgICBACiwtLC0uJEAKfCB8IHwkQAonICcgJyRACiAgICAgIEAKICAgICAgQEAKICAgIEAKLC0uJEAKfCB8JEAKJyAnJEAKICAgIEAKICAgIEBACiAgICBACiwtLiRACnwgfCRACmAtJyRACiAgICBACiAgICBAQAogICAgQAosLS4kQAp8IHwkQAp8LSckQAp8JCAgQAonJCAgQEAKICAgIEAKLC0uJEAKfCB8JEAKYC18JEAKICB8JEAKICBgJEBACiAgICBACiwtLiRACnwgJCBACicgJCBACiAgICBACiAgICBAQAogICAgQAosLS4kQApgLS4kQApgLSckQAogICAgQAogICAgQEAKLiQgQAp8LSRACnwkIEAKYCckQAogICBACiAgIEBACiAgICBACi4gLiRACnwgfCRACmAtXiRACiAgICBACiAgICBAQAogICAgIEAKLiAgLCRACnwgLyQgQApgJyQgIEAKICAgICBACiAgICAgQEAKICAgICAgQAouICwgLCRACnwvfC8kIEAKJyAnICQgQAogICAgICBACiAgICAgIEBACiAgICBACi4gLCRACiBYICRACicgYCRACiAgICBACiAgICBAQAogICAgQAouIC4kQAp8IHwkQApgLXwkQAogL3wkQApgLSckQEAKICAgIEAKLF8sJEAKIC8gJEAKJyInJEAKICAgIEAKICAgIEBACi4tJEAKICkkQAo8JCBACiApJEAKJy0kQAogICBAQAp8JEAKfCRACnwkQAp8JEAKfCRACiAgQEAKLSwkQAooICRACiA+JEAKKCAkQAotYCRACiAgIEBACiAgICAgIEAKLCdgLCckQAogJCAgJCBACiAgJCAkIEAKICAgJCAgQAogICAgICBAQAogICBvLC5vJCBACiAgIC8gfCAkIEAKICAvfn58LS4kQAosJyAgIGAtJyRACiAgICAgICAgIEAKICAgICAgICAgQEAKIG9fbyAkQAooICAgKSRACnwgICB8JEAKYC0tLSckQAogICAgICBACiAgICAgIEBACi4gbyBvJCAgQAonXCAgfCQgIEAKIHwgIHwgLiRACiBgLS1eLSckQAogICAgICAgIEAKICAgICAgICBAQApvIG8kQAosLS4kQAosLXwkQApgLV4kQAogICAgQAogICAgQEAKbyBvJEAKLC0uJEAKfCB8JEAKYC0nJEAKICAgIEAKICAgIEBACm8gbyRACi4gLiRACnwgfCRACmAtXiRACiAgICBACiAgICBAQAogICwtLiQgQAogIHxfLyQgQAogLHwgLlwkQApgLScgYCckQAogICAgICAgQAogICAgICAgQEAKMTI4CiAsLSwtLS4kQAovICBcX18kIEAKXCAgLyAgJCBACiBgJ2AtLSckQAogICAgICAgIEAKICAgICAgICBAQAoxMjkKICAgICAgQAosLSwtLiRACnwgfC0nJEAKYC1eLSckQAogICAgICBACiAgICAgIEBACjEzMAoubyBvJEAKfCAgfCRACnwgIHwkQApgLS18JEAKLC4gLyRACmAtJyAkQEAKMTM3Ci5gLiwnLCRACi5gL1wnLCRACi0oe30pLSRACicsXC8uYCRACicsJ2AuYCRACiAgICAgICBAQAoxMzgKICAgICAgQAoub28wTyRACiggWSApJEAKIFwgKCQgQAogIFxfKSRACiAgICAgIEBACjEzOQogICBfJCBACiAgLyApJEAKIC8gKCQgQAooICAgKSRACmBvb28wJEAKICAgICAgQEAKMTQwCiBfICAgIEAKKCBcJCAgQAogKSBcJCBACiggICApJEAKMG9vbywkQAogICAgICBAQAoxNDEKICAgICAgQApPMG9vLCRACiggWSApJEAKICkgLyQgQAooXy8kICBACiAgICAgIEBACjE0MgpvICAgbyRACnxcXi98JEAKIFxZLyQgQAogL19cJCBACl8vIFxfJEAKICAgICAgQEAKMTQ0CiBfX19fX19fICAgIEAKKF8sLS0tLl8pICQgQAogLyAoTykgXGB+LiRACiBcX19fX18vfn4nJEAKICAgICAgICAgICAgQAogICAgICAgICAgICBAQAoxNDUKIF9fX19fJCAgQAp8b29vW19dfCRACnxvb298IHx8JEAKfG9vb3xffHwkQAp8X19fW19dfCRACiAgICAgICAgIEBACjE0NgogX19fX19fX18kICBACnxcICAgICAgIFwkIEAKfCB9LS0tLS0tLX0kQAogXHwgbyBvIG8gfCRACiAgYC0tLS0tLS0nJEAKICAgICAgICAgICAgQEAKMTQ3CiAgX19fICAkQAp7fi5fLn59JEAKICggWSApICRACigpfip+KCkkQAooXyktKF8pJEAKICAgICAgICBAQAoxNDgKICAgfFwkQAogICB8XCRACihgJykkIEAKIGAnJCAgQAogICAkICBACiAgICAgIEBACjE2MQosLiRACmAnJEAKL1wkQAopKCRAClwvJEAKICAgQEAKMTYyCiAuJCBACiwrLiRACnx8ICRACmArJyRACiAnJCBACiAgICBAQAoxNjMKICAsLSwkQApffF8gJCBACiApICAkIEAKJy0tJyQgQAogICAgICBACiAgICAgIEBACjE2NAogICAgQApcLS8kQAp8IHwkQAovLVwkQAogICAgQAogICAgQEAKMTY1Ci4gLCRACl9ZXyRACi18LSRACiAnICRACiAgICBACiAgICBAQAoxNjYKfCRACnwkQAogJEAKfCRACnwkQAokJEBACjE2NwosLS4kQAo+LS4kQApgLTwkQApgLSckQAogICAgQAogICAgQEAKMTY4Cm8gbyRACiAkJCBACiAkICBACiAgICBACiAgICBACiAgICBAQAoxNjkKICwtLiQgQAovLC0uXCRACnx8ICB8JEAKXGAtJy8kQAogYC0nJCBACiAgICAgIEBACjE3MAogX1wkQAooX3wkQAp+fn4kQAogICQgQAogICAgQAogICAgQEAKMTcxCiAgICBACiAsLCRACjw8JCBACiBgYCRACiAgICBACiAgICBAQAoxNzIKICAgICBACl9fXyAkQAogICB8JEAKICAgICBACiAgICAgQAogICAgIEBACjE3MwogICAgQApfX18kQAogJCQgQAogICAgQAogICAgQAogICAgQEAKMTc0CiAsLS4kIEAKLywtLlwkQAp8fF8vfCRAClx8IFwvJEAKIGAtJyQgQAogICAgICBAQAoxNzUKX18kQAogJCRACiAkIEAKICAgQAogICBACiAgIEBACjE3NgosLiRACmAnJEAKICQgQAogICBACiAgIEAKICAgQEAKMTc3CiAgICBACl98XyRACiB8ICRACi0tLSRACiAgICBACiAgICBAQAoxNzgKLC4kQAogLyRACiIiJEAKICQgQAogICBACiAgIEBACjE3OQosLiRACiArJEAKYCckQAogJCBACiAgIEAKICAgQEAKMTgwCiwnJEAKICQgQAogJCBACiAgIEAKICAgQAogICBAQAoxODEKICAgIEAKLiAuJEAKfCB8JEAKfC1eJEAKfCAgIEAKJyAgIEBACjE4MgogLC0sLCRACiggIHx8JEAKIGAtfHwkQAogICB8fCRACiAgLV4tJEAKICAgICAgQEAKMTgzCiAgQAogIEAKbyRACiAgQAogIEAKICBAQAoxODQKICAgQAogICBACiAgIEAKIC4kQApgJyRACiAgIEBACjE4NQogLCRACid8JEAKICQgQAogJCBACiAgIEAKICAgQEAKMTg2CiwuJEAKYCckQAoiIiRACiAkIEAKICAgQAogICBAQAoxODcKICAgIEAKLi4kIEAKID4+JEAKJyckIEAKICAgIEAKICAgIEBACjE4OAogLCAgLCRACid8IC8kIEAKICAvJCAgQAogLyAgLCRACicgICcrJEAKICAgICAkQEAKMTg5CiAsICAsJEAKJ3wgLyQgQAogIC8kICBACiAvICwuJEAKJyAgIC8kQAogICAiIiRAQAoxOTAKLC4gICwkQAogKyAvJCBACmAnLyAkIEAKIC8gICwkQAonICAnKyRACiAgICAgIEBACjE5MQogICAgQAogbyQgQAogKSQgQAooIC4kQApgLSckQAogICAgQEAKMTkyCiAgIFwsLiQgIEAKICAgL2B8ICQgQAogIC9+figtLiRACi0nICAgIGAnJEAKICAgICAgICAgQAogICAgICAgICBAQAoxOTMKICAgICwvJCAgQAogICAvJ3wgJCBACiAgL35+fC0uJEAKYCcgICBgLSckQAogICAgICAgICBACiAgICAgICAgIEBACjE5NAogICAvXlwkICBACiAgIC9eXCQgIEAKICAvfn58IC4kQAosJyAgIGAtJyRACiAgICAgICAgIEAKICAgICAgICAgQEAKMTk1CiAgLCdgLCckIEAKICAgLyBcJCAgQAogIC9+fnwgLCRACiAnICAgYC0nJEAKICAgICAgICAgQAogICAgICAgICBAQAoxOTYKICAgbywubyQgQAogICAvIHwkICBACiAgL35+fCAsJEAKLCcgICBgJyAkQAogICAgICAgICBACiAgICAgICAgIEBACjE5NwogICAgTyQgICBACiAgIC8gXCQgIEAKICwvfn58ICQgQApgJyAgIGAtLiRACiAgICAgICAgIEAKICAgICAgICAgQEAKMTk4CiAgICAsLC0tLiRACiAgIC8gXF9fJCBACi8gL35+fCAgJCBACmAnICAgYC0tJyRACiAgICAgICAgICBACiAgICAgICAgICBAQAoxOTkKICwtLS4kQAp8ICctJyRACnwgICAuJEAKIGAtLyAkQAogYCckICBACiAgICAgIEBACjIwMAosLS5fXC4kQAonIHxfXyQgQAogL3wgICQgQAogYF4tLSckQAogICAgICAgQAogICAgICAgQEAKMjAxCiwtLl8vLiRACiAnfF9fJCBACiAgfCAgJCBACiBgXi0tJyRACiAgICAgICBACiAgICAgICBAQAoyMDIKICAvX1wuJEAKJyd8X18kIEAKICx8ICAkIEAKIGBeLS0nJEAKICAgICAgIEAKICAgICAgIEBACjIwMwogLG9fby4kQAogXHxfXyQgQAogIHwgICQgQAogLF4tLSckQAogICAgICAgQAogICAgICAgQEAKMjA0CiBfXCwkQAonICJ8JEAKLiwgfCRACmAtLSckQAogICAgIEAKICAgICBAQAoyMDUKIF8vLCRACicgInwkQAogICB8JEAKYC0tJyRACiAgICAgQAogICAgIEBACjIwNgogL15cJEAKLF4ifCRACiAsIHwkQApgLS0nJEAKICAgICBACiAgICAgQEAKMjA3Cm9fbywkQAonICJ8JEAKLiwgfCRACmAtLSckQAogICAgIEAKICAgICBAQAoyMDgKfi4tLS4kIEAKX3xfICBcJEAKIHwgICAvJEAKLF4tLSckIEAKICAgICAgIEAKICAgICAgIEBACjIwOQogLCdgLCckIEAKLid2Ii4gJCBACiAgfCB8IFwkQAogLCcgYC0nJEAKICAgICAgICBACiAgICAgICAgQEAKMjEwCiBfXCAkIEAKfCAgYCkkQAp8ICAgfCRACmAtLSckIEAKICAgICAgQAogICAgICBAQAoyMTEKLC0gLywkQAp8ICcgfCRACnwgICB8JEAKIGAtLSckQAogICAgICBACiAgICAgIEBACjIxMgogL19cJCBACiwnIGAuJEAKfCAgIHwkQAogYC0tJyRACiAgICAgIEAKICAgICAgQEAKMjEzCiwnYCwnJEAKLC0tLS4kQAp8ICAgfCRACmAtLS0nJEAKICAgICAgQAogICAgICBAQAoyMTQKIG9fbyAkQAooICAgKSRACnwgICB8JEAKYC0tLSckQAogICAgICBACiAgICAgIEBACjIxNQogICAkQApcIC8kQAogWCQgQAovIFwkQAogICAgQAogICAgQEAKMjE2CiwtLS8kQAp8IC98JEAKfC8gfCRACi8tLSckQAogICAgIEAKICAgICBAQAoyMTcKLixcIC4kICBACmB8ICB8ICQgQAogfCAgfCBfJEAKIGAtLV4nJCBACiAgICAgICAgQAogICAgICAgIEBACjIxOAouLCAvLiQgIEAKKXwgIHwkICBACiB8ICB8XCAkQAogYC0tXi0nJEAKICAgICAgICBACiAgICAgICAgQEAKMjE5CiAvXlwkICBACnwgIHwkICBACnwgIHwgJCBACmAtLV4uJyRACiAgICAgICBACiAgICAgICBAQAoyMjAKIG8gbyQgIEAKfCAgfCQgIEAKfCAgfCAuJEAKYC0tXi0nJEAKICAgICAgIEAKICAgICAgIEBACjIyMQouIC8uJEAKfCAgfCRACnwgIHwkQApgLS18JEAKLC4gLyRACmAtJyAkQEAKMjIyCiwgICQgIEAKfC0tLiQgQAp8ICAgKSRACnwtLSckIEAKfCAgJCAgQApeLSQgICBAQAoyMjMKICAsLS4kIEAKICB8Xy8kIEAKICx8IC5cJEAKYC0nIGAnJEAKICAgICAgIEAKICAgICAgIEBACjIyNAogXCQgQAosLS4kQAosLXwkQApgLV4kQAogICAgQAogICAgQEAKMjI1CiAvJCBACiwtLiRACiwtfCRACmAtXiRACiAgICBACiAgICBAQAoyMjYKLF4uJEAKLC0uJEAKLC18JEAKYC1eJEAKICAgIEAKICAgIEBACjIyNwp2XnYkQAosLS4kQAosLXwkQApgLV4kQAogICAgQAogICAgQEAKMjI4Cm8gbyRACiwtLiRACiwtfCRACmAtXiRACiAgICBACiAgICBAQAoyMjkKIE8kIEAKLC0uJEAKLC18JEAKYC1eJEAKICAgIEAKICAgIEBACjIzMAogICAgICBACiwtLC0uJEAKLC18LSckQApgLV4tJyRACiAgICAgIEAKICAgICAgQEAKMjMxCiAgICBACiwtLiRACnwgJCBACmB2JyRACmAnICBACiAgICBAQAoyMzIKIFwkIEAKLC0uJEAKfC0nJEAKYC0nJEAKICAgIEAKICAgIEBACjIzMwogLyQgQAosLS4kQAp8LSckQApgLSckQAogICAgQAogICAgQEAKMjM0CixeLiRACiwtLiRACnwtJyRACmAtJyRACiAgICBACiAgICBAQAoyMzUKbyBvJEAKLC0uJEAKfC0nJEAKYC0nJEAKICAgIEAKICAgIEBACjIzNgpcJEAKLiRACnwkQAonJEAKICBACiAgQEAKMjM3Ci8kQAouJEAKfCRACickQAogIEAKICBAQAoyMzgKXiRACi4kQAp8JEAKJyRACiAgQAogIEBACjIzOQpvIG8kQAogLiQgQAogfCQgQAogJyQgQAogICAgQAogICAgQEAKMjQwCj48ICRACiwtXCRACnwgfCRACmAtJyRACiAgICBACiAgICBAQAoyNDEKdl52JEAKLC0uJEAKfCB8JEAKJyAnJEAKICAgIEAKICAgIEBACjI0MgogXCQgQAosLS4kQAp8IHwkQApgLSckQAogICAgQAogICAgQEAKMjQzCiAvJCBACiwtLiRACnwgfCRACmAtJyRACiAgICBACiAgICBAQAoyNDQKLF4uJEAKLC0uJEAKfCB8JEAKYC0nJEAKICAgIEAKICAgIEBACjI0NQp2XnYkQAosLS4kQAp8IHwkQApgLSckQAogICAgQAogICAgQEAKMjQ2Cm8gbyRACiwtLiRACnwgfCRACmAtJyRACiAgICBACiAgICBAQAoyNDcKICAgIEAKIG8kIEAKLS0tJEAKIG8kIEAKICAgIEAKICAgIEBACjI0OAogICAkQAosLS8kQAp8L3wkQAovLSckQAogICAgQAogICAgQEAKMjQ5CiBcJCBACi4gLiRACnwgfCRACmAtXiRACiAgICBACiAgICBAQAoyNTAKIC8kIEAKLiAuJEAKfCB8JEAKYC1eJEAKICAgIEAKICAgIEBACjI1MQosXi4kQAouIC4kQAp8IHwkQApgLV4kQAogICAgQAogICAgQEAKMjUyCm8gbyRACi4gLiRACnwgfCRACmAtXiRACiAgICBACiAgICBAQAoyNTMKIC8kIEAKLiAuJEAKfCB8JEAKYC18JEAKIC98JEAKYC0nJEBACjI1NAogICAgQAp8LS4kQAp8LSckQApeICQgQAogICAgQAogICAgQEAKMjU1Cm8gbyRACi4gLiRACnwgfCRACmAtfCRACiAvfCRACmAtJyRAQAo='
);

export default stampatello;