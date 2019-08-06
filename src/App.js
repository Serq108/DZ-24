import React from 'react';
import './App.css';
import Parent from './components/Parent';
import Login from './components/Login';
import Course from './components/Course';
import Header from './components/Header';
import Title from './components/Title';
import Categories from './components/Categories';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Parent/>
      <Login/>
      <Course/>
      <Header/>
      <Title/>
      <Categories/>
      <Content/>
      <Footer/>
     </div>
  );
}

export default App;
