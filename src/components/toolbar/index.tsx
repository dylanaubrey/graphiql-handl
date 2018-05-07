import * as React from "react";
import InfoBar from "~/components/info-bar";
import { ToolbarMain } from "~/components/toolbar/styled";

export default function Toolbar() {
  return (
    <div>
      <ToolbarMain>
        <InfoBar />
      </ToolbarMain>
    </div>
  );
}
