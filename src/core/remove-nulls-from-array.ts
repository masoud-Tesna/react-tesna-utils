export function removeNullsFromArray(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map((item: any) => removeNullsFromArray(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj: Record<string, any> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = removeNullsFromArray(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}