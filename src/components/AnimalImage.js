import { getAnimalUrl } from "../utils";

export function AnimalImage({ image, animal, updateLink }) {
    function handleMouseEnter() {
        updateLink(animal);
    }

    function handleMouseLeave() {
        updateLink("");
    }

    function handleClick() {
        window.open(getAnimalUrl(animal), "_blank");
    }

    return (
        <img className="swiper-image rounded-full w-24 h-24 mx-auto my-2" src={image} alt={animal} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></img>
    );
}