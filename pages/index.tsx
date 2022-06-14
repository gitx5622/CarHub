import type {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import ListAllCars from "../components/cars/listCars";
import Navbar from "../components/navbar";
import {CarResults, Cars, Pagination, PopularCarResults, PopularCars,} from "../components/types";
import CarouselAuto from "../components/carousal";
import PopularCarsComponent from "../components/cars/popularCars";
import {Divider} from "antd";

const Home: NextPage<{
    result: Cars[];
    carResultPagination: Pagination;
    makeList: PopularCars[];
    popularCarsPagination: Pagination;
}> = ({result, carResultPagination, makeList, popularCarsPagination}) => {
    return (
        <div>
            <Head>
                <title>CarHub</title>
                <meta
                    name="description"
                    content="CarHub a website app that allows customers to check latest car deals and popular makes"
                />
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Navbar/>
            <CarouselAuto/>
            <PopularCarsComponent
                makeList={makeList}
                pagination={popularCarsPagination}
            />
            <Divider/>
            <ListAllCars result={result} pagination={carResultPagination}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const carResponse = await fetch(
        "https://api.staging.myautochek.com/v1/inventory/car/search"
    );
    const {result, pagination: carResultPagination}: CarResults = await carResponse.json();
    const popularCarsResponse = await fetch(
        "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
    );
    const {makeList, pagination: popularCarsPagination}: PopularCarResults =
        await popularCarsResponse.json();
    return {
        props: {
            result,
            carResultPagination,
            makeList,
            popularCarsPagination,
        },
    };
};

export default Home;
