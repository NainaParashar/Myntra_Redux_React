import React from 'react'
import { useDispatch } from 'react-redux'
import { bagActions } from '../store/BagSlice';
import { useSelector } from 'react-redux';
const HomeItem = ({item}) => {
  const dispatch=useDispatch();
  const bagsId=useSelector(store=>store.bag);




  const handleAddBag=()=>{
   dispatch(bagActions.addBagItem(item.id));
  
  }
const handleRemoveBagItem=()=>{
  dispatch(bagActions.removeBagItem(item.id));
};
 


  return (
    <div>
       <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs{item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bagsId.indexOf(item.id)>=0?<button type="button" class="btn btn-danger btn-add-bag" onClick={handleRemoveBagItem}>Remove from Bag</button>:<button type="button" class="btn btn-success btn-add-bag" onClick={handleAddBag}>Add to Bag</button>
}
    
    </div>
    </div>
  )
}

export default HomeItem
