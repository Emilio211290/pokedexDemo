import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCard } from './FavoriteCard'

interface Props {
    pokemons: number[]
}

export const FavoritesList: FC<Props> = ({
    pokemons
}) => {
  return (
    <Grid.Container gap={2} justify="center">
          {
            pokemons.map((id) => (
                <FavoriteCard pokemonId={id} key={`pokemonFavorite${id}`} />
            ))
          }
        </Grid.Container>
  )
}
