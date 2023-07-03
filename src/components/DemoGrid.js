import demoData from "../demoData.json";
import { Demo } from "./Demo";
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
    } else {
        copyDemos.sort(timeSort);
    }

    return (
        <section className="demo-grid" >
            {
                copyDemos.filter(demoFilter).map((demo, index) => (
                    <Demo key={index} demo={demo}/>
                ))
            }
        </section >
    );
}