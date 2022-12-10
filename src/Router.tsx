import React, {lazy} from 'react';
import { Routes, Route } from "react-router-dom";

const FileArea = lazy(() => import("./pages/FileArea"));

const Router = () => {
    return (
        <Routes>
            <Route path='/file' element={<FileArea />} />
        </Routes>
    );
};

export default Router;