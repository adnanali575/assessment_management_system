import AssessmentsView from "./views/AssessmentsView";
import AddAssessmentView from "./views/AddAssessmentView";
import Header from "./components/Header";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./views/PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AssessmentsView />,
    },
    {
      path: "/add-assessment",
      element: <AddAssessmentView />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <Header />
      <div className="min-h-screen pt-[76px] flex flex-col justify-between bg-gray-50 space-y-5">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
