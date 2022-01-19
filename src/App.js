import { useEffect, useState } from "react";
import Card from "./views/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon")
      .then(resp => resp.json())
      .then(dat => {
        dat.results.forEach(value => {
            fetch(value.url)
            .then(resp2 => resp2.json())
            .then(dat2 => {
              setData((prev) => [...prev, {
                id: dat2.id,
                name: dat2.name,
                img: dat2.sprites.front_default,
                type: dat2.types[0].type.name
              }]);
              /* setData([...data, {
                id: dat2.id,
                name: dat2.name,
                img: dat2.sprites.front_default
              }]); */
              /* let pokemon = {
                id: dat2.id,
                name: dat2.name,
                type: dat2.types[0].type.name,
                img: dat2.sprites.front_default
              };
              //let pokemons = [...pokemons, pokemon]
              setData(data.concat(pokemon)); */
            });
        });
      })
      console.log("DATA: "+data);
    }
    getApi();
  }, []);

  return (
    <div className="App">
      {data && data.map(value => <Card key={value.id} data={value}/>)}
    </div>
  );
}

export default App;
