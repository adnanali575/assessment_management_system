import { getDate } from "../../helpers";
const AssessmentsTable: React.FC<any> = ({ assessment }) => {
  return (
    <>
      <div className="overflow-y-hidden overflow-x-auto">
        <div className="w-full sm:w-11/12 md:w-fit max-w-[1000px] mx-auto p-4 shadow-md bg-white">
          <h1 className=" text-center pb-3 text-xl font-bold">
            {getDate(assessment.lastDate)}
          </h1>
          <table className="min-w-full border-collapse w-full">
            <thead>
              <tr>
                <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2">
                  Subject
                </th>
                <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2">
                  Title
                </th>
                <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2 hidden md:table-cell">
                  Issue Date
                </th>
                <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2 hidden md:table-cell">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {assessment.assessments.map((item: any, index: number) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? `bg-white` : `bg-blue-50`} ${
                    index % 2 === 0
                      ? `hover:bg-gray-100 active:bg-gray-50 transition-all duration-200`
                      : `hover:bg-blue-100 active:bg-blue-50 transition-all duration-200`
                  } border cursor-pointer`}
                >
                  <td className={`border px-4 py-2`}>{item.subject}</td>
                  <td className="border px-4 py-2 min-w-[200px]">
                    {item.title}
                  </td>
                  <td className="border px-4 py-2 hidden md:table-cell">
                    {getDate(item.issueDate)}
                  </td>
                  <td className="border px-4 py-2 hidden md:table-cell">
                    {item.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssessmentsTable;
