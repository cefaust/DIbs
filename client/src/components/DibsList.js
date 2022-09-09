import React from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_ITEM } from '../utils/mutations';
const DibsList = ({ dibs, title }) => {
    if (!dibs.length) {
        return <h3>No Dibs Yet</h3>;
    }

    return (
        <div>
            <div className="card mb-3">
            <img src={dibs.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{dibs.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <p className="card-text"><small className="text-muted">Posted at {dibs.createdAt}</small></p>
                </div>
            </div>
        </div>
    
    )
}

export default DibsList

