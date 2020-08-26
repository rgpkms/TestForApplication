import React from 'react';

class NumberInput extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onNumberChange(e.target.value);
  }

  render() {
    const num: string = this.props.nv;
    const scale: string = this.props.scale;
    return (
      <div>
        <p>Enter the {scale} value here </p>
        <input value={num}
          onChange={this.handleChange} />
      </div>
    );
  }
}
export default NumberInput;