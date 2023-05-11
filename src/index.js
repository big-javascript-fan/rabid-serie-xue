import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  cache: new InMemoryCache(), // 开启缓存，Apollo 客户端在获取查询结果后使用它来缓存查询结果。
  uri: 'https://dev-backend.rabidadmin.com/graphql', // uri指定我们的 GraphQL 服务器的 URL。
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App client={client} />
  </ApolloProvider>,
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
