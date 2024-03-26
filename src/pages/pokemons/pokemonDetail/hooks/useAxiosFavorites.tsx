import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface ResponseMessage {
  type: string;
  message: string;
}

const useAxiosFavorites = (id_pokemon: number) => {
  const [response, setResponse] = useState<ResponseMessage | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getFavorite();
  }, [id_pokemon]);

  const getFavorite = async () => {
    try {
      const headers = {
        Authorization: `Bearer token`,
      };
      const res = await axios.get(
        `http://localhost:3001/favorites/${id_pokemon}/user/${2}?`,
        { headers }
      );

      setIsFavorite(res.data.length !== 0 ? true : false);
    } catch (error) {}
  };

  const postAddFavorites = async (id_pokemon: number) => {
    try {
      const headers = {
        Authorization: `Bearer token`,
      };
      const body = { id_user: 2, pokemon: id_pokemon };
      const res = await axios.post(
        `http://localhost:3001/users/1/favorites`,
        body,
        { headers }
      );

      setResponse({
        type: "success",
        message: res.data.message,
      });
      setIsFavorite(true);
    } catch (error: any) {
      setResponse({
        type: "error",
        message: error.response.data.error.message,
      });
    }
  };

  return {
    postAddFavorites,
    response,
    isFavorite,
  };
};

export default useAxiosFavorites;
