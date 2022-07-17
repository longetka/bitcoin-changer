import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Header, Wrapper } from './components/index';
import Main from './pages/Main';
import Rules from './pages/Rules';
import Testimonials from './pages/Testimonials';

import PayConfirm from './pages/PayConfirm';

const App = () => {
    return (
        <Container height='100%' padding='0px 0px 20px 0px'>
            <Wrapper width="80%" flex column align="center">
                <Router>
                    <Header /> 
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/rules" element={<Rules />} />
                        <Route path='/testimonials' element={<Testimonials />} />
                        <Route path='/pay_confirm' element={<PayConfirm />} />
                    </Routes>
                </Router>
            </Wrapper>
        </Container>
    );
}

export default App;
