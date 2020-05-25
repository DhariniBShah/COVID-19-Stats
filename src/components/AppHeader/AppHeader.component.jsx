import React from 'react';
import {
	IconButton,
	AppBar,
	Toolbar,
	Typography,
	StylesProvider,
	Link,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './coronavirus.png';

const useStyles = makeStyles({
	rightToolbar: {
		marginLeft: 'auto',
		marginRight: -12,
		color: 'coral',
	},
});
const AppHeader = () => {
	const classes = useStyles();
	return (
		<StylesProvider injectFirst>
			<AppBar position='fixed'>
				<Toolbar>
					<span>
						<img style={{ height: '40px', width: '40px' }} src={Logo} alt='logo' />
					</span>
					<Typography variant='h5'>COVID-19&nbsp;Stats</Typography>
					<section className={classes.rightToolbar}>
						<IconButton color='inherit' aria-label='Save'>
							<Link href='/' color='inherit'>
								<HomeIcon />
							</Link>
						</IconButton>
					</section>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</StylesProvider>
	);
};

export default AppHeader;
