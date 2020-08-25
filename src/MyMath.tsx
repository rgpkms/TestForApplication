import React from 'react';
class MyMath extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.getPrimes = this.getPrimes.bind(this);
    this.getSinglePrime = this.getSinglePrime.bind(this);
  }
  getSinglePrime(numb: number) {
    let upperBound: number = Math.floor(Math.sqrt(numb));
    let i: number;
    for (i = 2; i <= upperBound; i++) {
      if (numb % i == 0) {
        return false;
      }
    }
    return true;
  }

  getPrimes(minValue: string, maxValue: string) {
    const lb: number = parseFloat(minValue);
    const ub: number = parseFloat(maxValue);
    let i: number = 0;
    const primeArray: number[] = [];
    for (i = lb; i <= ub; ++i) {
      const booleanValue: boolean = this.getSinglePrime(i);
      if (booleanValue && i != 0 && i!= 1) {
        primeArray.push(i);
      }
    }
    var outPut: string = primeArray.join(' ');
    return outPut;
  }
  render() {
    const lowerValue: string = this.props.lowerValue;
    const upperValue: string = this.props.upperValue;
    const primes: string = this.getPrimes(lowerValue, upperValue);
    return (
      <div>
        <p> The result of computation:
          <br></br>
          {primes}</p>
      </div>
    );
  }
}
export default MyMath;