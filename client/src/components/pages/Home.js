import React from 'react';
import { useQuery } from '@apollo/client'
import HomeList from '../HomeList';

import { QUERY_ITEMS } from '../../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];

    return(
        <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-10 my-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <HomeList
                dibs={items}
              />
            )}
          </div>
        </div>
      </main>
    );
    


};

export default Home;

// export default function Home(){
//     return (
//         <div>
//         <div>
//           <div className="card mb-3">
//             <img src="" className="card-img-top" alt="..."/>
//          <div className="card-body">
//          <h5 className="card-title">Title</h5>
//          <p className="card-text">this is where the description goes</p>
//          <a href="#" className="btn btn-primary">Go somewhere</a>
//          <a href="#" className="btn btn-primary">Go somewhere</a>
//          <p className="card-text"><small className="text-muted">Posted at </small></p>
//           </div>
//           </div>
//          </div>
//         <div>
//           <div className="card mb-3">
//             <img src="" className="card-img-top" alt="..."/>
//          <div className="card-body">
//          <h5 className="card-title">Title</h5>
//          <p className="card-text">this is where the description goes</p>
//          <a href="#" className="btn btn-primary">Go somewhere</a>
//          <a href="#" className="btn btn-primary">Go somewhere</a>
//          <p className="card-text"><small className="text-muted">Posted at </small></p>
//           </div>
//           </div>
//          </div>
//          </div>
//       );
// }
