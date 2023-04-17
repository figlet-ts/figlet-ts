import { FontFile } from '../../FontFile';

const train = new FontFile(
    'train',
    'ZmxmMmEkIDYgNiAxMiA2MyAxMSAwIDI0NTExIDAKQXV0aG9yIDpteWZsaXgKRGF0ZSAgIDogMjAwMy8xMS82IDE5OjA3OjEyClZlcnNpb246IDEuMAotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tClRoaXMgZm9udCBoYXMgYmVlbiBjcmVhdGVkIHVzaW5nIEphdkUncyBGSUdsZXQgZm9udCBleHBvcnQgYXNzaXN0YW50LgpIYXZlIGEgbG9vayBhdDogaHR0cDovL3d3dy5qYXZlLmRlCgpQZXJtaXNzaW9uIGlzIGhlcmVieSBnaXZlbiB0byBtb2RpZnkgdGhpcyBmb250LCBhcyBsb25nIGFzIHRoZQptb2RpZmllcidzIG5hbWUgaXMgcGxhY2VkIG9uIGEgY29tbWVudCBsaW5lLgogICAgICAgICAgIwogICAgbyBPIE8gIwogICBvICAgICAgIwogIFRTX19bT10gIwogez09PT09PXwgIwouL28tLTAwMCcgIyMKICAgIF8gICAgIwogICB8IHwgICAjCiAgIHxffCAgICMKICBfKF8pXyAgIwpffCAiIiIgfCAjCiJgLTAtMC0gICMjCiAgIF8gXyAgICMKICAoIHwgKSAgIwogICBWIFYgICAjCiAgX19fX18gICMKX3wgICAgIHwgIwoiYC0wLTAtJyAjIwogX3wgfCB8XyAgIwp8XyAgLiAgX3wgIwp8XyAgICAgX3wgIwogIHxffF98ICAgIwpffCIiIiIifCAgIwoiYC0wLTAtJyAgIyMKICAgfHxfICAgIwogIChfLTwgICAjCiAgLyBfLyAgICMKICBffHxfXyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgXyAgX18gICMKIChfKS8gLyAgIwogICAvIC9fICAjCiAgL18vKF8pICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogIF8gICAgICAjCi8gX3xfX18gICMKPiBffF8gX3wgIwpcX19fX198ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgKCIpICAgIwogICAgXHwgICAjCiAgICAgICAgICMKICBfX19fXyAgIwpffCAgICAgfCAjCiJgLTAtMC0nICMjCiAgIC8gLyAgICMKICB8IHwgICAgIwogIHwgfCAgICAjCiAgX1xfXF8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogIFwiXCAgICAjCiAgIHwgfCAgICMKICAgfCB8ICAgIwogIC9fL19fICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICBfL1xfICAgIwogID4gIDwgICAjCiAgIFwvICAgICMKICBfX19fXyAgIwpffCAgICAgfCAjCiJgLTAtMC0nICMjCiAgX3wifF8gICMKIHxfICAgX3wgIwogICB8X3wgICAjCiAgX19fX18gICMKX3wgICAgIHwgIwoiYC0wLTAtJyAjIwogICAgICAgICAjCiAgICBfICAgICMKICAgKCApICAgIwogIF98L19fICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgICAgICAgIwogICBfX18gICAjCiAgfF9fX3wgICMKICBfX19fXyAgIwpffCAgICAgfCAjCiJgLTAtMC0nICMjCiAgICAgICAgICMKICAgICAgICAgIwogICAgXyAgICAjCiAgXyhfKV8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICAgICBfXyAjCiAgICAgLyIvICMKICAgIC8gLyAgIwogIF8vXy9fICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgIF9fICAgIwogICAvICBcICAjCiAgfCAoKSB8ICMKICBfXF9fLyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICBfICAgICMKICAgLyB8ICAgIwogICB8IHwgICAjCiAgX3xffF8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfX18gICAjCiAgfF8gICkgICMKICAgLyAvICAgIwogIC9fX198ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgX19fXyAgIwogIHxfXyAvICAjCiAgIHxfIFwgICMKICB8X19fLyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgXyBfICAgICMKIHwgfCB8ICAgIwogfF8gIF98ICAjCiAgX3xffF8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfX18gICAjCiAgfCBfX3wgICMKICB8X18gXCAgIwogIHxfX18vICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgIF9fICAgIwogICAvIC8gICAjCiAgLyBfIFwgICMKICBcX19fLyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF9fX18gICMKICB8X18gIHwgIwogICAgLyAvICAjCiAgXy9fL18gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfX18gICAjCiAgKCBfICkgICMKICAvIF8gXCAgIwogIFxfX18vICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgX19fICAgIwogIC8gXyBcICAjCiAgXF8sIC8gICMKICBfL18vXyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICBfICAgICMKICAgKF8pICAgIwogICAgXyAgICAjCiAgXyhfKV8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICAoXykgICAjCiAgICBfICAgICMKICAgKCApICAgIwogIF98L19fICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgIF9fICAgIwogICAvIC8gICAjCiAgPCA8ICAgICMKICBfXF9cXyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF9fXyAgICMKICB8X19ffCAgIwogIHxfX198ICAjCiAgX19fX18gICMKX3wgICAgIHwgIwoiYC0wLTAtJyAjIwogICBfXyAgICAjCiAgIFwgXCAgICMKICAgID4gPiAgIwogIF8vXy9fICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgX19fICAgIwogIHxfXyBcICAjCiAgICAvXy8gICMKICBfKF8pXyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAvIF9fIFwgICMKLyAvIF9gIHwgIwpcIFxfXyxffCAjCiBcX19fXy8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfX18gICAjCiAgLyAgIFwgICMKICB8IC0gfCAgIwogIHxffF98ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgX19fICAgIwogIHwgXyApICAjCiAgfCBfIFwgICMKICB8X19fLyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF9fXyAgICMKICAvIF9ffCAgIwogfCAoX18gICAjCiAgXF9fX3wgICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfX18gICAjCiAgfCAgIFwgICMKICB8IHwpIHwgIwogIHxfX18vICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgX19fICAgIwogIHwgX198ICAjCiAgfCBffCAgICMKICB8X19ffCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICBfX18gICMKICAgfCBfX3wgIwogICB8IF98ICAjCiAgX3xffF8gICMKX3wgIiIiIHwgIwoiYC0wLTAtJyAjIwogICBfX18gICAjCiAgLyBfX3wgICMKIHwgKF8gfCAgIwogIFxfX198ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICBfICBfICAgIwogfCB8fCB8ICAjCiB8IF9fIHwgICMKIHxffHxffCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF9fXyAgICMKICB8XyBffCAgIwogICB8IHwgICAjCiAgfF9fX3wgICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICAgICBfICAjCiAgIF8gfCB8ICMKICB8IHx8IHwgIwogIF9cX18vICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICBfICBfXyAgIwogfCB8LyAvICAjCiB8ICcgPCAgICMKIHxffFxfXCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF8gICAgICMKICB8IHwgICAgIwogIHwgfF9fICAjCiAgfF9fX198ICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogX18gIF9fICAjCnwgIFwvICB8ICMKfCB8XC98IHwgIwp8X3xfX3xffCAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICBfICBfICAgIwogfCBcfCB8ICAjCiB8IC5gIHwgICMKIHxffFxffCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF9fXyAgICMKICAvIF8gXCAgIwogfCAoXykgfCAjCiAgXF9fXy8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICAgX19fICAjCiAgIHwgXyBcICMKICAgfCAgXy8gIwogIF98X3xfICAjCl98ICIiIiB8ICMKImAtMC0wLScgIyMKICBfX18gICAgIwogLyBfIFwgICAjCnwgKF8pIHwgICMKIFxfX1xfXCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF9fXyAgICMKICB8IF8gXCAgIwogIHwgICAvICAjCiAgfF98X1wgICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfX18gICAjCiAgLyBfX3wgICMKICBcX18gXCAgIwogIHxfX18vICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICBfX19fXyAgIwogfF8gICBffCAjCiAgIHwgfCAgICMKICBffF98XyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgXyAgIF8gICMKIHwgfCB8IHwgIwogfCB8X3wgfCAjCiAgXF9fXy8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogX18gICBfXyAjCiBcIFwgLyAvICMKICBcIFYgLyAgIwogIF9cXy9fICAjCl98ICIiIiJ8ICMKImAtMC0wLScgIyMKX18gICAgICBfXyMKXCBcICAgIC8gLyMKIFwgXC9cLyAvICMKICBcXy9cXy8gICMKX3wiIiIiInwgICMKImAtMC0wLScgICMjCiBfXyAgX18gICMKIFwgXC8gLyAgIwogID4gIDwgICAjCiAvXy9cX1wgICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogX18gICBfXyAjCiBcIFwgLyAvICMKICBcIFYgLyAgIwogIF98X3xfICAjCl98ICIiIiB8ICMKImAtMC0wLScgIyMKICAgX19fXyAgIwogIHxfICAvICAjCiAgIC8gLyAgICMKICAvX19ffCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgfCIifCAgICMKICB8IHwgICAgIwogIHwgfCAgICAjCiAgfF9ffF8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogX18gICAgICAjCiBcIFwgICAgICMKICBcIFwgICAgIwogIF9cX1xfICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICB8IiJ8ICAgIwogICB8IHwgICAjCiAgIHwgfCAgICMKICB8X198XyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIC9cICAgICMKICB8L1x8ICAgIwogICAgICAgICAjCiAgX19fX18gICMKX3wgICAgIHwgIwoiYC0wLTAtJyAjIwogICAgICAgICAjCiAgICAgICAgICMKICAgX19fICAgIwogIHxfX198ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAoIikgICAgIwogICBcfCAgICAjCiAgICAgICAgICMKICBfX19fXyAgIwpffCAgICAgfCAjCiJgLTAtMC0nICMjCiAgICAgICAgICMKICBfXyBfICAgIwogLyBfYCB8ICAjCiBcX18sX3wgICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogIF8gICAgICAjCiB8IHxfXyAgICMKIHwgJ18gXCAgIwogfF8uX18vICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgICAgICAgIwogICBfXyAgICAjCiAgLyBffCAgICMKICBcX198XyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICAgXyAgICMKICBfX3wgfCAgIwogLyBfYCB8ICAjCiBcX18sX3wgICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICAgICAgICAjCiAgIF9fXyAgICMKICAvIC1fKSAgIwogIFxfX198ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgICBfXyAgIwogICAgLyBffCAjCiAgIHwgIF98ICMKICBffF98XyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF9fIF8gICMKICAvIF9gIHwgIwogIFxfXywgfCAjCiAgfF9fXy8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogIF8gICAgICAjCiB8IHxfICAgICMKIHwgJyBcICAgIwogfF98fF98ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgIF8gICAgIwogICAoXykgICAjCiAgIHwgfCAgICMKICBffF98XyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICAoXykgICMKICAgIHwgfCAgIwogICBfLyB8ICAjCiAgfF9fL18gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfICAgICAjCiAgfCB8X18gICMKICB8IC8gLyAgIwogIHxfXF9cICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgIF8gICAgIwogICB8IHwgICAjCiAgIHwgfCAgICMKICBffF98XyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICAgICAgICMKICBfIF9fICAgIwogfCAnICBcICAjCiB8X3xffF98ICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICAgICAgICAjCiAgXyBfICAgICMKIHwgJyBcICAgIwogfF98fF98ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgICAgICAgIwogICBfX18gICAjCiAgLyBfIFwgICMKICBcX19fLyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF8gX18gICMKICB8ICdfIFwgIwogIHwgLl9fLyAjCiAgfF98X18gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogIF9fIF8gICAjCiAvIF9gIHwgICMKIFxfXywgfCAgIwogIF9ffF98ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgICAgICAgIwogICAgXyBfICAjCiAgIHwgJ198ICMKICBffF98XyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICAgICAgICMKICAgX19fICAgIwogIChfLTwgICAjCiAgL19fL18gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICBfICAgICAjCiAgfCB8XyAgICMKICB8ICBffCAgIwogIF9cX198ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgICAgICAgIwogIF8gIF8gICAjCiB8ICt8IHwgICMKICBcXyxffCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgICAgICAgICMKICBfXyBfXyAgIwogIFwgViAvICAjCiAgX1xfL18gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogICAgICAgICAgIwogX18gX18gX18gIwogXCBWICBWIC8gIwogIFxfL1xfLyAgIwpffCIiIiIifCAgIwoiYC0wLTAtJyAgIyMKICAgICAgICAgIwogIF9fIF9fICAjCiAgXCBcIC8gICMKICAvX1xfXCAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIF8gIF8gICMKICB8IHx8IHwgIwogICBcXywgfCAjCiAgX3xfXy8gICMKX3wgIiIiInwgIwoiYC0wLTAtJyAjIwogICAgICAgICAjCiAgICBfX18gICMKICAgfF8gLyAgIwogIF8vX198ICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgLyIvICAgIwogX3wgfCAgICAjCiAgfCB8ICAgICMKICBfXF9cXyAgIwpffCIiIiIifCAjCiJgLTAtMC0nICMjCiAgIHwifCAgICMKICAgfCB8ICAgIwogICB8IHwgICAjCiAgX3xffF8gICMKX3wiIiIiInwgIwoiYC0wLTAtJyAjIwogIFwiXCAgICAjCiAgIHwgfF8gICMKICAgfCB8ICAgIwogIC9fL19fICAjCl98IiIiIiJ8ICMKImAtMC0wLScgIyMKICAgL1wvfCAgIwogIHwvXC8gICAjCiAgICAgICAgICMKICBfX19fXyAgIwpffCAgICAgfCAjCiJgLTAtMC0nICMjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCiAgICAgICAjCiAgIF8gXyAjIwrWIwogIwogIwogIwogIwogIyMK3CMKICMKICMKICMKICMKICMjCuQjCiAjCiAjCiAjCiAjCiAjIwr2IwogIwogIwogIwogIwogIyMK/CMKICMKICMKICMKICMKICMjCt8jCiAjCiAjCiAjCiAjCiAjIwo='
);

export default train;
