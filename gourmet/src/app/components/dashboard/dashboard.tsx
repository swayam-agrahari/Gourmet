import React from 'react'
import Navbar from '../navbar'
import { InfiniteMovingCardsDemo } from '@/app/pages/card/test-page'

import Category from '../category/category'

import { CarouselSpacing } from '@/app/pages/favourite/testpage'

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