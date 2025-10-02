import { CalendarArrowDown, CookingPot, ScrollText } from 'lucide-react';
import React from 'react';

const States = ({ordersTotal,cookingTotal,readyTotal}) => {
  return (
    <div className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
      {/* current orders */}
          <div className="border-4 border-dotted border-amber-600 rounded-2xl border-primary p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <ScrollText className="animate-pulse" color="#fcb700" size={100} />
        <div className="text-xl text-center">
          Current Orders
          <h2 className="text-6xl font-bold">{ordersTotal}</h2>
        </div>
      </div>
    </div>

    {/* cooking */}
          <div className="border-4 border-dotted border-amber-600 rounded-2xl border-primary p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <CookingPot className="animate-pulse" color="#fcb700" size={100}/>
        
        <div className="text-xl text-center">
          Currently Cooking
          <h2 className="text-6xl font-bold">{cookingTotal}</h2>
        </div>
      </div>
    </div>

    {/* orders ready */}
          <div className="border-4 border-dotted border-amber-600 rounded-2xl border-primary p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        <CalendarArrowDown  className="animate-pulse" color="#fcb700" size={100}/>
        <div className="text-xl text-center">
          Ready To Serve
          <h2 className="text-6xl font-bold">{readyTotal}</h2>
        </div>
      </div>
    </div>

      
    </div>
  );
};

export default States;