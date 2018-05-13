import * as React from "react";
import { connect } from "react-redux";
import TypeCacheControlForm from "~/components/type-cache-control-form";
import { TypeList, TypeListItem } from "~/components/type-cache-control-list/styled";

import {
  TypeCacheControlListProps,
  TypeCacheControlListStateToProps,
} from "~/components/type-cache-control-list/types";

import { getSchemaTypesCacheControlAdded } from "~/selectors/schema-types-cache-control-added";
import { getSchemaTypesCacheControlEmpty } from "~/selectors/schema-types-cache-control-empty";
import { ReduxState } from "~/types";

class TypeCacheControlList extends React.Component<TypeCacheControlListProps> {
  public render(): React.ReactNode {
    const { typesAdded, typesEmpty, listType } = this.props;
    const types = listType === "added" ? typesAdded : typesEmpty;

    return (
      <TypeList>
        {Object.keys(types).map((typeName) => {
          return (
            <TypeListItem key={typeName} listType={listType}>
              <TypeCacheControlForm id={typeName} listType={listType} inputValue={types[typeName]} />
            </TypeListItem>
          );
        })}
      </TypeList>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  typesAdded: getSchemaTypesCacheControlAdded(state),
  typesEmpty: getSchemaTypesCacheControlEmpty(state),
});

export default connect<TypeCacheControlListStateToProps, undefined>(mapStateToProps)(TypeCacheControlList);
