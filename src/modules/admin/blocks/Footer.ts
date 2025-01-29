import {Block} from 'payload';

export const FooterBlock: Block = {
    slug: "footer",
    labels: {
        singular: "Footer",
        plural: "Footers",
    },
    fields: [
        { type: "text", name: "title", label: "Title", required: true },
        { type: "textarea", name: "footer", label: "Footer", required: true },
    ],
};