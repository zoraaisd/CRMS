import {
  Bell,
  Calendar,
  Grid2x2,
  Plus,
  Search,
  Settings,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-title">Analytics</div>
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <Search size={16} />
          <input type="text" placeholder="Search records" />
        </div>

        <button className="icon-btn">
          <Plus size={18} />
        </button>
        <button className="icon-btn">
          <Bell size={18} />
        </button>
        <button className="icon-btn">
          <Calendar size={18} />
        </button>
        <button className="icon-btn">
          <Settings size={18} />
        </button>
        <button className="icon-btn">
          <Grid2x2 size={18} />
        </button>

        <button className="secondary-btn">Add Component</button>
        <button className="primary-btn">Create Dashboard</button>
      </div>
    </header>
  );
}