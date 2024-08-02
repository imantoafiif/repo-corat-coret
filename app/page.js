import List from "@/components/Sections/List";
import classes from "./page.module.css";
import List2 from "@/components/Sections/List2";

export default function Home() {
  return (
    <main className={classes.main}>
      {/* <List/> */}
      <List2/>
      {/* <List theme="blue" type={1} background="transparent" /> */}
    </main>
  );
}
