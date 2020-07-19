
(function(){
    var counter=0;
     function namedFunctionIIFE(param) {
      console.log(param);  
        if(counter != 5) {
         counter++;
         namedFunctionIIFE(`Can be Invoked by myself: ${counter}`);
        }
      return  ​
    }
   namedFunctionIIFE('Hi, I am Named Function Expression known as IIFE');
  }())
  

  https://carbon.now.sh/ND5vTiocZyRrMo1zzVVD