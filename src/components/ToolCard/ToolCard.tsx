import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  path: string;
};

export function ToolCard({ title, description, path }: Props) {
  return (
    <div className="tool-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={path} className="button">
        Usar
      </Link>
    </div>
  );
}
