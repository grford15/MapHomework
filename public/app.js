const app = function() {

  let coords = [-37.813628, 144.963058];
  let coords2 = [-37.773772, 144.958497];
  let zoom = 8;
  let containerID = 'main-map';

  const mainMap = new MapWrapper(containerID, coords, zoom);

  

}

window.addEventListener('DOMContentLoaded', app);
