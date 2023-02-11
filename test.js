
data = [[1147651200000,-0.39,-0.74],[1147737600000,0.00,0.00],[1147824000000,-0.92,-1.29],[1147910400000,-2.84,4.35],[1147996800000,2.87,-4.12],[1148256000000,3.68,2.17],[1148342400000,-1.58,-0.29]]
console.log(data)
var ohlc = [],
	volume = [],
	dataLength = data.length,

	groupingUnits = [[
		'week',                         // unit name
		[1]                             // allowed multiples
	], [
		'month',
		[1]
	]],
	i = 0;
for (i; i < dataLength; i += 1) {
	ohlc.push([
		data[i][0], // the date
		data[i][1], // open

	]);
	volume.push([
		data[i][0], // the date
		data[i][2] // the volume
	]);
}

// create the chart
Highcharts.stockChart('container', {
	rangeSelector: {
		selected: 2
	},
	title: {
		text: '测试'
	},
	subtitle: {
		text: 'test'
	},
	yAxis: [{
		startOnTick: false,
		endOnTick: false,
		labels: {
			format:'{value}%',
			align: 'right',
			x: -3
		},
		title: {
			text: '收益'
		},

		height: '60%',
		lineWidth: 2,
		resize: {
			enabled: true
		}
	}, {
		labels: {
			format:'{value}k',
			align: 'right',
			x: -3
		},
		title: {
			text: '盈亏'
		},
		top: '65%',
		height: '35%',
		offset: 0,
		lineWidth: 2
	}],
	tooltip: {
		split: true
	},

	series: [{
        type: 'areaspline',
        color: '#c4392d',
        negativeColor: '#5679c4',
        fillOpacity: 0.5,
		name: '策略收益',
		tooltip: {
			valueSuffix: '%'
		},
		data:ohlc
		// type: '',
		// name: 'AAPL',
		// id: 'aapl',
		// zIndex: 2,
		// data: ohlc
	}, {
		//type: 'column',
		name: '超额收益',
		id: 'volume',
		tooltip: {
			valueSuffix: '%'
		},
		data: volume,
		yAxis: 1
	}
	// 	{
	// 	type: 'vbp',
	// 	linkedTo: 'aapl',
	// 	params: {
	// 		volumeSeriesID: 'volume'
	// 	},
	// 	dataLabels: {
	// 		enabled: false
	// 	},
	// 	zoneLines: {
	// 		enabled: false
	// 	}
	// },
]
});