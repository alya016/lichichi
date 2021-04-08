import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'


const Header = React.lazy(() => import('./components/Header'));
const Section = React.lazy(() => import('./components/Section'));


class App extends Component {
    render() {
        return (
            <div className = "app">
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <Header />
                            <Section />
                        </section>
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
