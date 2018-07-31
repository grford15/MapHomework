const app = function() {

  let coords = [-37.776311, 144.971159];
  let ibrox = [55.853177, -4.309265];
  let zoom = 15;
  let containerID = 'main-map';

  const mainMap = new MapWrapper(containerID, coords, zoom);

  var locationButton = document.querySelector('#loc-button');
  locationButton.addEventListener('click', function(){
    mainMap.changeLocation(ibrox);
    mainMap.addMarker(ibrox);
  })

}

window.addEventListener('DOMContentLoaded', app);
