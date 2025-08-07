import Image from "next/image";
import styles from "./page.module.css";
import { add } from "@repo/math/add";
import { type Metadata } from "next";
import { Button } from "@repo/ui/components/Button";

export const metadata: Metadata = {
  title: "トップページ",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
        <h2>アプリ名：{process.env.APP_NAME}</h2>
        <h2>環境：{process.env.NODE_ENV}</h2>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <div>{add(1, 2)}</div>
      <Button>テストボタン</Button>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
