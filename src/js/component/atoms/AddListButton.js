/* eslint-disable */
import React from "react";
import { connect } from "react-redux";

@connect((store) => {
  return {
    toggleList: store.clsActionReducer.toggleList
  };
})
class AddListButton extends React.Component {
  render() {
    // 親コンポーネントの判定条件にて、活性/非活性を切り替える。
    // ※編集必須

    return (
      // ※編集必須
      <div className="add-list-button add-list-button-invalid">{this.props.buttonText}</div>
    );
  }

  clickEvent() {
    // ※編集必須
  }
}
export default AddListButton;