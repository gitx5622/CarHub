import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ListAllCars from "../components/cars/listCars";
import Navbar from "../components/navbar";
import { CarResults, Cars, Pagination } from "../components/types";
import "antd/dist/antd.css";
import CarouselAuto from "../components/carousal";

const Home: NextPage<{ result: Cars[]; pagination: Pagination }> = ({
  result,
  pagination,
}) => {
  return (
    <div>
      <Head>
        <title>CarHub</title>
        <meta name="description" content="Carhub a website app that allows customers to check latest car deals and popular makes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <CarouselAuto />
      <ListAllCars result={result} pagination={pagination} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/car/search"
  );
  const { result, pagination }: CarResults = await res.json();
  return {
    props: {
      result,
      pagination,
    },
  };
};

export default Home;
