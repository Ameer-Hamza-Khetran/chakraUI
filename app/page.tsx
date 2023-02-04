import { Inter } from '@next/font/google'
import Pricing from "./pricingUi/pricing";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Pricing/>
  )
}
