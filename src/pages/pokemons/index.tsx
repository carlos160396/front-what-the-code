import {
  CardImgPokemon,
  CardInfoPokemon,
  CardPokemon,
  GridPagination,
} from "@/components";
import axios from "axios";
import React from "react";
import DashBoardLayout from "./layout";
import { Pokemons } from "@/interface/Pokemon";
import { InferGetServerSidePropsType } from "next";
import styles from "./styles.module.css";
import { PokemonForm } from "@/interface/PokemonForm";

const DashboardPage = ({
  pokemons,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DashBoardLayout>
      <div className="p-10 h-screen">
        <GridPagination pokemons={pokemons} />
        {/* <CardImgPokemon />
        <CardInfoPokemon />
        <CardInfoPokemon /> */}
      </div>
    </DashBoardLayout>
  );
};
export async function getServerSideProps({ query }: any) {
  const limit = query.limit;
  const offset = query.offset;
  const response = await axios.get<Pokemons>(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const { data } = response;

  const getArrayTypePokemon = [];
  let arrayNewInfo: any[] = [];
  for (let index = 1; index <= data.results.length; index++) {
    getArrayTypePokemon.push(
      `https://pokeapi.co/api/v2/pokemon-form/${data.results[index - 1].name}`
    );
  }
  await axios
    .all(
      getArrayTypePokemon.map((endpoint) => axios.get<PokemonForm>(endpoint))
    )
    .then((res) => {
      res.map((item) => {
        arrayNewInfo.push(item.data.types);
      });
    });

  data.results.map((item, index) => {
    item.type = arrayNewInfo[index] ?? [];
  });

  return {
    props: {
      pokemons: data,
    },
  };
}
export default DashboardPage;
