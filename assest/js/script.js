const cities = [
    ["Karachi", "Pakistan", "Sindh"],
    ["Lahore", "Pakistan", "Punjab"],
    ["Islamabad", "Pakistan", "Capital"],
    ["Sialkot", "Pakistan", "Punjab"],
    ["New York", "USA", "New York"],
    ["Los Angeles", "USA", "California"],
    ["Chicago", "USA", "Illinois"],
    ["Houston", "USA", "Texas"],
    ["Toronto", "Canada", "Ontario"],
    ["Vancouver", "Canada", "British Columbia"],
    ["Montreal", "Canada", "Quebec"],
    ["London", "UK", "England"],
    ["Manchester", "UK", "England"],
    ["Birmingham", "UK", "England"],
    ["Paris", "France", "Île-de-France"],
    ["Berlin", "Germany", "Berlin"],
    ["Munich", "Germany", "Bavaria"],
    ["Rome", "Italy", "Lazio"],
    ["Milan", "Italy", "Lombardy"],
    ["Tokyo", "Japan", "Tokyo Metropolis"],
    ["Osaka", "Japan", "Kansai"],
    ["Sydney", "Australia", "New South Wales"],
    ["Melbourne", "Australia", "Victoria"],
    ["Brisbane", "Australia", "Queensland"],
    ["Beijing", "China", "Beijing Municipality"],
    ["Shanghai", "China", "Shanghai Municipality"],
    ["Delhi", "India", "Delhi"],
    ["Mumbai", "India", "Maharashtra"],
    ["Dubai", "UAE", "Dubai"],
    ["Abu Dhabi", "UAE", "Abu Dhabi"],
    ["Moscow", "Russia", "Moscow"],
    ["Saint Petersburg", "Russia", "Leningrad"],
    ["Bangkok", "Thailand", "Bangkok"],
    ["Seoul", "South Korea", "Seoul"],
    ["Singapore", "Singapore", "Central Region"]
];


function searchCities(){
const inputCities = document.getElementById('Search').value.trim().toLowerCase();

let found = false;

for(let i=0; i<cities.length; i++){
if(cities[i][0].toLowerCase() === inputCities){
document.getElementById('display').innerHTML =`City: ${cities[i][0]}, Country: ${cities[i][1]}, Region: ${cities[i][2]}`;

found = true;
break;

}
}if (!found){
document.getElementById('display').innerHTML =  "City Not Found";
}
}
