import React from "react";
import Billing from "../components/Billing";
import Spinner from "../components/Spinner";
import { useGlobalContext } from "../context/context";

function Checkout() {
  const { loading } = useGlobalContext();
  return <>{loading ? <Spinner /> : <Billing />}</>;
}

export default Checkout;
