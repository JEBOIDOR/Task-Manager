import { Icon as Iconify } from "@iconify-icon/react";

export const Icon = ({
  icon,
  color,
  className,
  onClick,
  width = 20,
}: {
  icon: string;
  color?: string;
  className?: string;
  onClick?: () => void;
  width?: number;
}) => {
  return (
    <Iconify
      icon={icon}
      onClick={onClick}
      width={width}
      color={color}
      className={className}
    ></Iconify>
  );
};
