const unitss = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitss.indexOf(fromUnit);
  const toIndex = unitss.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}