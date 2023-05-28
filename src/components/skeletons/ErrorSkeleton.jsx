import React from "react";
import "././errorSkeleton.css";

const ErrorSkeleton = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 errorMain rounded">
        <div className="skeleton">
          <div className="mb-4 h-5 w-20 animate-pulse rounded-full bg-slate-500"></div>
          <div className="mb-4 h-5 w-72 animate-pulse rounded-full bg-gray-400"></div>
          <div className="mb-4 h-5 w-72 animate-pulse rounded-full bg-slate-500"></div>
          <div className="mb-4 h-5 w-72 animate-pulse rounded-full bg-gray-400"></div>
          <div className="mb-4 h-7 w-20 animate-pulse rounded-full bg-slate-500 "></div>
        </div>
      </main>
    </>
  );
};

export default ErrorSkeleton;
