import React, { useState, useEffect } from "react";
import { BaseInput } from "./BaseInput";
import SelectBox from "./SelectBox";
import { db, doc, setDoc, collection } from "../../firebase/firebaseConfig";
import { getDate, getTime } from "../../helpers";

const AssessmentsForm: React.FC = () => {
  const [isCustomeTitle, setIsCustomTitle] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    subject: "",
    teacher: "",
    issueDate: "",
    lastDate: "",
    title: "",
    description: "",
    addedBy: "Adnan Ali",
  });

  // handleChange to set formData
  const handleChange = (data: {
    value: string | number | Date;
    name: string;
  }) => {
    const { name, value } = data;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, description: event.target.value });
  };

  // select box options
  const subjects = [
    "Computer Networks",
    "Cloude Computing",
    "Software Managment System",
  ];

  const assessments = [
    "OHT-1",
    "OHT-2",
    "Assignment 1",
    "Assignment 2",
    "Custom",
  ];

  const teachers = ["Dr. Sabit Rahim", "Mr. Kifayat"];

  // handle custom field for title input
  useEffect(() => {
    if (formData.title) {
      if (
        formData.title === "OHT-1" ||
        formData.title === "OHT-2" ||
        formData.title === "Assignment 1" ||
        formData.title === "Assignment 2"
      )
        setIsCustomTitle(false);
      else {
        if (!isCustomeTitle) {
          setFormData({ ...formData, title: "" });
        }
        setIsCustomTitle(true);
      }
    }
  }, [formData.title]);

  const isFormValid = () => {
    return (
      formData.subject.length > 0 &&
      formData.teacher.length > 0 &&
      formData.title.length > 0
    );
  };

  useEffect(() => {
    console.log(getTime(new Date(formData.lastDate)));
  }, [formData.lastDate]);

  // handle submission of assessments
  const addAssessment = (e: React.FormEvent) => {
    if (isFormValid()) {
      e.preventDefault();

      const dataTOPost = {
        lastDate: formData.lastDate,
        assessments: [
          {
            subject: formData.subject,
            teacher: formData.teacher,
            issueDate: formData.issueDate,
            title: formData.title,
            description: formData.description,
            addedBy: formData.addedBy,
            time: getTime(new Date(formData.lastDate)),
          },
        ],
      };

      const baseColRel = collection(db, "departments");
      const departmentsRef = doc(baseColRel, "Computer Science");
      const program = collection(departmentsRef, "Software Engineering");
      const batchRef = doc(program, "BSSE 2021-2025");
      const semesterRef = doc(
        collection(batchRef, "Semester 5"),
        getDate(new Date(formData.lastDate))
      );

      // Set the document data using setDoc
      setDoc(semesterRef, dataTOPost)
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error setting document: ", error);
        });
    }
  };

  return (
    <div className="p-6">
      <form
        onSubmit={addAssessment}
        className="space-y-4 w-[600px] bg-white p-8 shadow-md"
      >
        <h1 className="font-bold text-xl text-center">
          Add Assessment Details
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <SelectBox
            name="subject"
            label="Subject"
            required
            options={subjects}
            value={formData.subject}
            onChange={(data) => handleChange(data)}
          />
          <SelectBox
            name="teacher"
            label="Teacher"
            required
            options={teachers}
            value={formData.teacher}
            onChange={(event) => handleChange(event)}
          />
          <BaseInput
            type="date"
            label="Given At"
            name="issueDate"
            value={formData.issueDate}
            onChange={(event) => handleChange(event)}
          />
          <BaseInput
            type="date"
            label="Last Date"
            name="lastDate"
            value={formData.lastDate}
            onChange={(event) => handleChange(event)}
          />
          {isCustomeTitle ? (
            <BaseInput
              className="col-span-2"
              label="Title"
              name="title"
              value={formData.title}
              onChange={(event) => handleChange(event)}
            />
          ) : (
            <SelectBox
              className="col-span-2"
              name="title"
              label="Title"
              options={assessments}
              value={formData.title}
              onChange={(event) => handleChange(event)}
            />
          )}
          <div className="col-span-2">
            <label className="block font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Write description of assessment..."
              value={formData.description}
              onChange={handleDescriptionChange}
              className="border rounded-md px-3 py-2 min-h-[100px] w-full outline-none focus:border-blue-300"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 active:scale-95">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssessmentsForm;
