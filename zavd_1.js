var n = 6457;
var a, b, c, d;
a = n / 1000;
b = (n % 1000) / 100;
c = (n % 100) / 10;
d = n % 10;
if ((a != b && a!= c && a != d) || (b != a && b!= c && b != d) || (c != a && c!= b && c != d) || (d != a && d!= b && d != c))
console.log(Math.floor(d), Math.floor(c), Math.floor(b), Math.floor(a));