const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	throw "Not implemented";
	if (typeof sampleActivity !== "string") return false;
	let s = parseFloat(sampleActivity);
	let m = MODERN_ACTIVITY;
	let y = 0;
	while (m > s) {
		m = m / 2;
		y += HALF_LIFE_PERIOD;
	}
	return y;
};
