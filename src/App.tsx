import React from "react";
import "./styling/main.scss";
import Router from "./components/router/index";
import LoginPopup from "./components/loginpopup/Index";
import Cookies from 'universal-cookie';

/*
https://portal.fhict.nl/Blokboeken/s6_media_blokboek_2020.pdf
*/
const cookies = new Cookies();
const cookieCode = cookies.get('code');
console.log('cookieCode', cookieCode);
const popup = cookieCode !== '1337' ? <LoginPopup /> : <></>;

function App() {
  return (
    <>
      {popup}
      <Router />
    </>
  )
}

export default App;
