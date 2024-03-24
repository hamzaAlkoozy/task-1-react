import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import ProductsPage from "./pages/ProductsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersPage from "./pages/UsersPage";
import {UserProvider} from "./store/UserContext";
import Breadcrumbs from "./components/Breadcrumbs";
import Layout from "./ui/Layout";
import HomePage from "./pages/HomePage";
import {ProductProvider} from "./store/ProductContext";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Breadcrumbs/>
                <Routes>
                    <Route path="/" element={
                        <HomePage/>
                    }/>
                    <Route path="/users" element={
                        <UserProvider>
                            <UsersPage/>
                        </UserProvider>
                    }/>
                    <Route path="/products" element={
                        <ProductProvider>
                            <ProductsPage/>
                        </ProductProvider>
                    }/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
