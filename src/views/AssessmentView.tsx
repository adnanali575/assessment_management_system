import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, db, doc, onSnapshot } from "../../firebase/firebaseConfig";
import { getDate } from "../../helpers";
const AssessmentView = () => {
  const [paramId, setParamId] = useState<string>("");
  const [paramIndex, setParamIndex] = useState<string>("");
  const [assessmentData, setAssessmentData] = useState<any>({});

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const regex = /(\d+)\+(.+)/;
      const match = params.id.match(regex);
      console.log(match);
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
            console.log(newData);
            setAssessmentData(newData);
          }
        });

        return unsub;
      }
    }
  }, [paramId, paramIndex]);
  return (
    <div className="flex justify-center px-4 pb-4">
      <div className="p-4 sm:p-8 text-sm bg-white shadow-md rounded-md max-w-[1000px]">
        <p className="sm:text-xl font-bold border-b py-2 mb-4">
          {assessmentData.title}
        </p>
        <table>
          <tbody>
            <tr>
              <td className="p-2 sm:w-[120px] uppercase  font-bold text-gray-500">
                Subject
              </td>
              <td className="p-2 text-gray-600">{assessmentData.subject}</td>
            </tr>
            <tr>
              <td className="p-2 sm:w-[120px] uppercase  font-bold text-gray-500">
                Teacher
              </td>
              <td className="p-2 text-gray-600">{assessmentData.teacher}</td>
            </tr>
            <tr>
              {assessmentData.issueDate && (
                <td className="p-2 sm:w-[120px] uppercase  font-bold text-gray-500">
                  Issue Date
                </td>
              )}
              <td className="p-2 text-gray-600">
                {getDate(new Date(assessmentData.issueDate))}
              </td>
            </tr>
            <tr>
              <td className="p-2 sm:w-[120px] uppercase  font-bold text-gray-500">
                Last Date
              </td>
              <td className="p-2 text-gray-600">
                {getDate(new Date(assessmentData.lastDate))}
              </td>
            </tr>
            <tr>
              <td className="p-2 sm:w-[120px] uppercase  font-bold text-gray-500">
                Time
              </td>
              <td className="p-2 text-gray-600">{assessmentData.time}</td>
            </tr>
            <tr>
              <td className="p-2 sm:w-[120px] uppercase  font-bold text-gray-500">
                Added By
              </td>
              <td className="p-2 text-gray-600">{assessmentData.addedBy}</td>
            </tr>
          </tbody>
        </table>
        {assessmentData.description && (
          <div className="border-t mt-4">
            <p className="py-2 uppercase  font-bold text-gray-500 text-justify">
              Description
            </p>
            <p>{assessmentData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentView;
