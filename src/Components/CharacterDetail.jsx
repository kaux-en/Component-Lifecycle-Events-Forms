import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



const CharacterDetail = () => {
    const hash = 'd6817f7aa5c2658b35ed73a8a5c27a66'
    const apiKey = 'ed5938a90897baebae432e484ad68f1e'
    const ts = 1
    //const [characters, setCharacters] = useState([]);
    const [characterDetails, setCharacterDetails] = useState({
        name: '',
        description: '',
        comics: []
    })

    const { id } = useParams();
    
    useEffect(() => {
        const fetchcharacterDetails = async () => {
            try {  
                console.log(id)
                const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
                const response = await axios.get(url)
                console.log(response.data) 
                const { name, description, comics } = response.data.data.results[0];  
                setCharacterDetails({ name, description, comics: comics.items }); 

            } catch (error) {
                console.error('Error fetching characters', error)
            }
         }; fetchcharacterDetails()
        }, [id]);
    
    
    return (
        <div>
            <h2>{characterDetails.name}</h2> 

            {characterDetails.description > 0 ? (
                <p>{characterDetails.description}</p>) : (
                    <p>No description available for this character.</p>
                )} 

            <ul>
                {characterDetails.comics.length > 0 ? (
                characterDetails.comics.map((comic, index) => (
                <li key={index}>{comic.name}</li>
                ))
                ) : (
                <p>No comics available for this character.</p>
                )}
            </ul>
                
        </div>   
    ); 
}


export default CharacterDetail;


