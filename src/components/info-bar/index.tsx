import * as React from "react";
import { connect } from "react-redux";

import {
  InfoBarCell,
  InfoBarCellValue,
  InfoBarQuote,
  InfoBarTable,
} from "~/components/info-bar/styled";

import { InfoBarProps } from "~/components/info-bar/types";
import { Label } from "~/components/styled";
import { QUOTE } from "~/constants/misc";
import { getActiveOperationName } from "~/selectors/active-operation-name";
import { getActiveDataEntitiesCachedCount } from "~/selectors/active-data-entities-cached-count";
import { getActiveDuration } from "~/selectors/active-duration";
import { getActiveHandlID } from "~/selectors/active-handl-id";
import { getActiveOperation } from "~/selectors/active-operation";
import { getActiveQueryPathsCachedCount } from "~/selectors/active-query-paths-cached-count";
import { getActiveResponsesCachedCount } from "~/selectors/active-responses-cached-count";
import { getActiveStartTime } from "~/selectors/active-start-time";
import { ReduxState } from "~/types";
import { getActiveResponsesQueriedCount } from "~/selectors/active-responses-queried-count";
import { getActiveQueryPathsQueriedCount } from "~/selectors/active-query-paths-queried-count";
import { getActiveDataEntitiesQueriedCount } from "~/selectors/active-data-entities-queried-count";

class InfoBar extends React.Component {
  public props: InfoBarProps;

  public render(): React.ReactNode {
    const {
      dataEntitiesCached,
      dataEntitiesQueried,
      duration,
      handlID,
      operation,
      operationName,
      queryPathsCached,
      queryPathsQueried,
      responsesCached,
      responsesQueried,
      startTime,
    } = this.props;

    if (!handlID) {
      return (
        <InfoBarTable>
          <InfoBarCell>
            <Label>{"Handl:"}</Label>
            <InfoBarQuote>{QUOTE}</InfoBarQuote>
          </InfoBarCell>
        </InfoBarTable>
      );
    }

    return (
      <InfoBarTable>
        <InfoBarCell key="activeRequest">
          <Label>{"Active request:"}</Label>
          <InfoBarCellValue>{handlID}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="time">
          <Label>{"time:"}</Label>
          <InfoBarCellValue>{startTime}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="duration">
          <Label>{"duration:"}</Label>
          <InfoBarCellValue>{`${duration}ms`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="operation">
          <Label>{"operation:"}</Label>
          <InfoBarCellValue>{operation}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="operationName">
          <Label>{"operaton name:"}</Label>
          <InfoBarCellValue>{operationName}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="responses">
          <Label>{"responses cached/queried:"}</Label>
          <InfoBarCellValue>{`${responsesCached} cached / ${responsesQueried} queried`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="queryPaths">
          <Label>{"query paths cached/queried:"}</Label>
          <InfoBarCellValue>{`${queryPathsCached} cached / ${queryPathsQueried} queried`}</InfoBarCellValue>
        </InfoBarCell>
        <InfoBarCell key="dataEntities">
          <Label>{"data entities cached/queried:"}</Label>
          <InfoBarCellValue>{`${dataEntitiesCached} cached / ${dataEntitiesQueried} queried`}</InfoBarCellValue>
        </InfoBarCell>
      </InfoBarTable>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  dataEntitiesCached: getActiveDataEntitiesCachedCount(state),
  dataEntitiesQueried: getActiveDataEntitiesQueriedCount(state),
  duration: getActiveDuration(state),
  handlID: getActiveHandlID(state),
  operation: getActiveOperation(state),
  operationName: getActiveOperationName(state),
  queryPathsCached: getActiveQueryPathsCachedCount(state),
  queryPathsQueried: getActiveQueryPathsQueriedCount(state),
  responsesCached: getActiveResponsesCachedCount(state),
  responsesQueried: getActiveResponsesQueriedCount(state),
  startTime: getActiveStartTime(state),
});

export default connect<InfoBarProps>(mapStateToProps)(InfoBar);
