import * as React from "react";
import { connect } from "react-redux";
import { typeCacheControlAdded } from "~/actions";
import Icon from "~/components/icon";
import { Form, Label } from "~/components/styled";

import {
  TypeListIconButton,
  TypeListInput,
} from "~/components/type-cache-control-panel-form/styled";

import {
  TypeCacheControlPanelDispatchToProps,
  TypeCacheControlPanelFormProps,
  TypeCacheControlPanelFormState,
} from "~/components/type-cache-control-panel-form/types";

class TypeCacheControlPanelForm extends React.Component<
  TypeCacheControlPanelFormProps,
  TypeCacheControlPanelFormState
> {
  constructor(props: TypeCacheControlPanelFormProps) {
    super(props);
    this.state = { inputValue: props.value || "" };
    this._onChangeHandler = this._onChangeHandler.bind(this);
    this._onResetHandler = this._onResetHandler.bind(this);
    this._onSubmitHandler = this._onSubmitHandler.bind(this);
  }

  public render() {
    const { id } = this.props;
    const { inputValue } = this.state;

    return (
      <Form onReset={this._onResetHandler} onSubmit={this._onSubmitHandler}>
        <Label htmlFor={id}>{`${id}:`}</Label>
        <TypeListInput
          id={id}
          onChange={this._onChangeHandler}
          type="text"
          value={inputValue}
        />
        <TypeListIconButton type="submit">
          <Icon symbol="check" />
        </TypeListIconButton>
        <TypeListIconButton disabled={!inputValue} type="reset">
          <Icon symbol="times" />
        </TypeListIconButton>
      </Form>
    );
  }

  private _onChangeHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: ev.target.value });
  }

  private _onResetHandler(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    this.setState({ inputValue: "" });
    const { cacheControlAdded, id } = this.props;
    const { inputValue } = this.state;
    cacheControlAdded({ cacheControl: inputValue, typeName: id });
  }

  private _onSubmitHandler(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const { cacheControlAdded, id } = this.props;
    const { inputValue } = this.state;
    cacheControlAdded({ cacheControl: inputValue, typeName: id });
  }
}

const mapDispatchToProps = {
  cacheControlAdded: typeCacheControlAdded,
};

export default connect<undefined, TypeCacheControlPanelDispatchToProps>(
  undefined,
  mapDispatchToProps,
)(TypeCacheControlPanelForm);
