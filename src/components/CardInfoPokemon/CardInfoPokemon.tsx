import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import style from "./styles.module.css";
const CardInfoPokemon = () => {
  return (
    <Card className={style.container}>
      <CardHeader>
        <h3 className={style.title}>Bulbasur</h3>
      </CardHeader>
      <CardBody>
        <>
          <p className={style.subtitle}>Pokedex Number</p>
          <span className={style.description}>1</span>
          <Divider className="my-2" />
        </>
        <>
          <p className={style.subtitle}>Height</p>
          <span className={style.description}>1</span>
          <Divider className="my-2" />
        </>
        <>
          <p className={style.subtitle}>Weight</p>
          <span className={style.description}>1</span>
          <Divider className="my-2" />
        </>
        <>
          <p className={style.subtitle}>Shiny</p>
          <div className={style["container-image"]}>
            <Image alt="Card background" src="/next.svg" width={150} />
            <Image alt="Card background" src="/next.svg" width={150} />
          </div>
        </>
      </CardBody>
    </Card>
  );
};

export default CardInfoPokemon;
