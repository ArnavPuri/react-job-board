import React from 'react';
import './App.css';
import JobsList from "./components/JobsList";

function App() {
    return (
        <div className={'main-container'}>
            <div className="header">
            </div>
            <div className="page">
                <JobsList/>
            </div>
        </div>
    );
}

export default App;
