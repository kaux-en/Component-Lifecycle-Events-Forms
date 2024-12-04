import { useState, useEffect } from 'react';  
import axios from 'axios';  
  
const CharacterDetail = () => {  
   const [characterDescription, setCharactersDescription] = useState('');  
   const [characterComics, setCharacterComics] = useState([]);  
   const [characters, setCharacters] = useState([]);  
   const [selectedCharacter, setSelectedCharacter] = useState(null);  
  
   const ts = 'your-ts';  
   const apiKey = 'your-api-key';  
   const hash = 'your-hash';  
  
   useEffect(() => {  
      const fetchcharacters = async () => {  
        const url2 = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`  
        const response = await axios.get(url2)  
        setCharacters(response.data.data.results)  
      };  
      fetchcharacters();  
   }, []);  
  
   useEffect(() => {  
      if (selectedCharacter) {  
        const fetchcharacterDetails = async () => {  
           try {  
              const url = `https://gateway.marvel.com/v1/public/characters/${selectedCharacter.id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`  
              const response = await axios.get(url)  
              setCharactersDescription(response.data.data.results[0].description)  
              setCharacterComics(response.data.data.results[0].comics.items)  
           } catch (error) {  
              console.error('Error fetching characters', error)  
           }  
        };  
        fetchcharacterDetails()  
      }  
   }, [selectedCharacter]);  
  
   const handleButton = (character) => {  
      setSelectedCharacter(character)  
   };  
  
   return (  
      <div>  
        <ul>  
           {characters.map((character, index) => (  
              <li key={index}>{character.name} - <button onClick={() => handleButton(character)}>See Details</button></li>  
           ))}  
        </ul>  
  
        {selectedCharacter &&  
           <div>  
              <h1>Character Details</h1>,  
              <p>Description: {characterDescription}</p>,  
              <p>Comics:</p>  
              <ul>  
                {characterComics.map((comic, index) => (  
                   <li key={index}>{comic.name}</li>  
                ))}  
              </ul>  
           </div>  
        };  
      </div>  
   );  
};  
  
export default CharacterDetail;