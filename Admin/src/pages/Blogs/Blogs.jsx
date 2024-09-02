import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { instance } from "../../services/axiosInterceptor";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const getBlogs = () => {
    setIsLoading(true)
    instance
      .get(`/blogs`)
      .then((res) => {
        setBlogsData(res?.data?.blogsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getBlogs()
  }, []);

  const deleteItem = (item) => {
    if(window.confirm(`Are you sure you want to delete blog`)){
      instance.delete(`${import.meta.env.VITE_API_URL}/blogs/delete/${item._id}`).then((res) => {
        toast.success(res.data.message, {
          style: {
            background: "green",
            color: "white",
          },
        });
        getBlogs()
      }).catch(err => {
        console.log(err)
        toast.error("There was some issue deleting the blog", {
          style: {
            background: "red",
            color: "white",
          },
        });
        
      })
    }
  }


  return (
    <div>
      <Toaster />

      <div class="p-10 ">
        <div class="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-8 bg-white ">
          <Link
            to="/blogs/add"
            className="bg-blue-600 rounded-md text-white px-3 py-1 font-semibold "
          >
            Add
          </Link>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          {isLoading && (
           <>
           <Skeleton animation="wave" height={50} />
           <Skeleton animation="wave" height={50} />
           <Skeleton animation="wave" height={50} />
           <Skeleton animation="wave" height={50} />
         </>
          )}
          {blogsData && (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" colSpan={2} className="text-center col-span-2 px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogsData.map((item, idx) => (
                  <tr className="bg-white border-b   hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <div className="ps-3">
                       {idx + 1}
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.title}</td>

                    <td className="px-6 py-4  text-center">
                      <Link
                        to={`/blogs/update/${item?.slug}`}
                        className="font-medium text-blue-600  hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="font-medium text-red-600  hover:underline"
                        onClick={() => {
                          deleteItem(item)
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
