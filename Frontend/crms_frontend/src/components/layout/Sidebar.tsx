import {
  BarChart3,
  ClipboardList,
  Folder,
  HandHelping,
  Home,
  Package,
  PieChart,
  Search,
  Settings2,
  ShoppingBag,
  SquareKanban,
  Wrench,
} from "lucide-react";

const primaryItems = [
  { label: "Home", icon: Home },
  { label: "Reports", icon: BarChart3 },
  { label: "Analytics", icon: PieChart, active: true },
  { label: "My Requests", icon: ClipboardList },
];

const workspaceItems = [
  { label: "Sales", icon: ShoppingBag },
  { label: "Activities", icon: Search },
  { label: "Inventory", icon: Package },
  { label: "Support", icon: HandHelping },
  { label: "Integrations", icon: Settings2 },
  { label: "Services", icon: Wrench },
  { label: "Projects", icon: Folder },
  { label: "Voice of the Customer", icon: SquareKanban },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Zoho CRM</div>

      <nav className="sidebar-menu">
        {primaryItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`sidebar-item ${item.active ? "active" : ""}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="sidebar-section">
        <div className="sidebar-section-title">CRM Teamspace</div>

        <div className="sidebar-search-box">
          <Search size={16} />
          <span>Search</span>
        </div>

        <div className="sidebar-submenu">
          {workspaceItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="sidebar-subitem">
                <Icon size={16} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}