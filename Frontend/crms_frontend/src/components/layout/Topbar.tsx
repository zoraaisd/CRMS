import {
  Bell,
  Calendar,
  Grid2x2,
  Plus,
  RefreshCcw,
  Search,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={16} />
        <input type="text" placeholder="Search records" />
      </div>

      <div className="topbar-actions">
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
          <Grid2x2 size={18} />
        </button>
        <button className="ghost-btn">
          <RefreshCcw size={16} />
          Refresh
        </button>
        <button className="secondary-btn">Add Component</button>
        <button className="primary-btn">Create Dashboard</button>
      </div>
    </header>
  );
}