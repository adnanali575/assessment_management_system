import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, db, doc, onSnapshot } from "../../firebase/firebaseConfig";
import { getDate } from "../../helpers";
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
      <div className="p-4 sm:p-8 text-sm bg-white shadow-md rounded-md max-w-[1000px]">
        <p className="sm:text-xl font-bold border-b py-2 mb-4">{title}</p>
        <table>
          <tbody>
            {assessmentData.map((item, i) => (
              <tr key={i}>
                <td className="p-2 sm:w-[120px] uppercase  font-bold text-gray-500">
                  {item.fieldName}
                </td>
                <td className="p-2 text-gray-600">
                  {item.fieldName === "Last Date" ||
                  item.fieldName === "Issue Date"
                    ? getDate(new Date(item.value))
                    : item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {description && (
          <div className="border-t mt-4">
            <p className="py-2 uppercase  font-bold text-gray-500 text-justify">
              Description
            </p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentView;
