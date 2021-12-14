function Combo({items,onSelect,className='',campoPendiente=''}){
    return items?.length ?
    <select className={className} onChange={(event) => onSelect(event)}>
        <option value=""></option>
        {
            items.map(
                ({id,valor}) =>
                <option value={id} key={id} >{valor}</option>
            )
        }
    </select>
    :
    <select className={className} onChange={(event) => onSelect(event)}>
    <option value=""></option>
        <option disabled >Pendiente de campo {campoPendiente}</option>
    </select>
}

export default Combo;