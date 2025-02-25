import { CollectionConfig } from "payload";
import {
  FixedToolbarFeature,
  HTMLConverterFeature,
  lexicalEditor, lexicalHTML
} from "@payloadcms/richtext-lexical";

export const ProjectsCollection: CollectionConfig = {
  slug: "projects",
  access: {
    create: () => true,
    delete: () => true,
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
    },
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
    lexicalHTML("focus", {name: 'focus_html', }),
  ],
};
