/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ProductCard from './product-card';
import product1 from '../../../../public/images/products/product1.webp'
import product2 from '../../../../public/images/products/product2.webp'
import product3 from '../../../../public/images/products/product3.webp'
import product4 from '../../../../public/images/products/product4.webp'
import product5 from '../../../../public/images/products/product5.webp'
import product6 from '../../../../public/images/products/product6.webp'
import product7 from '../../../../public/images/products/product7.webp'
import Carousel from '../Carousel/carousel'
import 'react-multi-carousel/lib/styles.css'

// const productData = require('../../../../public/data/product.json')

function PrescribedPlan() {

const productData = [
    {
        productName:"HEALTH TATVA",
        price:300,
        usage:"Eat one tablet after breakfast and dinner",
        imgUrls:product1
    },
    {
        productName:"NASAL DROPS",
        price:150,
         usage:"Put 3 drops in each nostril before sleeping",
        imgUrls:product2
    },
    {
        productName:"ANTI-DANDRUFF SHAMPOO",
        price:300,
         usage:"Use twice a week",
        imgUrls:product3
    },
    {
        productName:"HAIR VITAMINS",
        price:520,
         usage:"one Tablet after breakfast",
        imgUrls:product4
    },
    {
        productName:"MINOXIDIL 5%",
        price:650,
         usage:"Apply 1ml on the affected area after waking up and before sleeping",
        imgUrls:product5
    },
    {
        productName:"HAIR RAS",
        price:520,
         usage:"Eat two tablet after breakfast and dinner",
        imgUrls:product6
    },
    {
        productName:"SCAP OIL WITH SCALP THERAPY",
        price:450,
         usage:"Massage for 3-4 minutes,twice a week",
        imgUrls:product7
    }
]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 900 },
        items: 1
      }
}

  return (
    <div className='w-100 bg-white pt-5 pb-5 '>
        <h2 className='fw-bold text-center fs-1'>A's Doctor Prescribed Plan</h2>
        <div className='container shadow'>
            <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                // showDots={true}
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                containerClass='carousel-container'
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {
                    productData.map((product , index) =>{
                        return <ProductCard key={index} prod={product}/>

                    })
                }
             </Carousel>
        </div>
    </div>
  )
}

export default PrescribedPlan