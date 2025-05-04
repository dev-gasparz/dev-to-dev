// pages/Dashboard.tsx
import { tools } from "../components/ToolCard/toolsData";
import { ToolCard } from "../components/ToolCard/ToolCard";
import Header from "../components/Header/Header";

export function Dashboard() {
  return (
    <>
      <Header />
      <div className="dashboard-grid">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            path={tool.path}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
