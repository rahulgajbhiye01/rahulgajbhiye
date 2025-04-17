import { db } from "@/lib/db";
import { z } from "zod";
import { SkillValidation } from "@/schema/zod";

export const getSkills = async () => {
  try {
    const skillsData = await db.skill.findMany();

    return {
      status: 200,
      message: "Skills fetched successfully",
      data: skillsData,
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

export const postSkill = async (data: z.infer<typeof SkillValidation>) => {
  try {
    const validatedData = SkillValidation.parse(data);

    await db.skill.create({
      data: {
        name: validatedData.name,
        icon: validatedData.icon,
      },
    });
    return {
      message: "Skill added successfully",
      status: 200,
    };
  } catch (error) {
    console.error("Prisma error in postSkill:", error);
    // Handle generic errors
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export const deleteSkill = async (name: string) => {
  try {
    await db.skill.delete({
      where: {
        name: name,
      },
    });
    return {
      message: "Skill deleted successfully",
      status: 200,
    };
  } catch (error) {
    console.error("Prisma error in deleteSkill:", error);
    // Handle generic errors
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
