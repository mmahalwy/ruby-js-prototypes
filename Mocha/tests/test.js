/**
 * Created by mmahalwy on 2014-09-29.
 */

require('../array-prototypes.js')
require('../object-prototypes.js')

var assert = require("assert")
var expect = require('chai').expect;

describe("Array", function(){
    describe("first", function(){
        it("should output first element in the array", function(){
            assert.equal(1, [1,2,3].first());
        })
    })

    describe("first elements", function(){
        it("should output first elements in the array", function(){
            var result = [1,2,3].first(2)
            // Note that you should do JSON.stringify because array equality does not work
            // in javascript
            expect(JSON.stringify(result)).to.equal(JSON.stringify([1,2]))
        })
    })

    describe("last", function(){
        it("should output last element in the array", function(){
            assert.equal(3, [1,2,3].last())
        })
    })

    describe("last elements", function(){
        it("should output last elements in the array", function(){
            assert.equal(JSON.stringify( [2, 3] ), JSON.stringify( [1,2,3].last(2) ) )
        })
    })

    describe("unique elements ", function(){
        it("should return the unique elements of an array", function(){
            var result = [ 1, 2, 3, 4, 5, 6, 'a', 'b', 'd', 'c' ]
            expect(result).to.eql([1,1,2,2,2,3,4,5,6,6,6,"a","a","b","d","b","c"].unique())
        })
    })

    describe("create", function(){
        it("should create an array from beginning to end number", function(){
            var result = [ 1, 2, 3, 4, 5, 6]
            var ops = Array.create(1,6)
            expect(result).to.eql(ops)

        })
    })

    describe("delete if", function(){
        it("should delete if array element matches to be deleted", function(){
            var result = [1,2,3,4,5]
            expect(result).to.eql([1,2,3,4,5,6].delete_if(6))

            var result = [1,2,3]
            expect(result).to.eql([1,2,3,4,5,6].delete_if([4,5,6]))

//            var result = [{name: "layan", age: 24}]
//            expect(result).to.eql([{name: "layan", age: 24}, {name: "mohamed", age: 23}].delete_if({name: "mohamed", age: 23}))
        })
    })

    describe("keep if", function(){
        it("should keep if array element matches to be kept", function(){
            var result = [1]
            expect(result).to.eql([1,2,3,4,5,6].keep_if(1))

            var result = [1,2,3]
            expect(result).to.eql([1,2,3,4,5,6].keep_if([1,2,3]))
        })
    })

    describe("drop", function(){
        it("should remove the number of first elements in array", function(){
            var result = [4,5,6]
            expect(result).to.eql([1,2,3,4,5,6].drop(3))
        })
    })

})



describe("Objects", function(){
    describe("keys", function(){
        it("should output all the keys to the object", function(){
            var result = ["name", "age"]
            expect(JSON.stringify( result )  ).to.equal( JSON.stringify( {name: "mohamed", age: 23}.keys() ) )
        })
    })

    describe("values", function(){
        it("should output all the keys to the object", function(){
            var result = ["mohamed", 23]
            expect(JSON.stringify( result )  ).to.equal( JSON.stringify( {name: "mohamed", age: 23}.values() ) )
        })
    })

    describe("has key", function(){
        it("should return boolean whether an object has a given key", function(){
            var result = {name: "mohamed", age: 23}.has_key("name")
            expect(result).to.be.true
        })
    })

    describe("has value", function(){
        it("should return boolean whether an object has a given value", function(){
            var result = {name: "mohamed", age: 23}.has_value("mohamed")
            expect(result).to.be.true
        })
    })

    describe("includes?", function(){
        it("should return boolean whether an object has a given key", function(){
            var result = {name: "mohamed", age: 23}.include("name")
            expect(result).to.be.true
        })
    })

    describe("length", function(){
        it("should return the length of a JSON / object", function(){
            var result = {name: "mohamed", age: 23, location: "SF", height: "6'3"}.length()
            expect(result).to.equal(4)
        })
    })

    describe("merge", function(){
        it("should merge two JSONs together into one", function(){
            var result = {name: "mohamed"}.merge({age: 23})
            expect(result).to.eql({name: "mohamed", age: 23})
        })
    })

    describe("is equal", function(){
        it("should return boolean whether two json objects are the same", function(){
            var result = {name: "mohamed", age: 23}.isEqual({name: "mohamed", age: 23})
            expect(result).to.be.true

            var result = {name: "mohamed", age: 23}.isEqual({name: "mohamed", age: 23, location: "SF"})
            expect(result).to.be.false
        })
    })

    describe("values at", function(){
        it("should return the values at a list of keys", function(){
            expect(
                {name: "mohamed", age: 23, location: "SF"}.values_at("name", "age")
                .isEqual(
                    ["mohamed", 23]
                )
            ).to.be.true
        })
    })
})
