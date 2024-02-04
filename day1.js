function minMax(input){
    return [Math.max(...input),Math.min(...input)]
}
function addUp(target){
  Array(target).fill(null).map((_,i)=>i+1).reduce((accumulator,currentValue)=>{
    return currentValue+accumulator
})
}

function shiftToleft(num,count){
    return num*Math.pow(2,count)
}
function largestSwap(val){
  return val.toString().split("").sort((a,b)=>parseInt(a)-parseInt(b)).reverse().join("")==val
}

function getTime(){
   let match=test.match(/\b([0-1][0-9]|2[0-3])\:[0-5][0-9](?=[^0-9]{0,1})/)
if (match){
    return (match)[0]
}
}


