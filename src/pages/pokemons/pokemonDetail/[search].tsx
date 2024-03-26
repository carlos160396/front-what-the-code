import {
  BackButton,
  CardImgPokemon,
  CardInfoPokemon,
  Search,
} from "@/components";
import DashBoardLayout from "../layout";
import styles from "./styles.module.css";
import axios from "axios";
import { PokemonDetail } from "@/interface/PokemonDetail";
import { InferGetServerSidePropsType } from "next";

export default function PokemonDetailPage({
  pokemonDetail,
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashBoardLayout>
      <section className={styles.container}>
        <div className={styles.header}>
          <BackButton />
          <Search initialValue={search} />
        </div>
        <div className={styles.cards}>
          <CardImgPokemon
            imagePrimary={
              pokemonDetail?.sprites?.other?.dream_world?.front_default
            }
            imageFront={pokemonDetail.sprites.front_default}
            imageBack={pokemonDetail.sprites.back_default}
          />
          <CardInfoPokemon
            title={pokemonDetail?.name}
            types={pokemonDetail.types}
            noPokedex={pokemonDetail.id}
            height={pokemonDetail.height}
            weight={pokemonDetail.weight}
            imgShinyFront={pokemonDetail?.sprites?.front_shiny}
            imgShinyBack={pokemonDetail?.sprites?.back_shiny}
          />
        </div>
      </section>
    </DashBoardLayout>
  );
}

export async function getServerSideProps({ query }: any) {
  const search = query.search;
  const response = await axios.get<PokemonDetail>(
    `https://pokeapi.co/api/v2/pokemon/${search}`
  );

  const { data } = response;

  return {
    props: {
      pokemonDetail: data,
      search,
    },
  };
}
