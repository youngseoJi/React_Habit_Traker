import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  // 해당하는 리액트 컴포넌트에 ref로 연결하여 사용
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
    // this.inputRef.current.value = '';
    // 새로운 목록을 추가 한 뒤, 입력 폼을 빈칸으로 돌려놓은 기능은
    // 2가지 방법 현재 값은 리셋해주거나, 현재 value 값에 빈문자열 줘서 리셋하는 방법
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
