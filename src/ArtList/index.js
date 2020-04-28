import React from 'react'

export default function ArtList(props) {
	const listedArt = props.art.map(art => {
		return(
			<p>{art.name}</p>
		)}
	)

	return (
		<>
			<h4> ArtList </h4>
			<div> {listedArt} </div>
		</>
	)
}