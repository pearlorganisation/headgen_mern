import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const PriceTable = () => {

  const tableData = [
    {
      category: "Cost",
      withAI: `€9`,
      traditional: "€1000",
    },
    {
      category: "Time",
      withAI: "2 Hours",
      traditional: "2 - 3 Days",
    },
    {
      category: "Process",
      withAI: "Easy",
      traditional: "Tedious",
    },
  ];
  return (
    <div className=" py-10 px-4">
      <div className="overflow-x-auto">
        <table className="w-full text-white border-collapse border-spacing-0">
          <thead>
            <tr>
              <th className="border-b border-white border-r py-4 px-1 md:px-6 text-left"></th>
              <th className="border-b border-white border-r py-4 px-1 md:px-6 text-center md:text-2xl font-bold">
                with HeadGen AI
              </th>
              <th className="border-b border-white border-r-0 py-4 px-1 md:px-6 text-center md:text-2xl font-bold">
                <div className="text-center">
                  Traditional <br /> Photoshoot
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              tableData?.map((row, index) => (
                <>
                  <tr key={index} >
                    <td className="border-b border-white border-r py-4 px-1 md:px-6 text-center">{row.category}</td>
                    <td className="flex flex-row justify-center items-center gap-2 border-b  border-white border-r py-4 px-1 md:px-6 text-center"><FaCheckCircle color="#00ff00" />{row.withAI}</td>
                    <td className=" border-b  border-white border-r-0 py-4 px-1 md:px-6 text-center"><span className="flex flex-row justify-center items-center gap-2"><IoMdCloseCircle color="#ff0000" size={20} />{row.traditional}</span></td>
                  </tr>

                </>

              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
