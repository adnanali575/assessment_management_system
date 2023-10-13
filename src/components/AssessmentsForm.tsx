import React, { useState, useEffect } from "react";
import { BaseInput } from "./BaseInput";
import SelectBox from "./SelectBox";
import {
  db,
  doc,
  setDoc,
  collection,
  getDoc,
  updateDoc,
} from "../../firebase/firebaseConfig";
import { getDate } from "../../helpers";
import BaseButton from "./BaseButton";

const AssessmentsForm: React.FC = () => {
  const [isCustomeTitle, setIsCustomTitle] = useState<boolean>(false);
  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    subject: "",
    teacher: "",
    issueDate: "",
    lastDate: "",
    title: "",
    description: "",
    addedBy: "Adnan Ali",
    hours: "",
    minutes: "",
    dayTime: "AM",
    time: "",
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

  // handle submission of assessments
  const addAssessment = (e: React.FormEvent) => {
    if (isFormValid()) {
      e.preventDefault();
      setIsBtnLoading(true);

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
            time: formData.time,
          },
        ],
      };

      // -------------------------------------------------------------------------
      const program = collection(db, "Software Engineering");
      const batchRef = doc(program, "BSSE 2021-2025");
      const semesterRef = doc(
        collection(batchRef, "Semester 5"),
        getDate(new Date(formData.lastDate))
      );

      // Get the document data
      getDoc(semesterRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();

            data.assessments.push(dataTOPost.assessments[0]);

            updateDoc(semesterRef, data);
          } else {
            if (formData.lastDate) {
              const program = collection(db, "Software Engineering");
              const batchRef = doc(program, "BSSE 2021-2025");
              const semesterRef = doc(
                collection(batchRef, "Semester 5"),
                getDate(new Date(formData.lastDate))
              );

              setDoc(semesterRef, dataTOPost)
                .then(() => {
                  console.log("Document successfully written!");
                  setIsBtnLoading(false);
                })
                .catch((error) => {
                  console.error("Error setting document: ", error);
                  setIsBtnLoading(false);
                });
            }
          }
        })
        .then(() => {
          console.log("Document successfully updated!");
          setIsBtnLoading(false);
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
          setIsBtnLoading(false);
        });
    }
  };

  // method to prepare assessment time
  useEffect(() => {
    setFormData({
      ...formData,
      time: `${formData.hours}:${formData.minutes} ${
        formData.hours === "09" ||
        formData.hours === "10" ||
        formData.hours === "11"
          ? `AM`
          : `PM`
      }`,
    });
  }, [formData.hours, formData.minutes]);

  // select box values -----------------------------------------

  // select box options
  const teachers = [
    "Dr. Sabit Rahim",
    "Mr. Sajid Hussain",
    "Chand Safi",
    "Kamni Raees",
    "Mr. Kifayat Hussain",
  ];

  const subjects = [
    "Computer Networks",
    "Cloude Computing",
    "Software Re-Engineering",
    "Software Project Managment System",
    "Technical & Business Writing",
    "Management Information System",
  ];

  const assessments = [
    "OHT-1",
    "OHT-2",
    "Assignment 1",
    "Assignment 2",
    "Custom",
  ];

  const hours = ["09", "10", "11", "12", "01", "02", "03", "04"];
  const minutes = ["00", "30"];

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={addAssessment}
        className="space-y-4 w-full xl:w-[940px] bg-white p-8 shadow-md"
      >
        <h1 className="font-bold text-xl text-center">
          Add Assessment Details
        </h1>
        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
          <SelectBox
            name="subject"
            label="Select Subject"
            required
            options={subjects}
            value={formData.subject}
            onChange={(data) => handleChange(data)}
          />
          <SelectBox
            name="teacher"
            label="Select Teacher"
            required
            options={teachers}
            value={formData.teacher}
            onChange={(event) => handleChange(event)}
          />
          <BaseInput
            type="date"
            label="Issue Date"
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
              label="Title"
              name="title"
              value={formData.title}
              onChange={(event) => handleChange(event)}
            />
          ) : (
            <SelectBox
              name="title"
              label="Title"
              options={assessments}
              value={formData.title}
              onChange={(event) => handleChange(event)}
            />
          )}
          <div className="grid grid-cols-3 gap-2">
            <SelectBox
              name="hours"
              label="Hours"
              required
              options={hours}
              value={formData.hours}
              onChange={(data) => handleChange(data)}
            />

            <SelectBox
              name="minutes"
              label="Minutes"
              required
              options={minutes}
              value={formData.minutes}
              onChange={(data) => handleChange(data)}
            />
            <SelectBox
              name="dayTime"
              label="Day Time"
              required
              options={["AM", "PM"]}
              value={formData.dayTime}
              onChange={(data) => handleChange(data)}
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Assessment description..."
              value={formData.description}
              onChange={handleDescriptionChange}
              className="border resize-none h-[200px] rounded-md px-3 py-2 min-h-[100px] w-full outline-none focus:border-sky-300"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <BaseButton
            title="Submit"
            isLoading={isBtnLoading}
            className="w-[120px]"
          />
        </div>
      </form>
    </div>
  );
};

export default AssessmentsForm;
