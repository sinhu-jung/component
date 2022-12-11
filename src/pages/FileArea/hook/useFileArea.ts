import React, { useState } from "react";

export function useFileArea(
  onDrop: (e:FileList) => void 
) {

  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleDrag = function(e:React.DragEvent<HTMLFormElement | HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();    
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      onDrop(e.dataTransfer.files)
    }

    setDragActive(false);
  };

    const handleChange = function(e:React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        // handleFiles(e.target.files);
      }
    };

  return {
    handleDrag,
    handleDrop,
    handleChange,
    dragActive,
  }
}