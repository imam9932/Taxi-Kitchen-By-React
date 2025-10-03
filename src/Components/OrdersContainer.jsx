import React, { use, useState } from 'react';
import States from './States';
import OrderCards from './Cards/OrderCarts';
import CookingCard from './CookingCard';
import ReadyCarts from './Cards/ReadyCarts';


const OrdersContainer = ({promise}) => {
const data=use(promise);
const [order,setOrder]=useState(data);

const [cookingItems,setCookingItems]=useState([])
const [readyItems,setReadyItems]=useState([]);
const handleCooking=(orders)=>{
  
const newReadyItems=[...readyItems,orders];
setReadyItems(newReadyItems) 

const remaining=cookingItems.filter(item=>item.id!==orders.id);
setCookingItems(remaining)

const remainingOrders=order.filter(item=> item.id !== orders.id);
setOrder(remainingOrders);

};
// console.log(readyItems);
  const handleOrders=(orders)=>{
 const isExist =cookingItems.find(item=>item.id===orders.id);
 if(isExist){
  alert('Already Cooking!!');
  return;
 }

const newCookingItems=[...cookingItems,orders];
setCookingItems(newCookingItems)
  };
   return (
    <div>
      <States ordersTotal={order.length} cookingTotal={cookingItems.length}
      readyTotal={readyItems.length}></States>
      <section className='w-11/12 mx-auto py-10 grid lg:grid-cols-12 grid-cols-1 gap-5'>
      <div className='lg:col-span-7'>
 <h2 className='font-bold text-4xl'>Current Orders</h2>
  <div className='space-y-5'>
        {
        order.map(items =>
          <OrderCards orders={items} key={items.id} handleOrders={handleOrders}></OrderCards>
        )
       }
       </div>
       </div>
      <div className='lg:col-span-5'>
        <h2 className='font-bold text-4xl'>Cooking Now</h2>
        <div className='shadow p-10 space-y-5 rounded-md'>
          {
            cookingItems.map(order=> <CookingCard order={order} 
              key={order.id}
              handleCooking={handleCooking}></CookingCard>
              
            )
          }

        </div>
        <h2 className='font-bold text-4xl mt-3'>Ready To Serve</h2>
        <div className='shadow p-10 space-y-5'>
          {
            readyItems.map(order=>
              <ReadyCarts key={order.id} order={order}></ReadyCarts>
            )
          }

        </div>
       </div>
      

      </section>
    </div>
  );
};

export default OrdersContainer;