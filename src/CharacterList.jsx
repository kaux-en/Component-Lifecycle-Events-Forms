import { useState, useEffect } from 'react';
import axios from 'axios';


const hash = 'd6817f7aa5c2658b35ed73a8a5c27a66'
const apiKey = 'ed5938a90897baebae432e484ad68f1e'
const ts = 1
const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchcharacters = async () => {
            try {
                const response = await axios.get(url)
                console.log(response.data)
                setCharacters(response.data.data.results)
                //setCharacters(Array.isArray(response.data.data.results) ? response.data.data.results : []);
            } catch (error) {
                console.error('Error fetching characters', error)
            }
        }; fetchcharacters()

    }, []);

    return (
        <div>
            <h1>Character List</h1>
            <ul>
                {characters.map((character, index) => (  
                <li key={index}>{character.name}</li>  
                ))}
            </ul>
        </div>
    );
};


export default CharacterList;

