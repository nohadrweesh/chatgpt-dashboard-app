// Create chart
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['January', 'February', 'March'],
		datasets: [{
			label: 'Revenue',
			data: [10000, 12000, 15000],
			backgroundColor: '#4CAF50'
		}, {
			label: 'Expenses',
			data: [8000, 9000, 11000],
			backgroundColor: '#F44336'
		}, {
			label: 'Profit',
			data: [2000, 3000, 4000],
			backgroundColor: '#2196F3'
		}]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top'
		},
		title: {
			display: false
		},
		scales: {
			xAxes: [{
				stacked: true
			}],
			yAxes: [{
				stacked: true
			}]
		}
	}
});