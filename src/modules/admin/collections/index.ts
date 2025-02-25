import { UsersCollection } from "@/modules/admin/collections/Users";
import { MoviesCollection } from "@/modules/admin/collections/Movies";
import { Media } from "@/modules/admin/collections/Media";
import { TagsCollection } from "@/modules/admin/collections/Tags";
import { PagesCollection } from "@/modules/admin/collections/Pages";
import { CustomersCollection } from "@/modules/admin/collections/Customers";
import { EmailCollection } from "@/modules/admin/collections/Emails";
import { ProjectsCollection } from "@/modules/admin/collections/Projects";

export const collections = [
  UsersCollection,
  MoviesCollection,
  Media,
  TagsCollection,
  PagesCollection,
  CustomersCollection,
  EmailCollection,
  ProjectsCollection
]