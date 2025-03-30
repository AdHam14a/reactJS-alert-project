import { Bell, EraserIcon, FileWarning, Info, SquareCheck } from "lucide-react";
import "./App.css";
import Alert from "./Components/Alert/Alert";

function App() {
  return (
    <>
      <Alert
        type="default"
        icon={<Bell />}
        title="Default"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quis
          earum nulla quia tempore illum!"
      />
      <Alert
        type="info"
        icon={<Info />}
        title="Info"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quis
          earum nulla quia tempore illum!"
      />
      <Alert
        type="warning"
        icon={<FileWarning />}
        title="Warning"
        description="Lorem i Magni quis
          earum nulla quia tempore illum!"
      />
      <Alert
        type="error"
        icon={<EraserIcon />}
        title="Error"
        description="Lorem sit amet, consectetur adipisicing elit. Magni quis
          earum nulla quia tempore illum!"
      />
      <Alert
        type="success"
        icon={<SquareCheck />}
        title="Success"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quis
          earum  tempore illum!"
      />
    </>
  );
}

export default App;
