import Experience from '../Experience.js'
export default class World
{
    constructor()
{
// Test mesh
const testMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial()
    )
    this.scene.add(testMesh)

}
}