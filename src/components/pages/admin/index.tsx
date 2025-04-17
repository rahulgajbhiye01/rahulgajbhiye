import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <Link href={"/admin/blog"}>Blog</Link>
      <Link href={"/admin/project"}>Project</Link>
      <Link href={"/admin/skill"}>Skill</Link>
    </div>
  );
};

export default AdminDashboard;
