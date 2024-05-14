import React, { useState } from "react";
import "./styles.css";
import { GoPlus } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { FaCropSimple } from "react-icons/fa6";

const DragAndDrop = ({ files, setFiles, previewImages, setPreviewImages, setSelectedImage }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Object.fromEntries(
      Object.entries(event.target.files).slice(0, 4)
    );
    const filesArray = Object.keys(selectedFiles).map(
      (key) => selectedFiles[key]
    );
    filesArray.forEach((file) => {
      setFiles((prevFiles) => {
        if (prevFiles.length < 4) {
          displayFile(file);
          return [...prevFiles, file];
        }
      });
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFiles = Object.fromEntries(
      Object.entries(event.dataTransfer.files).slice(0, 4)
    );
    const filesArray = Object.keys(selectedFiles).map(
      (key) => selectedFiles[key]
    );
    filesArray.forEach((file) => {
      setFiles((prevFiles) => {
        if (prevFiles.length < 4) {
          displayFile(file);
          return [...prevFiles, file];
        }
      });
    });
  };

  const displayFile = (selectedFile) => {
    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/heic",
    ];

    if (validExtensions.includes(selectedFile.type)) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(fileReader.result);
        const fileURL = fileReader.result;
        setPreviewImages((prevImages) => [...prevImages, fileURL]);
      };
      fileReader.readAsDataURL(selectedFile);
    } else {
      alert("This is not an Image File");
      setFiles([]);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg overflow-auto p-4">
      <div
        className={`w-full border-dashed p-3  border-2  rounded-2xl ${
          isDragActive ? "border-blue-600" : "border-gray-400"
        }`}
      >
        <div
          className={`drag-area  flex flex-col items-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="icon">
            <GoPlus />
          </div>
          <span className="header">Drag & Drop</span>
          <span className="header">
            or{" "}
            <label
              htmlFor="fileInput"
              className="text-blue-600 px-1 rounded-sm cursor-pointer"
            >
              browse
            </label>
          </span>
          <input
            id="fileInput"
            type="file"
            multiple
            maxLength={4}
            hidden
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-2">
        {previewImages &&
          previewImages?.map((item) => (
            <div className="w-[100px] h-[100px] rounded-lg shadow-[0_0_0_1px#ffffff] group relative">
              <img src={item} className="w-full h-full rounded-lg" />
              <div className="absolute flex justify-center w-full top-1/2 -translate-y-1/2  gap-4">
                <div className="group-hover:block hidden transition duration-300 ">
                  <FaCropSimple
                    size={26}
                    className="text-white cursor-pointer hover:text-blue-200"
                    onClick={() => setSelectedImage(item)}
                  />
                </div>
                <div className="group-hover:block hidden transition duration-300">
                  <MdDelete
                    size={26}
                    className="text-white cursor-pointer hover:text-blue-200"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="px-6 text-sm">
        <h2 class="mb-2 text-lg font-semibold text-gray-900">
          Upload requirements:
        </h2>
        <ul class="max-w-md space-y-1 text-gray-700 list-disc list-inside">
          <li>Please upload 1-4 images.</li>
          <li>Accepted format .jpeg, .jpg or .heic</li>
          <li>Please ensure that your image is less than 2mb</li>
          <li>Please make sure only 1 person is in the image.</li>
          <li>
            Please ensure all your information is correct as you will not able
            to change this later.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DragAndDrop;
