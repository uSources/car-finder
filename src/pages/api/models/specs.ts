import type { NextApiRequest, NextApiResponse } from "next";

import backend from "$/services/http/backend";

import handler from ".";

const mockResponse = {
  json: jest.fn(),
  status: jest.fn(() => mockResponse),
} as unknown as NextApiResponse;

describe("Models", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debería devolver la respuesta correcta con los parámetros de consulta correctos", async () => {
    const mockRequest = {
      query: {
        make: "1,2",
        page: "2",
        name: "Test",
        sort: "id",
      },
    } as unknown as NextApiRequest;

    const mockData = {
      collection: {
        pages: 3,
      },
      data: [
        { id: 1, name: "Modelo 1" },
        { id: 2, name: "Modelo 2" },
      ],
    };

    const encodedJSON = encodeURIComponent(
      JSON.stringify([
        {
          val: ["1", "2"],
          op: "in",
          field: "make_id",
        },
        {
          val: "Test",
          op: "like",
          field: "model",
        },
      ])
    );

    const mockGet = jest.spyOn(backend, "get").mockResolvedValueOnce(mockData);

    await handler(mockRequest, mockResponse);

    expect(mockGet).toHaveBeenCalledWith(
      "/models",
      `verbose=yes&limit=50&page=2&sort=id&json=${encodedJSON}`
    );

    expect(mockResponse.json).toHaveBeenCalledWith({
      pagination: {
        currentPage: 2,
        hasNextPage: true,
        nextPage: 3,
      },
      data: [
        { id: 1, name: "Modelo 1" },
        { id: 2, name: "Modelo 2" },
      ],
    });
  });

  it("debería devolver un error 500 en caso de error en la llamada al backend", async () => {
    const mockRequest = {
      query: {},
    } as unknown as NextApiRequest;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    // Mock del error del backend
    const error = new Error("Error en el backend");
    (backend.get as jest.Mock).mockRejectedValueOnce(error);

    await handler(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);

    expect(mockResponse.json).toHaveBeenCalledWith({ error });
  });
});
