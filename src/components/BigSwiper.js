import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import animalData from "../animalData.json";
import imageData from "../imageData.json";

import { AnimalImage } from "./AnimalImage"
import { transformAnimalString } from "../utils";
import { transformExhibitString } from "../utils";
import { getAnimalUrl } from '../utils';

let animalList = [];
let exhibitList = [];
let imageList = [];

animalData.forEach((animal) => {
    if (animal.title && animal.exhibit_name) {
        const transformedTitle = transformAnimalString(animal.title);
        if (!animalList.includes(transformedTitle)) {
            animalList.push(transformedTitle);
            exhibitList.push(transformExhibitString(animal.exhibit_name));
        }
    }
});

const dataArray = Object.values(imageData);
dataArray.forEach(animal => {
    if (animalList.includes(transformAnimalString(animal.title))) {
        let index = animalList.indexOf(transformAnimalString(animal.title));
        imageList[index] = animal.image_small;
    }
});

export function BigSwiper({ exhibit }) {
    const [animal, setAnimal] = useState("");

    const updateAnimal = (newValue) => {
        setAnimal(newValue);
    }

    let animals = animalList.filter(animal => { return exhibitList[animalList.indexOf(animal)] === transformExhibitString(exhibit); });
    let images = imageList.filter(image => { return exhibitList[imageList.indexOf(image)] === transformExhibitString(exhibit); });

    return (
        <div className="hidden ml-6 lg:block w-4/6 justify-self-center overflow-hidden">
            <h3 className="my-4 font-semibold">{"Animals in this exhibit: "}
                <p className={"inline animal-link font-normal text-" + transformExhibitString(exhibit)}>{animal}</p>
            </h3>
            <Swiper
                className="mySwiper my-4"
                slidesPerView={7}
                navigation={true}
                modules={[Navigation]}
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide className="text-center text-lg" key={index}>
                            <AnimalImage image={image} animal={animals[index]} updateAnimal={updateAnimal} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}