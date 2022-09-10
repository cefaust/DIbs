import React from 'react';


const singleItem = ({ item }) => {

    return (
        <div>
            <div className="card mb-3">
                <img src={dibs.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{dibs.description}</p>
                    <div className="small d-flex justify-content-start">
                        <a href="#!" className="d-flex align-items-center me-3">
                        <i className="far fa-thumbs-up me-2"></i>
                        <p className="mb-0">Dibs</p>
                        </a>
                        <a href="#!" className="d-flex align-items-center me-3">
                            <i className="far fa-comment-dots me-2"></i>
                            <p className="mb-0">Comment</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default singleItem