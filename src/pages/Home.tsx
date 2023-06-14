import React, { lazy } from "react";

const About = lazy(() => import("../component/About").then(module => ({ default: module.default })));
const ServiceComp = lazy(() => import("../component/ServiceComp").then(module => ({ default: module.default })));
const Partner = lazy(() => import("../component/Partner").then(module => ({ default: module.default })));
const Customer = lazy(() => import("../component/Customer").then(module => ({ default: module.default })));
const Contact = lazy(() => import("../component/Contact").then(module => ({ default: module.Contact })));
const Carousel = lazy(() => import("../component/Carousel/Carousel").then(module => ({ default: module.default })));


function MemoizedHome () {


    return (
    <>


    <div className="animate-slideup bg-banner">
        <Carousel/>
    </div>

        <div className="flex flex-col gap-32 mt-32 career-bg">
            
            <div className="">
                <About/>
            </div>

            <ServiceComp
            translateX="-60"
            />

            <Partner
            translateX="60"
            />
            
            <Customer/>

            <Contact/>

        
        </div>


    </>
);
}

const Home = React.memo(MemoizedHome);
export default Home;


/* 
import React from "react";
import { lazy } from "react";

const About = lazy(() => import("../component/About").then(module => ({ default: module.default })));
const Service = lazy(() => import("../component/Service").then(module => ({ default: module.default })));
const Partner = lazy(() => import("../component/Partner").then(module => ({ default: module.default })));
const Customer = lazy(() => import("../component/Customer").then(module => ({ default: module.default })));
const Contact = lazy(() => import("../component/Contact").then(module => ({ default: module.Contact })));
// const Carousel = lazy(() => import("../component/Carousel/Carousel").then(module => ({ default: module.default })));


function MemoizedHome ({}) {
    //@ts-ignore
    
    console.log(import.meta.env.VITE_SOME_SENDGRID_API_KEY) // 123

    return (
    <>

   

    <div className="animate-slideup bg-banner">
        <Carousel/>
    </div>

        <div className="flex flex-col gap-32 mt-32 career-bg">
            
            <div className="">
                <About/>
            </div>

            <Service/>

            <Partner/>
            
            <Customer/>

            <Contact/>

        
        </div>


    </>
);
}

const Home = React.memo(MemoizedHome);
export default Home;

*/