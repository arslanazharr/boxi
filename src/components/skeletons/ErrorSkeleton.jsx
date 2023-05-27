import React from "react";
import "././errorSkeleton.css";

const ErrorSkeleton = () => {
  return (
    <>
      <div className="skeleton">
        <div className="mb-4 h-5 w-20 animate-pulse rounded-full bg-gray-200 dark:bg-green-500"></div>
        <div className="mb-4 h-5 w-72 animate-pulse rounded-full bg-gray-200 dark:bg-green-400"></div>
        <div className="mb-4 h-5 w-72 animate-pulse rounded-full bg-gray-200 dark:bg-green-500"></div>
        <div className="mb-4 h-5 w-72 animate-pulse rounded-full bg-gray-200 dark:bg-green-400"></div>
        <div className="mb-4 h-7 w-20 animate-pulse rounded-full bg-slate-700 dark:bg-green-500 emoji"></div>
      </div>
    </>
  );
};

export default ErrorSkeleton;
