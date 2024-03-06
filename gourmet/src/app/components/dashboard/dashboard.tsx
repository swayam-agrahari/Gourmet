import React from 'react'
import Navbar from '../navbar'
import { InfiniteMovingCardsDemo } from '@/app/context/card/test-page'

import Category from '../category/category'

import { CarouselSpacing } from '@/app/context/favourite/testpage'

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