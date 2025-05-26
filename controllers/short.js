let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function short_id(length){
let pass = "";
  for(let i=0;i<length;i++){
    let index = Math.floor(Math.random()*str.length + 1)
    pass += str[index]
  }
  return pass;
}

export {short_id}
