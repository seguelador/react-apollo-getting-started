import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';
import ExchangeRates from './ExchangeRates';
// import DogList from './DogList';
import './App.css';


const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io', // Graphql Server
    cache: new InMemoryCache()
});

client.query({
    query: gql`
      query GetRates {
          rates(currency: "USD") {
              currency
          }
      }
    `
}).then(result => console.log(result));

const App = ()  => {
    return (
        <ApolloProvider client={client}>
            <div>
                <h2>My first Apollo app </h2>
                {/* <DogList /> */}
                <ExchangeRates />
            </div>
        </ApolloProvider>
    );
}

export default App;
