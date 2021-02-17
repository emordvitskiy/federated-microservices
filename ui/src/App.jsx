import { ApolloProvider } from '@apollo/client';

import { client } from './client';
import PostsContainer from './containers/Posts';

function App() {
  return (
    <ApolloProvider client={client}>
      <PostsContainer />
    </ApolloProvider>
  );
}

export default App;
