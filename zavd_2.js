var m = 32565, n = 7676;

var md = m, nd = n; // temp
var nm = 0, nn = 0; // number of digits;

// a:
var mk = 0, nk = 0; // number of 5
while (md != 0 || nd != 0)
{
	if (md != 0)
	{
		if (md % 10 == 5) mk++;
		md /= 10;
		md = Math.floor(md);
		nm++;
	}
	if (nd != 0)
	{
		if (nd % 10 == 5) nk++;
		nd /= 10;
		nd = Math.floor(nd);
		nn++;	
	}
}

if (mk > nk) console.log("M has more 5 then N ( M = ", mk, ", N = ", nk, ")"); else
if (mk < nk) console.log("N has more 5 then M ( M = ", mk, ", N = ", nk, ")"); else
console.log("There are same numbers of 5");

var fm, lm, fn, ln;
// b:
fm = Math.floor(m / Math.pow(10, nm - 1));
lm = m % 10;
console.log("Sum of last and first digits of M: ", fm + lm);

fn = Math.floor(n / Math.pow(10, nn - 1));
ln = n % 10;
console.log("Sum of last and first digits of N: ", fn + ln);

// c:
md = ((m - fm * Math.pow(10, nm - 1)) + (lm * Math.pow(10, nm - 1))) - lm + fm;
nd = ((n - fn * Math.pow(10, nn - 1)) + (ln * Math.pow(10, nn - 1))) - ln + fn;
console.log(md, nd);
