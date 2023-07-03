import { transformExhibitString } from "../utils";

export function Exhibit({ exhibit }) {
    return (
        <div className="exhibit col-start-3 col-end-11 row-start-1 row-span-2">
            <p>
                <a href={"https://nationalzoo.si.edu/animals/exhibits/" + transformExhibitString(exhibit).replace("africa-trail", "cheetah-conservation-station")} target="_blank" rel="noreferrer">
                    {exhibit.toUpperCase()}
                </a>
            </p>
        </div>
    );
}