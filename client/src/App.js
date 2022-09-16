import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import NavTabs from './components/NavTabs';
import SingleItem from './pages/SingleItem';
import AddItem from './pages/AddItem';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='gradient-custom'>
            <NavTabs />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<SignUp />}
              />
              <Route
                path='/Profile'
                element={<Profile />}
              />
              <Route 
                path="items/:itemId"
                element={<SingleItem />}
              />
                <Route
                path='/add-item'
                element={<AddItem />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
              
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
