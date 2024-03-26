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
import { LuSearchX } from "react-icons/lu";
import useAxiosFavorites from "./hooks/useAxiosFavorites";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function PokemonDetailPage({
  pokemonDetail,
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { postAddFavorites, response, isFavorite } = useAxiosFavorites(
    pokemonDetail.id
  );

  useEffect(() => {
    if (response && response?.type === "error") toast.error(response.message);
    else toast.success(response?.message);
  }, [response]);

  const handleClickFavorites = () => {
    postAddFavorites(pokemonDetail.id);
  };

  return (
    <DashBoardLayout>
      <section className={styles.container}>
        <div className={styles.header}>
          <BackButton />
          <Search initialValue={search} />
        </div>

        {pokemonDetail === null ? (
          PokemonNotFound()
        ) : (
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
              onPressFavorites={(isSelectFavorite) => handleClickFavorites()}
              initIsFavorite={isFavorite}
            />
          </div>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
          transition={Bounce}
        />
      </section>
    </DashBoardLayout>
  );
}

function PokemonNotFound() {
  return (
    <div className={styles["page-not-found"]}>
      <span>The pokemon not found</span>
      <LuSearchX />
    </div>
  );
}

export async function getServerSideProps({ query }: any) {
  const search = query.search;
  let pokemonDetail: any;

  try {
    const response = await axios.get<PokemonDetail>(
      `https://pokeapi.co/api/v2/pokemon/${search}`
    );
    pokemonDetail = response.data;
  } catch (error) {
    console.log("err", error);
    pokemonDetail = null;
  }

  return {
    props: {
      pokemonDetail,
      search,
    },
  };
}
