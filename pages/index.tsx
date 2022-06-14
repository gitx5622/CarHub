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
    pagination: Pagination;
    makeList: PopularCars[];
    popularCarsPagination: Pagination;
}> = ({result, pagination, makeList, popularCarsPagination}) => {
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
            <ListAllCars result={result} pagination={pagination}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        "https://api.staging.myautochek.com/v1/inventory/car/search"
    );
    const {result, pagination}: CarResults = await res.json();
    const popularCarsResponse = await fetch(
        "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
    );
    const {makeList, pagination: popularCarsPagination}: PopularCarResults =
        await popularCarsResponse.json();
    return {
        props: {
            result,
            pagination,
            makeList,
            popularCarsPagination,
        },
    };
};

export default Home;
