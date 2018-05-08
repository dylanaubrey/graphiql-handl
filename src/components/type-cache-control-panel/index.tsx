import * as React from "react";
import { connect, DispatchProp } from "react-redux";
import { Form, Label } from "~/components/styled";
import { TypeList, TypeListInput, TypeListItem } from "~/components/type-cache-control-panel/styled";
import { TypeCacheControlPanelProps } from "~/components/type-cache-control-panel/types";
import { getSchemaTypesCacheControl } from "~/selectors/schema-types-cache-control";
import { ReduxState } from "~/types";

export class TypeCacheControlPanel extends React.Component {
  public props: TypeCacheControlPanelProps;

  public render(): React.ReactNode {
    const { schemaTypes } = this.props;

    return (
      <TypeList>
        {Object.keys(schemaTypes).map((typeName) => {
          return (
            <TypeListItem key={typeName}>
              <Form>
                <Label htmlFor={typeName}>{`${typeName}:`}</Label>
                <TypeListInput
                  id={typeName}
                  type="text"
                />
                <button type="submit">Save</button>
                {schemaTypes[typeName] && <button type="reset">Clear</button>}
              </Form>
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

export default connect<TypeCacheControlPanelProps, DispatchProp<any>>(mapStateToProps)(TypeCacheControlPanel);
