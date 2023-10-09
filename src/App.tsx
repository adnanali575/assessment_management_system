// import AssessmentsForm from "./components/AssessmentsForm";
import { useEffect, useState } from "react";
import AssessmentsTable from "./components/AssessmentsTable";
import { collection, db, doc, onSnapshot } from "../firebase/firebaseConfig";

function App() {
  const [assessmentsData, setAssessmentsData] = useState<any[]>([]);
  useEffect(() => {
    const baseColRel = collection(db, "departments");
    const departmentsRef = doc(baseColRel, "Computer Science");
    const program = collection(departmentsRef, "Software Engineering");
    const batchRef = doc(program, "BSSE 2021-2025");
    const semesterRef = collection(batchRef, "Semester 5");

    onSnapshot(semesterRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // console.log(data)
        setAssessmentsData([...assessmentsData, data]);
      });
    });
  }, []);

  useEffect(() => {
    // console.log(assessmentsData);
  }, [assessmentsData]);

  return (
    <>
      <div className="min-h-screen flex flex-col gap-8 sm:p-5 bg-gray-50">
        {assessmentsData.map((assessment, i) => (
          <AssessmentsTable key={i} assessment={assessment} />
        ))}
        {/* <div className="mx-auto">
          <AssessmentsForm />
        </div> */}
      </div>
    </>
  );
}

export default App;
