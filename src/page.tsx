import styles from "./page.module.css";
import SectionOne from "./home/section_one/section";
import SectionTwo from "./home/section_two/section";
import SectionThree from "./home/section_three/section";
import SectionFour from "./home/section_four/section";
import SectionFive from "./home/section_five/section";
import SectionSix from "./home/section_six/section";
import Footer from "./common/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <SectionSix />
      <Footer />
    </main>
  );
}
