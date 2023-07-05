export function Collapsible({ onClick, expanded }) {

    return (
        <p className="collapsible grid col-start-12 col-span-1">
            <button onClick={onClick} data-expanded={expanded}>{expanded ? "-" : "+"}</button>
        </p>
    );
}