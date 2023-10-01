import React from 'react';
import ProductDetail from '../components/ProductDetail';
import Spinner from '../components/Spinner';
import { useGlobalContext } from '../context/context';

function SinglePage() {
  const { loading } = useGlobalContext();
  return <>{loading ? <Spinner /> : <ProductDetail />}</>;
}

export default SinglePage;
