import avatarPath from "../assets/photo.jpeg";

type Resume = {
  fullName: string;
  title: string;
  avatarPath: string;
  contact: Contact;
  misc: Misc;
  content: Content;
  skills: Skills;
  hobbies: string[];
};

type Skill = {
  label: string;
};

class Skills {
  private skillsByCategory: Record<string, Skill[]> = {};

  setSkills(category: string, skills: Skill[]): Skills {
    this.skillsByCategory[category] = skills;
    return this;
  }

  getAll(): Record<string, Skill[]> {
    return this.skillsByCategory;
  }
}

type DateRange = {
  startDate: string;
  endDate: string;
};

type Company = {
  label: string;
  location: string;
};

type JobDescription = {
  contents: string[];
  title: string;
  dateRange: DateRange;
};

type Experience = {
  company: Company;
  description: JobDescription;
  skills: Skill[];
};

type EducationEntry = {
  year: string;
  degree: string;
  institution: string;
};

type Content = {
  quickIntro: string[];
  workHistory: Experience[];
  education: EducationEntry[];
};

type Misc = {
  languages: string[];
};

type Contact = {
  email: string;
  phone: string;
  workplace: string;
};

class ResumeRepository {
  load(): Resume {
    return {
      fullName: "Lionel Armanet",
      title: "Fullstack software engineer",
      avatarPath,
      contact: {
        email: "lionel.armanet@gmail.com",
        phone: "+33682346787",
        workplace: "Grenoble - France",
      },
      misc: {
        languages: ["French", "English (fluent)"],
      },
      content: {
        quickIntro: [
          "For the past 18 years, I have been contributing to crafting & operating SAAS & PAAS services of different flavours & sizes, from on-premise to cloud-native solutions and for various domains. I like to make challenging things easy to understand, to ship value as a team and to engineer solutions that I'm proud of delivering.",
          "Craftsmanship & agile are at the heart of my framework, and I love to share those practices with others. I'm always happy to throw a coding dojo to showcase TDD or design patterns.",
          "I'm currently working at Salesforce as a principal fullstack software engineer, focused on building the next-generation AI-driven search platform.",
        ],
        workHistory: [
          {
            company: {
              label: "Salesforce",
              location: "",
            },
            description: {
              title: "Principal software engineer",
              dateRange: {
                startDate: "2018-09",
                endDate: "Now",
              },
              contents: [
                "Started as a technical leader, leading a fullstack team to develop new features (UI and APIs) on top of the search infrastructure, focusing on typeahead features.",
                "Drafted a standard for search UI APIs and contributed to migrating the frontend stack to Lightning Web Components.",
                "In 2020, joined work.com to develop HR tools, contributed to the initial framework, and improved CD towards trunk-based development.",
                "Returned to the search org as acting architect for 'search manager', a configuration/metadata-driven engine for Salesforce's search behaviour, leading refactoring and new feature delivery.",
                "Currently developing a next-gen search & agent-based UI platform using Spring Reactor, Web Components, and Kubernetes.",
                "Work primarily in Kotlin, Java, JavaScript/TypeScript; organize coding dojos and lead projects across timezones.",
              ],
            },
            skills: [
              { label: "Java / Kotlin" },
              { label: "JavaScript / TypeScript" },
              { label: "Web components (LWC)" },
              {
                label:
                  "Cloud computing & containerization (aws, k8s, docker, helm, terraform)",
              },
              { label: "Salseforce platform" },
              { label: "Continuous Delivery" },
              { label: "CI/CD (Jenkins, CircleCI)" },
              { label: "Git" },
              { label: "Craftsmanship" },
            ],
          },
          {
            company: {
              label: "Photoweb",
              location: "",
            },
            description: {
              title: "Software architect",
              dateRange: {
                startDate: "2013-09",
                endDate: "2018-09",
              },
              contents: [
                "Rewrote the photo composing software suite with JavaScript & HTML5, replacing Silverlight.",
                "Built a full HTML5 rich interface for photo editing and layout, pioneering among competitors.",
                "Created a frontend framework on AngularJS, implemented a CQRS-like state manager, and used RxJS for user interactions and physics computations.",
                "Promoted to Software Architect, led multiple projects for e-commerce and factory software, and deployed Kubernetes stack on GCP.",
                "Drove adoption of Domain Driven Design and async messaging to modernize legacy business logic.",
              ],
            },
            skills: [
              { label: "C# .Net & .Net core" },
              { label: "TDD, DDD" },
              { label: "JavaScript (AngularJS & Vanilla JS)" },
              { label: "Docker, Kubernetes" },
              { label: "RDS (PgSql), SqlServer" },
              { label: "AWS, GCP" },
              { label: "Continuous Delivery" },
              { label: "CI/CD" },
              { label: "Git" },
              { label: "Craftsmanship" },
            ],
          },
          {
            company: {
              label: "Digimind",
              location: "",
            },
            description: {
              title: "Lead Software engineer",
              dateRange: {
                startDate: "2009-12",
                endDate: "2013-09",
              },
              contents: [
                "Worked across all software layers, from design to production deployment, in a distributed team.",
                "Developed a drag-and-drop admin for a knowledge management tool, operated software in production, and learned OS-level troubleshooting.",
                "Began practicing TDD, which transformed software development approach.",
                "Led frontend team to create 'Digimind Social', a rich JavaScript interface backed by a Java backend on Twitter storm.",
              ],
            },
            skills: [
              { label: "Java" },
              { label: "JavaScript (BackboneJS)" },
              { label: "MySQL" },
              { label: "Solr" },
              { label: "Twitter storm" },
              { label: "Craftsmanship" },
            ],
          },
          {
            company: {
              label: "Object Direct",
              location: "",
            },
            description: {
              title: "Contractor",
              dateRange: {
                startDate: "2006-10",
                endDate: "2009-12",
              },
              contents: [
                "Worked on various fullstack projects and missions.",
                "Provided frontend development training and created the open source project wiQuery.",
                "Notable experience as a developer at Drimki, collaborating with JavaScript framework authors and deepening JavaScript/software expertise.",
              ],
            },
            skills: [
              { label: "Java" },
              { label: "JavaScript" },
              { label: "PHP" },
              { label: "MySQL, PgSQL" },
            ],
          },
        ],
        education: [
          {
            year: "2006",
            degree: "Master's degree in Software Engineering",
            institution: "Université Joseph Fourrier - Grenoble",
          },
          {
            year: "2003",
            degree: "Bachelor's degree in Computer Science",
            institution: "Universté de Savoie - Le Bourget du Lac",
          },
          {
            year: "2000",
            degree: "French A-levels",
            institution: "",
          },
        ],
      },
      skills: new Skills()
        .setSkills("Engineering skills", [
          { label: "Design patterns" },
          { label: "TDD" },
          { label: "DDD" },
          { label: "Agile (Scrum & XP)" },
          { label: "Pair / Mob programming" },
        ])
        .setSkills("Stacks & Languages (proficient)", [
          {
            label: "JavaScript, Java, Kotlin, C#, TypeScript, CSS, HTML, bash",
          },
          { label: "Spring boot, .NET core, Nodejs (express)" },
          { label: "Web components, LWC, RxJS, Vitejs (pet project)" },
        ])
        .setSkills("Infrastructure & tools", [
          { label: "Docker, Kubernetes, AWS, GCP" },
          { label: "CI/CD, Gitlab, Github Actions" },
          { label: "Monitoring, logging, tracing" },
        ])
        .setSkills("Soft skills", [
          { label: "Creativity" },
          { label: "Communication" },
          { label: "Leadership" },
          { label: "Adaptability" },
        ]),
      hobbies: [
        "Music: lead singer of a rock band, composer",
        "DIY & electronics",
        "Photography",
        "Sports: hiking, running & block climbing",
      ],
    };
  }
}

export { ResumeRepository };
export type { Resume, Contact, Skill, Experience, EducationEntry };
