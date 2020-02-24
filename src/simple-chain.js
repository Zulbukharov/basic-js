const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		if (typeof value === "undefined") {
			value = " ";
		}
		this.chain.push(String(value));
		return chainMaker;
	},
	removeLink(position) {
		if (!Number.isInteger(position) || position > this.getLength() || position <= 0) {
			this.chain = [];
			throw new Error("Error");
		} else
			this.chain.splice(position - 1, 1);
		return chainMaker;
	},
	reverseChain() {
		this.chain.reverse();
		return chainMaker;
	},
	finishChain() {
		let s = "";
		this.chain.forEach((v, i) => s += i < this.getLength() - 1 ? `( ${v} )~~` : `( ${v} )`);
		this.chain = [];
		return s;
	}
};

module.exports = chainMaker;
