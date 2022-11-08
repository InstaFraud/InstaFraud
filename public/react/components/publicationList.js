import React from 'react';
import { Publication } from './Publication';

export const PublicationList = ({publications, setSinglePublication}) => {
	return <>
		{
			items.map((publication, idx) => {
				return <Publication publication={publication} key={idx} setSinglePublication={setSinglePublication}/>
			})
		}
	</>
} 
