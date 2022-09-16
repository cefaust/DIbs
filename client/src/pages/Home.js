import React from 'react';
import { useQuery } from '@apollo/client'
import HomeList from '../components/HomeList';

import { QUERY_ITEMS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];
    console.log(items);

    return(
        <main>
        <div className="flex-row justify-center vh-100 gradient-custom">
          <div className="col-12 col-md-10 my-1">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <HomeList
                items={items}
              />
            )}
          </div>
        </div>
      </main>
    );
    


};

export default Home;

