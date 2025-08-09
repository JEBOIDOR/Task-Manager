import type React from "react";

export const Wrapper = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return <section className={className || ""}>{children}</section>;
};
