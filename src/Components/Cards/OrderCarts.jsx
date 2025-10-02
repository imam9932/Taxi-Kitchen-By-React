import { UtensilsCrossed } from "lucide-react";

const OrderCards = ({orders,handleOrders}) => {
   // const order = {
  //   id: 1,
  //   order_no: 101,
  //   quantity: 2,
  //   order_title: "Chicken Biryani",
  //   special_instruction: "Extra spicy, no onions",
  //   table_no: 5,
  // };

 

  return (
    <div onClick={()=>handleOrders(orders)} className="p-5 rounded-xl shadow-xl relative space-y-3">
      {/* Order Number */}
      <p className="text-xs bg-amber-400 p-2 inline-block rounded-xl">
        #{orders.order_no}
      </p>

      {/* Order Title */}
      <h2 className="text-xl flex items-center gap-2">
        <UtensilsCrossed />
        {orders.quantity} {orders.order_title}
      </h2>

      {/* Special Instruction */}
      <div className="mt-3 text-xs">
        <h4 className="text-primary font-bold text-sm">Instruction</h4>
        <p>{orders.special_instruction}</p>
      </div>

      {/* Table Number Badge */}
      <div className="absolute right-2 top-2 w-10 h-10 flex justify-center items-center bg-amber-400 rounded-full opacity-80 text-white">
        {orders.table_no}
      </div>
    </div>
  );
};

export default OrderCards;