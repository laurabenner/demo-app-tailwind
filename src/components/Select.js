export function Select({ updateFilterExhibit }) {

    function handleChange(e) {
        updateFilterExhibit(e.target.value);
    }

    return (
        <select name="exhibits" id="exhibit-select" onChange={(e) => handleChange(e)}>
            <option value="all">All Exhibits</option>
            <option value="africa-trail">Africa Trail</option>
            <option value="amazonia">Amazonia</option>
            <option value="american-bison">American Bison</option>
            <option value="american-trail">American Trail</option>
            <option value="asia-trail">Asia Trail</option>
            <option value="bird-house">Bird House</option>
            <option value="claws-paws-pathway">Claws & Paws Pathway</option>
            <option value="elephant-trails">Elephant Trails</option>
            <option value="great-cats">Great Cats</option>
            <option value="kids-farm">Kids' Farm</option>
            <option value="primates">Primates</option>
            <option value="reptile-discovery-center">Reptile Discovery Center</option>
            <option value="small-mammal-house">Small Mammal House</option>
        </select>
    );
}