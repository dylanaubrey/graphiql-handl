import * as React from "react";
import { connect } from "react-redux";
import { typeTermSearched } from "~/actions";
import { Input, Label } from "~/components/styled";
import { TypeSearchForm, TypeSearchSection } from "~/components/type-search/styled";

import {
  TypeSearchDispatchToProps,
  TypeSearchProps,
  TypeSearchState,
  TypeSearchStateToProps,
} from "~/components/type-search/types";

import { getTypeSearchTerm } from "~/selectors/type-search-term";
import { ReduxState } from "~/types";

class TypeSearch extends React.Component<TypeSearchProps, TypeSearchState> {
  constructor(props: TypeSearchProps) {
    super(props);
    this.state = { searchValue: props.searchValue };
    this._onInputHandler = this._onInputHandler.bind(this);
  }

  public render() {
    const { searchValue } = this.state;

    return (
      <TypeSearchSection>
        <TypeSearchForm>
          <Label htmlFor="search">Search:</Label>
          <Input
            id="search"
            onInput={this._onInputHandler}
            placeholder="Enter typeName..."
            type="search"
            value={searchValue}
          />
        </TypeSearchForm>
      </TypeSearchSection>
    );
  }

  private _onInputHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: ev.target.value }, () => {
      this.props.termSearched(this.state.searchValue);
    });
  }
}

const mapStateToProps = (state: ReduxState) => ({
  searchValue: getTypeSearchTerm(state),
});

const mapDispatchToProps = {
  termSearched: typeTermSearched,
};

export default connect<TypeSearchStateToProps, TypeSearchDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(TypeSearch);
