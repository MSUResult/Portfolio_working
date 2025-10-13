import mongoose, { Schema, Document } from "mongoose";

// Subschemas
interface FeaturedImage {
  url: string;
  altText: string;
}

interface ContentItem {
  type: string; // "paragraph" or "list"
  text?: string;
  items?: string[]; // for list items
}

interface Section {
  type: string; // "section"
  heading: string;
  content: ContentItem[];
}

interface Metadata {
  title: string;
  category: string;
  date: Date;
  readTimeMinutes: number;
  featuredImage: FeaturedImage;
  summary: string;
  slug: string; // ✅ Added slug here
}

export interface BlogDocument extends Document {
  post: {
    metadata: Metadata;
    body: Section[];
  };
}

// Subschemas
const FeaturedImageSchema = new Schema<FeaturedImage>(
  {
    url: { type: String, required: true },
    altText: { type: String, required: true },
  },
  { _id: false }
);

const ContentItemSchema = new Schema<ContentItem>(
  {
    type: { type: String, required: true },
    text: { type: String },
    items: [{ type: String }],
  },
  { _id: false }
);

const SectionSchema = new Schema<Section>(
  {
    type: { type: String, required: true },
    heading: { type: String, required: true },
    content: { type: [ContentItemSchema], required: true },
  },
  { _id: false }
);

const MetadataSchema = new Schema<Metadata>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    readTimeMinutes: { type: Number, required: true },
    featuredImage: { type: FeaturedImageSchema, required: true },
    summary: { type: String, required: true },
    slug: { type: String, required: true }, // ✅ Added slug field here
  },
  { _id: false }
);

// Main schema
const BlogSchema = new Schema<BlogDocument>(
  {
    post: {
      metadata: { type: MetadataSchema, required: true },
      body: { type: [SectionSchema], required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<BlogDocument>("Blog", BlogSchema);
