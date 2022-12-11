import React from "react";
import { useFileArea } from "./hook/useFileArea";
import "./scss/fileArea.scss"


interface FileAreaProps {
  style?: React.CSSProperties;
  onDrop?: (e:FileList) => void 
}

const FileArea:React.FC<FileAreaProps> = (props) => {
    const { style, onDrop } = props;
    const { handleDrag, handleChange, handleDrop,  dragActive } = useFileArea(onDrop ? onDrop : () => {});

    return (
      <form className="form-file-upload" style={style} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input type="file" className="input-file-upload" multiple={true} onChange={handleChange}/>
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
        { dragActive && <div className="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </label>
      </form>
    );
};

export default FileArea;