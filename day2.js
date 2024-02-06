function countTrue(list){
  return list.filter((x)=>x==true).length
}

function redundant(input){
  return ()=>{
      return input
  }
  }
function num_of_digits(input){
    return Array.from((input).toString()).filter((x)=>x.match(/\d/)).length
}
function arrayOfMultiples(num,len){
    return Array(len).fill().map((e,i)=>(i+1)*num)
}
function concat(...arrays){

    return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue) ,
  [],)
}
