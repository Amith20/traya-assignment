import Image from 'next/image'
import React from 'react'
import doctor1 from '../../../../public/images/doctors/dhwani.webp'
import doctor2 from '../../../../public/images/doctors/shefali.webp'
import doctor3 from '../../../../public/images/doctors/shailendra.webp'
import doctor4 from '../../../../public/images/doctors/harish.webp'
import doctor5 from '../../../../public/images/doctors/sangeeta.webp'
import doctor6 from '../../../../public/images/doctors/kalyani.webp'
import doctor7 from '../../../../public/images/doctors/siddhi.webp'
import Carousel from '../Carousel/carousel'
import 'react-multi-carousel/lib/styles.css'



function OurDoctors() {

    const doctorsData = [
        {
            name:'Dr. Dhwani Saxena',
            specialist:'Dermatologist',
            profileUrls:doctor1
        },
        {
            name:'Dr. Shefali Saini',
            specialist:'Dermatologist',
            profileUrls:doctor2
        },
        {
            name:'Dr. Shailendra Chaubey',
            specialist:'Ayurveda Practitioner',
            profileUrls:doctor3
        },
        {
            name:'Dr. Harish Balaji. R',
            specialist:'Dermatologist',
            profileUrls:doctor4
        },
        {
            name:'Dr. Sangeeta Menon',
            specialist:'Nutritionist',
            profileUrls:doctor5
        },
        {
            name:'Dr. Kalyani Deshmukh',
            specialist:'Dermatologist and Trichologist',
            profileUrls:doctor6
        },
        {
            name:'Dr. Siddhi Sonawane',
            specialist:'Dermatologist',
            profileUrls:doctor7
        },
        
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 900 },
            items: 3
          }
    }

  return (
    <div className='w-100 bg-white'>
        <div className='container p-5'>
            <div>
                <h2 className='fw-bold text-center mb-4'>Our Doctors</h2>
                <h4 className='text-center fw-normal mb-4 lh-lg'>Once you place the order, a dermatologist and ayurveda doctor will look at your case and approve your plan. They will define the exact dosage and usage instructions.</h4>
            </div>
            <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                containerClass='carousel-container py-3'
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {doctorsData.map((doc , index) => {
                    return(
                        <div className='card rounded-4 shadow border-0 d-flex justify-content-between p-3 mx-3' key={index}>
                            <div className='mx-auto mb-4'>
                                <div className=' position-relative rounded-circle' style={{borderColor:'#B7D340' , borderStyle:'solid'}}>
                                    <Image alt='...' className='rounded-circle' src={doc.profileUrls} width={85} height={85} />
                                </div>
                            </div>
                            <div>
                                <h5 className='text-center fw-bold'>{doc.name}</h5>
                                <h5 className='text-center'>{doc.specialist}</h5>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    </div>
  )
}

export default OurDoctors