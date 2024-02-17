import { GiHamburgerMenu } from "react-icons/gi";
import { dropdownData } from "../../data/DropDownData";
import MenuItems from "./MenuItems";

const NavbarDropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="menu-icon">
        <GiHamburgerMenu />
        <span className="text-base">Browse Categories</span>
      </div>
      <div>
        <ul className="menus">
          {dropdownData.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems
                items={menu}
                path={menu?.path}
                key={index}
                depthLevel={depthLevel}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDropdown;
