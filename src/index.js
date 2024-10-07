import {createRoot, React} from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ShopProvider } from './shopcontext';




const container=document.getElementById('root');
const root=createRoot(container);
root.render(
    <ShopProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ShopProvider>

)