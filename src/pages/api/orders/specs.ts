import type { NextApiRequest, NextApiResponse } from "next";

import handler from ".";

const mockRequest = {} as NextApiRequest;
const mockResponse = {
  json: jest.fn(),
  status: jest.fn(() => mockResponse),
} as unknown as NextApiResponse;

describe("Orders", () => {
  it("debería devolver un array de objetos con las claves y valores correctos", async () => {
    await handler(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith([
      { key: "id", value: "Identificador" },
      { key: "make_id", value: "Fabricante" },
      { key: "name", value: "Nombre" },
    ]);
  });
});
