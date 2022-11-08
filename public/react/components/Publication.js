import React, { useCallback, useState } from 'react';
import apiURL from '../api';

export const Publication = ({publication, setSinglePublication}) => {
  const fetchPublication = async () => {
    const response = await fetch(`${apiURL}/posts/${publication.id}`);
    const publicationData = await response.json();
    setSingleItem(publicationData)
  }

  return <>
    <h3 onClick={fetchPublication} >{publication.title}</h3>
    <img src={publication.image} alt={publication.name} style={{ maxWidth: 200, maxHeight: 200}} onClick={fetchPublication}/>
  </>
} 
	