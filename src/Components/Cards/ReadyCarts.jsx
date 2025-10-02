import React from 'react';

const ReadyCarts = ({order}) => {
  return (
    <div>
<div className='shadow p-5 border-2 border-amber-300 rounded-md bg-pink-200'>
        <h2 className='font-bold text-lg'>{order.order_title}</h2>
        <p> <span className='text-gray-500'>Table No :</span> {order.table_no}</p>
        <p> <span className='text-gray-500'>Waiter ID : </span>{order.waiterId}</p>

  </div>
      </div>
  );
};

export default ReadyCarts;