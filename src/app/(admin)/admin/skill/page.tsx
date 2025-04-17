import { Suspense } from "react";
import Loading from "@/components/ui/custom/Loading";

import SkillEditor from "@/components/pages/admin/ui/skill";
import Skills from "@/components/ui/custom/Skills";
import { getSkills } from "@/lib/server-actions/skill";

export const dynamic = "force-dynamic";

export default async function DashboardSkill() {
  const response = (await getSkills()) || [];

  if (response.status === 200 && response.data) {
    return (
      <Suspense fallback={<Loading />}>
        <SkillEditor />
        <Skills skillsData={response.data} />
      </Suspense>
    );
  }
}
