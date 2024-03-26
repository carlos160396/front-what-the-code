import { Card, CardBody, CardFooter } from "@nextui-org/react";
import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  imagePrimary: string | undefined;
  imageFront: string | undefined;
  imageBack: string | undefined;
}

const CardImgPokemon = ({ imagePrimary, imageFront, imageBack }: Props) => {
  return (
    <Card className={styles.container}>
      <CardBody className={styles["card-body"]}>
        <Image
          alt="Card background"
          className={styles.imagePrimary}
          src={imagePrimary ?? ""}
          width={200}
          height={200}
        />
        <div className={styles.imagesSecondaryContainer}>
          <Image
            alt="Card background"
            className={styles.imageSecondary}
            src={imageFront ?? ""}
            width={100}
            height={100}
          />
          <Image
            alt="Card background"
            className={styles.imageSecondary}
            src={imageBack ?? ""}
            width={100}
            height={100}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default CardImgPokemon;
