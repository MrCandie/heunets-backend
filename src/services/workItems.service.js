import WorkItems from "../models/workItems.js";

export const getAll = async ({ userId }) => {
  const allWorkItems = await WorkItems.find({ userId }).sort({ createdAt: -1 });

  return allWorkItems;
};

export const create = async ({ title, description, userId, priority }) => {
  const newItem = { userId, title, description, priority };
  await WorkItems.create(newItem);

  const allWorkItems = await WorkItems.find({ userId });

  return allWorkItems;
};
