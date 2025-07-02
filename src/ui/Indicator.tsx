export const Indicator = ({
  children,
  className,
}: {
  children?: string;
  className: string;
}) => {
  return (
    <div
      className={`${className || ""} absolute`}
      style={{ top: "-2px", right: "-2px" }}
    >
      {children}
    </div>
  );
};
