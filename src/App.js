import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";

function Home() {
    return <p>This is home page</p>;
}

function About() {
    return <p>This is about page</p>;
}

function Contact() {
    return <p>This is contact page</p>;
}

function NotFound() {
    return <p>Page not found</p>;
}

function App() {
  return (
    <div className="App">
        <h1>Welcome to React Router</h1>
        <BrowserRouter>
            <Link to="/">Home</Link>{' '}
            <Link to="/about">About</Link>{' '}
            <Link to="/contact">Contact</Link>{' '}
            <Routes>
                <Route exact path="/"element={<Home />} />
                <Route path="/about"element={<About />} />
                <Route path="/contact"element={<Contact />} />
                <Route path="*"element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
