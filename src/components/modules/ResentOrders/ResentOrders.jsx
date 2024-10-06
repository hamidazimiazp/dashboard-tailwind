import { Link } from "react-router-dom";
import { RESENT_ORDERS_data } from "../../../constant/recentOrdersData";
import { getOrderStatus } from "../../../utils/get_order_status";

const ResentOrders = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-10 md:mb-5 rounded-sm border border-gray-200 flex-1 h-[27rem] overflow-hidden">
      <strong className="text-gray-700 font-medium">Resent Orders</strong>
      <div className="mt-3 h-full overflow-y-scroll">
        <table className="w-full text-gray-700 text-lg text-center border-x border-gray-200 rouned-sm">
          <thead>
            <tr>
              {Object.keys(RESENT_ORDERS_data[0]).map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {RESENT_ORDERS_data.map((item) => {
              return (
                <tr key={item.id} className="border-b last:!border-none">
                  <td>#{item.id}</td>
                  <td>
                    <Link to={`/products/${item.id}`}>{item.product_id}</Link>
                  </td>
                  <td>{item.customer_id}</td>
                  <td>
                    <Link to={`/customer/${item.customer_name}`}>
                      {item.customer_name}
                    </Link>
                  </td>

                  <td>{new Date(item.order_date).toLocaleDateString()}</td>
                  <td>{item.order_total}</td>
                  <td>{item.shipment_address}</td>
                  <td>{getOrderStatus(item.current_order_status)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResentOrders;
