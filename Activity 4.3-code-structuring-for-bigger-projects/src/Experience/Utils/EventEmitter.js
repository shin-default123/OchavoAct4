export default class EventEmitter
{
constructor()
{
this.callbacks = {}
this.callbacks.base = {}
}
on(_names, callback)
{
// Errors
if(typeof _names === 'undefined' || _names === '')
{
console.warn('wrong names')
return false
}
if(typeof callback === 'undefined')
{
console.warn('wrong callback')
return false
}
// Resolve names
const names = this.resolveNames(_names)
// Each name
names.forEach((_name) =>
{
// Resolve name
const name = this.resolveName(_name)
// Create namespace if not exist
if(!(this.callbacks[ name.namespace ] instanceof Object))
this.callbacks[ name.namespace ] = {}
// Create callback if not exist
if(!(this.callbacks[ name.namespace ][ name.value ] instanceof
Array))
this.callbacks[ name.namespace ][ name.value ] = []
// Add callback
this.callbacks[ name.namespace ][ name.value ].push(callback)
})
return this
}

}