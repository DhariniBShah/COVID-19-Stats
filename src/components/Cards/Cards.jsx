import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		borderRight: '5px solid gray',
		borderBottom: '1px solid black',
		boxShadow: '0 8px 6px -6px black',
	},
});

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	const classes = useStyles();

	if (!confirmed) {
		return 'Loading...';
	}
	return (
		<div className={styles.container}>
			<Grid container justify='center'>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					lg={3}
					className={cx(styles.card, classes.root)}
				>
					<CardContent>
						<Typography variant='h6'>Cases</Typography>
						<Typography variant='h4' color='primary'>
							{'#'}
							<CountUp start={0} end={confirmed.value} duration={2} separator=',' />
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					lg={3}
					className={cx(styles.card, classes.root)}
				>
					<CardContent>
						<Typography variant='h6'>Recovered</Typography>
						<Typography variant='h4' color='primary'>
							{'#'}
							<CountUp start={0} end={recovered.value} duration={2} separator=',' />
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					lg={3}
					className={cx(styles.card, classes.root)}
				>
					<CardContent>
						<Typography variant='h6'>Deaths</Typography>
						<Typography variant='h4' color='primary'>
							{'#'}
							<CountUp start={0} end={deaths.value} duration={2} separator=',' />
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};
export default Cards;
