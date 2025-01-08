import { Product,taxCalculation} from "./06-funtions-destructuration"

const shoppingCart: Product []= [
    {description: "Nokia",
        price: 100
    }
    ,
    {description: "iPad",
        price: 150
    }
]

// tax= 0,15

const [total, tax] = taxCalculation({products: shoppingCart, tax: 0.15})

console.log("Total", total);
console.log("Tax", tax);