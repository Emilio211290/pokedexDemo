import { Layout } from "@/components/layouts";
import { PokemonStats } from "@/interfaces";
import { checkInFavorites, saveFavorites } from "@/utils/favoritesUtils";
import { getPokemonInfo } from "@/utils/pokemonData";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";

interface props {
  pokemon: PokemonStats;
}

export const PokemonPage: NextPage<props> = ({ pokemon }) => {
  const [isInFavorites, setisInFavorites] = useState<boolean>(checkInFavorites(pokemon.id))
  const handleClickFavorites = () => {
    saveFavorites(pokemon.id);
    setisInFavorites(!isInFavorites);
  }
  return (
    <Layout title={pokemon.name}>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost={!isInFavorites} onClick={handleClickFavorites}>
                {
                  isInFavorites ? 'Esta en favoritos' : 'Guardar en favoritos'
                }
                </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container
                css={{ display: "flex", gap: "10px", flexDirection: "row" }}
              >
                <Image src={pokemon.sprites.front_default} alt="front" />
                <Image src={pokemon.sprites.back_default} alt="back" />
                <Image src={pokemon.sprites.front_shiny} alt="shiny front" />
                <Image src={pokemon.sprites.back_shiny} alt="shiny back" />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = () => {
  const idPokemons = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: idPokemons.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon =  await getPokemonInfo(id);

  if(!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      pokemon,
    },
    revalidate: 86400
  };
};
