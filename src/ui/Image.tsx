export const Image = ({
  src,
  className,
  width,
  height,
}: {
  src: string;
  className: string;
  width: string;
  height: string;
}) => {
  return (
    <img
      src={src}
      className={`${className || ""} cover`}
      width={width}
      height={height}
    ></img>
  );
};
