import {Layout} from "./components/Layout";
import {Hero}  from "./components/sections/Hero";
import {Brands} from "./components/sections/Brands";
import {Services} from "./components/sections/Services";
import {AboutUs} from "./components/sections/AboutUs";
import {Pricing} from "./components/sections/Pricing";
import { CTA } from "./components/sections/CallToAction";

export const App = () => {


  return (
    <Layout title="Edge360AI">
     <Hero/>
     <Brands/>
     <Services/>
     <AboutUs/>
     <Pricing/>
     <CTA/>
    </Layout>
  )
}


