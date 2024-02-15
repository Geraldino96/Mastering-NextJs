'use client'

import React, { useState } from 'react'
//Dynamic function must be used to implement lazy loading
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(()=> import('../components/HeavyComponent'), 
{ 
    ssr: false,
    loading: ()=> <p>Loading...</p>})

const Page = () => {
    const [isVisible, setVisible ] = useState(false)
  return (
    <div>
        <h1>Hello!</h1>
        <button className='btn' onClick={()=> setVisible(true)}>Show</button>
        {isVisible && <HeavyComponent />}
        <button className='btn' onClick={async ()=> {
            //Lodash is beeing imported after clicking the button
            const _ = (await import('lodash')).default
            const users = [
                {name : 'c'},
                {name : 'b'},
                {name : 'a'}
            ]

            const sorted = _.orderBy(users, ['name'])
            console.log(sorted)
        }}>Lodash</button>
    </div>
  )
}

export default Page