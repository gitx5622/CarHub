import type {GetServerSideProps} from "next";
import Head from "next/head";
import { Cars, CarResults } from "../components/types";
import styles from "../styles/Home.module.css";

const ListCars = ({ result: [], pagination: {} }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>List Cars</title>
      </Head>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://api.staging.myautochek.com/v1/inventory/car/search");
  const { result, pagination }: CarResults = await res.json();
  return {
    props: {
      result,
    },
  };
};

export default ListCars;
