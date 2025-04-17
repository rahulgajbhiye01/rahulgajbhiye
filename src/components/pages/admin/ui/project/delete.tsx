"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { deleteProject } from "@/lib/server-actions/project";

const ProjectDelete = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [title, setTitle] = useState("");

  const handleDelete = async () => {
    const response = await deleteProject(title);
    toast({
      description: response.message,
    });
    router.refresh();
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <span className="text-xl">Delete Project</span>
      <div className="space-y-6">
        <Input
          placeholder="Title"
          name="delete"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button type="submit" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProjectDelete;
