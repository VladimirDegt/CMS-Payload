'use service'

import { getPayload } from "payload";
import { CollectionSlug } from "payload";
import config from "@payload-config";
import ProjectListClient from "@/app/(my-app)/(authenticated)/dashboard/components/ProjectListClient";

const ProjectsListServer = async () => {
  const payload = await getPayload({ config });

  const projects = await payload.find({
    collection: "projects" as CollectionSlug,
  });

  return <ProjectListClient projects={projects.docs} />;
};

export default ProjectsListServer;