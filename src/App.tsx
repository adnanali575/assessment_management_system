import AssessmentsForm from "./components/AssessmentsForm";
import { useEffect, useState } from "react";
import AssessmentsTable from "./components/AssessmentsTable";
import { collection, db, doc, onSnapshot } from "../firebase/firebaseConfig";

function App() {
  const [assessmentsData, setAssessmentsData] = useState<any[]>([]);
  useEffect(() => {
    const baseColRel = collection(db, "Software Engineering");
    const departmentsRef = doc(baseColRel, "BSSE 2021-2025");
    const semesterRef = collection(departmentsRef, "Semester 5");

    onSnapshot(semesterRef, (querySnapshot) => {
      let newArr: any[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        newArr.push(data);
      });
      setAssessmentsData(newArr);
    });
  }, []);

  useEffect(() => {
    // console.log(assessmentsData);
  }, [assessmentsData]);

  return (
    <>
      <div className="min-h-screen w-screen bg-gray-50 space-y-5">
        <div className="flex flex-col items-center w-fit mx-auto gap-2 sm:gap-4 md:gap-8 sm:p-4">
          {assessmentsData.map((assessment, i) => (
            <AssessmentsTable key={i} assessment={assessment} />
          ))}
        </div>
          <div className="sm:px-4">
            <AssessmentsForm />
          </div>
      </div>
    </>
  );
}

export default App;
