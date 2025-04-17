import ProjectCreate from "./create";
import ProjectDelete from "./delete";

const ProjectEditor = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ProjectCreate />
      <ProjectDelete />
    </div>
  );
};

export default ProjectEditor;
