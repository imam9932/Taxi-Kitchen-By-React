import { Suspense } from "react";
import Heading from "./Components/Heading"
import Logo from "./Components/Navbar/Logo"
 import Navbar from "./Components/Navbar/Navbar"
import OrdersContainer from "./Components/OrdersContainer";
import States from "./Components/States"

const loadOrders=()=>fetch('/Orders.json').then(res =>res.json());
  

function App() {
  const ordersPromise=loadOrders();
  
  return (
    <div>
      <header className="w-11/12 mx-auto mt-2">
          <Navbar></Navbar>   
 </header>
 <section className="mt-5">
  <Heading>Kitchen Room</Heading>
 </section>
 <section>
  <Suspense fallback={'Loading...'}>
    <OrdersContainer promise={ordersPromise}></OrdersContainer>
  </Suspense>
 </section>
   </div>
  )
}

export default App
