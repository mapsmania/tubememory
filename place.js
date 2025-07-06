



class Place 
{
  constructor(name, pt, selected) 
  {
    this.name = name;
    this.pt = pt;
    this.selected = selected;
    
    this.overlay = null;
  }
  
  showOverlay() 
  {
      this.overlay = L.marker(this.pt, {
        icon: L.divIcon({
          className: "my-div-icon",
          html: "<div><h5>" + this.name + "</h5></div>",
        }),
      }).addTo(map);

  }
  
}
