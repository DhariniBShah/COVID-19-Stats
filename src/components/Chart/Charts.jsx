import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchMyAPI = async () => {
			const initialDailyData = await fetchDailyData();

			setDailyData(initialDailyData);
		};

		fetchMyAPI();
	}, []);

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(47,79,79,0.7)',
							'rgba(255, 165, 0, 0.7)',
							'rgba(178,34,34,0.7)',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				responsive: true,
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					},
				},
				title: {
					display: true,
					text: `Currently In ${country}`,
					fontColor: '#ddd',
					fontSize: 20,
				},
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: 'white',
							},
						},
					],
					xAxes: [
						{
							ticks: {
								fontColor: 'white',
							},
						},
					],
				},
			}}
		/>
	) : null;

	const lineChart = dailyData[0] ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: 'Infected',
						fill: true,
						backgroundColor: 'rgba(	47,79,79,0.6)',
						borderColor: 'rgba(	47,79,79,1)',
						pointBorderColor: 'rgba(47,79,79,1)',
						pointBackgroundColor: '#fff',
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(47,79,79,1)',
						pointHoverBorderColor: 'rgba(220,220,220,1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: 'Deaths',
						fill: true,
						backgroundColor: 'rgba(255,0,0,1)',
						borderColor: 'rgba(178,34,34,1)',
						pointBorderColor: 'rgba(255,0,0,1)',
						pointBackgroundColor: '#fff',
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(255,0,0,1)',
						pointHoverBorderColor: 'rgba(220,220,220,1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
					},
				],
			}}
			options={{
				responsive: true,
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: 'white',
							},
						},
					],
					xAxes: [
						{
							ticks: {
								fontColor: 'white',
								autoSkip: true,
								maxTicksLimit: 20,
							},
						},
					],
				},
			}}
		/>
	) : null;

	return (
		<div className={styles.container}>{country ? barChart : lineChart}</div>
	);
};

export default Chart;
