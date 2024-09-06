import React, { useEffect, useState } from "react";
import Tab from "../../components/Tab/Tab";
import DatingTab from "../../components/Dating/DatingTab/DatingTab";

const UploadPage = ({section}) => {
  const [isDatingPage, setIsDatingPage] = useState(false);

  useEffect(() => {
    if (section === "dating") {
      setIsDatingPage(true);
    } else {
      setIsDatingPage(false);
    }
  }, [section]);

  return (
    <div className="w-full py-28 flex flex-col bg-[#161616] gap-28">
      {isDatingPage ? <DatingTab section={section} /> : <Tab section={section} />}
    </div>
  );
};

export default UploadPage;
