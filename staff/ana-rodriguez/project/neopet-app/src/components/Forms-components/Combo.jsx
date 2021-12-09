function Combo({items,onSelect}){
    return items?.length ?
    <select onChange={(event) => onSelect(event)}>
        <option value=""></option>
        {
            items.map(
                ({id,valor}) =>
                <option value={id} key={id} >{valor}</option>
            )
        }
    </select>
    :
    null;
}

export default Combo;