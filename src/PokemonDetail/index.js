import { Button, Dialog, DialogContent, Grid, Chip } from "@mui/material";
import { useState } from "react";
import { getDataFromPokemon } from "../../src/services";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);
  //vamos hacer una funcion que maneje el estado
  const [pokemonData, setPokemonData] = useState({});

  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  const handleOpenDialog = async () => {
    if (!abrir) {
      await fetchDetailFromPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="success">
        {" "}
        Detalle del Pokemon
      </Button>
      <Dialog open={abrir} onClose={handleOpenDialog}>
        <DialogContent>
          {/* necesifamos extraer ls keys de un objeto  */}
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h2> {props.nombre}</h2>
              <Grid container>
                <Grid item md={8}>
                  <h4>Habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="secondary"
                      sx={{ marginright: 4 }}
                    />
                  ))}
                  <h4>Datos</h4>
                  {pokemonData.types.map((type) => (
                    <Chip
                      label={type.type.name}
                      color="error"
                      sx={{ marginleft: 2 }}
                    />
                  ))}
                  <Grid item>
                    <img
                      width={300}
                      src={
                        pokemonData.sprites.other["official-artwork"]
                          .front_default
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )}

          <Button variant="contained" onClick={handleOpenDialog}>
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
