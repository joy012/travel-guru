import React from 'react';
import Header from '../../Components/Header/Header';

const NotMatched = () => {
    return (
        <div>
            <Header/>
            <h1 className="display-2 text-center mt-5">Error 404! Page not Found. URL maybe broken or Wrong</h1>
        </div>
    );
};

export default NotMatched;