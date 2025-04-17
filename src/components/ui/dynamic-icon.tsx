import React from "react";

export interface IDynamicIconProps extends React.AllHTMLAttributes<"span"> {
  iconName: string;
}
const DynamicIcon = async ({
  iconName = "fa/FaFileExcel",
  ...props
}: IDynamicIconProps) => {
  const [library, iconComponent] = iconName.split("/");

  if (!library || !iconComponent) return;

  const lib = library.toLowerCase();

  let ReactIcons: any = await import(`react-icons/ai`);

  switch (lib) {
    case "bi":
      ReactIcons = await import(`react-icons/bi`);
      break;
    case "bs":
      ReactIcons = await import(`react-icons/bs`);
      break;
    case "cg":
      ReactIcons = await import(`react-icons/cg`);
      break;
    case "ci":
      ReactIcons = await import(`react-icons/ci`);
      break;
    case "di":
      ReactIcons = await import(`react-icons/di`);
      break;
    case "fa":
      ReactIcons = await import(`react-icons/fa`);
      break;
    case "fa6":
      ReactIcons = await import(`react-icons/fa6`);
      break;
    case "fc":
      ReactIcons = await import(`react-icons/fc`);
      break;
    case "fi":
      ReactIcons = await import(`react-icons/fi`);
      break;
    case "gi":
      ReactIcons = await import(`react-icons/gi`);
      break;
    case "go":
      ReactIcons = await import(`react-icons/go`);
      break;
    case "gr":
      ReactIcons = await import(`react-icons/gr`);
      break;
    case "hi":
      ReactIcons = await import(`react-icons/hi`);
      break;
    case "hi2":
      ReactIcons = await import(`react-icons/hi2`);
      break;
    case "im":
      ReactIcons = await import(`react-icons/im`);
      break;
    case "io":
      ReactIcons = await import(`react-icons/io`);
      break;
    case "io5":
      ReactIcons = await import(`react-icons/io5`);
      break;
    case "lia":
      ReactIcons = await import(`react-icons/lia`);
      break;
    case "lu":
      ReactIcons = await import(`react-icons/lu`);
      break;
    case "md":
      ReactIcons = await import(`react-icons/md`);
      break;
    case "pi":
      ReactIcons = await import(`react-icons/pi`);
      break;
    case "ri":
      ReactIcons = await import(`react-icons/ri`);
      break;
    case "rx":
      ReactIcons = await import(`react-icons/rx`);
      break;
    case "si":
      ReactIcons = await import(`react-icons/si`);
      break;
    case "sl":
      ReactIcons = await import(`react-icons/sl`);
      break;
    case "tb":
      ReactIcons = await import(`react-icons/tb`);
      break;
    case "tfi":
      ReactIcons = await import(`react-icons/tfi`);
      break;
    case "ti":
      ReactIcons = await import(`react-icons/ti`);
      break;
    case "vsc":
      ReactIcons = await import(`react-icons/vsc`);
      break;
    case "wi":
      ReactIcons = await import(`react-icons/wi`);
      break;
    default:
      throw new Error("Unknown icon library");
  }

  // Now you can use ReactIcons as needed
  const Icon = ReactIcons[iconComponent];
  return <Icon {...props} />;
};

export default DynamicIcon;
