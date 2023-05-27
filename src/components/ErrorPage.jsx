import ErrorSkeleton from "./ErrorSkeleton";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./errorPage.css";

export default function Error() {
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
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 errorMain rounded shadow-emerald-700">
          <div className="text-center">
            <p className="text-base font-semibold error404">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/"
                className="backButton rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </NavLink>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
