import AssessmentsView from "./views/AssessmentsView";
import AddAssessmentView from "./views/AddAssessmentView";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-screen bg-gray-50 space-y-5">
        <AssessmentsView />
        <AddAssessmentView />
      </div>
    </>
  );
}

export default App;
