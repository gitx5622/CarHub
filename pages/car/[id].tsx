import Image from "next/image";
import imageLoader from "../../components/imageLoader";
import {GetServerSideProps} from "next";
import {Cars} from "../../components/types";

const CarDetails = ({ car }: { car: Cars }) => {
    return (
        <div>
            <h1>Car Details:</h1>
            <h2>{car.title}</h2>
            <Image
                src={car.imageUrl}
                alt={car.title}
                loader={imageLoader}
                unoptimized
                width={100}
                height={100}
            />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://api.staging.myautochek.com/v1/inventory/car/${context.query.id}`
    );
    const character = await res.json();
    return {
        props: {
            character,
        },
    };
};

export default CarDetails;
