const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations){
  let goodStation = [];
  for (let i = 0; i < stations.length; i++){
    let place = stations[i];
    if(place[1] >= 20 && (place[2] === "school" || place[2] === "community centre")){ goodStation.push(place[0]); }
  }
  return goodStation;
}
console.log(chooseStations(stations));
