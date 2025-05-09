type AnyObject = {
  [key: string]: any
};
type AnyArray = any[];

export function removeEmptyKeys(obj: AnyObject | AnyArray): AnyObject | AnyArray {
  if (Array.isArray(obj)) {
    return obj.map(item => {
      const cleanedItem = removeEmptyKeys(item);

      // اگر cleanedItem یک آبجکت است و خالی است، یک آبجکت خالی برگردانید
      if (typeof cleanedItem === 'object' && !Array.isArray(cleanedItem) && Object.keys(cleanedItem).length === 0) {
        return {};
      }

      return cleanedItem;
    });
  } else if (obj && typeof obj === 'object') {
    const filteredObject = Object.entries(obj).filter(([key, value]) => {
      if (typeof value === 'string') {
        return value !== '';
      }
      return value !== null && value !== undefined && !(typeof value === 'object' && Object.keys(value).length === 0);
    }).reduce((acc: AnyObject, [key, value]) => {
      acc[key] = removeEmptyKeys(value);
      return acc;
    }, {});

    return filteredObject;
  }
  return obj;
}
