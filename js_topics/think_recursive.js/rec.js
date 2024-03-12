let obj = {
    name: "Akshay",
    address: {
        personal : {
            city: "Coimbatore",
            area: "Givnur"
        },

        office : {
            city: "Pune",
            area: {
                landmark: "hyd",
                ijack : "aghcka"
            }
        }

    }
}

// for(let i in obj){
//     if(obj[i] instanceof Object){
//         for(let j in obj[i]){
//             if(obj[i][j] instanceof Object) {   
//                 for(let k in obj[i][j]){
//                     if(obj[i][j][k] instanceof Object){
//                         console.log(obj[i][j][k])
//                     }
//                 }
//             }
//         }
//     }
// }

//console.log(obj instanceof Object)


//op should be like,
// obj_name = "Akshay"
// obj_address_personal_city = "Coimbatore"
// obj_address_personal_area = "Givanur"
// obj_address_office_city = "Pune"
// obj_address_office_area_landmark = "hyd"
// obj_address_office_area_ijack = "aghcka"


function fn(objname, obj){
        let temp = objname;
        let temp2 = ""
        //console.log(temp + ":" + obj)
        for(let i in obj){
            if(obj[i] instanceof Object) fn(temp + "_" + i, obj[i]);
            else {
                temp2 = temp + "_" +i;
                console.log(temp2 + ":" + obj[i])
            }
            
        }
        return
    
}

fn("obj", obj)


//op
// obj_name:Akshay
// obj_address_personal_city:Coimbatore
// obj_address_personal_area:Givnur
// obj_address_office_city:Pune
// obj_address_office_area_landmark:hyd
// obj_address_office_area_ijack:aghcka