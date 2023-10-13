import { useState, useEffect } from "react";
import AssessmentsTable from "../components/AssessmentsTable";
import { db, collection, doc, onSnapshot } from "../../firebase/firebaseConfig";

const AssessmentsView = () => {
  const [assessmentsData, setAssessmentsData] = useState<any[]>([]);
  useEffect(() => {
    const baseColRel = collection(db, "Software Engineering");
    const departmentsRef = doc(baseColRel, "BSSE 2021-2025");
    const semesterRef = collection(departmentsRef, "Semester 5");

    onSnapshot(semesterRef, (querySnapshot) => {
      let newArr: any[] = [];
      querySnapshot.forEach((doc) => {
        const data = { ...doc.data(), id: doc.id };
        newArr.push(data);
      });
      setAssessmentsData(newArr);
    });
  }, []);
  return (
    <div className="w-full xl:w-[940px] flex flex-col items-center gap-2 sm:gap-4 md:gap-8">
      {assessmentsData.map((assessment, i) => (
        <AssessmentsTable key={i} assessment={assessment} />
      ))}
    </div>
  );
};

export default AssessmentsView;
