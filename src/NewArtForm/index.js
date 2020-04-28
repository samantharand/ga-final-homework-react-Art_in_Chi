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
						<Input name='name' placeholder='artistworks name' />
					</Form.Field>
					<Form.Field required>
						<label>arist</label>
						<Input name='artist' placeholder='artists name' />
					</Form.Field>
					<Form.Field required>
						<label>year created</label>
						<Input name='year_made' placeholder='YYYY' />
					</Form.Field>
					<Form.Field required>
						<label>current residence</label>
						<Input year='current_residence' placeholder='where' />
					</Form.Field>
					<Button type='submit'>Add art to database</Button>
				</Form>
			</>
		)
	}
}