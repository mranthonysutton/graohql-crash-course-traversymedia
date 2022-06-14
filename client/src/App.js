import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(_, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
