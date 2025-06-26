import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Education from "../components/Education.vue";
import type { EducationEntry } from "../core/Resume";

describe("Education.vue", () => {
  it("renders education entries with year, degree, and institution", () => {
    const education: EducationEntry[] = [
      {
        year: "2020",
        degree: "PhD in Computer Science",
        institution: "Test University",
      },
      {
        year: "2015",
        degree: "MSc in Software Engineering",
        institution: "",
      },
    ];
    const wrapper = mount(Education, {
      props: { education },
    });
    // First entry
    expect(wrapper.text()).toContain(
      "2020 - PhD in Computer Science - Test University"
    );
    // Second entry (no institution)
    expect(wrapper.text()).toContain("2015 - MSc in Software Engineering");
  });
});
