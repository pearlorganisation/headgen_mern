import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import DOMPurify from "dompurify";
import Skeleton from "@mui/material/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "white",
    },
  },
});

const Reviews = () => {
  const classes = useStyles();
  const [reviewsData, setReviewsData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     axios
  //       .get(`${import.meta.env.VITE_API_URL}/reviews?page=${page}`)
  //       .then((res) => {
  //         setIsLoading(false);
  //         setReviewsData(res.data.reviewsData);
  //         setTotalPages(res?.data?.totalPages);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setIsLoading(false);
  //       });
  //   }, [page]);

  const handlePagination = (e, p) => {
    setPage(p);
    setSearchParams({ page: p });
  };

  useEffect(() => {
    const data = [
      {
        image:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/snqcx5gvbg2bp1jrwxju.webp",
        title: "Review 1",
        review: "this is just a simple review by me",
        name: "Jai Singh",
        stars: 5,
        email: "jai@pearlorganisation.com",
      },
    ];
    setReviewsData(data);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen grid place-items-center text-white">
      <section className="py-28 flex flex-col gap-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8 md:mb-10 lg:mb-12 text-center flex flex-col items-center gap-4">
            <h2 className="text-xl md:text-3xl font-bold">Reviews</h2>
            <p className="mt-3 text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Discover the latest insights, trends, and stories from our team of
              experts.
            </p>
            <Link
              to={"/addreview"}
              className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full md:w-1/3 py-2  md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
            >
              Write a review
            </Link>
          </div>
          {isLoading ? (
            <div className="flex flex-wrap justify-center items-center w-full text-center gap-12 px-2 md:px-0">
              <div className="flex flex-col gap-2">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={250}
                  className="rounded-t-2xl !bg-neutral-800 after:!bg-gradient-to-r after:!from-neutral-800 after:!via-neutral-700 after:!to-neutral-800 !w-[250px] !h-[150px] sm:!w-[350px] sm:!h-[250px]"
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={30}
                  className="rounded-b-2xl !bg-neutral-800 after:!bg-gradient-to-r after:!from-neutral-800 after:!via-neutral-700 after:!to-neutral-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={250}
                  className="rounded-t-2xl !bg-neutral-800 after:!bg-gradient-to-r after:!from-neutral-800 after:!via-neutral-700 after:!to-neutral-800 !w-[250px] !h-[150px] sm:!w-[350px] sm:!h-[250px]"
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={30}
                  className="rounded-b-2xl !bg-neutral-800 after:!bg-gradient-to-r after:!from-neutral-800 after:!via-neutral-700 after:!to-neutral-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={250}
                  className="rounded-t-2xl !bg-neutral-800 after:!bg-gradient-to-r after:!from-neutral-800 after:!via-neutral-700 after:!to-neutral-800 !w-[250px] !h-[150px] sm:!w-[350px] sm:!h-[250px]"
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={30}
                  className="rounded-b-2xl !bg-neutral-800 after:!bg-gradient-to-r after:!from-neutral-800 after:!via-neutral-700 after:!to-neutral-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {reviewsData ? (
                reviewsData.map((item) => {
                  return (
                    <div className="rounded-lg group overflow-hidden shadow-lg cursor-pointer transition duration-300">
                      <div className="p-4 md:p-6 text-white bg-gradient-to-tr from-[#02AFDC] to-[#2563EB] transition duration-300">
                        <p className="text-lg md:text-2xl font-bold line-clamp-2">
                          {item?.title}
                        </p>
                        <p className="text-xs font-semibold mb-2 line-clamp-2">
                          by {item?.name}
                        </p>
                        <div className="flex justify-start">
                          {Array(item?.stars)
                            .fill()
                            .map((ele, idx) => (
                              <svg
                                key={idx}
                                className={`w-4 h-4 text-yellow-500`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.742a1 1 0 00.95.69h3.929c.969 0 1.371 1.24.588 1.81l-3.182 2.31a1 1 0 00-.364 1.118l1.218 3.742c.3.922-.755 1.688-1.54 1.118l-3.182-2.31a1 1 0 00-1.175 0l-3.182 2.31c-.784.57-1.838-.196-1.54-1.118l1.218-3.742a1 1 0 00-.364-1.118l-3.182-2.31c-.783-.57-.38-1.81.588-1.81h3.929a1 1 0 00.95-.69l1.217-3.742z" />
                              </svg>
                            ))}
                        </div>
                        <p className="text-sm md:text-base font-semibold mb-2 line-clamp-2">
                          {item?.review}
                        </p>
                      </div>
                      {item?.image && (
                        <LazyLoadImage
                          alt="reviews image"
                          className="w-full h-56 object-cover"
                          height={400}
                          src={item?.image}
                          style={{
                            aspectRatio: "1920/1080",
                            objectFit: "cover",
                          }}
                          width={600}
                        />
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full text-center text-2xl">
                  No Reviews Found.
                </div>
              )}
            </div>
          )}
        </div>
        {!isLoading && reviewsData && (
          <div className="flex flex-row justify-center w-full">
            <Pagination
              count={totalPages}
              page={Number(page)}
              color="primary"
              classes={{ ul: classes.ul }}
              onChange={handlePagination}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Reviews;