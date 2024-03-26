import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import styles from "./styles.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <Input
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
      <Button className={styles.button}>
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
