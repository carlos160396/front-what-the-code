import {
  Button,
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
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  types: any[];
  noPokedex: number;
  height: number;
  weight: number;
  imgShinyFront: string;
  imgShinyBack: string;
  initIsFavorite?: boolean;
  onPressFavorites?: (isFavorite: boolean) => void;
}

const CardInfoPokemon = ({
  title,
  types,
  noPokedex,
  height,
  weight,
  imgShinyFront,
  imgShinyBack,
  onPressFavorites,
  initIsFavorite = false,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(initIsFavorite);

  useEffect(() => {
    setIsFavorite(initIsFavorite);
  }, [initIsFavorite]);

  return (
    <Card className={style.container}>
      <CardHeader className={style["card-header"]}>
        <div className={style["container-favorites"]}>
          <h3 className={style.title}>{title}</h3>
          <Button
            isIconOnly
            variant="light"
            radius="full"
            onClick={() => {
              if (!isFavorite) setIsFavorite(!isFavorite);
              if (onPressFavorites) onPressFavorites(!isFavorite);
            }}
          >
            {isFavorite ? (
              <IoHeartSharp size={30} color="red" />
            ) : (
              <IoHeartOutline size={30} />
            )}
          </Button>
        </div>

        <div className={style.badgets}>
          {types.map((item) => {
            const type = titleCase(item.type.name);
            return (
              <Chip key={item.type.name} className={style[`badge-${type}`]}>
                {type}
              </Chip>
            );
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
