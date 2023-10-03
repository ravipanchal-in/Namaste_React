import React from 'react'
import RestaurantCategoryItemList from '../category-item-list/RestaurantCategoryItemList'

const RestaurantCategory = ({data,expand,setShowIndexNo}) => {

  const handleClick =()=>{
    setShowIndexNo()
  }
   
  return (
    <div className='w-full bg-gray-50 shadow-lg my-6'>
<div onClick={handleClick} className='flex justify-between items-center p-3 '>
  <span className='font-bold'>{data?.title} ({data?.itemCards?.length})</span><span>⬇️</span>
</div>
{expand && <RestaurantCategoryItemList items={data?.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory