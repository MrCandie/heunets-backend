// test/controller/workItems.controller.test.js
import { jest } from "@jest/globals";

let workItemController;
let workItemServiceMock;

beforeAll(async () => {
  // Mock the service module
  workItemServiceMock = {
    getAll: jest.fn(),
    create: jest.fn(),
  };

  jest.unstable_mockModule(
    "../../src/services/workItems.service.js",
    () => workItemServiceMock
  );

  // Import controller AFTER mocking
  workItemController = await import(
    "../../src/controllers/workItems.controller.js"
  );
});

describe("WorkItems Controller", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  test("getAllWorkItems should return 200 and data on success", async () => {
    const mockItems = [{ title: "Test Item" }];
    workItemServiceMock.getAll.mockResolvedValue(mockItems);

    req.query = { userId: "123" };
    await workItemController.getAllWorkItems(req, res);

    expect(workItemServiceMock.getAll).toHaveBeenCalledWith({ userId: "123" });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: "Success",
      data: mockItems,
    });
  });

  test("getAllWorkItems should return 500 if service throws an error", async () => {
    workItemServiceMock.getAll.mockRejectedValue(new Error("Service failed"));

    req.query = { userId: "123" };
    await workItemController.getAllWorkItems(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Service failed" });
  });

  test("createWorkItem should return 201 and data on success", async () => {
    const newItem = { title: "Test Item" };
    workItemServiceMock.create.mockResolvedValue(newItem);

    req.body = {
      title: "Test Item",
      description: "Test desc",
      priority: "high",
      userId: "123",
    };

    await workItemController.createWorkItem(req, res);

    expect(workItemServiceMock.create).toHaveBeenCalledWith({
      title: "Test Item",
      description: "Test desc",
      priority: "high",
      userId: "123",
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ status: "Success", data: newItem });
  });

  test("createWorkItem should return 500 if service throws an error", async () => {
    workItemServiceMock.create.mockRejectedValue(new Error("Service failed"));

    req.body = {
      title: "Test Item",
      description: "Test desc",
      priority: "high",
      userId: "123",
    };

    await workItemController.createWorkItem(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: "Failed to create work item",
    });
  });
});
