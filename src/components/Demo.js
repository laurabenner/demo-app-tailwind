import { useState } from "react";
import { transformExhibitString } from "../utils";
import { Time } from "./Time";
import { Exhibit } from "./Exhibit";
import { Description } from "./Description";
import { Collapsible } from "./Collapsible";
import { AnimalSwiper } from "./AnimalSwiper";

export function Demo({ demo }) {
    const [expanded, setExpanded] = useState(false);

    const updateExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div
            className="demo bg-orange-100 p-4 m-4 border rounded-xl border-transparent w-4/6 grid grid-cols-12 justify-self-center grid-rows-2"
            data-exhibit={transformExhibitString(demo.Exhibit)}
            data-expanded={expanded}
        >
            <Time time={demo.Time} />
            <Exhibit exhibit={demo.Exhibit} />
            <Collapsible onClick={updateExpanded} expanded={expanded}/>
            <Description description={demo.Demo} />
            <AnimalSwiper exhibit={demo.Exhibit} expanded={expanded}/>
        </div>
    );
}