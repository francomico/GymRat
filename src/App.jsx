import Inicio from "./Screens/Home"
import Productos from "./Screens/Productos"
import Contacto from "./Screens/Contacto"
import SobreNosotros from "./Screens/SobreNosotros"

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"


function App() {
  return (
    <>
      <div className="flex flex-col">
        <BrowserRouter>
          <NavBar>
            <Routes>
              <Route path="/Home" element={<Inicio/>}/>
              <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
              <Route path="/Productos" element={<Productos/>}/>
              <Route path="/Contacto" element={<Contacto/>}/>
            </Routes>
          </NavBar>
        </BrowserRouter>
        <ItemListContainer greeting="¡¡Productos a la venta!!"/>

      </div>
      
    </>
  )
}

export default App
