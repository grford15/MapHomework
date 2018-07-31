const MapWrapper = function(container, coords, zoom){

    const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

    this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);

    // this.map.on('click', function(event){
    //   let latlng = [event.latlng.lat, event.latlng.lng];
    //   this.addMarker(latlng);
    // }.bind(this));

  MapWrapper.prototype.addMarker = function (coords) {
    L.marker(coords).addTo(this.map)
  };

  MapWrapper.prototype.changeLocation = function(coords){
    this.map.panTo(coords);
  };


}
