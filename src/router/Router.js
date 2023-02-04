import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login"
import Cadastro from "../pages/cadastro/Cadastro"
import Feed from "../pages/feed/Feed";
import Detalhes from "../pages/detalhes/Detalhes";
import AddReceita from "../pages/addReceita/AddReceita"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/detalhes/:id" element={<Detalhes/>} />
        <Route path="/addreceita" element={<AddReceita/>} />
      </Routes>
    </BrowserRouter>
  );
}
