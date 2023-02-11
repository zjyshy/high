
data = [[1147651200000,-0.39,-0.74],[1147737600000,0.00,0.00],[1147824000000,-0.92,-1.29],[1147910400000,-2.84,4.35],[1147996800000,2.87,-4.12],[1148256000000,3.68,2.17],[1148342400000,-1.58,-0.29]]
console.log(data)
var ohlc = [],
	volume = [],
	dataLength = data.length,
	// set the allowed units for data grouping
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
Highcharts.stockChart('container2', {
	rangeSelector: {
		selected: 2
	},
	title: {
		text: '测试'
	},
	subtitle: {
		text: 'With SMA and Volume by Price technical indicators'
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

		height: '100%',
		lineWidth: 2,
		resize: {
			enabled: true
		}
	}],
	tooltip: {
		split: false,//着重注意这两个split和shared初次碰到这个两个概念可能会有点绕
		//大概是这样,split官方的解释是:是否将提示框分开显示，即每个数据点单独显示一个提示框
		//这样的结果就是我们的星标所在位置所有的图表,都会同时被选中,然后该位置的数据会分别在每个图标的位置显示

		//shared也会造成同时显示,但是这个可以把多个图标的数据信息合并在一起显示
		shared: true

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

	}, {
		//type: 'column',
		name: '超额收益',
		id: 'volume',
		tooltip: {
			valueSuffix: '%'
		},
		data: volume,

	}

]
});