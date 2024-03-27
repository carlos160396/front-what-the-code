import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useLogin from "./hooks/useLogin";
import { Bounce, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const { postLogin } = useLogin();
  return (
    <section className={styles.container}>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg"
        }
        className={styles["image-top"]}
        height={150}
        width={150}
        alt="Logo initial 1"
      />
      <Card className={styles.card}>
        <CardHeader className={styles["card-header"]}>
          <h1 className={styles.title}>Pokedex</h1>
        </CardHeader>
        <CardBody className={styles["card-body"]}>
          <Input
            value={dataLogin.email}
            onValueChange={(val) =>
              setDataLogin({ password: dataLogin.password, email: val })
            }
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            labelPlacement="inside"
            endContent={
              <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            value={dataLogin.password}
            onValueChange={(val) =>
              setDataLogin({ password: val, email: dataLogin.email })
            }
            label="Password"
            variant="bordered"
            labelPlacement="inside"
            endContent={
              <button type="button" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />

          <Button
            className={styles.button}
            onClick={() => postLogin(dataLogin.email, dataLogin.password)}
          >
            Login
          </Button>
        </CardBody>
      </Card>

      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/146.svg"
        }
        className={styles["image-bottom"]}
        height={150}
        width={150}
        alt="Logo initial 2"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
      />
    </section>
  );
};

export default LoginPage;
