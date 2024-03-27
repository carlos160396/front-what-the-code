import { LOGIN } from "@/constants/constants";
import { Login } from "@/interface/Login";
import { useAppDispatch } from "@/store";
import { login } from "@/store/auth/authSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const postLogin = async (email: string, password: string) => {
    try {
      const body = { email, password };

      const res = await axios.post<Login>(`http://localhost:3001/login`, body);
      const { id, name, token } = res.data;
      dispatch(login({ id, name, token, isLoad: true }));
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
