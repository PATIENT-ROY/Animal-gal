// src/App.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import DogGallery from "./components/DogGallery";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Галерея собак</h1>
        <DogGallery />
      </div>
    </Provider>
  );
};

export default App;
