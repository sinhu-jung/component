import FileArea from '../FileArea';
import useFileAreaExample from './hooks/useFileAreaExample';
import "./scss/main.scss"

const Main = () => {
    const {files, onUploadFile, getThumbnail} = useFileAreaExample()

    return (
        <div>
            <div className='file_area_example'>
                <FileArea style={{width:'100%', height:'90%', position:'absolute'}} onDrop={onUploadFile}/>
                <div style={{width:'100%', height:'90%', position:'absolute'}}>
                {
                    files.length === 0 ?
                        <div className='example_content'>
                            <div className='empty_file'>파일을 드래그 앤 드랍 해주세요</div>
                        </div>
                        : <div className='file_view'>
                             {
                                files.map((file,index) => {
                                    return (
                                        <div className='file' key={file.name + index}>
                                        <img
                                        src={getThumbnail(file)}
                                        width={220}
                                        height={220}
                                        alt=""
                                      />
                                      </div>
                                    )
                                })
                             }
                        </div>
                }
                </div>
                <button className='upload_file_button'>파일 업로드</button>
            </div>
        </div>
    );
};

export default Main;