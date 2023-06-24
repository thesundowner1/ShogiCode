function shogi(str) 
{
  let encStr;
  let strArr = [];
  let encStrArr = [];
	let char;

  strArr = str.split("");
  for (i = 0 ; i < strArr.length; i++)
    { 
       switch(strArr[i])
				 {
					 case "a":
						 char = "0000";
					 break;
					 case "b":
						 char = "0001";
					 break;
					 case "c":
						 char = "0002";
					 break;


					 default:
						 char = "9999";
						 break;
						
						 
				 }
		 encStrArr.push(char);
			console.log(encStrArr);
			
    }
  


  

}
