const unidade = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unidade.indexOf(fromUnit);
  const toIndex = unidade.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}