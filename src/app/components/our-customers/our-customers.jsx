import Image from 'next/image'
import React from 'react'
import anon1 from '../../../../public/images/customers/anonymous-1.jpg'
import anon2 from '../../../../public/images/customers/anonymous-2.webp'
import anon3 from '../../../../public/images/customers/anonymous-3.webp'
import rajath1 from '../../../../public/images/customers/rajath-1.webp'
import rajath2 from '../../../../public/images/customers/rajath-2.jpg'
import rajath3 from '../../../../public/images/customers/rajath-3.webp'
import sunil1 from '../../../../public/images/customers/sunil-1.webp'
import sunil2 from '../../../../public/images/customers/sunil-2.webp'
import sunil3 from '../../../../public/images/customers/sunil-3.webp'
import uddesh1 from '../../../../public/images/customers/uddesh-1.webp'
import uddesh2 from '../../../../public/images/customers/uddesh-2.webp'
import uddesh3 from '../../../../public/images/customers/uddesh-3.jpg'

import rating from '../../../../public/others/rating.webp'
import Carousel from '../Carousel/carousel'
import 'react-multi-carousel/lib/styles.css'


function OurCustomers() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 900 },
            items: 1
          }
    }

    const customerData = [
            {
                name:'Anonymous',
                imgUrls:{
                    imgUrl1:anon1,
                    imgUrl2:anon2,
                    imgUrl3:anon3
                },
                reviewedOn:'9th Apr 2022',
                comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis itaque quisquam sint, iure veniam ut! Molestias in, tenetur cumque architecto cupiditate perferendis et impedit ipsam?',
                usedFor:3
            },
            {
                name:'Sunil Bhadoriya',
                imgUrls:{
                    imgUrl1:sunil1,
                    imgUrl2:sunil2,
                    imgUrl3:sunil3
                },
                reviewedOn:'15th Aug 2021',
                comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis itaque quisquam sint, iure veniam ut! Molestias in, tenetur cumque architecto cupiditate perferendis et impedit ipsam?',
                usedFor:5
            },
            {
                name:'Uddeshya',
                imgUrls:{
                    imgUrl1:uddesh1,
                    imgUrl2:uddesh2,
                    imgUrl3:uddesh3
                },
                reviewedOn:'20th Nov 2022',
                comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis itaque quisquam sint, iure veniam ut! Molestias in, tenetur cumque architecto cupiditate perferendis et impedit ipsam?',
                usedFor:4
            },
            {
                name:'Rajath Sadh',
                imgUrls:{
                    imgUrl1:rajath1,
                    imgUrl2:rajath2,
                    imgUrl3:rajath3
                },
                reviewedOn:'17th Feb 2023',
                comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis itaque quisquam sint, iure veniam ut! Molestias in, tenetur cumque architecto cupiditate perferendis et impedit ipsam?",
                usedFor:7
            },
    ]
  return (
   <div className='bg-white pb-4'>
        <div>
            <p className=' fw-bold text-center fs-1'>Our Customers</p>
            <div className='container shadow mt-5'>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    ssr={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    containerClass='carousel-container'
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {
                        customerData.map((cust , index) => {
                            return (
                                <div className='card p-4 border-0' key={index}>
                                    <div className='d-flex justify-content-between align-items-center px-5' >
                                        <div>
                                            <Image alt='...' width={180} height={180} src={cust.imgUrls.imgUrl1}/>
                                            <p className='text-center'>1 Months</p>
                                        </div>
                                        <div>
                                            <Image alt='...' width={180} height={180} src={cust.imgUrls.imgUrl2}/>
                                            <p className='text-center'>3 Months</p>
                                        </div>
                                        <div>
                                            <Image alt='...' width={180} height={180} src={cust.imgUrls.imgUrl3}/>
                                            <p className='text-center'>5 Months</p>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='mt-3'>{cust.name}</h2>
                                        <Image alt='...' src={rating} className='d-block text-center mx-auto'/>
                                        <span>{`Reviewed on ${cust.reviewedOn}`}</span>
                                        <p className='fs-5 py-2'>{cust.comment}</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <p className='fw-bold m-0'>Used For</p>
                                                <p>{`${cust.usedFor} Months`}</p>
                                            </div>
                                            <div>
                                                <p className='fw-bold'>On complete Traya Recommended plan.</p>
                                            </div>
                                        </div>
                                    </div>                    
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
   </div>
  )
}

export default OurCustomers