import { describe, it, expect } from "vitest";

describe("example", () => {
  it("passes", () => {
    expect(1 + 1).toBe(2);
  });

  it("formats strings correctly", () => {
    expect("hello world").toContain("world");
  });
});
