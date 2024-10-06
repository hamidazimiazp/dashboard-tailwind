import { Link } from "react-router-dom";
import { popularProductsData } from "../../../constant/popularProductsData";

const PopularProducts = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200   h-[27rem] overflow-hidden flex-1 md:flex-none md:w-[25rem] ">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3 overflow-y-scroll h-full  md:pb-10">
        {popularProductsData.map((product) => {
          return (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="flex gap-2 hover:no-underline"
            >
              <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm">
                <img
                  className="w-full h-full object-cover"
                  src={product.product_thumbnail}
                  title={product.product_name}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{product.product_name}</p>
                <span
                  className={`text-sm font-medium ${
                    product.product_stock === 0
                      ? "text-orange-500"
                      : "text-green-500"
                  }`}
                >
                  {product.product_stock === 0
                    ? "Out Of stock"
                    : product.product_stock}{" "}
                  is stock
                </span>
              </div>
              <div className="text-xs text-gray-400 pl-2">
                {product.product_price}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
