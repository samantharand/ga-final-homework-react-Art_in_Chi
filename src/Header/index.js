import React from 'react'
import '../index.css'

function Header(props) {
	return(
		<span onClick={props.logout} className='fake-link'>LOGOUT</span>
	)
}

export default Header