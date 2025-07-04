import { removeQueryString, parseURL, buildBaseUrl } from "../Url";

describe("Url utils", () => {
  test("removeQueryString removes query string", () => {
    const url = "https://example.com/page?foo=bar&baz=qux";
    const result = removeQueryString(url);
    expect(result).toBe("https://example.com/page");
  });

  test("parseURL extracts parameters", () => {
    const template = "/user/{id}/detail/{product}";
    const actual = "https://example.com/user/123/detail/book";
    const params = parseURL(template, actual);
    expect(params).toEqual({ id: "123", product: "book" });
  });

  test("buildBaseUrl returns base url", () => {
    const url = "https://example.com:8080/page?foo=bar";
    const base = buildBaseUrl(url);
    expect(base).toBe("https://example.com:8080");
  });
});
