function firstPlace(road) {
    if (road == ""){
     return "No road available"
    }
    // if (road !== road.match(/[A-Z]/gi)){
    //   return "No car available"
    //   }
    
    let re = /([=]*)[A-Z]+([=]*)[A-Z]*/gi;

    if (road !== road.match(re)){
        return "No car available"
        }
    else return road.split("").filter(x => x !== "=").pop()
    
   }

   let str = prompt('Type string?', '');
//    alert(firstPlace("=====g"))
   alert(firstPlace(str))