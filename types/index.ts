interface Assessment {
  addedBy: string;
  description: string;
  issueDate: any;
  subject: string;
  time: string;
  title: string;
}

export interface AssessmentsType {
  lastDate: any;
  assessments: Assessment[];
}
