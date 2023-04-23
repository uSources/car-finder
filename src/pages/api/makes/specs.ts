import type { NextApiRequest, NextApiResponse } from "next";

import backend from "$/services/http/backend";

import handler from ".";

const mockRequest = {} as NextApiRequest;
const mockResponse = {
  json: jest.fn(),
  status: jest.fn(() => mockResponse),
} as unknown as NextApiResponse;

describe("Makes", () => {
  it("should fetch data from /makes and transform it correctly", async () => {
    const mockData = [
      { id: 1, name: "make1" },
      { id: 2, name: "make2" },
    ];

    const mockGet = jest.spyOn(backend, "get").mockResolvedValueOnce({
      data: mockData,
    });

    await handler(mockRequest, mockResponse);

    expect(mockGet).toHaveBeenCalledWith("/makes");

    expect(mockResponse.json).toHaveBeenCalledWith([
      { key: "1", value: "make1" },
      { key: "2", value: "make2" },
    ]);
  });

  it("should handle errors correctly and send 500 status code", async () => {
    const mockError = new Error("Failed to fetch data");

    jest.spyOn(backend, "get").mockRejectedValueOnce(mockError);

    await handler(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: mockError });
  });
});
