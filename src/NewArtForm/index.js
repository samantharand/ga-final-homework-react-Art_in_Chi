import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

export default class NewArtForm extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			artist: '',
			year_made: '',
			current_residence: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createArt(this.state)
	}

	render() {
		return (
			<>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field required>
						<label>title</label>
						<Input 
							type='text'
							name='name' 
							value={this.state.name} 
							placeholder='artistworks name'
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field required>
						<label>arist</label>
						<Input 
							type='text'
							name='artist'
							value={this.state.artist}  
							placeholder='artists name' 
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field required>
						<label>year created</label>
						<Input 
							type='text'
							name='year_made' 
							value={this.state.year_made} 
							placeholder='YYYY' 
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field required>
						<label>current residence</label>
						<Input 
							type='text'
							name='current_residence' 
							value={this.state.current_residence} 
							placeholder='where' 
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Button type='submit'>Add art to database</Button>
				</Form>
			</>
		)
	}
}