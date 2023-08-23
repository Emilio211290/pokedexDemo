import { Layout } from "@/components/layouts";
import { FavoritesList } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { pokemonFavorites } from "@/utils/favoritesUtils";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

export const Favoritos: NextPage = () => {
  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemons(pokemonFavorites())
  }, [])
  

  return (
    <Layout>
      {
        favoritesPokemons.length === 0 ? <NoFavorites /> : <FavoritesList pokemons={favoritesPokemons} />
      }
      
    </Layout>
  );
};

export default Favoritos;
