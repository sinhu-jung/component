import React, { useRef, useState } from "react";

export function useFileArea() {

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }

    setDragActive(false);
  };

    // triggers when file is selected with click
    const handleChange = function(e:React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        // handleFiles(e.target.files);
      }
    };
    
  // triggers the input when the button is clicked
    const onButtonClick = () => {
      if(inputRef.current) {
      inputRef.current.click();
      }
    };

  return {
    handleDrag,
    handleDrop,
    handleChange,
    onButtonClick,
    dragActive,
    inputRef
  }
}