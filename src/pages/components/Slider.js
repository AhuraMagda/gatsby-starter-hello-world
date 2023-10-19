import React from "react";


const editions = [{
    name: "Edition 2020",
    description: "Nie ma fal nie ma fal nie ma fal nie ma fal nie ma fal nie ma fal nie ma faaaaal nie ma"
},
{
    name: "Edition 2021",
    description: "Z małego miasta wielkie sny atakują twoje ulice... znowu jadę do ciebie saaaaam"
},
{
    name: "Edition 2022",
    description: "jestem wiiiiruuuuuuus więc wiruj ze mną ze świruj ze mną w i r u s"
}
];


function Slider() {


const [activeSlide, setActiveSlide] = React.useState(0)

const changeSlide = (direction, array) => {
    if (direction === "left") {
        if (activeSlide > 0) {
            setActiveSlide(prevSide => prevSide - 1)
        } else {
            setActiveSlide(array.length-1)
        }
    } else if (direction === "right") {
        if (activeSlide < array.length-1) {
            setActiveSlide(prevSide => prevSide + 1)
        } else {
            setActiveSlide(0)
        }
    }
}

    return (
        <div className="prev-editions__slider">

                    <div className="prev-editions__slider__slide">
                        <h3>{editions[activeSlide].name}</h3>
                        <p>{editions[activeSlide].description}</p>
                    </div>

            <img onClick={()=>{changeSlide("left", editions)}} className="prev-editions__slider__arrow-left" src="./icons/icon-slider-arrow-left.png" />
            <img onClick={()=>{changeSlide("right", editions)}}className="prev-editions__slider__arrow-right" src="./icons/icon-slider-arrow-right.png" />
          </div>
    )
}

export default Slider;