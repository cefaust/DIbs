import React from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_DIB_TO_USER } from "../utils/mutations"


const HomeList = ({ dibs }) => {

    const [addDibs, { error }] = useMutation(ADD_DIB_TO_USER);

    async function handleAddDibs(e) {
        try {
           const { data } = await addDibs({ 
            variables : {
                itemId: e.target.id
            }
           })

           console.log(data)

        } catch (error) {
            console.log(error)
        }

        console.log(e.target.id)
    }


    
    if (!dibs.length) {
        return <h3>No Dibs Yet</h3>;
    }


    
    return (
        <div>
            <h3>{dibs.name}</h3>
            {dibs && 
            dibs.map((dib) => (
            <div key={dib.id} className="card mb-3">
            <img src={dib.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{dib.name}</h5>
                    <p className="card-text">{dib.description}</p>
                    <Link
                    className="btn btn-primary"
                    to={`/items/${dib._id}`}> View Item
                    </Link>
                    <button id={dib._id} className="btn btn-primary" onClick={(e) => {handleAddDibs(e)}}>
                    Add to Dibs 
                    </button>
                    <p className="card-text"><small className="text-muted">{dib.user} Posted at {dib.createdAt}</small></p>
                </div>
            </div>
            ) )}
            
        </div>
    
    )
};

export default HomeList
