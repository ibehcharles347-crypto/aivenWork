import react from 'react';
import Header2 from './components/Header2';
import { Outlet } from 'react-router-dom';

const HomePage = () => {

    return (
        <div className="home-page">
            <Header2 />
            <Outlet />
        </div>
    );
};

export default HomePage;