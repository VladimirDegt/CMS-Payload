import {Block} from 'payload';

export const HeaderBlock: Block = {
    slug: "header",
    labels: {
        singular: "Header",
        plural: "Headers",
    },
    fields: [
        { type: "text", name: "title", label: "Title", required: true },
        { type: "upload", name: "logo", label: "Logo", relationTo: "media", required: true },
    ],
};