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
    <span className="rating">
      {[...Array(5)].map((_, index) => {
        return index >= byRating ? (
          <FaRegStar
            key={index}
            color="grey"
            fontSize="20px"
            onClick={() => {
              handleClick(index);
            }}
          />
        ) : (
          <FaStar
            key={index}
            color="grey"
            fontSize="20px"
            onClick={() => {
              handleClick(index);
            }}
          />
        );
      })}
    </span>
  );
}

export default Rating;
