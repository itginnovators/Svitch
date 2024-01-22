$(function () {
	"use strict";

	// chart 1
	Highcharts.chart('chart1', {
		chart: {
			type: 'bar',
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Electricity Consumption (in kWh)',
			align: 'left'
		},
		plotOptions: {
			bar: {
				pointWidth: 10,    // Adjust this value to reduce bar width
				groupPadding: 0.1,  // Adjust this value to reduce space between groups
				dataLabels: {
					enabled: false // Disable data labels if they are enabled
				}
			}
		},
		xAxis: {
			categories: ['Jul-20', 'Jun-20', 'May-20', 'Apr-20', 'Mar-20'],
			title: {
				text: '',
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
			},
		},
		legend: {
			enabled: false,
			title: {
				text: null // Set the title text to null
			},
		},
		series: [{
			data: [300, 250, 200, 100, 50],
			color: '#355fd7',
		}]
	});

	// ************************************************************************************************
	// chart2
	Highcharts.chart('chart2', {

		title: {
			text: 'Generator Output (in kWh)',
			align: 'left'
		},
		credits: {
			enabled: false
		},
		yAxis: {
			title: {
				text: '',
			}
		},
		xAxis: {
			title: {
				text: '',
			},
		},

		legend: {
			enabled: false,
			title: {
				text: null,
			},
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 1
			}
		},

		series: [{
			data: [100, 400, 300, 650, 200, 220, 820, 400, 680, 200, 700, 550],
			color: '#355fd7',
		},],

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						enabled: false,
					}
				}
			}]
		}

	});

	// ************************************************************************************************ 
	// chart 3
	Highcharts.chart('chart3', {
		chart: {
			type: 'bar',
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Diesel Consumption (in L)',
			align: 'left'
		},
		plotOptions: {
			bar: {
				pointWidth: 10,    // Adjust this value to reduce bar width
				groupPadding: 0.1,  // Adjust this value to reduce space between groups
				dataLabels: {
					enabled: false // Disable data labels if they are enabled
				}
			}
		},
		xAxis: {
			categories: ['Jul-20', 'Jun-20', 'May-20', 'Apr-20', 'Mar-20'],
			title: {
				text: '',
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
			},
		},
		legend: {
			enabled: false,
			title: {
				text: null // Set the title text to null
			},
		},
		series: [{
			data: [300, 250, 200, 100, 50],
			color: '#00b998'
		}]
	});

	// ************************************************************************************************
	// chart4
	Highcharts.chart('chart4', {

		title: {
			text: 'Solar Energy Produced (in kWh)',
			align: 'left'
		},
		credits: {
			enabled: false
		},
		yAxis: {
			title: {
				text: '',
			}
		},
		xAxis: {
			title: {
				text: '',
			},
		},

		legend: {
			enabled: false,
			title: {
				text: null,
			},
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 1
			}
		},

		series: [{
			data: [100, 400, 300, 650, 200, 220, 820, 400, 680, 200, 700, 550],
			color: '#00b998'
		},],

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						enabled: false,
					}
				}
			}]
		}

	});

	// ************************************************************************************************ 
	// chart 5
	Highcharts.chart('chart5', {
		chart: {
			type: 'bar',
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Waste Water Produced (in L)',
			align: 'left'
		},
		plotOptions: {
			bar: {
				pointWidth: 10,    // Adjust this value to reduce bar width
				groupPadding: 0.1,  // Adjust this value to reduce space between groups
				dataLabels: {
					enabled: false // Disable data labels if they are enabled
				}
			}
		},
		xAxis: {
			categories: ['Jul-20', 'Jun-20', 'May-20', 'Apr-20', 'Mar-20'],
			title: {
				text: '',
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
			},
		},
		legend: {
			enabled: false,
			title: {
				text: null // Set the title text to null
			},
		},
		series: [{
			data: [300, 250, 200, 100, 50],
			color: '#f48e00',
		}]
	});

	// ************************************************************************************************
	// chart6
	Highcharts.chart('chart6', {

		title: {
			text: 'Dyes Consumed (in kg)',
			align: 'left'
		},
		credits: {
			enabled: false
		},
		yAxis: {
			title: {
				text: '',
			}
		},
		xAxis: {
			title: {
				text: '',
			},
		},

		legend: {
			enabled: false,
			title: {
				text: null,
			},
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 1
			}
		},

		series: [{
			data: [100, 400, 300, 650, 200, 220, 820, 400, 680, 200, 700, 550],
			color: '#f48e00',
		},],

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						enabled: false,
					}
				}
			}]
		}

	});

	// ************************************************************************************************ 
	// chart 7
	Highcharts.chart('chart7', {
		chart: {
			type: 'bar',
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Salt Consumed (in Kg)',
			align: 'left'
		},
		plotOptions: {
			bar: {
				pointWidth: 10,    // Adjust this value to reduce bar width
				groupPadding: 0.1,  // Adjust this value to reduce space between groups
				dataLabels: {
					enabled: false // Disable data labels if they are enabled
				}
			}
		},
		xAxis: {
			categories: ['Jul-20', 'Jun-20', 'May-20', 'Apr-20', 'Mar-20'],
			title: {
				text: '',
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
			},
		},
		legend: {
			enabled: false,
			title: {
				text: null // Set the title text to null
			},
		},
		series: [{
			data: [300, 250, 200, 100, 50],
			type: 'bar',
			color: '#fad247'
		}]
	});

	// ************************************************************************************************
	// chart8
	Highcharts.chart('chart8', {

		title: {
			text: 'Waste Solid (in Kg)',
			align: 'left'
		},
		credits: {
			enabled: false
		},
		yAxis: {
			title: {
				text: '',
			}
		},
		xAxis: {
			title: {
				text: '',
			},
		},

		legend: {
			enabled: false,
			title: {
				text: null,
			},
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 1
			}
		},

		series: [{
			data: [100, 400, 300, 650, 200, 220, 820, 400, 680, 200, 700, 550],
			color: '#fad247',
		},],

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						enabled: false,
					}
				}
			}]
		}

	});

	// ************************************************************************************************ 

});
