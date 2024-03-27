import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import styles from "@/styles/styles.module.css";
import { LOGIN } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store";
import { initiAuthState } from "@/store/auth/authSlice";
export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isLoad === false) dispatch(initiAuthState());
    if (auth.token !== "" && auth.isLoad) router.push("/pokemons");
    else if (auth.token === "" && auth.isLoad) router.push("/login");
  }, [auth]);

  return (
    <main className={styles.container}>
      <Image
        height={25}
        width={140}
        className={styles.image}
        src="/assets/img/logo.png"
        alt="Logo app"
      />
      <Spinner size="lg" />
    </main>
  );
}
