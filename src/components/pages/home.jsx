import NavigationLayouts from "../fragments/nav";
import HeroLayouts from "../layouts/hero";
import CardLayouts from "../fragments/card";
import AboutLayouts from "../layouts/about";
import ServicesLayouts from "../layouts/services";
import TaglineLayouts from "../fragments/tagline";
import BenefitsLayouts from "../layouts/benefits";
import TestiLayout from "../layouts/testi";
import FooterLayouts from "../layouts/footer";

function Home() {
  return (
    <div>
      <NavigationLayouts></NavigationLayouts>
      <HeroLayouts></HeroLayouts>
      <CardLayouts></CardLayouts>
      <AboutLayouts></AboutLayouts>
      <ServicesLayouts></ServicesLayouts>
      <TaglineLayouts></TaglineLayouts>
      <BenefitsLayouts></BenefitsLayouts>
      <TestiLayout></TestiLayout>
      <FooterLayouts></FooterLayouts>
    </div>
  )
}

export default Home;
