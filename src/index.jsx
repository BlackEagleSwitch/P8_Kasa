import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import FicheLogement from './pages/Fiche-Logement'
import APropos from './pages/A-Propos'
import Error from './pages/Error'

import Header from './components/Header'
import Footer from './components/Footer'

import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche-logement/:logementId" element={<FicheLogement />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)