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
		console.log(url);
		try {
			console.log("TRY GETTING CALLED on line 22");

			const registerResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(registerInfo),
				headers: {
					'Content-Type': 'application/json'
				} 
			})

			console.log("from line 33");
			
			const registerJson = await registerResponse.json()


			console.log("REGISTERRESPONSE", registerResponse);
			if(registerResponse.status == 401) {
				console.log('ugh');
				this.setState({
					registerResponse: registerJson.message
				})
			} else {
				this.setState({
					loggedIn: true
				})
			}
		} catch (error) {
			console.warn('ERROR IN REG');
			console.error(error)

		}

	}

	login = async (loginInfo) => {
		console.log('login called from app');
		const url = process.env.REACT_APP_API_URL + '/api/v1/museum/login'
		console.log(url);
		try {
			
			const loginResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(loginInfo),
				headers: {
					'Content-Type': 'application/json'
				} 

			})

			const loginJson = await loginResponse.json()

			console.log(loginResponse);
			if(loginResponse.status == 201) {
				this.setState({
					loggedIn: true
				})
			}

		} catch (error) {
			console.warn('ERROR IN LOGIN');
			console.error(error)

		}
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
