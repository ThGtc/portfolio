import {useEffect, useState} from "react";
import {useSpring} from "react-spring";

export const useCardModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [cardVisible, setCardVisible] = useState(false);

    const openCard = useSpring({
        from: { transform: "scale(0)", opacity: 0 },
        to: { transform: cardVisible ? "scale(1)" : "scale(0)", opacity: cardVisible ? 1 : 0 },
        config: { duration: 300 },
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: cardVisible ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(0.8)',
        onRest: () => {
                if (!cardVisible) {
                    // Reset card visibility after the leave animation is finished
                    setCardVisible(false);
                    closeModal(),
                    document.body.style.overflow = 'visible';
                }
            }
        });

    const toggleCard = () => {
        setCardVisible(!cardVisible);
    };


    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setCardVisible(true);
                document.body.style.overflow = 'hidden';
            }, 100);
        } else {
            setCardVisible(false);
            document.body.style.overflow = 'visible';
        }
    }, [showModal]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            toggleCard();
        }
    };

    return { showModal, cardVisible, openCard, toggleCard, openModal, closeModal, handleOverlayClick };
}