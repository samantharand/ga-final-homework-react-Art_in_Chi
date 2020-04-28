import React, { Component } from 'react'
import ArtList from '../ArtList'
import NewArtForm from '../NewArtForm'
import EditArtModal from '../EditArtModal'

export default class ArtContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			art: [],
			idOfArtToEdit: -1
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

			const createArtJson = await createArtResponse.json()
			console.log(createArtJson.data);
			
			if(createArtResponse.status === 201) {
				const art = this.state.art
				art.push(createArtJson.data)
				this.setState({
					art: art
				})

			}

		} catch (error) {
			console.error(error)
		}
	}

	deleteArt = async (idOfArtToDelete) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/art/' + idOfArtToDelete
		console.log(url);
		try {
			const deleteArtResponse = await fetch(url, {
				method: 'DELETE',
			})

			const deleteArtJson = await deleteArtResponse.json()

			if(deleteArtResponse.status === 200) {
	
				this.setState({
					art: this.state.art.filter(art => art.id != idOfArtToDelete)
				})

				this.getArt()
			}
		} catch (error) {
			console.error(error)
		}
	}

	editArt = (idOfArtToEdit) => {
		this.setState({
			idOfArtToEdit: idOfArtToEdit
		})
	}

	updateArt = async (updatedArtInfo) => {
		try {
			
			const url = process.env.REACT_APP_API_URL + '/api/v1/art/' + this.state.idOfArtToEdit
			const updateArtResponse = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(updatedArtInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const updateArtJson = await updateArtResponse.json()
			console.log(updateArtJson);

			if(updateArtResponse.status == 200) {
				const art = this.state.art
				const indexOfArtBeingUpdated = art.findIndex(art => art.id == this.state.idOfArtToEdit)
				art[indexOfArtBeingUpdated] = updateArtJson.data
				this.setState({
					art: art,
					idOfArtToEdit: -1
				})
			}

		} catch (error) {
			console.error(error)
		}
	}

	render() {
		console.log(this.state);
		return(
			<>
				<h2>Art Container</h2>
				<NewArtForm createArt={this.createArt}/>
				<ArtList art={this.state.art} deleteArt={this.deleteArt} editArt={this.editArt}/>
				{
					this.state.idOfArtToEdit !== -1
					&&
					<EditArtModal 
						art={this.state.art.find( art => art.id == this.state.idOfArtToEdit)}
						updateArt={this.updateArt}
					/>
				}
			</>
		)

	}
}