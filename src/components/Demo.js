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
            className="demo"
            data-exhibit={transformExhibitString(demo.Exhibit)}
            data-expanded={expanded}
        >
            <Time time={demo.Time} />
            <Exhibit exhibit={demo.Exhibit} />
            <Description description={demo.Demo} />
            <Collapsible onClick={updateExpanded} expanded={expanded}/>
            <AnimalSwiper exhibit={demo.Exhibit} expanded={expanded}/>
        </div>
    );
}