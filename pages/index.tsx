import type {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import ListAllCars from "../components/cars/listCars";
import Navbar from "../components/navbar";
import {CarResults, Cars, Pagination, PopularCarResults, PopularCars,} from "../components/types";
import CarouselAuto from "../components/carousal";
import PopularCarsComponent from "../components/cars/popularCars";

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
            <ListAllCars result={result} pagination={carResultPagination}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const [carResponse, popularCarsResponse] = await Promise.all([
        fetch(`https://api.staging.myautochek.com/v1/inventory/car/search`),
        fetch(`https://api.staging.myautochek.com/v1/inventory/make?popular=true`)
    ]);
    const [results, popularCars] = await Promise.all([
        carResponse.json(),
        popularCarsResponse.json()
    ]);
    const {result, pagination: carsPagination}: CarResults = results;
    const {makeList, pagination}: PopularCarResults = popularCars;
    return {
        props: {
            result,
            makeList,
            carsPagination,
            pagination,
        },
    };
};

export default Home;
