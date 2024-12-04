import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import * as THREE from "three";
import Camera from "./Camera.js";

let instance = null;
export default class Experience {
  constructor(canvas) {
    {
      // ...
      // Time tick event
      this.time.on("tick", () => {
        this.update();
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera(this);

        if (instance) {
          return instance;
        }
        instance = this;
      });
    }
    // ...
    this.resources = new Resources(sources)
    this.scene = new THREE.Scene();
    this.resources = new Resources();
    update();
    {
      this.camera.update();
      this.renderer.update();
    }
    this.renderer = new Renderer();
  }
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  
}
