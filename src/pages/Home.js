import React from "react";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { useGlobalContext } from "../context/context";

function Home() {
  const { loading } = useGlobalContext();
  console.log(loading + "jksdfhkjlaf");
  return (
    <>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <HomeContent />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
