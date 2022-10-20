// import * as faker from "faker";
import { faker } from "@faker-js/faker";
// import * as faker from "@faker-js/faker";
import React, { useState, createContext, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState({ product: [], cart: [] });
  const [filter, setFilter] = useState({
    sorting: "",
    bystock: true,
    byRating: 0,
    byDelivery: false,
    bySearch: "",
  });
  const data = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    fastDelivery: faker.datatype.boolean(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6]),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  useEffect(() => {
    setAllProducts({ product: data, cart: [] });
  }, []);

  // console.log(data);
  return (
    <AppContext.Provider
      value={{ loading, allProducts, setAllProducts, filter, setFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
