import React, { useState } from "react";
import { BaseInput } from "./BaseInput";
import SelectBox from "./SelectBox";

const AssessmentsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: "",
    teacher: "",
    assessment: "",
    givenAt: "",
    updatedAt: "",
    lastDate: "",
    title: "",
    description: "",
    updateBy: "",
    addedBy: "",
  });

  const handleChange = (data: {
    value: string | number | Date;
    name: string;
  }) => {
    const { name, value } = data;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return (
      formData.subject.length > 0 &&
      formData.teacher.length > 0 &&
      formData.assessment.length > 0
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (isFormValid()) {
      e.preventDefault();
      console.log(formData);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, description: event.target.value });
  };

  const subjects = [
    "Computer Networks",
    "Cloude Computing",
    "Software Managment System",
  ];

  const assessments = [
    "OHT-1",
    "OHT-2",
    "Quiz-1",
    "Quiz-2",
    "Quiz-3",
    "Assignment 1",
    "Assignment 2",
    "Assignment 3",
    "Assignment 4",
  ];

  const teachers = ["Dr. Sabit Rahim", "Mr. Kifayat"];

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
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
          <SelectBox
            name="assessment"
            label="Assessment"
            required
            options={assessments}
            value={formData.assessment}
            onChange={(event) => handleChange(event)}
          />
          <BaseInput
            type="date"
            label="Given At"
            name="givenAt"
            value={formData.givenAt}
            onChange={(event) => handleChange(event)}
          />
          <BaseInput
            type="date"
            label="Last Date"
            name="lastDate"
            value={formData.lastDate}
            onChange={(event) => handleChange(event)}
          />
          <BaseInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={(event) => handleChange(event)}
          />
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssessmentsForm;
