import SearchInput from "../../shared/SearchInput/SearchInput";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center">
      <div>
        <SearchInput />
      </div>
      <div>side buttons</div>
    </div>
  );
};

export default Header;
