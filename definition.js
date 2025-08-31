var aircraft = {
  model: "f9f_gear_down.gltf",
  mass: 8000,                  // Average between empty and max
  wingArea: 31.6,              // From XML
  dragFactor: 0.025,           // From XML
  engine: {
    type: "jet",
    thrust: 27000              // From XML
  },
  cockpitView: {
    x: 0.0,
    y: 1.2,
    z: 2.5                     // From XML cockpit view
  },
  gear: {
    retractable: false         // No animation yet
  },
  lights: {
    landing: false,
    nav: false
  }
};