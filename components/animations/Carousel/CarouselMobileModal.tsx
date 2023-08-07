import {useState} from 'react';
import {useSpring} from "react-spring";


export const MobileCarousel = () => {

    const [carouselVisibility, setcarouselVisibility] = useState(false);
    const [resetAnimation, setResetAnimation] = useState(false);
    const carouselStyling = 'mx-auto my-2 lg:flex flex-col justify-center overflow-auto';


    const openMobileCarousel = useSpring({
        from: carouselVisibility ? {
            transform: carouselVisibility ? 'translateY(100%)' : 'translateY(0%)',
            opacity: 0
        } : {},
        to: carouselVisibility ? {
            transform: carouselVisibility ? 'translateY(0%)' : 'translateY(100%)',
            opacity: carouselVisibility ? 1 : 0
        } : {},
        reset: resetAnimation,
        onRest: () => setResetAnimation(false),
        config: {
            duration: 350,
        },
    });

    const handleToggle = () => {
        setcarouselVisibility((prevState) => !prevState);
        setResetAnimation(true);
    };

    return {carouselVisibility, carouselStyling, openMobileCarousel, handleToggle,}
}



