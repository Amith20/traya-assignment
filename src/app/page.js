import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import AssessmentReport from './components/assement-report/assessment-report'
import TreatmentPlan from './components/treatment-plan/treatment-plan'
import PrescribedPlan from './components/prescribed-plan/prescribed-plan'
import OurCustomers from './components/our-customers/our-customers'
import OurDoctors from './components/our-doctors/our-doctors'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <AssessmentReport/>
      <TreatmentPlan/>
      <PrescribedPlan/>
      <OurCustomers/>
      <OurDoctors/>
   </>
  )
}
