import { data, Order } from "./data";
import { useParams } from "react-router-dom";

function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const order = data.orders.find((o: Order) => o._id === parseInt(id as string));
  return (
    <div className="content content-margined">
      <h3>order name: {order?.user.name}</h3>
    </div>
  );
}

export default OrderDetail;
export {};