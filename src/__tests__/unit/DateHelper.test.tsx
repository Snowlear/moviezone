import { getCurrentYear } from "../../helpers/DateHelper";

describe("DateHelper", () => {
  it("should return current year", () => {
    let date = new Date();
    expect(getCurrentYear()).toBe(date.getFullYear());
  });
});
