import { LOGIN } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store";
import { logOut } from "@/store/auth/authSlice";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ResponseMessage {
  type: string;
  message: string;
}

const useAxiosFavorites = () => {
  const [response, setResponse] = useState<ResponseMessage | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [idPokemon, setIdPokemon] = useState(0);
  const { id, token, isLoad } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token !== "" && isLoad) getFavorite();
  }, [idPokemon]);

  const logOutAuth = () => {
    dispatch(logOut());
    router.push("/login");
  };

  const getFavorite = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get(
        `http://localhost:3001/favorites/${idPokemon}/user/${id}?`,
        { headers }
      );

      setIsFavorite(res.data.length !== 0 ? true : false);
    } catch (error: any) {
      if (error.response.status === 401) logOutAuth();
    }
  };

  const postAddFavorites = async (idPokemon: number) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = { id_user: id, pokemon: idPokemon };
      const res = await axios.post(
        `http://localhost:3001/users/${id}/favorites`,
        body,
        { headers }
      );

      setResponse({
        type: "success",
        message: res.data.message,
      });
      setIsFavorite(true);
    } catch (error: any) {
      if (error.response.status === 401) logOutAuth();
      console.log("ERR", error);

      setResponse({
        type: "error",
        message: error.response.data.error.message,
      });
    }
  };

  const sendIdPokemon = (id_pokemon: number) => {
    setIdPokemon(id_pokemon);
  };

  return {
    postAddFavorites,
    response,
    isFavorite,
    sendIdPokemon,
  };
};

export default useAxiosFavorites;
