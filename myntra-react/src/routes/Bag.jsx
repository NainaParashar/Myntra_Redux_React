import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'




const Bag = () => {
  const bagsId=useSelector(store=>store.bag);
  const items=useSelector(store=>store.items);

   const FinalItems=items.filter((item)=>{
       const finalId=bagsId.indexOf(item.id);
       return finalId>=0;
   });
  
  

  return (
    <div>
    
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {FinalItems.map(item=>(
         <BagItem item={item}/>

          ))};
        </div>
        <BagSummary />
     

      </div>
    </main>

    </div>
  )
}

export default Bag
