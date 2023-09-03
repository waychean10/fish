import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Header } from './Header';
import backgroundImage from  '../assets/test-background.jpg';

const MainBody: React.FC = () => {

    return (
        <main style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }} className='w-full h-screen bg-no-repeat'>
            <Header />
        </main>
    )
}

export { MainBody }