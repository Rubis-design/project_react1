export function Product(products) {
  return (
    <div>
      <h1>Product #1</h1>
      <p>Product name: {products.name}</p>
      <p>Description: {products.descriptio}</p>
      <p>Price: {products.price}</p>
    </div>
  );
}
