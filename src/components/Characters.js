export default function Characters(props) {
  const {characters, setCharacters} = props;	
  const resetCaracters = () => {
    setCharacters(null);
  };
  return (
    <div>
      <h2>Personajes</h2>
      <span className="back-home" onClick={resetCaracters}>Volver al inicio</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div className="character-img">

              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>{character.status === "Alive" ?(
                <>
                <span className="alive"/>
                Alive
                </>
              ) :(
                <>
                <span className="dead"/>
                Dead
                </>
              )}
              </h6>
              <span className="text-grey">Episodios: </span>
              <span>{character.episode.length}</span>

              <span className="text-grey"> Especie: </span>
              <span>{character.species}</span>

            </div>
            
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCaracters}>Volver al inicio</span>
    </div>
  );
}
