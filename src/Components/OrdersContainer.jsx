import React, { use, useState } from 'react';
import States from './States';
import OrderCards from './Cards/OrderCarts';


const OrdersContainer = ({promise}) => {
const orders=use(promise);
const [cookingItems,setCookingItems]=useState([])
  const handleOrders=(orders)=>{
 
const newCookingItems=[...cookingItems,orders];
setCookingItems(newCookingItems)
  }
  console.log(cookingItems);
  return (
    <div>
      <States ordersTotal={orders.length} cookingTotal={cookingItems.length}></States>
      <section className='w-11/12 mx-auto py-10 grid lg:grid-cols-12 grid-cols-1 gap-5'>
      <div className='lg:col-span-7'>
 <h2 className='font-bold text-4xl'>Current Orders</h2>
  <div className='space-y-5'>
        {
        orders.map(items =>
          <OrderCards orders={items} key={items.id} handleOrders={handleOrders}></OrderCards>
        )
       }
       </div>
       </div>
      <div className='lg:col-span-5'>
        <h2 className='font-bold text-4xl'>Cooking Now</h2>
        <div className='shadow p-10 space-y-5 rounded-md'>
          {
            cookingItems.map(order=> <div className='border-2 border-amber-300 p-2 rounded-lg'>
              <h2 className='font-bold text-xl text-amber-500'>{order.order_title}</h2>
              <p className='font-semibold'>Quantity : {order.quantity}</p>
              <p className='text-sm text-gray-500'>{order.special_instruction}</p>
              <button className='bg-amber-400 rounded-md py-1 px-3 mt-2'>Cooked?</button>
            </div>
              
            )
          }

        </div>
        <h2 className='font-bold text-4xl mt-3'>Ready To Serve</h2>
        <div className='shadow p-10 space-y-5'>

        </div>
       </div>
      

      </section>
    </div>
  );
};

export default OrdersContainer;