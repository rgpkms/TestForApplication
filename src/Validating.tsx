 function   tryConvert(numb: string) {
    const input: any = parseFloat(numb);
    if (Number.isNaN(input)) {
      return false;
    }
    return true;
  }
export default tryConvert;