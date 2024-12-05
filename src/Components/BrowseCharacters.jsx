import { useState, useEffect } from 'react';
import CharacterDetail from './CharacterDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



const BrowseCharacters = () => {
    const hash = 'd6817f7aa5c2658b35ed73a8a5c27a66'
    const apiKey = 'ed5938a90897baebae432e484ad68f1e'
    const ts = 1
    const [characters, setCharacters] = useState([]);

    let navigate = useNavigate() 


    useEffect(() => {  
        const fetchcharacters = async () => {  
          const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`  
          const response = await axios.get(url)  
          setCharacters(response.data.data.results) 
        };  
        fetchcharacters();  
     }, []); 



     return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
            {characters.map((character) => (  
             <li key={character.id}>{character.name} - <button onClick={() => navigate(`/CharacterDetail/${character.id}`)}> See Character Details </button>
                </li>
            ))} 
            </ul>   
        </div>   
    );
}


export default BrowseCharacters;


