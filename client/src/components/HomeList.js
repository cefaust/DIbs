import React from 'react'
// import { Link } from 'react-router-dom'
// import { useMutation } from '@apollo/client';


const HomeList = ({ dibs, title }) => {
    if (!dibs.length) {
        return <h3>No Dibs Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {dibs && 
            dibs.map((dib) => (
            <div key={dib.id} className="card mb-3">
            <img src={dib.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{dib.name}</h5>
                    <p className="card-text">{dib.description}</p>
                    <Link
                    className="btn btn-primary"
                    to={`/dibs/${dib.id}`}> View Item
                    </Link>
                    <a href="" className="btn btn-primary"> 
                    Add to Dibs 
                    </a>
                    <p className="card-text"><small className="text-muted">{dib.user} Posted at {dib.createdAt}</small></p>
                </div>
            </div>
            ) )}
            
        </div>
    
    )
};

export default HomeList
