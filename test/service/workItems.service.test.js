// test/service/workItems.service.test.js
import { jest } from "@jest/globals";

let workItemsService;
let WorkItemsMock;

beforeAll(async () => {
  // Mock the WorkItems model
  WorkItemsMock = {
    find: jest.fn(),
    create: jest.fn(),
  };

  jest.unstable_mockModule("../../src/models/workItems.js", () => ({
    default: WorkItemsMock,
  }));

  // Import the service AFTER mocking
  workItemsService = await import("../../src/services/workItems.service.js");
});

describe("WorkItem Service", () => {
  beforeEach(() => jest.clearAllMocks());

  test("getAll should return all work items for a user", async () => {
    const mockAllItems = [{ id: 1, title: "Test" }];
    WorkItemsMock.find.mockReturnValue({
      sort: jest.fn().mockResolvedValue(mockAllItems),
    });

    const result = await workItemsService.getAll({ userId: "123" });
    expect(result).toEqual(mockAllItems);
    expect(WorkItemsMock.find).toHaveBeenCalledWith({ userId: "123" });
  });

  test("create should add a new item and return updated list", async () => {
    const mockItem = { title: "New Item" };
    const mockAllItems = [mockItem];

    WorkItemsMock.create.mockResolvedValue(mockItem);
    WorkItemsMock.find.mockResolvedValue(mockAllItems);

    const result = await workItemsService.create({
      title: "New Item",
      description: "desc",
      priority: "high",
      userId: "123",
    });

    expect(WorkItemsMock.create).toHaveBeenCalledWith({
      title: "New Item",
      description: "desc",
      priority: "high",
      userId: "123",
    });
    expect(result).toEqual(mockAllItems);
  });
});
