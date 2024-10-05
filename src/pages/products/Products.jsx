import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {" "}
      this is Products{" "}
      <Link className="underline" to={"/"}>
        Go to dashboard
      </Link>
    </div>
  );
};

export default Products;
