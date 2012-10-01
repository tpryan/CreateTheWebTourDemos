function getHomeLocation() {
  var results = {};
  results.lat = localStorage.getItem('lat');
  results.lon = localStorage.getItem('lon');
  return results;
}