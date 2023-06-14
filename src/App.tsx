import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeSkeleton } from "./Skeleton/HomeSkeleton";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.default })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(module => ({ default: module.default })));
const Layout = lazy(() => import("./Layout/Layout").then(module => ({ default: module.Layout })));
const Training = lazy(() => import("./pages/Training").then(module => ({ default: module.default })));
const CloudMigration = lazy(() => import("./pages/CloudMigration").then(module => ({ default: module.default })));
const Appdelivery = lazy(() => import("./pages/Appdelivery").then(module => ({ default: module.default })));
const Costoptimization = lazy(() => import("./pages/Costoptimization").then(module => ({ default: module.default })));
const Career = lazy(() => import("./pages/Career").then(module => ({ default: module.default })));
const JobSoftware = lazy(() => import("./pages/JobSoftware").then(module => ({ default: module.default })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(module => ({ default: module.ContactPage })));
const JobIntern = lazy(() => import("./pages/JobIntern").then(module => ({default:module.default})));
const ServicePage = lazy(() => import("./pages/Service").then(module => ({default:module.default})));

function App() {

  return (
    <div className="font-mitr overflow-x-hidden">
      <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <Home/>
          </Suspense>} 
          />
        
        <Route path="/aboutus" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <AboutPage/>
          </Suspense>
          } 
        />
         <Route path="/service" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <ServicePage/>
          </Suspense> 
        } /> 
        
        <Route path="/training" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <Training/>
          </Suspense> 
        } />
        <Route path="/cloudmigration" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <CloudMigration/>
          </Suspense> 
        } /> 
        <Route path="/appdelivery" element={

          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <Appdelivery/>
          </Suspense> 
        } /> 
        <Route path="/costoptimization" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <Costoptimization/>
          </Suspense> 

        } /> 
        <Route path="/career" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <Career/>
          </Suspense> 

        } /> 
        <Route path="/job/software" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <JobSoftware/>
          </Suspense> 

        } /> 
        <Route path="/job/intern" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <JobIntern/>
          </Suspense> 
        } /> 
        <Route path="/contact" element={
          <Suspense
          fallback={<HomeSkeleton/>}
          >
            <ContactPage/>
          </Suspense> 
        } />
         
       
      </Route>
    </Routes>
        {/* <Suspense fallback={<HomeSkeleton/>}>
          <Contact />
        </Suspense> */}
    </div>
  );
}

export default App;
