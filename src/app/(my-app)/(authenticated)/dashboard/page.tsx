import { Dashboard } from "@/app/(my-app)/(authenticated)/dashboard/components/Dashboard";
import ProjectsListServer from "@/app/(my-app)/(authenticated)/dashboard/components/ProjectsListServer";

export default function page() {
  return (
      <Dashboard>
        <ProjectsListServer />
      </Dashboard>
  );
}
