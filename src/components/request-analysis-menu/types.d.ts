import * as React from "react";
import { RequestAnalysisSections } from "~/types";

export interface RequestAnalysisMenuProps {
  activeMenuItem: RequestAnalysisSections;
  onClick: (ev: React.MouseEvent<HTMLLIElement>) => void;
}
