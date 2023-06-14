import { ContactNoDialog } from "../component/ContactNoDialog";

export const ContactPage = () => {

    return (
    <>

    <div className="w-full my-16">
        
        <div className="career-bg  w-full flex gap-12 justify-center px-4 md:px-8">
            {/* <Contact
            padding="px-1 md:px-16 lg:px-48"
            /> */}
            <ContactNoDialog/>
        </div>
    </div>

    </>
);
};