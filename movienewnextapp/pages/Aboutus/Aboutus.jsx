import styles from "./index.module.scss";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";

export default function Aboutus(props) {
  const { setLinkActive } = props;

  useEffect(() => {
    setLinkActive("Aboutus");
  }, []);

  return (
    <div className={styles.aboutus}>
      <div className={styles.maincontent}>
        <div className={styles.text_container}>
          <h2>HELLO THERE!</h2>
          <h3>It&apos;s just an excercise</h3>
          <p>
            if you are curious,{" "}
            <Link href="https://github.com/marco94gug/EDGEMONY/tree/main/movienewnextapp">
              <a>HERE</a>
            </Link>{" "}
            you can find the complete code of this App.
          </p>
          <div className={styles.vercel}>
            <p>
              build with{" "}
              <Link href="https://nextjs.org/">
                <a>Next.js</a>
              </Link>
            </p>
            <p>
              deployed with{" "}
              <Link href="https://vercel.com/">
                <a>Vercel.app</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
