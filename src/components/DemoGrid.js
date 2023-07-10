import demoData from "../demoData.json";
import { Demo } from "./Demo";
import { ExhibitHeading } from "./ExhibitHeading";
import { DemoNoExhibit } from "./DemoNoExhibit";
import { BigSwiper } from "./BigSwiper";
import { transformTimeString } from "../utils";
import { transformExhibitString } from "../utils";

export function DemoGrid({ filterExhibit, filterArrivalTime, filterDepartureTime, sort }) {
    const copyDemos = [...demoData];

    function demoFilter(demo) {
        return (transformExhibitString(demo.Exhibit) === filterExhibit || filterExhibit === "all") && (transformTimeString(demo.Time) >= filterArrivalTime) && (transformTimeString(demo.Time) < filterDepartureTime);
    }

    function exhibitSort(demoA, demoB) {
        const exhibitA = demoA.Exhibit;
        const exhibitB = demoB.Exhibit;

        return exhibitA.localeCompare(exhibitB);
    }

    function timeSort(demoA, demoB) {
        const timeA = transformTimeString(demoA.Time);
        const timeB = transformTimeString(demoB.Time);

        const dateA = new Date(`1970-01-01T${timeA}`);
        const dateB = new Date(`1970-01-01T${timeB}`);

        return dateA - dateB;
    };

    if (sort === 'exhibit') {
        copyDemos.sort(exhibitSort);
        const filteredDemos = copyDemos.filter(demoFilter);
        let lastExhibit = "";
        return (
            <section className="demo-grid grid">
                {filteredDemos.length > 0 ? (
                    filteredDemos.map((demo, index) => {
                        if (lastExhibit !== demo.Exhibit) {
                            lastExhibit = demo.Exhibit;
                            return (
                                <>
                                    <ExhibitHeading key={demo.Exhibit} exhibit={demo.Exhibit} />
                                    <BigSwiper exhibit={demo.Exhibit}/>
                                    <DemoNoExhibit key={index} demo={demo} />
                                </>
                            );
                        } else {
                            return (
                                <DemoNoExhibit key={index} demo={demo} />
                            );
                        }
                    })
                ) : (
                    <p className="text-center pt-4">Sorry, no demos in this exhibit today.</p>
                )}
            </section>
        );
    } else {
        copyDemos.sort(timeSort);
        const filteredDemos = copyDemos.filter(demoFilter);
        return (
            <section className="demo-grid grid">
                {filteredDemos.length > 0 ? (
                    filteredDemos.map((demo, index) => (
                        <Demo key={index} demo={demo} />
                    ))
                ) : (
                    <p className="text-center pt-4">Sorry, no demos in this exhibit today.</p>
                )}
            </section>
        );
    }

}