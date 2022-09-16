import React from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_DIB_TO_USER, ADD_DIB_TO_ITEM } from "../utils/mutations"
import Auth from '../utils/auth';

const HomeList = ({ items }) => {

    const [addDibToUser, { error }] = useMutation(ADD_DIB_TO_USER);
    const [addDibToItem, { error2 }] = useMutation(ADD_DIB_TO_ITEM);
    const token = Auth.loggedIn() ? Auth.getProfile() : null;

    async function handleAddDibs(e) {
        try {
        const userData = await addDibToUser({ 
            variables : {
                itemId: e.target.id,
                userId: token.data._id
            }
        })
        const itemData  = await addDibToItem({
            variables: {itemId: e.target.id,
            dibbedBy: token.data._id
        }})
        console.log(userData.data, itemData.data)

        } catch (error) {
            console.log(error)
        }

    }

    
    if (!items.length) {
        return <h3>Nothing to Call Dibs on Yet</h3>;
    }
    
    return (
        <div className='container text-center'>
            <h3>Available For Dibs</h3>
            <div className='row justify-content-center'>
            {items && 
            items.map((item) => (
            <div key={item._id} className="card m-3 p-2 col-sm-10 col-lg-4">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className='d-flex justify-content-evenly'>
                        <Link
                        className="btn btn-primary"
                        to={`/items/${item._id}`}> View Item
                        </Link>
                        <button id={item._id} className="btn btn-primary" onClick={(e) => {handleAddDibs(e)}}>
                        Add to Dibs 
                        </button> 
                    </div>
                    <p className="card-text"><small className="text-muted">{item.user} Posted at {item.date_created}</small></p>
                </div>
            </div>
            ) )}
            </div>
        </div>
    
    )
};

export default HomeList;
