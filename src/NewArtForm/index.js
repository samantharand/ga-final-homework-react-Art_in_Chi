import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

export default class NewArtForm extends Component {
	render() {
		return (
			<>
				<Form>
					<Form.Field required>
						<label>title</label>
						<Input placeholder='artistworks name' />
					</Form.Field>
					<Form.Field required>
						<label>arist</label>
						<Input placeholder='artists name' />
					</Form.Field>
					<Form.Field required>
						<label>year created</label>
						<Input placeholder='YYYY' />
					</Form.Field>
					<Form.Field required>
						<label>current residence</label>
						<Input placeholder='where' />
					</Form.Field>
					<Button type='submit'>Add art to database</Button>
				</Form>
			</>
		)
	}
}