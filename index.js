// let hatPrice =100;
// console.log(`Hat price: ${hatPrice}`);
// let bootsPrice = "100";
// console.log(`Boots price: ${bootsPrice}`);


///////////////////////////////////////////////////////////////////////////////////
// let sumPrices = (...numbers) => 
//     numbers.reduce( (total, val) => 
//         total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

// let totalPrice = sumPrices(hatPrice, bootsPrice);
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

// totalPrice = sumPrices(100, 200,300);
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

// totalPrice = sumPrices(100, 200, undefined, false, "hello");
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
///////////////////////////////////////////////////////////////////////////////////


// if (hatPrice === bootsPrice) {
//     console.log("Prices are the same");
// } else {
//     console.log("Prices are different");
// }

// let totalPrice = Number(hatPrice) + Number(bootsPrice);
// console.log(`Total Price: ${totalPrice}`);

// let myVariable = "Adam";
// console.log(`Type: ${typeof myVariable}`);
// myVariable = 100;
// console.log(`Type: ${typeof myVariable}`);

// let firstCity;
// let secondCity = firstCity || "London";
// console.log(`City: ${secondCity}`);
///////////////////////////////////////////////////////////////////////////////////



// let names = ["Hat", "Boots","Gloves"];
// let prices = [];

// prices.push(100);
// prices.push("100");
// prices.push(50.25);

// console.log(`First Item: ${names[0]}: ${prices[0]}`);

// let sumPrices = (...numbers) =>
//     numbers.reduce( (total, val) => 
//     total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

// let totalPrice = sumPrices(...prices);
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

// let combinedArray = [...names, ...prices];
// combinedArray.forEach(element =>
//     console.log(`Combined Array Element: ${element}`));
///////////////////////////////////////////////////////////////////////////////////

let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100*1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price(){
        return this._price;
    },

    writeDetails: function() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }

    // writeDetails: () =>
    //     console.log(`${this.name}: ${this.price}, ${this.hat.priceIncTax}`)
};

let boots = {
    name: "Boots",
    price: "100",

    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
};

let gloves = {
    productName: "Gloves",
    price: "40"
};

// gloves.name = gloves.productName;
// delete gloves.productName;
// gloves.price = 20;

hat.writeDetails();
hat.price = 120;
hat.writeDetails();

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = "120";
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

// let propertyCheck = hat.price || 0;
// let objectAndPropertyCheck = (hat || {}).price || 0;
// console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

// let otherHat = { ...hat };
// console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

// let additionalProperties = { ...hat, discounted: true};
// console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

// let replacedProperties = { ...hat, price: 10};
// console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);

// let { price, ...someProperties } = hat;
// console.log(`Selected: ${JSON.stringify(someProperties)}`);

// let sumPrices = (...numbers) => numbers.reduce( (total, val) => 
//     total + (Number.isNaN(val) ? 0 : Number(val)));

// let totalPrice = sumPrices(hat.price, boots.price, gloves.price);
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

