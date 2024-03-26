import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  initialValue?: string;
}
const Search = ({ initialValue = "" }: Props) => {
  const [text, setText] = useState(initialValue);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Input
        value={text}
        onValueChange={(text) => setText(text)}
        radius="full"
        classNames={{
          innerWrapper: ["bg-white"],
          base: "max-w-full lg:max-w-xs ",
          label: ["text-black"],
          input: ["text-black", "bg-white"],
          inputWrapper: ["bg-white"],
        }}
        placeholder="Search"
      />

      <Button
        className={styles.button}
        onPress={() => router.push(`/pokemons/pokemonDetail/${text}`)}
      >
        <Image
          alt="Button search"
          src="/assets/icons/Search.svg"
          width={25}
          height={50}
        />
      </Button>
    </div>
  );
};

export default Search;
