import SkillCreate from "./create";
import SkillDelete from "./delete";

const SkillEditor = () => {
  return (
    <div className="m-8 flex w-full flex-row justify-center gap-4">
      <SkillCreate />
      <SkillDelete />
    </div>
  );
};

export default SkillEditor;
