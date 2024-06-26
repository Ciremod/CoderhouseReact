import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.category}</Card.Text>
      <Card.Text>{product.price}</Card.Text>
      <Link to={`/item/${product.id}`}><Button variant="primary">Ir al Producto</Button></Link>
    </Card.Body>
  </Card>
);
