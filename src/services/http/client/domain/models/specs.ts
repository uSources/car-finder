import getModels from ".";

describe("getModels", () => {
  let mockFetch: jest.Mock;
  beforeEach(() => {
    mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );

    global.fetch = mockFetch;
  });
  it("should fetch data from api/models with correct query parameters", async () => {
    const page = 2;
    const make = ["make1", "make2"];
    const sort = "asc";
    const name = "example";

    await getModels({ page, make, sort, name });

    expect(mockFetch).toHaveBeenCalledWith(
      `api/models?page=${page}&make=${encodeURIComponent(
        make.join(",")
      )}&sort=${sort}&name=${name}`
    );
  });

  it("should fetch data from api/models with default query parameters when not provided", async () => {
    await getModels({});

    expect(mockFetch).toHaveBeenCalledWith(
      `api/models?page=1&make=&sort=&name=`
    );
  });

  it("should return the parsed JSON response from fetch", async () => {
    const result = await getModels({});

    expect(result).toEqual({});
  });
});
