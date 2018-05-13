import * as React from "react";
import { connect } from "react-redux";
import { typeCacheControlAdded } from "~/actions";
import Icon from "~/components/icon";
import { Form } from "~/components/styled";

import {
  TypeListForm,
  TypeListIconButton,
  TypeListInput,
  TypeListLabel,
} from "~/components/type-cache-control-form/styled";

import {
  TypeCacheControlFormDispatchToProps,
  TypeCacheControlFormProps,
  TypeCacheControlFormState,
} from "~/components/type-cache-control-form/types";

class TypeCacheControlForm extends React.Component<TypeCacheControlFormProps, TypeCacheControlFormState> {
  public static getDerivedStateFromProps(nextProps: TypeCacheControlFormProps, prevState: TypeCacheControlFormState) {
    return nextProps.inputValue !== prevState.inputValue ? { inputValue: nextProps.inputValue } : null;
  }

  constructor(props: TypeCacheControlFormProps) {
    super(props);
    this.state = { inputValue: props.inputValue || "" };
    this._onChangeHandler = this._onChangeHandler.bind(this);
    this._onResetHandler = this._onResetHandler.bind(this);
    this._onSubmitHandler = this._onSubmitHandler.bind(this);
  }

  public render() {
    const { id, listType } = this.props;
    const { inputValue } = this.state;

    return (
      <TypeListForm
        listType={listType}
        onReset={this._onResetHandler}
        onSubmit={this._onSubmitHandler}
      >
        <TypeListLabel htmlFor={id} listType={listType}>{`${id}:`}</TypeListLabel>
        <TypeListInput
          disabled={listType === "added"}
          id={id}
          listType={listType}
          onChange={this._onChangeHandler}
          type="text"
          value={inputValue}
        />
        {listType === "empty" && this._renderSubmitButton()}
        {listType === "added" && this._renderResetButton()}
      </TypeListForm>
    );
  }

  private _onChangeHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: ev.target.value });
  }

  private _onResetHandler(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    this.setState({ inputValue: "" }, () => {
      const { cacheControlAdded, id } = this.props;
      const { inputValue } = this.state;
      cacheControlAdded({ cacheControl: inputValue, typeName: id });
    });
  }

  private _onSubmitHandler(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const { cacheControlAdded, id } = this.props;
    const { inputValue } = this.state;
    if (!inputValue) return;
    cacheControlAdded({ cacheControl: inputValue, typeName: id });
  }

  private _renderResetButton() {
    const { listType } = this.props;

    return (
      <TypeListIconButton
        listType={listType}
        type="reset"
      >
        <Icon symbol="times" width={listType === "added" ? "10px" : "20px"} />
      </TypeListIconButton>
    );
  }

  private _renderSubmitButton() {
    const { listType } = this.props;
    const { inputValue } = this.state;

    return (
      <TypeListIconButton
        disabled={!inputValue}
        listType={listType}
        type="submit"
      >
        <Icon symbol="check" width={listType === "added" ? "10px" : "20px"} />
      </TypeListIconButton>
    );
  }
}

const mapDispatchToProps = {
  cacheControlAdded: typeCacheControlAdded,
};

export default connect<undefined, TypeCacheControlFormDispatchToProps>(
  undefined,
  mapDispatchToProps,
)(TypeCacheControlForm);
