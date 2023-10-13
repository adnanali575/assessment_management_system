import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, db, doc, onSnapshot } from "../../firebase/firebaseConfig";
import { getDate } from "../../helpers";
import BaseButton from "../components/BaseButton";
const AssessmentView = () => {
  const [paramId, setParamId] = useState<string>("");
  const [paramIndex, setParamIndex] = useState<string>("");
  const [assessmentData, setAssessmentData] = useState<any[]>([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const regex = /(\d+)\+(.+)/;
      const match = params.id.match(regex);
      if (match) {
        const index = match[1];
        const id = match[2];

        setParamId(id);
        setParamIndex(index);

        const userRef = doc(db, "Software Engineering", "BSSE 2021-2025");
        const subCollectionRef = collection(userRef, "Semester 5");
        const docId = id;

        const docRef = doc(subCollectionRef, docId);

        const unsub = onSnapshot(docRef, (doc) => {
          const data = doc.data();
          if (data) {
            const newData = {
              ...data.assessments[index],
              id: doc.id,
              lastDate: data?.lastDate,
            };
            setTitle(newData.title);
            setDescription(newData.description);
            const assessmentArray = [
              { fieldName: "Subject", value: newData.subject },
              { fieldName: "Teacher", value: newData.teacher },
              { fieldName: "Issue Date", value: newData.issueDate },
              { fieldName: "Last Date", value: newData.lastDate },
              { fieldName: "Time", value: newData.time },
              { fieldName: "Added By", value: newData.addedBy },
            ];
            setAssessmentData(assessmentArray);
            console.log(assessmentArray);
          }
        });

        return unsub;
      }
    }
  }, [paramId, paramIndex]);
  return (
    <div className="flex justify-center px-4 pb-4">
      {assessmentData.length ? (
        <div className="p-4 sm:p-8 text-sm bg-white shadow-md rounded-md w-[1000px]">
          <p className="sm:text-xl font-bold border-b py-2 mb-4">{title}</p>
          {assessmentData.map((item, i) => (
            <div key={i} className="flex gap-2">
              <div className="p-2 w-[100px] uppercase  font-bold text-gray-500">
                {item.fieldName}
              </div>
              <div className="p-2 text-gray-600 col-span-2">
                {item.fieldName === "Last Date" ||
                item.fieldName === "Issue Date"
                  ? getDate(new Date(item.value))
                  : item.value}
              </div>
            </div>
          ))}
          <BaseButton title="Download Attachment" className="mt-2" />
          {description && (
            <div className="border-t mt-4">
              <p className="py-2 uppercase  font-bold text-gray-500 text-justify">
                Description
              </p>
              <p>{description}</p>
            </div>
          )}
        </div>
      ) : (
        <p className="p-4 rounded-md bg-white shadow-md w-[200px] text-gray-500 text-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default AssessmentView;
