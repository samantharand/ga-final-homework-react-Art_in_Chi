import React, { Component } from 'react'
import ArtList from '../ArtList'
import NewArtForm from '../NewArtForm'

export default class ArtContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			art: []
		}
	}

	componentDidMount() {
		this.getArt()
	}

	getArt = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/art/'
			// console.log('url', url);
			const artResponse = await fetch(url)
			// console.log(artResponse);
			const artJson = await artResponse.json()
			// console.log(artJson);
			this.setState({
				art: artJson.data
			})
		} catch (error) {
			console.error(error)
		}
	}

	createArt = async (artToCreate) => {
		try {
			
			const url = process.env.REACT_APP_API_URL + '/api/v1/art/'
			const createArtResponse = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(artToCreate)
			})
			console.log('createArtResponse', createArtResponse);


		} catch (error) {
			console.error(error)
		}
	}

	render() {
		console.log(this.state);
		return(
			<>
				<h2>Art Container</h2>
				<NewArtForm />
				<ArtList art={this.state.art}/>
			</>
		)

	}
}