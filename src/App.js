import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs'; // import the ContactUs component
import Navbar from './components/Navbar';
import AllPosts from './components/AllPosts';
import Create from './components/Create';
import Edit from './components/Edit';


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/contact" element={<ContactUs />} /> {/* Add the Contact Us route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ContactUs from './components/ContactUs'; 
// import Navbar from './components/Navbar';
// import AllPosts from './components/AllPosts';
// import Create from './components/Create';
// import Edit from './components/Edit';
// import LoginPage from './components/Login'; // Correct path for Login component
// import SignupPage from './components/SignUp'; // Correct path for SignUp component

// function App() {
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <BrowserRouter>
//       {user && <Navbar />}

//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/dashboard" element={<AllPosts />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/edit" element={<Edit />} />
//         <Route path="/contact" element={<ContactUs />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
