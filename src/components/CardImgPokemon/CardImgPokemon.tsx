import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import styles from "./styles.module.css";

const CardImgPokemon = () => {
  return (
    <Card isPressable className={styles.container}>
      <CardBody className={styles["card-body"]}>
        <Image alt="Card background" className="" src="/next.svg" width={150} />
      </CardBody>
      <CardFooter>
        <Image alt="Card background" className="" src="/next.svg" width={150} />
        <Image alt="Card background" className="" src="/next.svg" width={150} />
      </CardFooter>
    </Card>
  );
};

export default CardImgPokemon;
