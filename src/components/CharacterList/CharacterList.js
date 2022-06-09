import { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.css';
import CharacterCard from '../CharacterCard/CharacterCard';

//LINK ROUTER DOM

const CharacterList = () => {
  /* useState maneja el estado del componente */
  const [characters, setCharacters] = useState([]);

  /* console.log(characters); */

  /* useEffect maneja el ciclo de vida del componente */
  useEffect(() => {
    axios('https://breakingbadapi.com/api/characters').then((res /* console.log(res.data) */) =>
      setCharacters(res.data)
    );
  }, []);

  return (
    <>
      <div>Hola desde Character List</div>
      <div className='CharacterList-container'>
        {/* crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */}
        {characters.map(char => {
          return (
            <div key={char.char_id}>
              {/* Llamamos a Card para renderizar cada elemento mapeado */}
              {/* Enviamos data */}
              <CharacterCard data={char} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CharacterList;
