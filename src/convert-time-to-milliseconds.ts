type TTimeUnit =
  /*second*/
  | 's'
  /*minutes*/
  | 'm'
  /*hour*/
  | 'h'

const timeConverter = {
  s: (time: number): number => time * 1000,
  m: (time: number): number => timeConverter.s(time * 60),
  h: (time: number): number => timeConverter.m(time * 60),
}

export const convertTimeToMilliseconds = (time: number, unit: TTimeUnit): number => {
  const convert = timeConverter[unit]
  if (!convert) {
    throw new Error(`Invalid time unit: ${unit}`)
  }
  return convert(time)
}
