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

export function AnimalSwiper({ exhibit, expanded }) {
    const [link, setLink] = useState("");

    const updateLink = (newValue) => {
        setLink(newValue);
    }

    if (expanded) {
        let animals = animalList.filter(animal => { return exhibitList[animalList.indexOf(animal)] === transformExhibitString(exhibit); });
        let images = imageList.filter(image => { return exhibitList[imageList.indexOf(image)] === transformExhibitString(exhibit); });

        return (
            <div className="col-start-3 col-end-12 row-span-3 hidden lg:block">
                <p className="my-4">Animals in this exhibit: </p>
                <Swiper
                    className="mySwiper my-4"
                    slidesPerView={5}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {
                        images.map((image, index) => (
                            <SwiperSlide className="text-center text-lg" key={index}>
                                <AnimalImage image={image} animal={animals[index]} updateLink={updateLink} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="animal-div">
                    <p className="animal-text">{"Animal Selected: "}
                        <a className={"animal-link text-" + transformExhibitString(exhibit)} href={getAnimalUrl(link)}>{link}</a>
                    </p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}