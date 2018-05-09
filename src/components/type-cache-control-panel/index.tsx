import * as React from "react";
import { connect } from "react-redux";
import { TypeList, TypeListItem } from "~/components/type-cache-control-panel/styled";

import {
  TypeCacheControlPanelProps,
  TypeCacheControlPanelStateToProps,
} from "~/components/type-cache-control-panel/types";

import TypeCacheControlPanelForm from "~/components/type-cache-control-panel-form";
import { getSchemaTypesCacheControl } from "~/selectors/schema-types-cache-control";
import { ReduxState } from "~/types";

class TypeCacheControlPanel extends React.Component<TypeCacheControlPanelProps> {
  public render(): React.ReactNode {
    const { schemaTypes } = this.props;

    return (
      <TypeList>
        {Object.keys(schemaTypes).map((typeName) => {
          return (
            <TypeListItem key={typeName}>
              <TypeCacheControlPanelForm id={typeName} value={schemaTypes[typeName]} />
            </TypeListItem>
          );
        })}
      </TypeList>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  schemaTypes: getSchemaTypesCacheControl(state),
});

export default connect<TypeCacheControlPanelStateToProps, undefined>(mapStateToProps)(TypeCacheControlPanel);
