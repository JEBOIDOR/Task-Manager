import { Icon, ColorPicker, Switch } from "../ui";

export const Header = () => {
  return (
    <header
      className="b-bottom full-w flex justify-between align-center px-2"
      style={{ minHeight: "80px" }}
    >
      {/*FIX*/}
      <div className="flex gap-1">
        <Icon icon="material-symbols:search" color="#979dc3" />
        <input
          className="none text-gray f-w-700"
          type="text"
          placeholder="Search..."
          height={"30px"}
        />
      </div>
      <Switch options={["inbox", "calendar"]} />
      <ColorPicker />
    </header>
  );
};
