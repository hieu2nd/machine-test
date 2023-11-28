const fs = require('fs');
const a = [
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,188"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "31,399,000",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,000",
    "area": "6,340"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,000",
    "area": "1,521"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "21,042,000",
    "area": "603"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,076,000",
    "area": "1,085"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "19,579,000",
    "area": "306"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "19,411,000",
    "area": "1,485"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,000",
    "area": "2,720"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,000",
    "area": "1,362"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,000",
    "area": "8,231"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,000",
    "area": "2,063"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,491,000",
    "area": "203"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,417,000",
    "area": "1,886"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "1,135"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,000",
    "area": "1,171"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,000",
    "area": "1,475"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,000",
    "area": "1,182"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,000",
    "area": "3,843"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "13,026,000",
    "area": "1,953"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,339,000",
    "area": "709"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,537,000",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,784,000",
    "area": "4,038"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,000",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "9,304,000",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "10,786,000",
    "area": "1,568"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,398,748",
    "area": "1,213"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "8,426,000",
    "area": "2,061"
  },
  {
    "name": "Shijiazhuang",
    "country": "China",
    "population": "10,163,000",
    "area": "15,722"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,392,000",
    "area": "1,104"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,354,000",
    "area": "243"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "7,052,000",
    "area": "641"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "6,506,000",
    "area": "1,913"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,000",
    "area": "719"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "population": "7,144,000",
    "area": "204"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,445,000",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,182,981",
    "area": "604"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "population": "2,873,494",
    "area": "1,285"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "2,138,551",
    "area": "105"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "population": "1,897,491",
    "area": "414"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "population": "664,046",
    "area": "412"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "population": "433,688",
    "area": "2,455"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "population": "5,230,330",
    "area": "1,580"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "population": "2,731,571",
    "area": "630"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "population": "3,990,456",
    "area": "1,302"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "population": "2,705,994",
    "area": "606"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "population": "1,450,381",
    "area": "310"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "population": "613,288",
    "area": "88"
  }, {
    "name": "Tokyo",
    "country": "Japan",
    "population": "37,833,000",
    "area": "2,187"
  },
  {
    "name": "Delhi",
    "country": "India",
    "population": "30,290,936",
    "area": "1,484"
  },
  {
    "name": "Shanghai",
    "country": "China",
    "population": "27,058,480",
    "area": "6,340.5"
  },
  {
    "name": "Sao Paulo",
    "country": "Brazil",
    "population": "22,043,028",
    "area": "1,521"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "population": "21,782,378",
    "area": "1,485"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "20,484,965",
    "area": "528"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "population": "20,411,274",
    "area": "603.4"
  },
  {
    "name": "Beijing",
    "country": "China",
    "population": "20,384,000",
    "area": "6,336"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "population": "20,283,552",
    "area": "360.6"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "population": "19,165,340",
    "area": "2,722"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "population": "16,093,786",
    "area": "3,780"
  },
  {
    "name": "Chongqing",
    "country": "China",
    "population": "15,872,179",
    "area": "8,230"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "population": "15,029,231",
    "area": "5,461"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "population": "14,919,530",
    "area": "2,780"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "population": "14,850,066",
    "area": "185"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "population": "14,368,332",
    "area": "1,171"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "population": "14,342,000",
    "area": "9,965"
  },
  {
    "name": "Manila",
    "country": "Philippines",
    "population": "13,923,452",
    "area": "16.56"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "population": "13,458,075",
    "area": "1,221"
  },
  {
    "name": "Guangzhou",
    "country": "China",
    "population": "13,301,532",
    "area": "3,843.43"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "population": "12,642,000",
    "area": "1,772"
  },
  {
    "name": "Shenzhen",
    "country": "China",
    "population": "12,528,300",
    "area": "1,996.64"
  },
  {
    "name": "Bangalore",
    "country": "India",
    "population": "12,326,532",
    "area": "741"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "population": "12,197,596",
    "area": "2,511"
  },
  {
    "name": "Tianjin",
    "country": "China",
    "population": "12,149,000",
    "area": "11,760"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "population": "10,770,487",
    "area": "664"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "population": "10,426,452",
    "area": "1,572"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "population": "9,751,717",
    "area": "2,672.3"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "population": "8,280,925",
    "area": "605.7"
  },
  {
    "name": "New York City",
    "country": "United States",
    "population": "8,175,133",
    "area": "783.8"
  },
  {
    "name": "Chennai",
    "country": "India",
    "population": "8,177,000",
    "area": "426"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,878,783",
    "area": "1,587"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "population": "7,749,334",
    "area": "650"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "population": "7,734,614",
    "area": "308.5"
  },
  {
    "name": "Hong Kong",
    "country": "China",
    "population": "7,448,900",
    "area": "1,106"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "population": "7,396,000",
    "area": "2,095.6"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "population": "7,352,000",
    "area": "464"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "population": "7,200,000",
    "area": "243"
  },
  {
    "name": "Paris",
    "country": "France",
    "population": "7,148,286",
    "area": "105.4"
  },
  {
    "name": "Bogota",
    "country": "Colombia",
    "population": "7,102,602",
    "area": "1,775"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "population": "5,638,676",
    "area": "721.5"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "population": "5,188,286",
    "area": "1,913"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "population": "5,278,044",
    "area": "641"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "population": "5,281,579",
    "area": "1,439"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "population": "5,150,072",
    "area": "2,516"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "population": "3,748,148",
    "area": "891.8"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "population": "3,223,334",
    "area": "604.3"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "population": "2,189,878",
    "area": "15,826"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "population": "934,243",
    "area": "2,790"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "population": "4,397,073",
    "area": "696"
  },
]
const images=[
  'https://burst.shopifycdn.com/photos/city-landscape-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0',
  'https://burst.shopifycdn.com/photos/highway-tail-light-streaks.jpg?width=1000&format=pjpg&exif=0&iptc=0',
  'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D'
]
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac nisi at erat malesuada accumsan quis aliquam tellus. Mauris lacinia sapien ut magna molestie convallis ut sit amet elit. Suspendisse potenti. Suspendisse iaculis varius pharetra. Praesent at orci eget ipsum posuere tristique.`
const jsonWithId = a.map((item, index) => ({ ...item, id: index + 1,images,description }));

const jsonString = JSON.stringify(jsonWithId, null, 2);

fs.writeFileSync('output.json', jsonString);