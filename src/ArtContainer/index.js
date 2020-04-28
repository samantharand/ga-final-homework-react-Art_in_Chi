import React, { Component } from 'react'
import ArtList from '../ArtList'

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

	render() {
		console.log(this.state);
		return(
			<>
				<h2>Art Container</h2>
				<ArtList art={this.state.art}/>
			</>
		)

	}
}