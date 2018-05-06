import { getActiveOperationName } from "~/selectors/active-operation-name";
import * as React from "react";
import { QUOTE } from "~/constants/misc";
import { getActiveDataEntitiesCount } from "~/selectors/active-data-entites-count";
import { getActiveDuration } from "~/selectors/active-duration";
import { getActiveHandlID } from "~/selectors/active-handl-id";
import { getActiveOperation } from "~/selectors/active-operation";
import { connect, DispatchProp } from "react-redux";
import { getActiveQueryPathsCount } from "~/selectors/active-query-paths-count";
import { getActiveResponsesCount } from "~/selectors/active-responses-count";
import { getActiveStartTime } from "~/selectors/active-start-time";
import { ReduxState } from "~/types";
import { InfoBarProps } from "~/components/info-bar/types";

import {
  InfoBarCell,
  InfoBarCellLabel,
  InfoBarCellValue,
  InfoBarQuote,
  InfoBarTable,
} from "~/components/info-bar/styled";

export class InfoBar extends React.Component {
  private static _getEntriesText(count: number): string {
    return count === 1 ? "entry" : "entries";
  }

  public props: InfoBarProps;

  public render(): React.ReactNode {
    const {
      dataEntities,
      duration,
      handlID,
      operation,
      operationName,
      queryPaths,
      responses,
      startTime,
    } = this.props;

    if (!handlID) {
      return (
        <InfoBarTable>
          <InfoBarCell>
            <InfoBarCellLabel>{"Handl:"}</InfoBarCellLabel>
            <InfoBarQuote>{QUOTE}</InfoBarQuote>
          </InfoBarCell>
        </InfoBarTable>
      );
    }

    return (
      <InfoBarTable>
        <InfoBarCell key="lastRequest">
          <InfoBarCellLabel>{"last request:"}</InfoBarCellLabel>
          <InfoBarCellValue>{handlID}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="time">
          <InfoBarCellLabel>{"time:"}</InfoBarCellLabel>
          <InfoBarCellValue>{startTime}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="duration">
          <InfoBarCellLabel>{"duration:"}</InfoBarCellLabel>
          <InfoBarCellValue>{`${duration}ms`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="operation">
          <InfoBarCellLabel>{"operation:"}</InfoBarCellLabel>
          <InfoBarCellValue>{operation}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="operationName">
          <InfoBarCellLabel>{"operaton name:"}</InfoBarCellLabel>
          <InfoBarCellValue>{operationName}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="responses">
          <InfoBarCellLabel>{"response cache:"}</InfoBarCellLabel>
          <InfoBarCellValue>{`${responses} ${InfoBar._getEntriesText(responses)} added`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="queryPaths">
          <InfoBarCellLabel>{"query path cache:"}</InfoBarCellLabel>
          <InfoBarCellValue>{`${queryPaths} ${InfoBar._getEntriesText(queryPaths)} added`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="dataEntities">
          <InfoBarCellLabel>{"data entities cache:"}</InfoBarCellLabel>
          <InfoBarCellValue>{`${dataEntities} ${InfoBar._getEntriesText(dataEntities)} added`}</InfoBarCellValue>
        </InfoBarCell>
      </InfoBarTable>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  dataEntities: getActiveDataEntitiesCount(state),
  duration: getActiveDuration(state),
  handlID: getActiveHandlID(state),
  operation: getActiveOperation(state),
  operationName: getActiveOperationName(state),
  queryPaths: getActiveQueryPathsCount(state),
  responses: getActiveResponsesCount(state),
  startTime: getActiveStartTime(state),
});

export default connect<InfoBarProps, DispatchProp<any>>(mapStateToProps)(InfoBar);
