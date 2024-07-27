import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";


const FlipCard = ({
    imageLink,
    imageLink2,
    flipDirection = "horizontal",
    delay = 50,
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDelayActive, setIsDelayActive] = useState(false);

    const flipCard = () => {
        if (isDelayActive) return; // Prevent flipping if delay is active

        setIsFlipped(!isFlipped);
        setIsDelayActive(true);

        setTimeout(() => {
            setIsDelayActive(false);
        }, delay); // Delay in milliseconds
    };

    return (
        <ReactCardFlip flipDirection={flipDirection} isFlipped={isFlipped}>
            <div
                className="front w-[90%] mx-auto aspect-[9/11] rounded-t-2xl overflow-hidden"
                onMouseEnter={flipCard}
            >
                <img
                    src={imageLink}
                    alt="img"
                    className="object-cover size-full bg-[#1F3A49]"
                    draggable="false"
                />
            </div>
            <div
                className="back w-[90%] mx-auto aspect-[9/11] rounded-t-2xl overflow-hidden"
                onMouseLeave={flipCard}
            >
                <img
                    src={imageLink2}
                    alt="img-back"
                    className="object-cover size-full bg-[#1F3A49]"
                    draggable="false"
                />
            </div>
        </ReactCardFlip>
    );
};

export default FlipCard;