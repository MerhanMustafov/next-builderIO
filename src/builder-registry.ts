"use client";
import { Builder } from "@builder.io/react";
import TechnologiesHeroSection from "./components/TechnologiesHeroSection/TechnologiesHeroSection";
import TechnologiesServicesSection from "./components/TechnologiesServicesSection/TechnologiesServicesSection";
import TechnologiesPartnerSection from "./components/TechnologiesPartnerSection/TechnologiesPartnerSection";
import MessageFormSection from "./components/MessageForm/MessageFormSection";

Builder.registerComponent(TechnologiesHeroSection, {
  name: "TechnologiesHeroSection",
  models: ["page"],
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Technologies",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "We use the latest technologies to build your applications",
    },
    {
      name: "image",
      type: "file",
      defaultValue: "https://accedia.com/wp-content/2023/08/Untitled-design-67.png",
    },
    {
      name: "imageAlt",
      type: "string",
      defaultValue: "Technologies",
    },
  ],
});
Builder.registerComponent(TechnologiesServicesSection, {
  name: "TechnologiesServicesSection",
  models: ["page"],
  defaultStyles: {
    background: "red",
  },
  inputs: [
    {
      name: "sectionTitle",
      type: "string",
      defaultValue: "EXPERT TECHNOLOGY CONSULTING SERVICES",
    },
    {
      name: "services",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
        },
      ],

      defaultValue: [
        {
          label: "Business Analysis",
        },
        {
          label: "UX Design",
        },
        {
          label: "Solution Architecture",
        },
        {
          label: "Technology Advisory",
        },
        {
          label: "Cyber Security",
        },
      ],
    },
  ],
});
Builder.registerComponent(TechnologiesPartnerSection, {
  name: "TechnologiesPartnerSection",
  models: ["page"],
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "ACCEDIA AS YOUR TECHNOLOGY CONSULTING PARTNER",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "Accedia is an IT services company, specializing in technology consulting services and software development. For the past 10 years since its founding, the company has become an example of sustainable growth and is recognized by long-term clients, business partners, as well as international rankings such as Deloitte Technology Fast 50  & 500, Financial Times 1000 Europe or IAOP’s Global 100 Outsourcing Companies. Our Software Consultants combine extensive industry knowledge with technical proficiency and excel at contextualizing client challenges within strategic business objectives. ",
    },
    {
      name: "bg__image",
      type: "file",
      defaultValue: "https://www.accedia.com/wp-content/uploads/2022/03/Maria-in-a-meeting-scaled.jpg",
    },
    {
      name: "whyUsReasons",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
        },
      ],
      defaultValue: [
        {
          label:
            "A highly skilled team of 250+ consultants with diverse expertise deliver proven solutions across industries.",
        },
        {
          label: "AWS and Microsoft partnerships enhance solution quality and versatility.",
        },
        {
          label: "Agile principles enable quick adaptation, ensuring on-time, flexible solutions.",
        },
        {
          label:
            "Certified for Quality Management (ISO 9001:2015), Information Security Management (ISO/IEC 27001:2013), and Environmental Management (ISO 14001:2015).",
        },
      ],
    },
  ],
});
Builder.registerComponent(MessageFormSection, {
  name: "MessageFormSection",
  models: ["page"],
  inputs: [
    {
      name: "sectionTitle",
      type: "string",
    },
    {
      name: "subtitle",
      type: "string",
    },
    {
      name: "linkText",
      type: "string",
    },
    {
      name: "termsAndConditionsText",
      type: "string",
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "inputFields",
      type: "list",
      subFields: [
        {
          name: "plh",
          type: "string",
        },
        {
          name: "type",
          type: "string",
        },
        {
          name: "isRequired",
          type: "boolean",
        },
      ],
    },
  ],
});
