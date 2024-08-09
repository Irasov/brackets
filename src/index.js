module.exports = function check(str, bracketsConfig) {
  let open = []; 
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++ ){
      if(str[i] == bracketsConfig[j][0]){
        if(open.length != 0) {
          if(open[open.length-1][1] != str[i]){
            open.push(bracketsConfig[j]);
          } else if(str[i] == bracketsConfig[j][1]) {
            if(open.length != 0){
              if (open[open.length-1][1] == str[i]){
                open.pop();
             } else {
                return false;
              }
           } else {
              return false;
            }
          }
        } else if(open.length == 0) {
          open.push(bracketsConfig[j]);
        }
      } else if(str[i] == bracketsConfig[j][1]) {
        if(open.length != 0){
          if (open[open.length-1][1] == str[i]){
            open.pop();
         } else {
            return false;
          }
       } else {
          return false;
        }
      }
    }
  }
  if(open.length == 0) {
    return true;
  } else {
    return false;
  }
}
