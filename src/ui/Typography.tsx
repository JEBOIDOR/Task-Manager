import type { JSX } from "react";
import { variants } from "../constants/styles";

const { color, size, weight, align } = variants;

type Color = keyof typeof color;
type Size = keyof typeof size;
type Weight = keyof typeof weight;
type TextAlign = keyof typeof align;

interface Typography {
  tag: keyof JSX.IntrinsicElements;
  variant: Color;
  size?: Size;
  weight?: Weight;
  align?: TextAlign;
  children: React.ReactNode | string;
  className?: string;
}

export const Typography = ({
  tag,
  children,
  variant,
  className,
  size = "md",
  weight = "nm",
  align = "left",
}: Typography) => {
  const Tag = tag;
  const colorClass = color[variant];
  const sizeClass = variants.size[size];
  const weightClass = variants.weight[weight];
  const textAlignClass = variants.align[align];

  return (
    <Tag
      className={`${
        className || ""
      } ${colorClass} ${sizeClass} ${weightClass} ${textAlignClass}`}
    >
      {children}
    </Tag>
  );
};
