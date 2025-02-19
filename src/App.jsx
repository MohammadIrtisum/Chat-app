import { IconLock, IconMail } from "@tabler/icons-react";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./Style.css";
import { PasswordInput } from "./components/PasswordInput";
import { Anchor } from "./components/Anchor";
import { Heading } from "./components/Heading";
import SignIn from "./Pages/SignIn";
import { Route, Routes } from "react-router";
import SignUp from "./Pages/SignUp";



function App() {
  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
    </Routes>
  );
}

export default App;
