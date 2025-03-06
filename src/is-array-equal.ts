import size from 'lodash.size'
import isEmpty from 'lodash.isempty'
import xorWith from 'lodash.xorwith'
import isEqual from 'lodash.isequal'

export const isArrayEqual = (x: unknown[], y: unknown[]) => size(x) === size(y) && isEmpty(xorWith(x, y, isEqual))
