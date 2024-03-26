import { Sidebar } from "@/components";
import styles from "./styles.module.css";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles["sidebar-content"]}>
        <Sidebar />
        <div className={styles["content-page"]}>{children}</div>
      </div>
    </div>
  );
}
