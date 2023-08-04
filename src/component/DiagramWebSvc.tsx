import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ActionIntoView } from '../hook/actionWhenView';

interface DiagramWebSvcProps {

}
const Diagram = "https://res.cloudinary.com/dzz6rgxkl/image/upload/f_auto,q_auto/v1/service/ov6acgozrjdwagpsdaiz"

export const DiagramWebSvc: React.FC<DiagramWebSvcProps> = ({}) => {

    ActionIntoView("#diagram-web-svc", "animate-slideleft")


    return (
    <>
     <div className="w-full px-4 md:px-36 lg:px-72 mt-32 opacity-0" id="diagram-web-svc">
            <h6 className="header-no-mb mb-16">แผนผังกระบวนการทำเว็บไซด์</h6>
            <LazyLoadImage
            loading="lazy"
            src={Diagram}
            width={500}
            height={800}
            className="w-full h-full"
            alt="Cloudnc Ten Fact"
            />
        </div>
    </>
);
}