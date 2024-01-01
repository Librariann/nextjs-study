import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSotredPostsData } from "@/lib/post";
import Link from "next/link";

type allPostsDataType = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

export default function Home({ allPostsData }: allPostsDataType) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Librarian</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Librarian Introduction]</p>
        <p>(This is Website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id} className={homeStyles.listItem}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSotredPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
