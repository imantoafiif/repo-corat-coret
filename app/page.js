import List from "@/components/Sections/List";
import classes from "./page.module.css";
import List2 from "@/components/Sections/List2";
import Cards from "@/components/Sections/Cards";

export default function Home() {
  return (
    <main className={classes.main}>
      <Cards/>
      <List2/>
    </main>
  );
}
