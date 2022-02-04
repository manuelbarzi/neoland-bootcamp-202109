import React from 'react'
import { retrieveItems } from "../logic"
import { useEffect, useState } from 'react'
import Item from './Item'


const Build = ( { build: { id } } ) => {

    const [items, setItems] = useState( [] )

    useEffect( () => {
        ( async () => {

            const items = await retrieveItems( sessionStorage.token, id )
            setItems( items )

        } )()

    }, [] )
    return items && items.length ? <>
        <div className='build'>

            {
                items.map( item => <Item item={item} key={item.id} /> )
            }

        </div>
    </> : null

}

export default Build