module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw new Error("Invalid arguments");
	let t = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "--double-next") {
			t.push(arr[i + 1]);
		} else if (arr[i] === "--double-prev") {
			t.push(arr[i - 1]);
		} else t.push(arr[i]);
	}
	t = t.filter(v => v !== undefined);
	let la = [];
	let d = 0;
	for (let i = 0; i < t.length; i++) {
		if (t[i] === '--discard-next') {
			d = 1;
			continue;
		} else if (t[i] === '--discard-prev') {
			la.pop();
		} else
			la.push(t[i]);

		if (d === 1) {
			la.pop();
			d = 0;
		}
	}
	return la;
};
