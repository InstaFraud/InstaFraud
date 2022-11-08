import React, { useState, useEffect } from 'react';
import { PublicationList } from './publicationList';
import { Publication } from './Publication';


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [publications, setPublications] = useState([]);
	const [singlePublication, setSinglePublication] = useState(0);



	async function fetchPublications(){
		try {
			const response = await fetch(`${apiURL}/items`);      
			const publicationData = await response.json();
			
			setPublications(publicationData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	useEffect(() => {
		fetchPublications();
	}, [singlePublication]);

	return (
		<main>	
      	{<>
		  <h1>InstaFraud</h1>
			<h2>All Posts 🔥</h2>
			 <PublicationList publications={publications} setSinglePublication={setSinglePublication}/>
			</>}
		</main>
	)
}