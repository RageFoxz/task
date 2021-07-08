import React from 'react'
import { fetchUsers } from '../../api/apiFetch';
import { CardsList } from './CardsList/CardsList';

export const Cards = () => {

    const [data, setData] = React.useState([]);

React.useEffect(() => {
        const getUser = async () => {
        const response = await fetchUsers();
         setData(response.hits);
        }
        getUser();
       }, [])

    return (
        <>
            <CardsList data={data} />
        </>
    )
}
