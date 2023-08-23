import { pokeAPi } from "@/api";
import { PokemonStats } from "@/interfaces";

export const getPokemonInfo = async (pokemonParam: string) => {

    try {
        const { data } = await pokeAPi.get<PokemonStats>(`pokemon/${pokemonParam}`);
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        return null;
    }
   
}