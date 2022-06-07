import React from "react";
import { CarResults } from "../types";

const ListAllCars = ({ result, pagination }: CarResults) => {
  return (
    <div>
      {result.map((car) => (
        <div>{car.title}</div>
      ))}
      {pagination.total}
    </div>
  );
};
export default ListAllCars;
