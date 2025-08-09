export const Header = () => {
  return (
    <header
      className="b-bottom full-w flex justify-between align-center px-2"
      style={{ minHeight: "80px" }}
    >
      {/*Searchbar container + icon search */}
      <div>
        <input type="text" placeholder="Search..." height={"30px"} />
      </div>
      <div className="p1">
        <input type="checkbox" />
      </div>
      <input type="color" />
    </header>
  );
};
