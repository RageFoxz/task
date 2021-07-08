import React from 'react';
import { CardsListItem } from './CardsListItem/CardsListItem';

export const CardsList = ({data}) => {
    return (
        <ul>
        {data && data.map((item)=><CardsListItem item={item} key={item.id}/>)}
        </ul>
    )
}
