import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AssessmentsView from "./views/AssessmentsView";
import AddAssessmentView from "./views/AddAssessmentView";
import PageNotFound from "./views/PageNotFound";
import LoginView from "./views/LoginView";
import DefaultLayout from "./layouts/DefaultLayout";
import AssessmentView from "./views/AssessmentView";

function App() {
  useEffect(() => {
    const disableTextSelection = () => {
      document.body.style.userSelect = "none";
    };
    disableTextSelection();

    return () => {
      document.removeEventListener("selectstart", disableTextSelection);
    };
  }, []);

  const routes = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <AssessmentsView /> },
        {
          path: "/add-assessment",
          element: <AddAssessmentView />,
        },
        {
          path: "/assessment/:id",
          element: <AssessmentView />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    { path: "/login", element: <LoginView /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
