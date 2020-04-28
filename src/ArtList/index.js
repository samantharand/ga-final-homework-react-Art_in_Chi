import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default function ArtList(props) {
	const listedArt = props.art.map(art => {
		return(
			<Card key={art.id}>
				<Card.Content>
					<Image size='tiny' src='https://cdn2.iconfinder.com/data/icons/artist-3/64/painting-art-canvas-painter-512.png' />
					<Card.Header> {art.name} </Card.Header>
					<Card.Meta> {art.current_residence} </Card.Meta>
					<Card.Description> {art.artist}, {art.year_made} </Card.Description>
				</Card.Content>
				<Card.Content>
					<Button 
						basic
						color="red"
						onClick={() => props.deleteArt(art.id)}
					>delete</Button>
				</Card.Content>
			</Card>
		)}
	)

	return (
		<>
			<h4> ArtList </h4>
			<Card.Group centered={true}> {listedArt} </Card.Group>
		</>
	)
}