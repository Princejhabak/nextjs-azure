import styles from "./page.module.css";

export default function Home() {

  console.log("SERVER_SIDE", process.env["SERVER_SIDE"]);
  console.log("NEXT_PULBIC_SERVER_SIDE", process.env["NEXT_PULBIC_SERVER_SIDE"]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Hello World</p>
        <p>Server Rendered page</p>
        <p>SERVER_SIDE - {process.env["SERVER_SIDE"]}</p>
        <p>NEXT_PULBIC_SERVER_SIDE - {process.env["NEXT_PULBIC_SERVER_SIDE"]}</p>
      </main>
    </div>
  );
}
