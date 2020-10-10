function compare(log1, log2) {
  const split1 = log1.split(" ");
  const split2 = log2.split(" ");
  const isDigit1 = isDigit(split1[1][0]);
  const isDigit2 = isDigit(split2[1][0]);

  if(!isDigit1 && !isDigit2) {
      return letterSort(split1,split2);
  }

  if (!isDigit1 && isDigit2) {
      return -1;
  } else if (isDigit1 && !isDigit2) {
      return 1;
  } else {
      return 0;
  }
}

function letterSort(split1,split2) {
    const min = Math.min(split1.length, split2.length);
    for(let i = 1; i < min; i++) {
        if (split1[i] < split2[i]) {
             return -1;
         } else if (split1[i] > split2[i]) {
             return 1;
         }
    }
   if(split1.length < split2.length) {
       return -1;
   }else if(split2.length < split1.length) {
       return 1;
   }
   return split1[0] < split2[0] ? -1 : 1;
}

function isDigit(character) {
  var re = /^\d$/;
  return re.test(character);
}