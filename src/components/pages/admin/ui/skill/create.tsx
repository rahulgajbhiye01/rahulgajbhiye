"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SkillValidation } from "@/schema/zod";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postSkill } from "@/lib/server-actions/skill";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const SkillCreate = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof SkillValidation>>({
    resolver: zodResolver(SkillValidation),
    defaultValues: {
      icon: "",
      name: "",
    },
  });

  const handleSave = async (data: z.infer<typeof SkillValidation>) => {
    const response = await postSkill(data);
    toast({
      description: response.message,
    });
    router.refresh();
  };
  return (
    <div className="flex w-full flex-col gap-4">
      <span className="text-xl">New Skill</span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Icon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default SkillCreate;
