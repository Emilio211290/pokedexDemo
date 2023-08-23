import { pokeAPi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";

interface Props {
  pokemons: SmallPokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemonItem) => (
          <PokemonCard pokemon={pokemonItem} key={pokemonItem.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPi.get<PokemonListResponse>("pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map(
    (pokemon: SmallPokemon, index: number) => ({
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    })
  );
  return {
    props: {
      pokemons,
    },
  };
};
