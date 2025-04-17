"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectValidation } from "@/schema/zod";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postProject } from "@/lib/server-actions/project";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const ProjectCreate = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof ProjectValidation>>({
    resolver: zodResolver(ProjectValidation),
    defaultValues: {
      title: "",
      description: "",
      link: "",
      github: "",
      techStack: "",
    },
  });

  const handleSave = async (data: z.infer<typeof ProjectValidation>) => {
    const response = await postProject(data);
    toast({
      description: response.message,
    });
    router.refresh();
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <span className="text-xl">New Project</span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tell about the project."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Github" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Tech Stack" {...field} />
                </FormControl>
                <FormDescription>
                  Write like React.js, Redux, Next.js ...
                </FormDescription>
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

export default ProjectCreate;
