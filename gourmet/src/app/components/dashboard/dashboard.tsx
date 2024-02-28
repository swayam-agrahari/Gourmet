import React from 'react'
import Navbar from '../navbar'
import { InfiniteMovingCardsDemo } from '@/app/context/card/test-page'

import Category from '../ui/category'
import Favourite from '@/app/context/favourite/Favourite'

const Dashboard = () => {
  return (
    <div>
<Navbar/>
<InfiniteMovingCardsDemo/>
<Category/>
<Favourite/>
    </div>
  )
}

export default Dashboard