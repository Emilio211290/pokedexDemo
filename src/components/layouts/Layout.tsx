import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

interface props {
  children: JSX.Element;
  title?: string;
}

export const Layout: FC<props> = ({ children, title = "Pokemon App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Emilio" />
        <meta name="description" content="Informacion de pokemons" />
        <meta name="keywords" content="Pokemon, Pokedex, Pokemon App" />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
