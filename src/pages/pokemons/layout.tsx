import { Sidebar } from "@/components";
import styles from "./styles.module.css";
import { Bounce, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { initiAuthState, logOut } from "@/store/auth/authSlice";
import { useRouter } from "next/navigation";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!auth.isLoad) dispatch(initiAuthState());
    if (auth.token === "" && auth.isLoad) logOutAuth();
  }, []);

  const logOutAuth = () => {
    dispatch(logOut());
    router.push("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles["sidebar-content"]}>
        <Sidebar />
        <div className={styles["content-page"]}>{children}</div>
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
      </div>
    </div>
  );
}
