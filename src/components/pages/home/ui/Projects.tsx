import Link from "next/link";
import { FiLink } from "react-icons/fi";
import { IProject } from "@/schema/type";
import DynamicIcon from "@/components/ui/dynamic-icon";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type ProjectsProps = {
  projectsData: IProject[];
};

const Projects: React.FC<ProjectsProps> = ({ projectsData }) => {
  if (projectsData.length == 0) {
    return <span>No Projects</span>;
  }
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
      {projectsData.map((projectData) => (
        <Card
          className="flex size-full flex-col rounded-xl"
          key={projectData.id}
        >
          <CardHeader>
            <CardTitle className="flex flex-row justify-between text-4xl">
              {projectData.title}
            </CardTitle>
            <CardDescription className="text-base font-normal">
              {projectData.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-between overflow-hidden">
            <div className="flex flex-row gap-2">
              {projectData.techStack.length > 0 &&
                projectData.techStack.map((item) => {
                  return (
                    <div key={item.id} className="border-2 border-solid p-1">
                      <DynamicIcon iconName={item.icon} className="size-6" />
                    </div>
                  );
                })}
            </div>

            <Link
              href={projectData.link}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FiLink size={26} />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
