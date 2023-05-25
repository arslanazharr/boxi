import React from "react";
import "./errorSkeleton.css";

const ErrorSkeleton = () => {
  return (
    <>
      <div className="skeleton">
        <div className="mb-4 h-14 w-72 animate-pulse  bg-gray-200 dark:bg-green-400"></div>
      </div>
    </>
  );
};

export default ErrorSkeleton;
