import { get } from "./requester";
const baseURL = "http://localhost:3030/jsonstore";

export const getAllApplications = async () => {
  const result = await get(`${baseURL}/applications`);
  const applications = Object.values(result);

  return applications;
};

export const getApplcationById = async (appId) => {
  const result = await get(`${baseURL}/applications/${appId}`);
  return result;
};
