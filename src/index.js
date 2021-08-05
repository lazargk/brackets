
function check(str, bracketsConfig) {
  // your solution
  if ((0 != str.length % 2) || (str.length <= 1)) {
    return false;
  }

  let a = str.split('');
  let isNext = true;
  while ((a.length > 0) && (isNext)){
    isNext = false;

    for(let i=0; i < a.length-1; i++ ){
      for(let pair of bracketsConfig){
        if ((a[i] == pair[0]) && (a[i+1] == pair[1])) {
          a.splice(i, 2);
          isNext = true;
          break;
        }
      }
      if(isNext) {
        break;
      }
    }

  }
  return (0 == a.length)
  
}

module.exports =  check;




const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


check('()', config1);