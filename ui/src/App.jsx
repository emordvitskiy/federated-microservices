import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { client } from './client';
import { themeDefault } from './themes';
import PostsContainer from './containers/Posts';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeDefault}>
        <PostsContainer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
