function AssessmentsTable() {
  const subectsData = [
    {
      subject: "Computer Networking",
      assessment: "OHT-1",
      giventAt: "Monday, May 2, 2023",
      updatedAt: "Wednesday, May 4, 2023",
      description: "",
      updateBy: "",
      addedBy: "",
    },
    {
      subject: "Computer Networking",
      teacher: "",
      assessment: "OHT-1",
      giventAt: "Monday, May 2, 2023",
      updatedAt: "Wednesday, May 4, 2023",
      description: "",
      updateBy: "",
      addedBy: "",
    },
    {
      subject: "Computer Networking",
      teacher: "",
      assessment: "OHT-1",
      giventAt: "Monday, May 2, 2023",
      updatedAt: "Wednesday, May 4, 2023",
      description: "",
      updateBy: "",
      addedBy: "",
    },
    {
      subject: "Computer Networking",
      teacher: "",
      assessment: "OHT-1",
      giventAt: "Monday, May 2, 2023",
      updatedAt: "Wednesday, May 4, 2023",
      description: "",
      updateBy: "",
      addedBy: "",
    },
    {
      subject: "Computer Networking",
      teacher: "",
      assessment: "OHT-1",
      giventAt: "Monday, May 2, 2023",
      updatedAt: "Wednesday, May 4, 2023",
      description: "",
      updateBy: "",
      addedBy: "",
    },
    {
      subject: "Computer Networking",
      assessment: "OHT-1",
      giventAt: "Monday, May 2, 2023",
      updatedAt: "Wednesday, May 4, 2023",
      description: "",
      updateBy: "",
      addedBy: "",
    },
  ];

  return (
    <>
      <div className="overflow-y-hidden overflow-x-auto">
        <div className="w-full sm:w-11/12 md:w-fit max-w-[1000px] mx-auto p-4 shadow-md bg-white">
          <h1 className=" text-center pb-3 text-xl font-bold">
            Monday, 12 June, 2023
          </h1>
          <table className="min-w-full border-collapse w-full">
  <thead>
    <tr>
      <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2">
        Subject
      </th>
      <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2">
        Assessment
      </th>
      <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2 hidden md:table-cell">
        Given At
      </th>
      <th className="border bg-blue-700 text-white font-medium text-left px-4 py-2 hidden md:table-cell">
        Updated At
      </th>
    </tr>
  </thead>
  <tbody>
    {subectsData.map((item, index) => (
      <tr
        key={index}
        className={index % 2 === 0 ? `bg-white` : `bg-blue-50`}
      >
        <td
          className={`${
            index % 2 === 0
              ? `hover:bg-gray-100 active:bg-gray-50 transition-all duration-200`
              : `hover:bg-blue-100 active:bg-blue-50 transition-all duration-200`
          } border`}
        >
          <a href="#" className="px-4 py-2 w-full h-full flex">
            {item.subject}
          </a>
        </td>
        <td className="border px-4 py-2">{item.assessment}</td>
        <td className="border px-4 py-2 hidden md:table-cell">{item.giventAt}</td>
        <td className="border px-4 py-2 hidden md:table-cell">{item.updatedAt}</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </>
  );
}

export default AssessmentsTable;
