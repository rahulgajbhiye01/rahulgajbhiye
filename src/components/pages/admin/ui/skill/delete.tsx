"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { deleteSkill } from "@/lib/server-actions/skill";
const SkillDelete = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [name, setName] = useState("");

  const handleDelete = async () => {
    const response = await deleteSkill(name);
    toast({
      description: response.message,
    });
    router.refresh();
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <span className="text-xl">Delete Skill</span>
      <div className="space-y-6">
        <Input
          placeholder="Name"
          name="delete"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SkillDelete;
