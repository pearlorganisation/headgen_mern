import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { instance } from "../../services/axiosInterceptor";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const getReviews = () => {
    setIsLoading(true)
    instance
      .get(`/reviews`)
      .then((res) => {
        setReviewsData(res?.data?.reviewsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getReviews()
  }, []);

  const deleteItem = (item) => {
    if(window.confirm(`Are you sure you want to delete review ${item?.title}`)){
      instance.delete(`${import.meta.env.VITE_API_URL}/reviews/${item._id}`).then((res) => {
        toast.success(res.data.message, {
          style: {
            background: "green",
            color: "white",
          },
        });
        getReviews()
      }).catch(err => {
        console.log(err)
        toast.error("There was some issue deleting the review", {
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
            to="/reviews/add"
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
          {reviewsData && (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="col-span-2 px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviewsData.map((item, idx) => (
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

                    <td className="px-6 py-4">
                      <Link
                        to={`/blogs/update/${item?._id}`}
                        className="font-medium text-blue-600  hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="px-6 py-4">
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

export default Reviews;