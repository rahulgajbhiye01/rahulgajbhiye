/* Sections Declarations */

export interface IUser {
  id?: string;
  email: string;
  password: string;
}

// Skills Declarations
export interface ISkill {
  id?: string;
  name: string;
  icon: string;
}

// Projects Declarations
export interface IProject {
  id?: string;
  title: string;
  description: string;
  link: string;
  github: string;
  techStack: ISkill[];
}
