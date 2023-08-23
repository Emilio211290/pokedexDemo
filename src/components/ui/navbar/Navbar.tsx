import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
        alt="icono de la app"
        width={70}
        height={70}
      />
      <Link href="/">
        <Text color="white" h3>
          Pokemons
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favoritos">
        <Text color="white" css={{ cursor: "pointer" }} h4>
          Favoritos
        </Text>
      </Link>
    </div>
  );
};
