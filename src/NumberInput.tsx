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
        <div>This is the test line</div>
        <p>Enter the {scale} value here to process</p>
        <div>This is another test line</div>
        <input value={num}
          onChange={this.handleChange} />
      </div>
    );
  }
}
export default NumberInput;