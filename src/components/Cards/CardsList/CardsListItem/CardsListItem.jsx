import React from 'react'
import "./style.scss"

export const CardsListItem = ({item}) => {
    const {likes,userImageURL,comments,tags}= item;
    return (
        <li>
            <img src={userImageURL}/>
            <div className="div">{tags}</div>
            <div>{likes}</div>
            <div>{comments}</div>
        </li>
    )
}
