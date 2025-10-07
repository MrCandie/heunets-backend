import * as workItemService from "../services/workItems.service.js";

export const getAllWorkItems = async (req, res) => {
  try {
    if (!req.query) return res.status(400).json({ error: "Invalid query" });
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: "Invalid user ID" });

    const items = await workItemService.getAll({ userId });

    res.status(200).json({
      status: "Success",
      data: items,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message || "Failed to fetch work items" });
  }
};

export const createWorkItem = async (req, res) => {
  try {
    const { title, description, priority, userId } = req.body;

    if (!userId) return res.status(400).json({ error: "Invalid user ID" });

    if (!title || !description)
      return res.status(400).json({ error: "Title and description required" });

    const newItem = await workItemService.create({
      title,
      description,
      priority,
      userId,
    });
    res.status(201).json({
      status: "Success",
      data: newItem,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create work item" });
  }
};
