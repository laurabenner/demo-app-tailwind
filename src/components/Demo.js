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
            className="demo bg-demo p-4 m-2 border rounded-xl border-transparent w-11/12 lg:w-4/6 justify-self-center grid grid-cols-12"
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