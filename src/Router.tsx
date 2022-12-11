import React, {lazy} from 'react';
import { Routes, Route } from "react-router-dom";

const FileArea = lazy(() => import("./pages/FileArea"));
const Main = lazy(() => import("./pages/Main"));

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/file' element={<FileArea />} />
        </Routes>
    );
};

export default Router;