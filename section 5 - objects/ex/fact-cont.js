// factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    }

}

let add= createAddressAddress('a', 'b', 'c');
console.log(add);

// constructor function
function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let address = new Address('a', 'b', 'c');
console.log(address);