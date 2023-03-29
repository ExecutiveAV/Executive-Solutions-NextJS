import styles from "./page.module.css"

import ViewPanel from "./(components)/(ViewPanel)/ViewPanel";
import MainLink from "./(components)/(MainLink)/MainLink";
import Title from "./(components)/(Title)/Title";

import Link from "next/link";

const Homepage = () => {
  return (
    <main >
      <ViewPanel>
        <Title pathTo={"/"} >Executive AV</Title>
        <section className={styles.links} >
          <MainLink pathTo={"/invoices"} >INVOICES</MainLink>
          <MainLink pathTo={"/ledger"} >LEDGER</MainLink>
          <MainLink pathTo={"/schedules"} >SCHEDULES</MainLink>
        </section>
      </ViewPanel>
    </main>
  )
}

export default Homepage;