import { Suspense } from "react";
import Loading from "@/components/ui/custom/Loading";

import ProjectEditor from "@/components/pages/admin/ui/project";
import Projects from "@/components/ui/custom/Projects";
import { getProjects } from "@/lib/server-actions/project";

export const dynamic = "force-dynamic";

export default async function DashboardProjectPage() {
  const response = (await getProjects()) || [];

  if (response.status === 200 && response.data) {
    return (
      <Suspense fallback={<Loading />}>
        <ProjectEditor />
        <Projects projectsData={response.data} />
      </Suspense>
    );
  }
}
