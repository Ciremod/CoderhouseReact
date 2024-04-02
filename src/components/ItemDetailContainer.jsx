import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filter = data.find(p => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  if (!product) return <div>Loading</div>;

  return (
    <Container className="mt-4">
      <h6>{product.name}</h6>
      <img src={product.img} alt="s" />
    </Container>
  );
};
