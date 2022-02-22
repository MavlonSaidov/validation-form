import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import FormContainer from "./Components/form/FormContainer";
import List from "./Components/lists/List";

const App = () => {
    const [modal, setModal] = useState(false);
    const dataList = useSelector((state) => state.dataList);
    return (
        <div className="app">
            {modal ? <FormContainer modal={modal} setModal={setModal} /> : null}
            <List dataList={dataList} modal={modal} setModal={setModal} />
        </div>
    );
};

export default App;
