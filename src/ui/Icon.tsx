import { Icon as Iconify } from "@iconify-icon/react";

export const Icon = ({
  icon,
  onClick,
}: {
  icon: string;
  onClick?: () => void;
}) => {
  return <Iconify icon={icon} onClick={onClick}></Iconify>;
};
