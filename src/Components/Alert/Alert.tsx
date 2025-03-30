import { ReactNode } from "react";
import "./index.scss";
import { CircleX } from "lucide-react";

type alertType = "default" | "info" | "warning" | "error" | "success"

interface IProps {
    type: alertType,
    icon: ReactNode,
    title: string,
    description: string
}

const Alert = ({type,icon,title,description}:IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert-title">
          <div className="title">
            {icon}
            <h4>{title}</h4>
          </div>
          <span>
            <CircleX />
          </span>
        </div>
        <p>
          {description}
        </p>
      </div>
    </>
  );
};

export default Alert;
