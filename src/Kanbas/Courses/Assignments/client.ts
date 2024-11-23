import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const updateAssignment = async (assignment: any, courseId: string) => {
  const { data } = await axios.put(
    `${COURSES_API}/courses/${courseId}/assignments/${assignment._id}`,
    assignment
  );
  return data;
};

export const deleteAssignment = async (id: string, courseId: string) => {
  const { data } = await axios.delete(
    `${COURSES_API}/${courseId}/assignments/${id}`
  );
  return data;
};

export const create = async (courseId: string) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/assignments`);
  return data;
};

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};
