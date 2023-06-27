import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react"
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AuthenticationProvider from "./store/store"
import { QueryClient, QueryClientProvider } from 'react-query';

const rootElement = 
document.getElementById('root');
const root =createRoot(rootElement);



 
 const queryClient = new QueryClient()


// 👇️ if you use TypeScript, add non-null (!) assertion operator //

// const root = createRoot(rootElement!);



    root.render(
      <StrictMode>
      <Auth0Provider
        domain="dev-r3p1xnqdcr0qn7ur.us.auth0.com"
        clientId="ZPHDsQxnYXCiQMeVWNEZVm5NuLpxOIGa"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
       <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <App/>
      </AuthenticationProvider>
      </QueryClientProvider>
    </Auth0Provider>
    </StrictMode>
    // document.getElementById('app')
 );