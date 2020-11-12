import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import CourseContainer from './CourseContainer/CourseContainer';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <CourseContainer></CourseContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
