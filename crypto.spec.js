
const expect = require('chai').expect

describe("the Ceaser's cypher", () => {

    it("converts an 'a' to a 'b' when shifting by 1", () => {
        expect(encrypt('a', 1)).to.be.equal('b')
    })

    it("converts a 'b' to a 'c' when shifting by 1", () => {
        expect(encrypt('b', 1)).to.be.equal('c')
    })

    it("converts 'aa' to 'bb' when shifting by 1", () => {
        expect(encrypt('aa', 1)).to.be.equal('bb')
    })

    it("converts a 'z' to an 'a' when shifting by 1", () => {
        expect(encrypt('z', 1)).to.be.equal('a')
    })

    it("converts an 'A' to a 'B' when shifting by 1", () => {
        expect(encrypt('A', 1)).to.be.equal('B')
    })

    it("converts a 'Z' to an 'A' when shifting by 1", () => {
        expect(encrypt('Z', 1)).to.be.equal('A')
    })

    it("converts an 'a' to an 'a' when shifting by 26", () => {
        expect(encrypt('a', 26)).to.be.equal('a')
    })

    it("converts an 'a' to an 'a' when shifting by 2x26", () => {
        expect(encrypt('a', 2 * 26)).to.be.equal('a')
    })

})

function encrypt(message="", shift=0) {

    let a_code = "a".charCodeAt(0)
    let A_code = "A".charCodeAt(0)
    let Z_code = "Z".charCodeAt(0)
    let z_code = "z".charCodeAt(0)

    shift = shift % 26

    let result = ""
    for (let i = 0; i < message.length; i++) {

        let char = message.charAt(i)
        let charCode = message.charCodeAt(i)

        let offBy = 0
        if (isUpper(char)) {
            offBy = charCode + shift - Z_code
        } else {
            offBy = charCode + shift - z_code
        }

        if (offBy > 0 && isUpper(char)) {
            result += String.fromCharCode(A_code + offBy - 1)
        } else if (offBy > 0){
            result += String.fromCharCode(a_code + offBy - 1)
        } else {
            result += String.fromCharCode(charCode + shift)
        }
    }
    return result
}

function isUpper(char="") {
    return char === char.toUpperCase()
}