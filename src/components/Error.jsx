import ErrorSkeleton from "./ErrorSkeleton";
import { useEffect, useState } from "react";

const Error = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <ErrorSkeleton />
      ) : (
        <div
          style={{
            marginTop: "150px",
            fontSize: "35px",
            textAlign: "center",
          }}
        >
          Under Construction! 🙂
        </div>
      )}
    </>
  );
};

export default Error;
