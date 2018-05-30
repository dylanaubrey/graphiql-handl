import * as React from "react";
import RequestAnalysisMenu from "~/components/request-analysis-menu";
import RequestAnalysisSection from "~/components/request-analysis-section";
import { PanelMain, PanelSection } from "~/components/styled";
import { RequestAnalysisPanelState } from "~/components/type-cache-control-panel/types";
import { RETRIEVED_FROM_CACHE } from "~/constants/request-analysis-sections";
import { ObjectMap, RequestAnalysisSections } from "~/types";

export default class RequestAnalysisPanel extends React.Component<ObjectMap, RequestAnalysisPanelState> {
  constructor(props: ObjectMap) {
    super(props);
    this._menuChangeHandler = this._menuChangeHandler.bind(this);
    this.state = { activeSection: RETRIEVED_FROM_CACHE };
  }

  public render() {
    return (
      <PanelMain>
        <RequestAnalysisMenu
          activeMenuItem={this.state.activeSection}
          onClick={this._menuChangeHandler}
        />
        <PanelSection>
          <RequestAnalysisSection activeSection={this.state.activeSection} />
        </PanelSection>
      </PanelMain>
    );
  }

  private _menuChangeHandler(ev: React.MouseEvent<HTMLLIElement>) {
    this.setState({ activeSection: ev.currentTarget.id as RequestAnalysisSections });
  }
}
