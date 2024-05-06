import { Upload } from "antd";
import { GoPlus } from "react-icons/go";
// import useFilePreview from "../../hooks/useFilePreview";

const { Dragger } = Upload;

const DragAndDrop = ({ addFile, removeFile, setSelectedImage, maxUploads }) => {
  //   const [handlePreview, previewContent] = useFilePreview();

  const beforeUploadHandler = (file) => {
    addFile(file);
    
    return false;
  };

  //   if(previewContent) {
  //     setSelectedImage(previewContent)
  //   }

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      // Fetch preview data if URL and preview are not available
      file.preview = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onloadend = () => {
          resolve(reader.result);
          setSelectedImage(reader.result);
        };
      });
    }
  };

  return (
    <>
      <Dragger
        multiple={true}
        onRemove={removeFile}
        maxCount={maxUploads}
        showUploadList={true}
        listType="picture-card"
        beforeUpload={beforeUploadHandler}
        onPreview={handlePreview}
        accept="image/*"
        className="h-[150px]"
      >
        <p className="ant-upload-drag-icon flex justify-center">
          <GoPlus size={48} className="text-blue-700" />
        </p>
        <p className="ant-upload-text">
          Click this area or drag files to upload
        </p>
      </Dragger>
    </>
  );
};

export default DragAndDrop;
