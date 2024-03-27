import { LOGIN } from "@/constants/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useLogin = () => {
  const router = useRouter();
  const postLogin = async (email: string, password: string) => {
    try {
      const body = { email, password };

      const res = await axios.post(`http://localhost:3001/login`, body);
      console.log("RES", res);
      localStorage.setItem(LOGIN, JSON.stringify(res.data));
      router.push("/pokemons");
    } catch (error: any) {
      const { message } = error.response.data.error;
      toast.error(message);
      console.log("ERR", error);
    }
  };
  return {
    postLogin,
  };
};

export default useLogin;
