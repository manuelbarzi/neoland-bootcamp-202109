function Combo({items,onSelect,className='',campoPendiente=''}){
    return items?.length ?
    <select className={className} onChange={(event) => onSelect(event)}>
        <option value=""></option>
        {
            items.map(
                ({id,value}) =>
                <option value={id} key={id} >{value}</option>
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