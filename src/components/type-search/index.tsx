import * as React from "react";
import { connect } from "react-redux";
import { typeTermSearched } from "~/actions";
import { Input, Label } from "~/components/styled";
import { TypeSearchDispatchToProps, TypeSearchProps, TypeSearchState } from "~/components/type-search/types";
import { TypeSearchForm, TypeSearchSection } from "~/components/type-search/styled";

class TypeSearch extends React.Component<TypeSearchProps, TypeSearchState> {
  constructor(props: TypeSearchProps) {
    super(props);
    this.state = { searchValue: props.searchValue || "" };
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

const mapDispatchToProps = {
  termSearched: typeTermSearched,
};

export default connect<undefined, TypeSearchDispatchToProps>(
  undefined,
  mapDispatchToProps,
)(TypeSearch);
