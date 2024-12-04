import { useState, useEffect } from 'react';
import axios from 'axios';


const CharacterDetail = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [characterDetails, setCharacterDetails] = useState({
        description: '',
        comics: []
    })

    const hash = 'd6817f7aa5c2658b35ed73a8a5c27a66'
    const apiKey = 'ed5938a90897baebae432e484ad68f1e'
    const ts = 1

    useEffect(() => {  
        const fetchcharacters = async () => {  
          const url2 = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`  
          const response = await axios.get(url2)  
          setCharacters(response.data.data.results)  
        };  
        fetchcharacters();  
     }, []); 

    
        useEffect(() => {
            const fetchcharacterDetails = async () => {
                try {  
                    const url = `https://gateway.marvel.com/v1/public/characters/${selectedCharacter.id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
                    const response = await axios.get(url)
                    console.log(response.data.data)
                    const { description, comics } = response.data.data.results[0];  
                    setCharacterDetails({ description, comics: comics.items }); 

                } catch (error) {
                    console.error('Error fetching characters', error)
                }
            }; fetchcharacterDetails()
        }, [selectedCharacter]);
     
    
    
        const handleButton = (character) => {  
            setSelectedCharacter(character)     
        };  
       
    
    return (
        <div>
            <h1>Character List</h1>
            <ul>
            {characters.map((character) => (  
             <li key={character.id}>{character.name} - <button onClick={() => handleButton(character)}>See Details</button></li>
            ))}
            {characterDetails &&
                <div>
                    {characterDetails.description}
                    {characterDetails.comics.items}
                </div>}</ul>   
                

        </div>   
    ); 
}


export default CharacterDetail;
