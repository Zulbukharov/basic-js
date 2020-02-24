module.exports = class DepthCalculator {
	// d => array of each branch depth (DFS)
	// i => current branch depth
	// a => current array
	calculateDepth(a, i = 1, d = [1]) {
		a.forEach(v => {
			if (Array.isArray(v)) {
				d.push(i + 1);
				this.calculateDepth(v, i + 1, d);
			}
		})
		return getMaxOfArray(d);
	}
};

// get max of array
function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray);
}