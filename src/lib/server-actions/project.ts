import { db } from "@/lib/db";
import { z } from "zod";
import { ProjectValidation } from "@/schema/zod";
import { ISkill } from "@/types";

export const getProjects = async () => {
  try {
    const projectsData = await db.project.findMany({
      include: {
        techStack: true,
      },
    });
    return {
      status: 200,
      message: "Projects fetched successfully",
      data: projectsData,
    };
  } catch (error) {
    console.error("Prisma error in getProjectsData:", error);
    // Handle generic errors
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export const postProject = async (data: z.infer<typeof ProjectValidation>) => {
  try {
    const validatedData = ProjectValidation.parse(data);

    // String of tech to a array
    const techStack = validatedData.techStack
      .toLowerCase()
      .split(",")
      .map((item: string) => item.trim())
      .filter((item: string) => item);

    const skillData = await db.skill.findMany();

    const haveTechStack = skillData.filter((item: ISkill) =>
      techStack.some((tech) => item.name.toLowerCase().includes(tech)),
    );

    const techStackIds = haveTechStack.map(
      (skill: ISkill) => skill.id || "unknown id",
    );

    await db.project.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        link: validatedData.link,
        github: validatedData.github,
        techStackId: techStackIds,
      },
      include: {
        techStack: true, // Include the associated skills in the response
      },
    });

    return {
      message: "Project added successfully",
      status: 200,
    };
  } catch (error) {
    console.error("Prisma error in postProject:", error);
    // Handle generic errors
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export async function deleteProject(title: string) {
  try {
    await db.project.delete({
      where: {
        title: title,
      },
    });

    return {
      message: "Project deleted successfully",
      status: 200,
    };
  } catch (error) {
    console.error("Prisma error in getProjectsData:", error);
    // Handle generic errors
    return {
      status: 500,
      message: "Internal server error",
    };
  }
}
