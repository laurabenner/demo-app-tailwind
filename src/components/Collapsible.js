export function Collapsible({ onClick, expanded }) {
    return (
        <p className="collapsible grid row-start-1 row-span-1 col-start-12 col-span-1">
            <button onClick={onClick} data-expanded={expanded}>{expanded ? "-" : "+"}</button>
        </p>
    );
}