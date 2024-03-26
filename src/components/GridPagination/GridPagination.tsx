import { Pokemons } from "@/interface/Pokemon";
import styles from "./styles.module.css";
import { CardPokemon, Search } from "@/components";
import { Button } from "@nextui-org/react";
import usePagination from "@/hooks/usePagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { titleCase } from "@/helpers/textTransform";

interface Props {
  pokemons: Pokemons;
}
const GridPagination = ({ pokemons }: Props) => {
  const { count, results } = pokemons;
  const { prevPage, nextPage, currentPage } = usePagination(count);

  const getId = (url: string): string => {
    const split = url.split("/");
    const no = split[split.length - 2];
    return no;
    // const idPokemon =
    //   no.length === 1 ? `00${no}` : no.length === 2 ? `0${no}` : no;
    // return idPokemon;
  };
  const getImage = (idPokemon: string): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`;
  };

  const getType = (types: any[]): string[] => {
    const newTypes: string[] = [];
    types.map((item) => {
      newTypes.push(titleCase(item.type.name));
    });

    return newTypes;
  };

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.grid}>
        {results.map(({ name, url, type }) => {
          return (
            <CardPokemon
              key={url}
              title={name}
              subtitle={getId(url)}
              icon={getImage(getId(url))}
              types={getType(type)}
            />
          );
        })}
      </div>
      <div className={styles.pagination}>
        <span className={styles["pagination-text"]}>
          {`Show total ${currentPage} of ${count}`}
        </span>
        <div className={styles.buttons}>
          <Button onClick={() => prevPage()}>
            <FaChevronLeft />
            Prev
          </Button>
          <Button onClick={() => nextPage()}>
            Next
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GridPagination;
