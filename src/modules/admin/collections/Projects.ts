import { CollectionConfig } from "payload";
import {
  FixedToolbarFeature,
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const ProjectsCollection: CollectionConfig = {
  slug: "projects",
  access: {
    create: () => true,
    delete: () => true,
    update: () => true,
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Назва",
      required: true,
      admin: {
        placeholder: "Введіть назву проєкта",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Основна інформація",
          fields: [
            {
              type: "collapsible",
              label: "Термін виконання проєкту",
              fields: [
                {
                  name: "startProject",
                  label: "Початок",
                  type: "group",
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "startDate",
                          type: "date",
                          required: true,
                          admin: {
                            width: "50%",
                            date: {
                              pickerAppearance: "dayOnly",
                              displayFormat: "d MMM yyy",
                            },
                          },
                        },
                        {
                          name: "startTime",
                          type: "date",
                          required: true,
                          admin: {
                            width: "50%",
                            date: {
                              pickerAppearance: "timeOnly",
                              displayFormat: "h:mm:ss a",
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "endProject",
                  label: "Дедлайн",
                  type: "group",
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "endDate",
                          type: "date",
                          required: true,
                          admin: {
                            width: "50%",
                            date: {
                              pickerAppearance: "dayOnly",
                              displayFormat: "d MMM yyy",
                            },
                          },
                        },
                        {
                          name: "endTime",
                          type: "date",
                          required: true,
                          admin: {
                            width: "50%",
                            date: {
                              pickerAppearance: "timeOnly",
                              displayFormat: "h:mm:ss a",
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              name: "requirements",
              type: "select",
              label: "Вимоги до тестувальника",
              required: true,
              options: ["Альфа", "Бета", "Гамма"],
            },
            {
              name: "type",
              type: "select",
              label: "Тип",
              required: true,
              options: [
                "Дослідницький",
                "Дослидницький на конкретних пристроях",
                "З тест кейсами без пристроїв",
                "З тест кейсами та з пристроями",
              ],
            },
            {
              type: "row",
              fields: [
                {
                  type: "select",
                  name: "slots",
                  label: "Кількість слотів",
                  options: ["10", "20", "30", "40", "50"],
                  admin: {
                    width: "50%",
                  },
                },
                {
                  type: "text",
                  name: "effort",
                  label: "Зусилля",
                  admin: {
                    width: "50%",
                    placeholder: "Введіть час зусилля",
                  },
                },
              ],
            },

            {
              type: "richText",
              name: "focus",
              label: "У фокусі",
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  FixedToolbarFeature(),
                  HTMLConverterFeature(),
                ],
              }),
            },

            {
              type: "richText",
              name: "testEnvironment",
              label: "Тестове середовище",
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  FixedToolbarFeature(),
                  HTMLConverterFeature(),
                ],
              }),
            },

            lexicalHTML("focus", { name: "focus_html" }),
            lexicalHTML("testEnvironment", { name: "testEnvironment_html" }),
          ],
        },
        {
          label: "Додаткова інформація",
          fields: [
            {
              name: "additionalSections",
              label: "Додаткові секції",
              type: "group",
              fields: [
                {
                  type: "richText",
                  name: "specialInstructions",
                  label: "Спеціальні інструкції",
                  editor: lexicalEditor({
                    features: ({ defaultFeatures }) => [
                      ...defaultFeatures,
                      FixedToolbarFeature(),
                      HTMLConverterFeature(),
                    ],
                  }),
                },
                {
                  type: "richText",
                  name: "bugInstructions",
                  label: "Інструкції баг-репортингу",
                  editor: lexicalEditor({
                    features: ({ defaultFeatures }) => [
                      ...defaultFeatures,
                      FixedToolbarFeature(),
                      HTMLConverterFeature(),
                    ],
                  }),
                },
                {
                  type: "richText",
                  name: "bonuses",
                  label: "Бонуси",
                  editor: lexicalEditor({
                    features: ({ defaultFeatures }) => [
                      ...defaultFeatures,
                      FixedToolbarFeature(),
                      HTMLConverterFeature(),
                    ],
                  }),
                },

                lexicalHTML("specialInstructions", {
                  name: "specialInstructions_html",
                }),
                lexicalHTML("bugInstructions", {
                  name: "bugInstructions_html",
                }),
                lexicalHTML("bonuses", {
                  name: "bonuses_html",
                }),
              ],
            },
          ],
        },
      ],
    },
  ],
};
