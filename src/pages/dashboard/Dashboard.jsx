import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      this is dashboard{" "}
      <Link className="underline" to={"/products"}>
        Go to Products
      </Link>
    </div>
  );
};

export default Dashboard;
