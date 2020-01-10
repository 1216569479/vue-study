class Onemit {
    constructor() {
        this.callbacks = {}
    }
    $on(name, fn) {
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)
    }
    $emit(name, args) {
        if (this.callbacks[name]) {
        // console.log(this)
            console.log(this.callbacks[name])
            // console.log(args)
            this.callbacks[name].forEach(cb => cb(args))
        }
    }
}
export {
    Onemit
}