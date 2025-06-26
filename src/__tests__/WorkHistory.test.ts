import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import WorkHistory from "../components/WorkHistory.vue";
import type { Experience } from "../core/Resume";

describe("WorkHistory.vue", () => {
  it("renders work history entries with company, title, date range, description, and skills", () => {
    const workHistory: Experience[] = [
      {
        company: { label: "TestCorp", location: "Remote" },
        description: {
          title: "Lead Developer",
          dateRange: { startDate: "2020-01", endDate: "2022-12" },
          contents: ["Led a team of developers.", "Implemented new features."],
        },
        skills: [{ label: "JavaScript" }, { label: "Leadership" }],
      },
    ];
    const wrapper = mount(WorkHistory, {
      props: { workHistory },
    });
    // Title and company
    expect(wrapper.text()).toContain("TestCorp");
    expect(wrapper.text()).toContain("Lead Developer");
    // Date range
    expect(wrapper.text()).toContain("Jan. 2020 - Dec. 2022");
    // Description
    expect(wrapper.text()).toContain("Led a team of developers.");
    expect(wrapper.text()).toContain("Implemented new features.");
    // Skills
    expect(wrapper.text()).toContain("JavaScript");
    expect(wrapper.text()).toContain("Leadership");
  });
});
