import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { AppHeader, Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';
import './App.css';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#ff7f50',
		},
	},
});

class App extends Component {
	state = {
		data: {},
		country: '',
	};
	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data });
	}

	handleCountryChange = async (country) => {
		const data = await fetchData(country);
		this.setState({ data, country });
	};

	render() {
		const { data, country } = this.state;
		return (
			<ThemeProvider theme={theme}>
				<AppHeader />
				<div className='container'>
					<Cards data={data} />
					<CountryPicker handleCountryChange={this.handleCountryChange} />
					<Charts data={data} country={country} />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
