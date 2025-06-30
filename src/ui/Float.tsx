export const Float = ({
  children,
  className,
}: {
  children?: string;
  className: string;
}) => {
  return <div className={`${className || ""} absolute`}>{children}</div>;
};
