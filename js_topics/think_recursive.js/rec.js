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

//op should be like,
// obj_name = "Akshay"
// obj_address_personal_city = "Coimbatore"
// obj_address_personal_area = "Givanur"
// obj_address_office_city = "Pune"
// obj_address_office_area_landmark = "hyd"
// obj_address_office_area_ijack = "aghcka"