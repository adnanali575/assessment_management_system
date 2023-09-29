// import AssessmentsForm from "./components/AssessmentsForm";
import AssessmentsTable from "./components/AssessmentsTable";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-8 sm:p-5 bg-gray-50">
        <AssessmentsTable />
        <AssessmentsTable />
        <AssessmentsTable />
        <AssessmentsTable />
        <AssessmentsTable />
        <AssessmentsTable />
        {/* <div className="mx-auto">
          <AssessmentsForm />
        </div> */}
      </div>
    </>
  );
}

export default App;
