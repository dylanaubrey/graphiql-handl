import * as React from "react";
import { connect, DispatchProp } from "react-redux";
import { TypeCacheControlPanelProps } from "~/components/type-cache-control-panel/types";
import { getSchemaTypesCacheControl } from "~/selectors/schema-types-cache-control";
import { ReduxState } from "~/types";

export class TypeCacheControlPanel extends React.Component {
  public props: TypeCacheControlPanelProps;

  public render(): React.ReactNode {
    const { schemaTypes } = this.props;

    return (
      <ul>
        {Object.keys(schemaTypes).map((typeName) => {
          return (
            <li key={typeName}>
              <form>
                <label htmlFor={typeName}>{typeName}</label>
                <input
                  id={typeName}
                  type="text"
                  value={schemaTypes[typeName]}
                />
                <button type="submit">Save</button>
                {schemaTypes[typeName] && <button type="reset">Clear</button>}
              </form>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  schemaTypes: getSchemaTypesCacheControl(state),
});

export default connect<TypeCacheControlPanelProps, DispatchProp<any>>(mapStateToProps)(TypeCacheControlPanel);
