"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import styles from "./styles.module.css";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
  types: any[];
}

const CardPokemon = ({ title, subtitle, icon, types }: Props) => {
  return (
    <Link href={`/pokemons/pokemonDetail/${subtitle}`}>
      <Card isPressable className={styles.container}>
        <CardHeader className={styles["card-header"]}>
          <h3 className={styles.title}>{title}</h3>
          <p>{subtitle}</p>
        </CardHeader>
        <CardBody className={styles["card-body"]}>
          <Image
            className={styles.image}
            alt="Card background"
            src={icon}
            width={150}
            height={50}
          />
        </CardBody>
        <CardFooter className={styles["card-footer"]}>
          {types.map((item) => {
            return <Chip className={styles[`badge-${item}`]}>{item}</Chip>;
          })}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardPokemon;
