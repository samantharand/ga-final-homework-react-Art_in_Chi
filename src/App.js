import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import ArtContainer from './ArtContainer'
import LoginRegisterForm from './LoginRegisterForm'

class App extends Component {
	constructor() {
		super()

		this.state = {
			loggedIn: false,
			registerResponse: ''
		}
	}

	register = async (registerInfo) => {
		console.log("register being claled from app.js");
		const url = process.env.REACT_APP_API_URL + '/api/v1/museum/register'

		try {
			const registerResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(registerInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			
			const registerJson = await registerResponse.json()

			if(registerResponse.status == 401) {
				this.setState({
					registerResponse: registerJson.message
				})
			} else {
				this.setState({
					loggedIn: true
				})
			}
		} catch (error) {

			console.error(error)

		}

	}

	login = async (loginInfo) => {
		console.log('login called from app');
	}

	render() {

	return (
		<div className="App">
		{
			this.state.loggedIn
			?
			<ArtContainer />
			:
			<LoginRegisterForm register={this.register} login={this.login}/>
		}
		</div>
	);

	}
}

export default App;
