import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

// categories 아래 전체적용되는 레이아웃
export default function Layout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
