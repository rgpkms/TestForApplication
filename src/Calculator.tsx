import React from 'react';
import NumberInput from './NumberInput';
import MyMath from './MyMath';
import tryConvert from './Validating';
class Calculator extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.state = { minValue: '', maxValue: '' };
  }

  handleMinChange(numberValue: string) {
    this.setState({
      ...this.state,
      minValue: numberValue
    });
  }

  handleMaxChange(numberValue: string) {
    this.setState({
      ...this.state,
      maxValue: numberValue
    });
  }

  render() {
    const minValue: string = this.state.minValue;
    const maxValue: string = this.state.maxValue;
    const errorMsg: string = "Please enter valid ";
    const minVal: string = tryConvert(minValue) ? minValue : errorMsg + "minimum number";
    const maxVal: string = tryConvert(maxValue) ? maxValue : errorMsg + "maximum number";
    const primes: string = (tryConvert(minValue) && tryConvert(maxValue)) ? "Correct values to calculate primes" : "Can not compute primes";
    let temp: any;
    if (primes === "Correct values to calculate primes") {
      temp = <MyMath lowerValue={minVal} upperValue={maxVal} />
    }
    else {
      temp = primes;
    }

    return (
      <div>
        <h1>Prime Numbers</h1>
        <NumberInput
          scale="mini"
          nv={minValue}
          onNumberChange={this.handleMinChange} />
        <NumberInput
          scale="maxi"
          nv={maxValue}
          onNumberChange={this.handleMaxChange} />
        <p> The list of prime numbers between {minVal} and {maxVal} are: {temp}</p>
      </div>
    );
  }
}

export default Calculator;