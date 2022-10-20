import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

function Rating() {
  const { filter, setFilter } = useGlobalContext();
  const { byRating } = filter;

  const handleClick = (index) => {
    setFilter({ ...filter, byRating: index + 1 });
  };

  return (
    <>
      {[...Array(5)].map((_, index) => {
        return index >= byRating ? (
          <FaRegStar
            color="orange"
            fontSize="25px"
            onClick={() => {
              handleClick(index);
            }}
          />
        ) : (
          <FaStar
            color="orange"
            fontSize="25px"
            onClick={() => {
              handleClick(index);
            }}
          />
        );
      })}
    </>
  );
}

export default Rating;
