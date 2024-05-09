import { useEffect, useState } from "react";

const useFileSelection = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const addFile = (file) => {
    setSelectedFiles((currentSelection) => [...currentSelection, file]);
  };

  const removeFile = (file) => {
    setSelectedFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(file);
      newSelection.splice(fileIndex, 1);
      return newSelection;
    });
  };

  const updateFile = (oldFile, newFile) => {
    // console.log("oldFile::", oldFile);
    // console.log("newFile::", newFile);
    setSelectedFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(oldFile);
      newSelection.splice(fileIndex, 1);
      // newSelection[fileIndex] = newFile;

      return newSelection;
    });
    addFile(newFile);
  };

  // useEffect(() => {
  //   console.log("selectedFiles::", selectedFiles);
  // }, [selectedFiles]);

  return [addFile, removeFile, updateFile];
};

export default useFileSelection;
