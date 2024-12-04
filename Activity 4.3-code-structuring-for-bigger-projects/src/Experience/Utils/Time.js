import EventEmitter from "./EventEmitter.js";
export default class Time extends EventEmitter {
  constructor() {
    tick()
    {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start
    window.requestAnimationFrame(() => {
      this.tick();
    });}}
}
