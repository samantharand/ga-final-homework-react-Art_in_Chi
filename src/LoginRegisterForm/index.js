import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'

class LoginRegisterForm extends Component {
	constructor() {
		super()

		this.state ={
			email: '',
			password: '',
			action: 'Register'
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if(this.state.action == "Login") {

			this.props.login()

		} else {

			this.props.register(this.state)

		}

		this.setState({
			email: '',
			password: '',
			username: '',
			action: 'Login'	
		})
	}

	render() {
		return (
			<>
			<h3> {this.state.action} </h3>
			<Form onSubmit={this.handleSubmit}>
				
				<React.Fragment>
					{
						this.state.action == "Register"
						&&
						<React.Fragment>
							<Label>username:</Label>
							<Form.Input
								type='username'
								name='username'
								placeholder='enter username'
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</React.Fragment>
					}
					<Label>email:</Label>
					<Form.Input
						type='email'
						name='email'
						placeholder='enter email'
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<Label>password:</Label>
					<Form.Input
						type='password'
						name='password'
						placeholder='enter password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<Button type='submit'> {this.state.action} </Button>
				</React.Fragment>
				
			</Form>
			</>
		)
	}

}

export default LoginRegisterForm