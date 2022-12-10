import { useFileArea } from "./hook/useFileArea";
import "./scss/fileArea.scss"

const FileArea = () => {
    const { handleDrag, handleDrop, handleChange, onButtonClick,  dragActive, inputRef } = useFileArea();

    return (
      <form className="form-file-upload" style={{width:'100%', height:'100vh'}} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" className="input-file-upload" multiple={true} onChange={handleChange}/>
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
          <div>
            <p>파일을 올려주세요.</p>
            <button className="upload-button" onClick={onButtonClick}>클릭</button>
          </div> 
        </label>
        { dragActive && <div className="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </form>
    );
};

export default FileArea;