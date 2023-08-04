import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Dots from "./Dots"
import CarouselControls from "./CarouselControls"
import React, {PropsWithChildren, useEffect, useRef, useState} from "react";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options } : Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [carouselReady, setCarouselReady] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const length = React.Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();
    const modalRef = useRef();


    useEffect(() => {
        if (modalRef.current) {
            console.log('hi')
            emblaApi?.reInit();
        }
    }, [modalRef]);


    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }

        emblaApi?.on("select", selectHandler);
        return () => {

            emblaApi?.off("select", selectHandler);
        };
    }, [emblaApi]);

    return (
        <>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">{children}</div>
                <Dots itemsLength={length} selectedIndex={selectedIndex} />
            </div>
            <CarouselControls
                canScrollNext={canScrollNext}
                canScrollPrev={canScrollPrev}
                onNext={()=>{
                    emblaApi?.reInit();
                    emblaApi?.scrollNext()
                }}
                onPrev={() =>{
                    emblaApi?.reInit();
                    emblaApi?.scrollPrev()
                }}
            />
        </>
    );
};
export default Carousel;