import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="184391940218-mr7d8ji39slvo5qvq0ucgurq9oo3rss0.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
  </BrowserRouter>,
)
