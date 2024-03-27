import { LOGIN } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store";
import { initiAuthState, logOut } from "@/store/auth/authSlice";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoLogoReact } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <>
      {/* MOVILE */}
      <div className="flex bg-primary w-full md:hidden justify-center relative h-20">
        <input
          type="checkbox"
          name="hamburger"
          id="hamburger"
          className="peer hidden"
        />
        <label
          htmlFor="hamburger"
          className="peer-checked:hamburger z-30 cursor-pointer rounded p-5 transition  md:hidden absolute top-0 bottom-0 left-0 flex justify-center items-center"
        >
          <Image
            height={30}
            width={30}
            src="/assets/icons/Menu.svg"
            alt="User Menu"
          />
        </label>

        <Image
          height={25}
          width={140}
          className="rounded-full self-center z-20"
          src="/assets/img/logo.png"
          alt="Logo app"
        />

        <div className="fixed px-4 inset-0 flex w-3/5 translate-x-[-100%] flex-col justify-between bg-primary shadow-lg transition peer-checked:translate-x-0 md:static md:w-auto md:translate-x-0 md:flex-row md:shadow-none z-20">
          {MenuSidebar()}
        </div>
      </div>

      {/* LARGE */}
      <div className="hidden px-4 md:block bg-primary h-screen z-10 text-slate-300 left-0 w-[300px] ">
        {MenuSidebar()}
      </div>
    </>
  );
};

function MenuSidebar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const logout = () => {
    dispatch(logOut());
    router.push("/login");
  };
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col mt-32 lg:mt-10 justify-between h-full">
        <div className="flex flex-col items-center">
          <Image
            height={50}
            width={125}
            className="hidden lg:block mb-10"
            src="/assets/img/logo.png"
            alt="User avatar"
          />
          <Image
            height={50}
            width={150}
            className="mb-7"
            src="/assets/img/avatar.png"
            alt="User avatar"
          />
          <span className="text-lg text-white font-bold uppercase">
            {auth.name}
          </span>
          <span className="text-md font-semibold">Level 1</span>
          <p className="mt-7">"Work hard on your test"</p>
        </div>

        <Button
          className="w-full bg-[#7789DF] text-white uppercase rounded-md mb-10"
          onClick={logout}
        >
          <Image
            height={50}
            width={20}
            className=""
            src="/assets/icons/Logout.svg"
            alt="User avatar"
          />
          LOG OUT
        </Button>
      </div>
    </div>
  );
}
