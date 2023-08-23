import { SmallPokemon } from "@/interfaces";
import React, { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<props> = ({ pokemon }) => {
  const router = useRouter();
  const { id, name, img } = pokemon;
  const onClick = () => {
    router.push(`/name/${name}`);
  };
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ padding: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
