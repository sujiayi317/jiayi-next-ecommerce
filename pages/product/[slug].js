import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductScreen;
