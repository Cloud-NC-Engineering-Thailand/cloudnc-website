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
            animate="animate-slideleft"
            />

            <Partner
            animate="animate-slideright"
            />
            
            <Customer/>

            <Contact
            id="home-contac"
            />

        
        </div>


    </>
);
}

const Home = React.memo(MemoizedHome);
export default Home;

