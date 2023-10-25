import { useTranslation } from "react-i18next";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./container/Container";
import Home from "./pages/home/Home";

function App() {
  const {t,i18n} = useTranslation()
  console.log(i18n);
  console.log(t("salam"));
  return (
    <div>
      {t("salam")}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
