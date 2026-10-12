const today = new Date();
today.setHours(0, 0, 0, 0);

const performanceDate = new Date(2026, 10, 7);
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysUntilShow = Math.ceil((performanceDate - today) / millisecondsPerDay);
const countdown = document.getElementById('倒數');

if (countdown) {
	if (daysUntilperformance > 0) {
		countdown.textContent = `距離演出還有 ${daysUntilperformance} 天`;
	} else if (daysUntilperformance === 0) {
		countdown.textContent = '今天就是演出日！';
	} else {
		countdown.textContent = `本場演出已結束`;
	}
}
