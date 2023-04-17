import { FontFile } from '../../FontFile';

const chiseled = new FontFile(
    'chiseled',
    'ZmxmMmEkIDkgOCAyMiA2MyAxMSAwIDI0NTExIDAKQXV0aG9yIDogTEcgQmVhcmQKRGF0ZSAgIDogMjAwNC8zLzI3IDIwOjQ1OjE1ClZlcnNpb246IDEuMAotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tClRoaXMgZm9udCBoYXMgYmVlbiBjcmVhdGVkIHVzaW5nIEphdkUncyBGSUdsZXQgZm9udCBleHBvcnQgYXNzaXN0YW50LgpIYXZlIGEgbG9vayBhdDogaHR0cDovL3d3dy5qYXZlLmRlCgpQZXJtaXNzaW9uIGlzIGhlcmVieSBnaXZlbiB0byBtb2RpZnkgdGhpcyBmb250LCBhcyBsb25nIGFzIHRoZQptb2RpZmllcidzIG5hbWUgaXMgcGxhY2VkIG9uIGEgY29tbWVudCBsaW5lLgokICMKJCAjCiQgIwokICMKJCAjCiQgIwokICMKJCAjCiQgIyMKICAuPS0uLS4gIwogLz09L18gLyAjCnw9PXwsIHwgICMKfD09fCAgfCAgIwovPT0vLiAvICAjCmAtLWAtYCAgICMKIC49LiAgICAgIwo6PTsgOiAgICAjCiBgPWAgICAgICMjCiAsLS0uLSAsLS0uLSwgIwovPT0vLCAvPT0vIC0vICMKfD09fF8gfD09fF8gfCAjCnw9PXwgIHw9PXwgIHwgIwovPT0vLCAvPT0vLCAvICMKYC0tYC0nYC0tYC0nICAjCiAgICAgICAgICAgICAgIwogICAgICAgICAgICAgICMKICAgICAgICAgICAgICAjIwogICAgICAgLC0tLCAgLC0tLCAgICMKICAgX18gLy1cPT1cLy1cPT1cXyAjCiAvXF8gIFwnLz09LyAnLz09L19cIwogXC89PT09PT09PT09PT09PT09LyMKL1xfXyBcLz09LyAgLz09L19cLyAjClwvPT09PT09PT09PT09PT09LyAgIwogLyBgLz09LyBgLz09LyAgICAgICMKIGAtLWAtYCAgLWAtYCAgICAgICAjCiAgICAgICAgICAgICAgICAgICAgIyMKJCMKICMKICMKICMKICMKICMKICMKICMKICMjCiAgLj0uICAsLS0sICAjCiA6PTsgOi8tXD09XCAjCiAgYD1gLyAnLz09LyAjCiAgICAvICAvPT0vICAjCiAgIC8gLS89PS8gICAjCiAgLyBgLz09LyAgICAjCiAvIC0vPT0vLj0uICAjCi8gYC89PS86PTsgOiAjCmAtLWAtYCAgYD1gICAjIwogICwtLS0uLS0uICAgIwogLyAgLV8gXD09XCAgIwogfGAgLyBcLz09LyAgIwogIFwgXCAvPT0vICAgIwogIC8gIFw9PS8gICAgIwogLy4gLyBcPT1cICAgIwp8IF8gXF8vXD09XCAgIwpcIC4gLSAgL1w9PVwgIwogJy0tLS1gLWAtLWAgIyMKIC4tLS4tLiAgIwovPT0vICAvICAjClw9PVwgLVwgICMKIFw9PVwtIFwgIwogIGAtLWAtJyAjCiAgICAgICAgICMKICAgICAgICAgIwogICAgICAgICAjCiAgICAgICAgICMjCiAuLS4tLS4gICMKIFwgIFw9PVwgIwogLy0gLz09LyAjCi8nIC89PS8gICMKfCx8PT18ICAgIwpcICBcPT1cICAjCiBcICxcPT1cICMKIC8gLS89PS8gIwogYC0nLS0nICAjIwogLi0tLi0uICAjCi89PS8gIC8gICMKXD09XCAtXCAgIwogXD09XCBgXCAjCiAgfD09fCx8ICMKIC89PS8gIC8gIwovPT0vLCAvICAjClw9PVwtIFwgICMKIGAtLWAtJyAgIyMKKiMKICMKICMKICMKICMKICMKICMKICMKICMjCiAgICAgIC4tLS4tLiAgICAgICMKICAgICAvPT0vICAvICAgICAgIwogICAgIFw9PVwgLVwgICAgICAjCiwtLSwtLWAtLWAtLWAtLS4gICMKXD09XCA9PT09PT09PT09IFwgIwogYC0tYC0sLS0sLS0sLS0tYCAjCiAgICAgLz09LywgLyAgICAgICMKICAgICBcPT1cLSBcICAgICAgIwogICAgICBgLS1gLScgICAgICAjIwogICAgICAgICAjCiAgICAgICAgICMKICAgICAgICAgIwogICAgICAgICAjCiAgICwtLSwgICMKICAvLVw9PVwgIwogLyAnLz09LyAjCi8gIC89PS8gICMKYC0tYC0tYCAgIyMKICAgICAgICAgICAgICAgICMKICAgICAgICAgICAgICAgICMKICwtLS4tLS0tLS0tLS4gICMKLz09LywgIC0gICAsIC1cICMKXD09XC4tLiAgLSAsLS4vICMKIGAtLWAtLS0tLS0tLWAgICMKICAgICAgICAgICAgICAgICMKICAgICAgICAgICAgICAgICMKICAgICAgICAgICAgICAgICMjCiAgICAgICMKICAgICAgIwogICAgICAjCiAgICAgICMKICAgICAgIwogICAgICAjCiAuPS4gICMKOj07IDogIwogYD1gICAjIwogICAgICAgLC0tLCAgIwogICAgICAvLVw9PVwgIwogICAgIC8gJy89PS8gIwogICAgLyAgLz09LyAgIwogICAvIC0vPT0vICAgIwogIC8gYC89PS8gICAgIwogLyAtLz09LyAgICAgIwovIGAvPT0vICAgICAgIwpgLS1gLWAgICAgICAgIyMKICAgIF8uLS0tLixfICAgICAjCiAgLicgIC0gLCBgLi0sICAgIwogLyAtICAsICAsX1w9PVwgICMKfCAgICAgLj0uICAgfD09fCAjCnwgLSAgOj07IDogX3w9PXwgIwp8ICAgICBgPWAgLCB8PT18ICMKIFwgXywgICAgLSAvPT0vICAjCiAgYC4gICAtIC5gPS5gICAgIwogICAgYGAtLSctLScgICAgICMjCiAsLS0tLS0uLS0uICAjCi9gIGAgLSAvPT0vICAjCmAtJy0uIC18PT18ICAjCiAgICB8IGB8PT18ICAjCiAgICB8IC18PT18ICAjCiAgICB8IGB8PT18ICAjCiAgLi0nLCd8PT18ICAjCiAvICAgICBcPT1cICAjCiBgLS0tLS1gLS0tYCAjIwogLC0tLS0tLC0tLCAgICMKIHwgJy0gIC1cPT1cICAjCiBcLC0tLCAnLz09LyAgIwogICAgLyAgLz09LyAgICMKICAgLyAtLz09LyAgICAjCiAgLyAtLz09LyAgICAgIwogLyBgXD09XF8sLS0sICMKL2AgLSAgICwvPT0vICAjCmAtLS0tLS1gLS1gICAgIyMKIC4tLS0tLCAgICAgICMKLyBgYC0tYC4tLCAgICMKJy0uXyAgLXw9PXwgICMKLi0uJyAgIHw9PXwgICMKXCAgICAsIF9cPT1cICMKIGAtLiAgICB8PT18ICMKXy4tJywgIF98PT18ICMKXCAgICAgLCBcPT1cICMKIGBgLS0tLS0nLS0nICMjCi4tLSwgLi0uLS0sICAjCnwgIHw9fCAtXD09XCAjCnwgIGAtJyBffD09fCAjClwgICAgICwgfD09fCAjCiBgLS0uICAtfD09fCAjCiAgICAgXF8gfD09fCAjCiAgICAgfCAgXD09XCAjCiAgICAgIFwgLz09LyAjCiAgICAgICBgLS1gICAjIwogICwtLi0tLiAgICAjCiAvIC0gXD09XCAgICMKLyAgL1wvPT0vICAgIwp8ICBcPT1cICAgICAjCi8gICBgLS5gLS4gICMKYC0tLiAgIFw9PVwgIwogLi0vICAgLz09LyAjCi8gICAgIC89PS8gICMKYC0tLS0tYC1gICAgIyMKICAgICAgLiwtLiAgIwogICAgIC8gXD09XCAjCiAgICAvIC0vPT0vICMKICAgLy0gLz09LyAgIwogIC8gIC89PS8gICAjCiAvLiAvIFw9PVwgICMKfCBfIFxfL1w9PVwgIwpcIC4gLSAgLz09LyAjCiAnLS0tLWAtLWAgICMjCiAsLS0tLS0sLS0sICAjCiB8ICctICAtXD09XCAjCiBcLC0tLCAnLz09LyAjCiAgICAvICAvPT0vICAjCiAgIC8gLS89PS8gICAjCiAgLyBgLz09LyAgICAjCiAvIC0vPT0vICAgICAjCi8gYC89PS8gICAgICAjCmAtLWAtYCAgICAgICAjIwogICwtLS0uLS0uICAjCiAvICAtXyBcPT1cICMKIHxgIC8gXC89PS8gIwogIFwgXCAvPT0vICAjCiAgLyAgXD09LyAgICMKIC8uIC8gXD09XCAgIwp8IF8gXF8vXD09XCAjClwgLiAtICAvPT0vICMKICctLS0tYC0tYCAgIyMKICwtLSwtLS0tLiAgICMKLz09LyAuPS4gIFwgICMKXD09XCAnPSdcICBcICMKIGAtLWAtLScvIGAvICMKICAgIC89PS8gLS8gICMKICAgLz09LyAtLyAgICMKICAvPT0vLSAvICAgICMKICBcPT1cIC8gICAgICMKICAgYC0nYCAgICAgICMjCiAgICAgICMKIC49LiAgIwo6PTsgOiAjCiBgPWAgICMKIC49LiAgIwo6PTsgOiAjCiBgPWAgICMKICAgICAgIwogICAgICAjIwogICAgICAjCiAuPS4gICMKOj07IDogIwogYD1gICAjCiAuPS4gICMKOj07IDogIwogYC5gICAjCiAgICAgICMKICAgICAgIyMKICAgIC4tLS4gICAjCiAgIC8gXD09XCAgIwogIC8tIC89PS8gICMKIC8nIC89PS8gICAjCnwgLHw9PXwgICAgIwogXCAgXD09XCAgICMKICBcICxcPT1cICAjCiAgIFwtIFw9PVwgIwogICAgYC4vPT0vICMjCiAgLC0tLi0tLS0tLS0tLiAgIwogLz09LywgIC0gICAsIC1cICMKIFw9PVwuLS4gIC0gLC0uLyAjCiAgYC0tYC0tLS0tLS0tYCAgIwogICwtLS4tLS0tLS0tLS4gICMKIC89PS8sICAtICAgLCAtXCAjCiBcPT1cLi0uICAtICwtLi8gIwogIGAtLWAtLS0tLS0tLWAgICMKICAgICAgICAgICAgICAgICAjIwogIC4tLS4gICAgICMKIC89PS8gXCAgICAjCiBcPT1cIC1cICAgIwogIFw9PVwgYFwgICMKICAgfD09fCwgfCAjCiAgLz09LyAgLyAgIwogLz09LywgLyAgICMKLz09LyAtLyAgICAjClw9PVwuJyAgICAgIyMKICwtLSwtLS0uICAjCi89PS8gLSBgIFwgIwpcPT1cL1wgLSB8ICMKIGAtLWAvIGAvICAjCiAgfD09fCAgfCAgIwogIGAtLWAtLWAgICMKICAgIC49LiAgICAjCiAgIDo9OyA6ICAgIwogICAgYD1gICAgICMjCiAgICBfLC0tLS0uICAgICMKICAsLS4tLWAgLCBcICAgIwogLz09Ly0gIF8uLWBcICAjCi89PS8gICAgYC4tLiBcICMKXD09XF8gLCAgICAvIC8gIwogXD09XCAgIC4tJyAvICAjCiAgYC5fYC5fX18uJyAgICMKICAgICAgICAgICAgICAgIwogICAgICAgICAgICAgICAjIwogICAsLS0tLiAgICAgICMKIC4tLS4nICBcICAgICAjCiBcPT1cLS9cIFwgICAgIwogLz09Ly18X1wgfCAgICMKIFw9PVwsICAgLSBcICAjCiAvPT0vIC0gICAsfCAgIwovPT0vLSAgL1wgLSBcICMKXD09XCBfLlw9XC4tJyAjCiBgLS1gICAgICAgICAgIyMKICAgICAgICAgICAgICAjCiAgICBfLi4tLS0uICAgIwogIC4nIC4nLi0uIFwgICMKIC89PS8tICc9JyAvICAjCiB8PT18LSwgICAnICAgIwogfD09fCAgLj0uIFwgICMKIC89PS8tICc9JyAsfCAjCnw9PXwgICAtICAgLyAgIwpgLS5fYC5fX18sJyAgICMjCiAgIF8sLi0tLS0uICAgIwogLicgLicgLSAgIFwgICMKLz09LyAgLCAgLC0nICAjCnw9PXwtICAgfCAgLiAgIwp8PT18XyAgIGAtJyBcICMKfD09fCAgIF8gICwgfCAjClw9PVwuICAgICAgIC8gIwogYC0uYC5fX18uLScgICMKICAgICAgICAgICAgICAjIwogICAgICAgICAgICAgICMKICBfLC4uLS0tLl8gICAjCi89PS8sICAgLSAgXCAgIwp8PT18ICAgXyAgIF9cICMKfD09fCAgLj0uICAgfCAjCnw9PXwsfCAgIHwgLXwgIwp8PT18ICAnPScgICAvICMKfD09fC0sICAgX2AvICAjCmAtLmAuX19fXy4nICAgIyMKICAgICAgLC0tLS0uICAjCiAgICwtLi0tYCAsIFwgIwogIHw9PXwtICBfLi1gICMKICB8PT18ICAgYC4tLiAjCiAvPT0vXyAsICAgIC8gIwogfD09fCAgICAuLScgICMKIHw9PXxfICAsYC0uXyAjCiAvPT0vICwgICAgIC8gIwogYC0tYC0tLS0tYGAgICMjCiAgICAgXywtLS0uICAjCiAgLi1gLicgLCAgXCAjCiAvPT0vXyAgXy4tJyAjCi89PS8tICAnLi4tLiAjCnw9PXxfICwgICAgLyAjCnw9PXwgICAuLS0nICAjCnw9PXwtICB8ICAgICAjCi89PS8gICBcICAgICAjCmAtLWAtLS0nICAgICAjIwogICAgICBfLC0tLS4gICAjCiAgXy49Jy4nLSwgIFwgICMKIC89PS4nLSAgICAgLyAgIwovPT0vIC0gICAuLScgICAjCnw9PXxfICAgL18sLS4gICMKfD09fCAgLCBcXy4nICkgIwpcPT1cLSAgLCAgICAoICAjCiAvPT0vIF8gICwgIC8gICMKIGAtLWAtLS0tLS0nICAgIyMKICwtLS4tLCwtLC0tLCAjCi89PS8gIC98PXwgIHwgIwp8PT18XyB8fD18LCB8ICMKfD09fCAsfC89fCBffCAjCnw9PXwtIGAtJyBfIHwgIwp8PT18ICBfICAgICB8ICMKfD09fCAgIC4tLiAsXCAjCi89PS8sIC8vPS8gIHwgIwpgLS1gLScgYC1gLS1gICMjCiAgIC49LS4tLiAjCiAgLz09L18gLyAjCiB8PT18LCB8ICAjCiB8PT18ICB8ICAjCiB8PT18LSB8ICAjCiB8PT18ICx8ICAjCiB8PT18LSB8ICAjCiAvPT0vLiAvICAjCiBgLS1gLWAgICAjIwogICAgICAsLS0uLSwgIwogICAgIHw9PScgLXwgIwogICAgIHw9PXwtIHwgIwogICBfX3w9PXwsIHwgIwosLS0uLSdcPXwtIHwgIwp8PT18LSB8PS8gLHwgIwp8PT18LiAvPXwgLXwgIwpcPT1cLCBgLScgLyAgIwogYC0tYC0tLS0nICAgIyMKICwtLS4tLiwtLiAgIwovPT0vLSB8XCAgXCAjCnw9PXxfIGAvXyAvICMKfD09fCAsICAgLyAgIwp8PT18LSAgLnwgICAjCnw9PXwgXyAsIFwgICMKLz09LyAgJ1wgIHwgIwpcPT1cIC9cPVwuJyAjCiBgLS1gICAgICAgICMjCiAgICAgICAgICAgICMKICAgXy4tLiAgICAgIwogLi0sLid8ICAgICAjCnw9PXwsIHwgICAgICMKfD09fC0gfCAgICAgIwp8PT18LCB8ICAgICAjCnw9PXwtIGAtLl8gICMKLz09LyAtICwgLC8gIwpgLS1gLS0tLS0nICAjIwogICAgICAgICBfX18gICAjCiAgLi0uXyAuJz0uJ1wgICMKIC89PS8gXHw9PXwgIHwgIwogfD09fCx8ICAvIC0gfCAjCiB8PT18ICBcLyAgLCB8ICMKIHw9PXwtICwgICBfIHwgIwogfD09fCBfIC9cICAgfCAjCiAvPT0vICAvIC8gLCAvICMKIGAtLWAuLyAgYC0tYCAgIyMKIC4tLl8gICAgICAgICAjCi89PS8gXCAgLi0uXyAgIwp8PT18LCBcLyAvLCAvICMKfD09fC0gIFx8ICB8ICAjCnw9PXwgLCAgfCAtfCAgIwp8PT18IC0gICBfIHwgICMKfD09fCAgL1wgLCB8ICAjCi89PS8sIHwgfC0gfCAgIwpgLS1gLi8gIGAtLWAgICMjCiAgICBfLC4tLS0uXyAgICAgIwogICwtLicgLCAtICBgLiAgICMKIC89PS9fLCAgLCAgLSBcICAjCnw9PXwgICAuPS4gICAgIHwgIwp8PT18XyA6IDs9OiAgLSB8ICMKfD09fCAsICc9JyAgICAgfCAjCiBcPT1cIC0gICAgLF8gLyAgIwogICcuPScuIC0gICAuJyAgICMKICAgIGAtLWAtLScnICAgICAjIwogICAgIF8gX18gICAgIwogIC4tYC4nICxgLiAgIwogLz09LywgLSAgIFwgIwp8PT18IF8gLj0uIHwgIwp8PT18ICwgJz0nLHwgIwp8PT18LSAgJy4uJyAgIwp8PT18LCAgfCAgICAgIwovPT0vIC0gfCAgICAgIwpgLS1gLS0tJyAgICAgIyMKICAgIF8sLi0tLS5fICAgICAgIwogICwtLicgLSAsICBgLiAgICAjCiAvPT0vICwgICAgLSAgXCAgICMKfD09fCAtIC49LiAgLCAgfCAgIwp8PT18ICA6IDs9OiAgLSB8ICAjCnw9PXwsICAnPScgICwgIHwgICMKIFw9PVwgXyAgIC0gICAgOyAgIwogICcuPScuICAsICA7IC1cICAjCiAgICBgLS1gLS0nJyBgLS1gICMjCiAgICAgICAgICAgICAgIwogIC4tLiwuLS0tLiAgICMKIC89PS8gIGAgICBcICAjCnw9PXwtLCAuPS4sIHwgIwp8PT18ICAgJz0nICAvICMKfD09fC0gLCAgIC4nICAjCnw9PXxfICAuICwnLiAgIwovPT0vICAvXCAsICApICMKYC0tYC1gLS1gLS0nICAjIwogICAsLSwtLS4gICMKICwtLictICBfXCAjCi89PS9fICxfLicgIwpcPT1cICBcICAgICMKIFw9PVwgLVwgICAjCiBfXD09XCAsXCAgIwovPT0vXC8gXyB8ICMKXD09XCAtICwgLyAjCiBgLS1gLS0tJyAgIyMKICwtLS4tLS0tLS0tLS4gICMKLz09LywgIC0gICAsIC1cICMKXD09XC4tLiAgLSAsLS4vICMKIGAtLWBcPT1cLSBcICAgICMKICAgICAgXD09XF8gXCAgICMKICAgICAgfD09fC0gfCAgICMKICAgICAgfD09fCwgfCAgICMKICAgICAgLz09LyAtLyAgICMKICAgICAgYC0tYC0tYCAgICMjCiAgICAgICAgICAgICAgIwogLi0tLi0uIC4tLi0uICMKLz09LyAtfC89LyAgfCAjCnw9PXwgLHx8PXwgLXwgIwp8PT18LSB8ID0vICB8ICMKfD09fCwgIFwvIC0gfCAjCnw9PXwtICAgLCAgIC8gIwovPT0vICwgXyAgLicgICMKYC0tYC4uLS0tJyAgICAjIwogICAgICAgICwtLi0uICMKICwtLS4tLi89LyAsLyAjCi89PS8sIHx8PXwgLXwgIwpcPT1cLCAgXCAvICx8ICMKIFw9PVwgLSAnIC0gLyAjCiAgXD09XCAsICAgfCAgIwogIHw9PXwgLSAgLC8gICMKICBcPT1cICBfIC8gICAjCiAgIGAtLWAtLScgICAgIyMKICAgICAgICAgLC0uLS4gICMKLC0uLi0uLS4vICBcPT1cICMKfCwgXD0vXD18LSB8PT18ICMKfC0gfC8gfC8gLCAvPT0vICMKIFwsICwgICAgIF98PT18ICMKIHwgLSAgLSAgLCB8PT18ICMKICBcICAsICAtIC89PS8gICMKICB8LSAgL1wgLz09LyAgICMKICBgLS1gICBgLS1gICAgICMjCiAgICAgICAgICwtLi0tLCAjCi4tLS4tLiAgLz0vLCAuJyAjClw9PVwgLVwvPS8tIC8gICAjCiBcPT1cIGAtJyAsLyAgICAjCiAgfD09fCwgIC0gfCAgICAjCiAvPT0vICAgLCAgIFwgICAjCi89PS8sIC4tLSwgLSBcICAjClw9PVwtIFwvPS8gLCAvICAjCiBgLS1gLScgIGAtLWAgICAjIwogICAgICAgICAgICAgICAgIwogLC0tLi0uICAuLSwtLS4gIwovPT0vLSAvIC89L18gLyAgIwpcPT1cLCBcLz0vLiAvICAgIwogXD09XCAgXC8gLS8gICAgIwogIHw9PXwgICxfLyAgICAgIwogIFw9PVwtLCAvICAgICAgIwogIC89PS8uXy8gICAgICAgIwogIGAtLWAtYCAgICAgICAgIyMKICAgICAgICAgICAgIwogICwtLSwtLS0tLiAjCiAvPT0vYCAtIC4vICMKIGAtLWA9Ly4gLyAgIwogIC89PS8tIC8gICAjCiAvPT0vLSAvLS4gICMKLz09LywgYC0tYFwgIwpcPT1cLSAgLSwgfCAjCiBgLS1gLi0uLS1gICMjCiwtLS4tLS0sICAjClw9PVwgLSAnXCAjCnw9PXwtIC4tJyAjCnw9PXwnIHwgICAjCnw9PXwtIHwgICAjCnw9PXwnIHwgICAjCnw9PXxgLGAtLiAjCi89PS8gICAgLyAjCmAtLWAtLS0nICAjIwogLC0tLCAgICAgICAgIwovPT0vLVwgICAgICAgIwpcPT1cYCBcICAgICAgIwogXD09XCAgXCAgICAgIwogIFw9PVwtIFwgICAgIwogICBcPT1cJyBcICAgIwogICAgXD09XC0gXCAgIwogICAgIFw9PVwnIFwgIwogICAgICAnLSctLScgIyMKICwtLS0uLS0uICAjCi9gIC0gLz09LyAgIwpgLS4gLXw9PXwgICMKICB8IGB8PT18ICAjCiAgfCAtfD09fCAgIwogIHwgYHw9PXwgICMKLi0nLCd8PT18ICAjClwgICAgXD09XCAgIwogYC0tLWAtLS1gICMjCiAgICAgICwtLS4tLS4gICAgICMKICAgICAvPT0vIF8tIFwgICAgIwogICAgLz09LyAtL1wuIFwgICAjCiAgIC89PS8sIC89PVwgLFwgICMKICAgXD09XC0vIFw9PVwgLmAgIwogICAgYC0tYCAgIGAtLWAgICAjCiAgICAgICAgICAgICAgICAgICMKICAgICAgICAgICAgICAgICAgIwogICAgICAgICAgICAgICAgICAjIwogICAgICAgICAgICAgICAgIwogICAgICAgICAgICAgICAgIwogICAgICAgICAgICAgICAgIwogICAgICAgICAgICAgICAgIwogICAgICAgICAgICAgICAgIwogLC0tLi0tLS0tLS0tLiAgIwovPT0vLCAgLSAgICwgLVwgIwpcPT1cLi0uICAtICwtLi8gIwogYC0tYC0tLS0tLS0tYCAgIyMKICwtLSwgICAgIwovPT0vLVwgICAjClw9PVxgIFwgICMKIFw9PVwtLicgIwogIGAtLWAgICAjCiAgICAgICAgICMKICAgICAgICAgIwogICAgICAgICAjCiAgICAgICAgICMjCiAgICwtLS0uICAgICAgIwogLi0tLicgIFwgICAgICMKIFw9PVwtL1wgXCAgICAjCiAvPT0vLXxfXCB8ICAgIwogXD09XCwgICAtIFwgICMKIC89PS8gLSAgICx8ICAjCi89PS8tICAvXCAtIFwgIwpcPT1cIF8uXD1cLi0nICMKIGAtLWAgICAgICAgICAjIwogICAgICAgICAgICAgICMKICAgIF8uLi0tLS4gICAjCiAgLicgLicuLS4gXCAgIwogLz09Ly0gJz0nIC8gICMKIHw9PXwtLCAgICcgICAjCiB8PT18ICAuPS4gXCAgIwogLz09Ly0gJz0nICx8ICMKfD09fCAgIC0gICAvICAjCmAtLl9gLl9fXywnICAgIyMKICAgXywuLS0tLS4gICAjCiAuJyAuJyAtICAgXCAgIwovPT0vICAsICAsLScgICMKfD09fC0gICB8ICAuICAjCnw9PXxfICAgYC0nIFwgIwp8PT18ICAgXyAgLCB8ICMKXD09XC4gICAgICAgLyAjCiBgLS5gLl9fXy4tJyAgIwogICAgICAgICAgICAgICMjCiAgICAgICAgICAgICAgIwogIF8sLi4tLS0uXyAgICMKLz09LywgICAtICBcICAjCnw9PXwgICBfICAgX1wgIwp8PT18ICAuPS4gICB8ICMKfD09fCx8ICAgfCAtfCAjCnw9PXwgICc9JyAgIC8gIwp8PT18LSwgICBfYC8gICMKYC0uYC5fX19fLicgICAjIwogICAgICAsLS0tLS4gICMKICAgLC0uLS1gICwgXCAjCiAgfD09fC0gIF8uLWAgIwogIHw9PXwgICBgLi0uICMKIC89PS9fICwgICAgLyAjCiB8PT18ICAgIC4tJyAgIwogfD09fF8gICxgLS5fICMKIC89PS8gLCAgICAgLyAjCiBgLS1gLS0tLS1gYCAgIyMKICAgICBfLC0tLS4gICMKICAuLWAuJyAsICBcICMKIC89PS9fICBfLi0nICMKLz09Ly0gICcuLi0uICMKfD09fF8gLCAgICAvICMKfD09fCAgIC4tLScgICMKfD09fC0gIHwgICAgICMKLz09LyAgIFwgICAgICMKYC0tYC0tLScgICAgICMjCiAgICAgIF8sLS0tLiAgICMKICBfLj0nLictLCAgXCAgIwogLz09LictICAgICAvICAjCi89PS8gLSAgIC4tJyAgICMKfD09fF8gICAvXywtLiAgIwp8PT18ICAsIFxfLicgKSAjClw9PVwtICAsICAgICggICMKIC89PS8gXyAgLCAgLyAgIwogYC0tYC0tLS0tLScgICAjIwogLC0tLi0sLC0sLS0sICMKLz09LyAgL3w9fCAgfCAjCnw9PXxfIHx8PXwsIHwgIwp8PT18ICx8Lz18IF98ICMKfD09fC0gYC0nIF8gfCAjCnw9PXwgIF8gICAgIHwgIwp8PT18ICAgLi0uICxcICMKLz09LywgLy89LyAgfCAjCmAtLWAtJyBgLWAtLWAgIyMKICAgLj0tLi0uICMKICAvPT0vXyAvICMKIHw9PXwsIHwgICMKIHw9PXwgIHwgICMKIHw9PXwtIHwgICMKIHw9PXwgLHwgICMKIHw9PXwtIHwgICMKIC89PS8uIC8gICMKIGAtLWAtYCAgICMjCiAgICAgICwtLS4tLCAjCiAgICAgfD09JyAtfCAjCiAgICAgfD09fC0gfCAjCiAgIF9ffD09fCwgfCAjCiwtLS4tJ1w9fC0gfCAjCnw9PXwtIHw9LyAsfCAjCnw9PXwuIC89fCAtfCAjClw9PVwsIGAtJyAvICAjCiBgLS1gLS0tLScgICAjIwogLC0tLi0uLC0uICAjCi89PS8tIHxcICBcICMKfD09fF8gYC9fIC8gIwp8PT18ICwgICAvICAjCnw9PXwtICAufCAgICMKfD09fCBfICwgXCAgIwovPT0vICAnXCAgfCAjClw9PVwgL1w9XC4nICMKIGAtLWAgICAgICAgIyMKICAgICAgICAgICAgIwogICBfLi0uICAgICAjCiAuLSwuJ3wgICAgICMKfD09fCwgfCAgICAgIwp8PT18LSB8ICAgICAjCnw9PXwsIHwgICAgICMKfD09fC0gYC0uXyAgIwovPT0vIC0gLCAsLyAjCmAtLWAtLS0tLScgICMjCiAgICAgICAgIF9fXyAgICMKICAuLS5fIC4nPS4nXCAgIwogLz09LyBcfD09fCAgfCAjCiB8PT18LHwgIC8gLSB8ICMKIHw9PXwgIFwvICAsIHwgIwogfD09fC0gLCAgIF8gfCAjCiB8PT18IF8gL1wgICB8ICMKIC89PS8gIC8gLyAsIC8gIwogYC0tYC4vICBgLS1gICAjIwogLi0uXyAgICAgICAgICMKLz09LyBcICAuLS5fICAjCnw9PXwsIFwvIC8sIC8gIwp8PT18LSAgXHwgIHwgICMKfD09fCAsICB8IC18ICAjCnw9PXwgLSAgIF8gfCAgIwp8PT18ICAvXCAsIHwgICMKLz09LywgfCB8LSB8ICAjCmAtLWAuLyAgYC0tYCAgIyMKICAgIF8sLi0tLS5fICAgICAjCiAgLC0uJyAsIC0gIGAuICAgIwogLz09L18sICAsICAtIFwgICMKfD09fCAgIC49LiAgICAgfCAjCnw9PXxfIDogOz06ICAtIHwgIwp8PT18ICwgJz0nICAgICB8ICMKIFw9PVwgLSAgICAsXyAvICAjCiAgJy49Jy4gLSAgIC4nICAgIwogICAgYC0tYC0tJycgICAgICMjCiAgICAgXyBfXyAgICAjCiAgLi1gLicgLGAuICAjCiAvPT0vLCAtICAgXCAjCnw9PXwgXyAuPS4gfCAjCnw9PXwgLCAnPScsfCAjCnw9PXwtICAnLi4nICAjCnw9PXwsICB8ICAgICAjCi89PS8gLSB8ICAgICAjCmAtLWAtLS0nICAgICAjIwogICAgXywuLS0tLl8gICAgICAjCiAgLC0uJyAtICwgIGAuICAgICMKIC89PS8gLCAgICAtICBcICAgIwp8PT18IC0gLj0uICAsICB8ICAjCnw9PXwgIDogOz06ICAtIHwgICMKfD09fCwgICc9JyAgLCAgfCAgIwogXD09XCBfICAgLSAgICA7ICAjCiAgJy49Jy4gICwgIDsgLVwgICMKICAgIGAtLWAtLScnIGAtLWAgIyMKICAgICAgICAgICAgICAjCiAgLi0uLC4tLS0uICAgIwogLz09LyAgYCAgIFwgICMKfD09fC0sIC49LiwgfCAjCnw9PXwgICAnPScgIC8gIwp8PT18LSAsICAgLicgICMKfD09fF8gIC4gLCcuICAjCi89PS8gIC9cICwgICkgIwpgLS1gLWAtLWAtLScgICMjCiAgICwtLC0tLiAgIwogLC0uJy0gIF9cICMKLz09L18gLF8uJyAjClw9PVwgIFwgICAgIwogXD09XCAtXCAgICMKIF9cPT1cICxcICAjCi89PS9cLyBfIHwgIwpcPT1cIC0gLCAvICMKIGAtLWAtLS0nICAjIwogLC0tLi0tLS0tLS0tLiAgIwovPT0vLCAgLSAgICwgLVwgIwpcPT1cLi0uICAtICwtLi8gIwogYC0tYFw9PVwtIFwgICAgIwogICAgICBcPT1cXyBcICAgIwogICAgICB8PT18LSB8ICAgIwogICAgICB8PT18LCB8ICAgIwogICAgICAvPT0vIC0vICAgIwogICAgICBgLS1gLS1gICAgIyMKICAgICAgICAgICAgICAjCiAuLS0uLS4gLi0uLS4gIwovPT0vIC18Lz0vICB8ICMKfD09fCAsfHw9fCAtfCAjCnw9PXwtIHwgPS8gIHwgIwp8PT18LCAgXC8gLSB8ICMKfD09fC0gICAsICAgLyAjCi89PS8gLCBfICAuJyAgIwpgLS1gLi4tLS0nICAgICMjCiAgICAgICAgLC0uLS4gIwogLC0tLi0uLz0vICwvICMKLz09LywgfHw9fCAtfCAjClw9PVwsICBcIC8gLHwgIwogXD09XCAtICcgLSAvICMKICBcPT1cICwgICB8ICAjCiAgfD09fCAtICAsLyAgIwogIFw9PVwgIF8gLyAgICMKICAgYC0tYC0tJyAgICAjIwogICAgICAgICAsLS4tLiAgIwosLS4uLS4tLi8gIFw9PVwgIwp8LCBcPS9cPXwtIHw9PXwgIwp8LSB8LyB8LyAsIC89PS8gIwogXCwgLCAgICAgX3w9PXwgIwogfCAtICAtICAsIHw9PXwgIwogIFwgICwgIC0gLz09LyAgIwogIHwtICAvXCAvPT0vICAgIwogIGAtLWAgIGAtLWAgICAgIyMKICAgICAgICAgLC0uLS0sICMKLi0tLi0uICAvPS8sIC4nICMKXD09XCAtXC89Ly0gLyAgICMKIFw9PVwgYC0nICwvICAgICMKICB8PT18LCAgLSB8ICAgICMKIC89PS8gICAsICAgXCAgICMKLz09LywgLi0tLCAtIFwgICMKXD09XC0gXC89LyAsIC8gICMKIGAtLWAtJyAgYC0tYCAgICMjCiAgICAgICAgICAgICAgICAjCiAsLS0uLS4gIC4tLC0tLiAjCi89PS8tIC8gLz0vXyAvICAjClw9PVwsIFwvPS8uIC8gICAjCiBcPT1cICBcLyAtLyAgICAjCiAgfD09fCAgLF8vICAgICAjCiAgXD09XC0sIC8gICAgICAjCiAgLz09Ly5fLyAgICAgICAjCiAgYC0tYC1gICAgICAgICAjIwogICAgICAgICAgICAjCiAgLC0tLC0tLS0uICMKIC89PS9gIC0gLi8gIwogYC0tYD0vLiAvICAjCiAgLz09Ly0gLyAgICMKIC89PS8tIC8tLiAgIwovPT0vLCBgLS1gXCAjClw9PVwtICAtLCB8ICMKIGAtLWAuLS4tLWAgIyMKIC4tLi0tLiAgIwogXCAgXD09XCAjCiAvLSAvPT0vICMKLycgLz09LyAgIwp8LHw9PXwgICAjClwgIFw9PVwgICMKIFwgLFw9PVwgIwogLyAtLz09LyAjCiBgLSctLScgICMjCiAsLS0uLSwgIwovPT0vICAvICMKfD09fF8gfCAjCnw9PXwgLHwgIwp8PT18LSB8ICMKfD09fCAgfCAjCnw9PXwgIHwgIwovPT0vLCAvICMKYC0tYC0nICAjIwogLi0tLi0uICAjCi89PS8gIC8gICMKXD09XCAtXCAgIwogXD09XCBgXCAjCiAgfD09fCx8ICMKIC89PS8gIC8gIwovPT0vLCAvICAjClw9PVwtIFwgICMKIGAtLWAtJyAgIyMKfiMKICMKICMKICMKICMKICMKICMKICMKICMjCiAgICwtLS0uICAgICAgIwogLi0tLicgIFwgICAgICMKIFw9PVwtL1wgXCAgICAjCiAvPT0vLXxfXCB8ICAgIwogXD09XCwgICAtIFwgICMKIC89PS8gLSAgICx8ICAjCi89PS8tICAvXCAtIFwgIwpcPT1cIF8uXD1cLi0nICMKIGAtLWAgICAgICAgICAjIwogICAgXywuLS0tLl8gICAgICMKICAsLS4nICwgLSAgYC4gICAjCiAvPT0vXywgICwgIC0gXCAgIwp8PT18ICAgLj0uICAgICB8ICMKfD09fF8gOiA7PTogIC0gfCAjCnw9PXwgLCAnPScgICAgIHwgIwogXD09XCAtICAgICxfIC8gICMKICAnLj0nLiAtICAgLicgICAjCiAgICBgLS1gLS0nJyAgICAgIyMKICAgICAgICAgICAgICAjCiAuLS0uLS4gLi0uLS4gIwovPT0vIC18Lz0vICB8ICMKfD09fCAsfHw9fCAtfCAjCnw9PXwtIHwgPS8gIHwgIwp8PT18LCAgXC8gLSB8ICMKfD09fC0gICAsICAgLyAjCi89PS8gLCBfICAuJyAgIwpgLS1gLi4tLS0nICAgICMjCiAgICwtLS0uICAgICAgIwogLi0tLicgIFwgICAgICMKIFw9PVwtL1wgXCAgICAjCiAvPT0vLXxfXCB8ICAgIwogXD09XCwgICAtIFwgICMKIC89PS8gLSAgICx8ICAjCi89PS8tICAvXCAtIFwgIwpcPT1cIF8uXD1cLi0nICMKIGAtLWAgICAgICAgICAjIwogICAgXywuLS0tLl8gICAgICMKICAsLS4nICwgLSAgYC4gICAjCiAvPT0vXywgICwgIC0gXCAgIwp8PT18ICAgLj0uICAgICB8ICMKfD09fF8gOiA7PTogIC0gfCAjCnw9PXwgLCAnPScgICAgIHwgIwogXD09XCAtICAgICxfIC8gICMKICAnLj0nLiAtICAgLicgICAjCiAgICBgLS1gLS0nJyAgICAgIyMKICAgICAgICAgICAgICAjCiAuLS0uLS4gLi0uLS4gIwovPT0vIC18Lz0vICB8ICMKfD09fCAsfHw9fCAtfCAjCnw9PXwtIHwgPS8gIHwgIwp8PT18LCAgXC8gLSB8ICMKfD09fC0gICAsICAgLyAjCi89PS8gLCBfICAuJyAgIwpgLS1gLi4tLS0nICAgICMjCt8jCiAjCiAjCiAjCiAjCiAjCiAjCiAjCiAjIw=='
);

export default chiseled;
