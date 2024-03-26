import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import style from "./styles.module.css";
import Image from "next/image";
import { titleCase } from "@/helpers/textTransform";

interface Props {
  title: string;
  types: any[];
  noPokedex: number;
  height: number;
  weight: number;
  imgShinyFront: string;
  imgShinyBack: string;
}

const CardInfoPokemon = ({
  title,
  types,
  noPokedex,
  height,
  weight,
  imgShinyFront,
  imgShinyBack,
}: Props) => {
  return (
    <Card className={style.container}>
      <CardHeader className={style["card-header"]}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.badgets}>
          {types.map((item) => {
            const type = titleCase(item.type.name);
            return <Chip className={style[`badge-${type}`]}>{type}</Chip>;
          })}
        </div>
      </CardHeader>
      <CardBody>
        <>
          <p className={style.subtitle}>Pokedex number</p>
          <span className={style.description}>{noPokedex}</span>
          <Divider className="my-2" />
        </>
        <>
          <p className={style.subtitle}>Height</p>
          <span className={style.description}>{height}</span>
          <Divider className="my-2" />
        </>
        <>
          <p className={style.subtitle}>Weight</p>
          <span className={style.description}>{weight}</span>
          <Divider className="my-2" />
        </>
        <>
          <p className={style.subtitle}>Shiny</p>
          <div className={style["container-image"]}>
            <Image
              alt="Image front"
              src={imgShinyFront}
              width={70}
              height={70}
            />
            <Image alt="Image back" src={imgShinyBack} width={70} height={70} />
          </div>
        </>
      </CardBody>
    </Card>
  );
};

export default CardInfoPokemon;
