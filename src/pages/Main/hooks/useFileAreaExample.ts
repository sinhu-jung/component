import { useCallback, useState } from "react";

const useFileAreaExample = () => {
    const [files, setFiles] = useState<File[]>([]);

    const onUploadFile = useCallback((e:FileList) => {
        setFiles((prevState) => [...prevState, ...Array.from(e)])
    }, [])

    const getThumbnail = (file: File) => {
        return URL.createObjectURL(file);
      };

    return {
        files,
        onUploadFile,
        getThumbnail
    }
}

export default useFileAreaExample;