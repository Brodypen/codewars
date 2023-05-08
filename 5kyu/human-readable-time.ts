// export function humanReadable(seconds:number):string {
//   const quickMaths = () => {
//       let number = seconds%60;
//       seconds = (seconds-number)/60;
//       if(number >= 10){
//         return number.toString();
//       }
//       return `0${number.toString()}`;
//   }
//   let SS = quickMaths();
//   let MM = quickMaths();
//   let HH = "0"
//   if(seconds >= 10){
//      HH = seconds.toString();
//   } else {
//      HH = `0${seconds.toString()}`
//   }
  
  
//   return `${HH}:${MM}:${SS}`
// }
// Is okay, but there are cleaner solutions!
export function humanReadable(seconds:number):string {
  const minutes = Math.floor(seconds / 60)

  const onlySeconds = seconds % 60
  const onlyMinutes = minutes % 60
  const onlyHours = Math.floor(minutes / 60)
  
  return [onlyHours, onlyMinutes, onlySeconds].map(formatTime).join(':')
}

const formatTime = (time: number) :string => time >= 10 ? time.toString() : `0${time}`
// This solution! 
// YOU CAN ALSO DO THIS FOR FORMAT
const format = (n: number) => String(Math.floor(n)).padStart(2, "00");