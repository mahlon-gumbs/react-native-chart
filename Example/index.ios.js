/**
 * Sample React Native Chart App
 */
'use strict';
import React, {
	AppRegistry,
	Component,
	StyleSheet,
	// Text,
	View,
} from 'react-native';

// import RNChart from '../lib/index.js';
const RNChart = require('../lib');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});


const chartData = [
	{
		name: 'BarChart',
		type: 'bar',
		color: 'purple',
		widthPercent: 0.6,
		data: [30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30],
	},
	{
		name: 'LineChart',
		color: 'gray',
		lineWidth: 2,
		showDataPoint: false,
		data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
	},
];

const xLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];


class Example extends Component {
	render() {
		return (
			<View style={styles.container}>
				<RNChart chartData={chartData} verticalGridStep={5} xLabels={xLabels} />
			</View>
		);
	}
}


AppRegistry.registerComponent('Example', () => Example);
