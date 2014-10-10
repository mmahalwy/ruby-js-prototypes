/**
 * Created by mmahalwy on 2014-09-29.
 */
// appWidePrototypes
// valid variables
// ª9 º0 œq øo πp åa ßs ƒf æ' Ωz çc µm


// Array prototypes

// Methods
// #first(x) - first elements in array, x is number of elements
// #last(x) - last elements of array, x is number of elements
// #unique() - return unique elements of array
// #clean() - remove certain elements of array, great for removing undefined or empty strings
// #delete_if([x]) - delete if key or array of keys match
// #keep_if([x]) - keep if key or array of keys match
// #drop(x) - shift loop for first elements




// First element or set of elements in array
Array.prototype.first = function(length){
    if (length == null) return this[0]

    var returnArray = this
    return returnArray.splice(0,length)
}


// Last element or set of elements in array
Array.prototype.last = function(length){
    if (length == null) return this[this.length - 1]

    var returnArray = this
    return returnArray.splice(this.length - length, length)

}


Array.prototype.unique = function() {
    var key, output, value, _i, _ref, _results;
    output = {};
    for (key = _i = 0, _ref = this.length; 0 <= _ref ? _i < _ref : _i > _ref; key = 0 <= _ref ? ++_i : --_i) {
        output[this[key]] = this[key];
    }
    _results = [];
    for (key in output) {
        if ( output.hasOwnProperty(key) ) {
            value = output[key];
            _results.push(value);
        }
    }
    return _results;
}

Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
}

Array.prototype.delete_if = function(toDelete){
    var self = this

    if ( Array.isArray(toDelete) ){

        self.forEach(function(element, index, array){

            if (toDelete.indexOf(element) > -1)
                delete self[index]
//                self.splice(index, 1)
        })
    }else{
        self.forEach(function(element, index){
            if (element == toDelete){
                delete self[index]
            } else if(toDelete){

            }

        })
    }

    return self.clean(undefined)
}

Array.prototype.keep_if = function(toKeep){
    var self = this
    var newArray = []
    if ( Array.isArray(toKeep) ){

        self.forEach(function(element, index, array){

            if (toKeep.indexOf(element) > -1)
                newArray.push( self[index] )
        })
    }else{
        self.forEach(function(element, index){
            if (element == toKeep)
                newArray.push(element)
        })
    }

    return newArray
}


Array.prototype.drop = function(numberOfElements){
    for (i = 0; i < numberOfElements; i++){
        this.shift()
    }
    return this
}

// Class functions

// ::create(begin, end) - create array from number to number

Array.create = function(begin, end){
    var array = []
    for (i = begin; i < end+1; i++)
        array.push(i)

    return array
}

