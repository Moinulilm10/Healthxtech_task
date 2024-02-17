import { useNavigate } from "react-router-dom";
import { sidebarData } from "../../data/sideBarData";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <ul className="list-container">
        {sidebarData.map((item, index) => (
          <li key={index} className="list" onClick={() => navigate(item.path)}>
            <span>{item.title}</span>
            <span>{item.icon}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
