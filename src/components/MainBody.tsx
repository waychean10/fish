import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import backgroundImage from  '../assets/test-background.jpg';

const MainBody: React.FC = () => {

    return (
        <main style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }} className='w-96 h-96 bg-no-repeat'>

        </main>
    )
}

export { MainBody }