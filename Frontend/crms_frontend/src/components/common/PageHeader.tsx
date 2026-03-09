type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>

      <div className="page-header-actions">
        <select className="select-box">
          <option>All</option>
        </select>

        <select className="select-box">
          <option>Org Overview</option>
        </select>
      </div>
    </div>
  );
}