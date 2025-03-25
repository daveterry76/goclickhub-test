import { Routes, Route, Navigate } from "react-router-dom";
import HowItWorksPage from "./pages/HowItWorksPage";
import WriteYourScriptPage from "./pages/WriteYourScriptPage";
import ChooseOptionsPage from "./pages/ChooseOptionsPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/how-it-works" replace />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/write-script" element={<WriteYourScriptPage />} />
        <Route path="/choose-options" element={<ChooseOptionsPage />} />
      </Routes>
    </>
  );
}

export default App;
