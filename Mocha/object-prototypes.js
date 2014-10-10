// Object prototypes




// Iterates through array or JSON object
Object.prototype.eachDo = function(callback){
    if( Array.isArray(this) ){
        for (i = 0; i < this.length + 1; i++){
            if (this.hasOwnProperty(i) ) {
                callback(this[i])
            }
        }
    }
    else if (this instanceof Object){
        for (i in this){
            if (this.hasOwnProperty(i) ){
                callback(i, this[i])
            }

        }

    }
}


// Returns the keys in a JSON
Object.prototype.keys = function(){
    var keysArray = []
    for (i in this){
        if (this.hasOwnProperty(i)){

            keysArray.push(i)
        }

    }
    return keysArray
}


// Returns the values in a JSON
Object.prototype.values = function(){
    var valuesArray = []
    for (i in this){
        if (this.hasOwnProperty(i)){

            valuesArray.push(this[i])
        }

    }
    return valuesArray
}


// Check to see if JSON includes a key
Object.prototype.has_key = function(key){
    var keys = this.keys()
    return keys.indexOf(key) > -1
}

// Check to see if JSON includes a key
Object.prototype.include = Object.prototype.has_key

// Check if JSON has a value
// This is not a nested value though
Object.prototype.has_value = function(value){
    var values = this.values()
    return values.indexOf(value) > -1
}

Object.prototype.values_at = function (){
    var keys = Array.prototype.slice.call (arguments),
        valuesArray = [],
        self = this

    keys.eachDo(function(key){
        valuesArray.push( self[key] )
    })

    return valuesArray

}

// Determine the length of a JSON
Object.prototype.length = function(){
    return this.keys().length
}

// Merging two JSONs
Object.prototype.merge = function(json){

    for (var key in json)
        if ( json.hasOwnProperty(key) ){
            this[key] = json[key];
        }
    return this
}


// Boolean if JSONs are equal
Object.prototype.isEqual = function(otherJSON){
    // detect if the keys are different
    if(this.keys().length != otherJSON.keys().length){
      return false
    }

    // keys have the same values
    for (var key in this){
        if( this.hasOwnProperty(key) ){
            if( this[key] != otherJSON[key]){
                return false
            }
        }
    }
    return true
}

