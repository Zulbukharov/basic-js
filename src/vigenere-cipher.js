class VigenereCipheringMachine {
	constructor(r) {
		this.reverse = r;
	}

	encrypt(s, k) {
		let key = s.length > k.length ? k.repeat(Math.ceil(s.length / k.length)).slice(0, s.length) : k;
		let i = 0;
		let a = [...s].map((c) => {
			// if not a-z
			if (!(c.match(/[a-z]/i)))
				return c;
			let k = key.charCodeAt(i);
			let s = c.charCodeAt(0);
			let d = (k - (k >= 97 && k <= 122 ? 97 : 65)) + (s - (s >= 97 && k <= 122 ? 97 : 65));
			i++;
			return String.fromCharCode((s >= 97 && k <= 122 ? 97 : 65) + (d % 26));
		});
		return a.join('').toUpperCase();
	}

	decrypt(s, k) {
		s = this.reverse === false ? [...s].reverse().join('') : s;
		let key = s.length > k.length ? k.repeat(Math.ceil(s.length / k.length)).slice(0, s.length) : k;
		let i = 0;
		let a = [...s].map((c) => {
			// if not a-z
			if (!(c.match(/[a-z]/i)))
				return c;
			let k = key.charCodeAt(i);
			let s = c.charCodeAt(0);
			s = s - (s >= 97 && s <= 122 ? 97 : 65);
			k = k - (k >= 97 && k <= 122 ? 97 : 65);
			let d = s - k;
			i++;
			d = d < 0 ? 26 + d : d;
			return String.fromCharCode(65 + (d % 26));
		});
		if (this.reverse === false)
			return a.reverse().join('').toUpperCase();
		return a.join('').toUpperCase();
	}
}

module.exports = VigenereCipheringMachine;
