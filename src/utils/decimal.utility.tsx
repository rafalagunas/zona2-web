// Utility function to convert Prisma Decimal values to number
// Prisma Decimal comes as an object with { s, e, d } properties
export const convertDecimalToNumber = (value: any): number => {
  if (value === null || value === undefined) {
    return 0;
  }

  // If it's already a number, return it
  if (typeof value === 'number') {
    return value;
  }

  // If it's a string, parse it
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  }

  // If it's a Decimal object with s, e, d properties (Prisma Decimal format)
  if (value && typeof value === 'object') {
    // Check if it's a Decimal object
    if ('d' in value && Array.isArray(value.d)) {
      const d = value.d || [];
      const e = value.e || 0;
      const s = value.s !== undefined ? value.s : 1;
      
      // Build the number from the decimal array
      if (d.length === 0 || (d.length === 1 && d[0] === 0)) {
        return 0;
      }
      
      let numStr = d.join('');
      
      // Handle exponent
      if (e !== 0) {
        const decimalPoint = numStr.length + e;
        if (decimalPoint > 0 && decimalPoint < numStr.length) {
          numStr = numStr.slice(0, decimalPoint) + '.' + numStr.slice(decimalPoint);
        } else if (decimalPoint <= 0) {
          numStr = '0.' + '0'.repeat(-decimalPoint) + numStr;
        } else if (decimalPoint >= numStr.length) {
          numStr = numStr + '0'.repeat(decimalPoint - numStr.length);
        }
      }
      
      const num = parseFloat(numStr) * s;
      return isNaN(num) ? 0 : num;
    }
    
    // If it's a BigInt (for Z2TotalHistorico)
    if (typeof value === 'bigint' || (typeof value === 'string' && /^\d+n?$/.test(value))) {
      const bigIntValue = typeof value === 'bigint' ? value : BigInt(value.replace('n', ''));
      return Number(bigIntValue);
    }
  }

  return 0;
};

