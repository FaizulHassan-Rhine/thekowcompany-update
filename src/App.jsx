
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'
import Partnership from './component/Partnership/Partnership'
import Container2D from './component2d/Container2D/Container2D'
import BlogDetails from './component2d/Blog2D/BlogDetails'
import Container3D from './component3d/Container3D/Container3D'
import ExteriorVisualization from './component3d/ExteriorVisualization/ExteriorVisualization'
import InteriorVisualization from './component3d/InteriorVisualization/InteriorVisualization'
import Furniture from './component3d/ProductVisualization3d/Furniture/Furniture'
import TermsCondition from './component/TermsCondition/TermsCondition'
import PrivacyPolicy from './component/PrivacyPolicy/PrivacyPolicy'
// import Contact from './component/ContactUs/ContactUs'
import Thankyou from './component/Thankyou/Thankyou'
import Packaging from './component3d/Packaging/Packaging'
import FashionAccessories from './component3d/FashionAccessories/FashionAccessories'
import TechAccessories from './component3d/TechAccessories/TechAccessories'
import TechEquipments from './component3d/TechEquipments/TechEquipments'
import Cosmetics from './component3d/Cosmetics/Cosmetics'
import TrendsDetails from './component3d/Trends3D/TrendsDetails'
import BlogPage2D from './component/BlogPage2D/BlogPage2D'
import BlogPage3D from './component/BlogPage3D/BlogPage3D'
import ContactUs from './component/ContactUs/ContactUsUpdate'
import 'react-lazy-load-image-component/src/effects/blur.css';
import BookACall from './component/Calendly/BookACall'
import Blog3D from './component3d/Blog3D/Blog'
import ContactUsLanding from './component/ContactUsLanding/ContactUsLanding'
import ContactUsLanding2 from './component/ContactUsLanding2/ContactUsLanding2'
import ContactUsLanding3 from './component/ContactUsLanding3/ContactUsLanding3'
import ContactUsLanding4 from './component/ContactUsLanding4/ContactUsLanding4'
// import PDFViewerPage from './component3d/PDFViewerPage/PDFViewerPage'
import PDFViewer from './component3d/PDFViewer/PDFViewer'
import Portfolio3D from './component3d/Portfolio3D/Portfolio3D'
import Portfolio3DTest from './component3d/Portfolio3D/Portfolio3DTest'
import PortfolioFor3D from './component3d/Portfolio3D/PortfolioFor3D'
import PortfolioTab from './component3d/Portfolio3D/PortfolioTab'
import Career from './component/Career/Career'
import CareerThankYou from './component/Career/CareerThankYou'
import Onboarding from './pages/Onboarding'
// import Microsite2D from './pages/Microsite2D'
// import Microsite2DTest from './pages/Microsite2D/MicrositeTest'
import APIDocs from './pages/APIDocumentation'
import Microsite2DFinal from './pages/Microsite2D'
// import APIDocsText from './pages/APIDocumentation/test'


function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/landing-contact-us" element={<ContactUsLanding />} />
      <Route path="/landing-contact-us-2" element={<ContactUsLanding2 />} />
      <Route path="/landing-contact-us-3" element={<ContactUsLanding3 />} />
      <Route path="/landing-contact-us-4" element={<ContactUsLanding4 />} />
    
      <Route path="/2d/industry-trends" element={<BlogPage2D />} />
      <Route path="/3d/industry-trends" element={<BlogPage3D />} />
      <Route path="/integrations" element={<Partnership />} />
      <Route path="/2d" element={<Container2D/>} />
      <Route path="/3d" element={<Container3D/>} />
      {/* <Route path="/microsite-2d" element={<Microsite2DTest/>} /> */}
      <Route path='/microsite-2d' element={<Microsite2DFinal/>} />
      <Route path="/3d/creative-showcase" element ={<PDFViewer />}/>
      <Route path='/3d/industry-trends-details/:id' element={<Blog3D/>} />
      <Route path="/2d/industry-trends-details/:id" element={<BlogDetails/>} />
      <Route path="/3d/industry-trends-details" element={<TrendsDetails/>} />
      <Route path="/exterior-visualization" element={<ExteriorVisualization/>} />
      <Route path="/interior-visualization" element={<InteriorVisualization/>} />
      <Route path="/furniture" element={<Furniture/>} />
      <Route path="/packaging" element={<Packaging/>} />
      <Route path="/fashion-accessories" element={<FashionAccessories/>} />
      <Route path="/tech-accessories" element={<TechAccessories/>} />
      <Route path="/tech-equipments" element={<TechEquipments/>} />
      <Route path="/cosmetics" element={<Cosmetics/>} />
        {/* <Route path="/3dTest" element={<Test3DModel/>} /> */}
      <Route path="/terms-condition" element={<TermsCondition/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/thank-you/*" element={<Thankyou/>} />
      <Route path="/book-a-call" element={<BookACall/>} />
      <Route path="/cgi-web" element={<Portfolio3D/>} />
      <Route path="/cgi-mobile" element={<Portfolio3DTest/>} />
      <Route path="/cgi-tab" element={<PortfolioTab/>} />
      <Route path="/CGI_3D/creativeshowcase" element={<PortfolioFor3D/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/career-thank-you" element={<CareerThankYou/>} />
      <Route path="/onboarding" element={<Onboarding/>} />
      <Route path="/api-resources/retouched" element={<APIDocs/>} />
      {/* <Route path="/api-documentation" element={<APIDocsText/>} /> */}
      </Routes>
    </>
  )
}

export default App
