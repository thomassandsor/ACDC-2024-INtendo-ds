import React, { useState } from "react";
import { Input, Avatar } from "@fluentui/react-components";
import "./RightPanel.scss";

const RightPanel: React.FC = () => {
  const [value, setValue] = useState<string>();
  return (
    <div className="right-panel">
      <h2>Right panel</h2>
      <div className="right-panel__menu">
        <Avatar name="Fyr Pilsesen" />
        <Input placeholder="hei" onChange={(e) => setValue(e.target.value)} />
        <p>{value}</p>
      </div>
    </div>
  );
};

export default RightPanel;
