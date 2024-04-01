import React from 'react'
import Navbar from '../../components/navbar'
import { InfiniteMovingCardsDemo } from '@/app/context/ui/category_ui'



import { CarouselSpacing } from '@/app/context/ui/favourite'
import Category from '@/app/category/page'

const Dashboard = () => {
  return (
    <div>
      
<Navbar/>
<InfiniteMovingCardsDemo/>
<Category/>
<CarouselSpacing/>
    </div>
  )
}

export default Dashboard