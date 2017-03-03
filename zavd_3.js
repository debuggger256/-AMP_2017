var arr = [];

var i;
for(i = 0; i < 16; i++)
{
	arr[i] = Math.random() * 100;
	console.log(arr[i]);
}

console.log("\n\n");
var j = 0;
for(i = 0; i < 16; i++)
	if(arr[i] < arr[j]) j = i;

if(arr[0] != arr[j])
{
	var t;
	t = arr[0];
	arr[0] = arr[j];
	arr[j] = t;
}

for(i = 0; i < 16; i++)
	console.log(arr[i]);