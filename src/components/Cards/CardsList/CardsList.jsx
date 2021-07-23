import React from 'react';
import { CardsListItem } from './CardsListItem/CardsListItem';
import "./style.scss"

export const CardsList = ({data}) => {
    return (
        <ul className="wrapper">
        {data && data.map((item)=><CardsListItem item={item} key={item.id}/>)}
        </ul>
    )
}
