const PageNotFound = () => {
  return (
    <div className="h-full grow px-2 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-xl sm:text-4xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="sm:text-lg text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded">
          <a href="/"> Go Back Home</a>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
