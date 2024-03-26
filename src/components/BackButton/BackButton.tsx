"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button size="sm" className={styles.button} onClick={router.back}>
      <Image
        alt="Card background"
        src="/assets/icons/Back.svg"
        width={25}
        height={25}
      />
    </Button>
  );
};
