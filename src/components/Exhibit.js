import { transformExhibitString } from "../utils";

export function Exhibit({ exhibit }) {
    return (
        <div className="exhibit">
            <p>
                <a href={"https://nationalzoo.si.edu/animals/exhibits/" + transformExhibitString(exhibit).replace("africa-trail", "cheetah-conservation-station")} target="_blank" rel="noreferrer">
                    {exhibit.toUpperCase()}
                </a>
            </p>
        </div>
    );
}