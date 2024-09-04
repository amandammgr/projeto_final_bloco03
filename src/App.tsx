import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';
// import FormCategoria from './components/categorias/formcategoria/FormCategoria';
// import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='bg-gray-200 min-h-[68vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App







// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './pages/home/Home'
// import Navbar from './components/navbar/Navbar'
// import Footer from './components/footer/Footer'

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <div className='min-h-[80vh]'>
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </div>
//         <Footer />
//       </BrowserRouter>
//     </>
//   )
// }

// 




























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
