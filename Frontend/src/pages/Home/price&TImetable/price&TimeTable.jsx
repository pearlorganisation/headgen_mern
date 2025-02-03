import React from "react";

const PriceTable = () => {

    const tableData = [
        {
          category: "Cost",
          withAI: "€9",
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
                tableData?.map((row,index)=>(
                    <>
                       <tr key={index} >
                    <td className="border-b border-white border-r py-4 px-1 md:px-6 text-center">{row.category}</td>
                    <td className="border-b border-white border-r py-4 px-1 md:px-6 text-center">{row.withAI}</td>
                    <td className="border-b border-white border-r-0 py-4 px-1 md:px-6 text-center">{row.traditional}</td>
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
