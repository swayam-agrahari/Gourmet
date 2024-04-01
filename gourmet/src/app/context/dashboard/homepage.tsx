import React from 'react'
import Navbar from '../../components/navbar'
import { InfiniteMovingCardsDemo } from '@/app/context/ui/category_ui'

import Category from '../category/category'

import { CarouselSpacing } from '@/app/context/ui/favourite'

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