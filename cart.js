///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) = {
   return(cartTotal + (tax * cartTotal) - couponValue)
}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
// I made one of the properties income level, since this reveals how much money, on average, customers are willing to spend,
and thus what types of food should be prepared. I chose common food allergy and common medical condition as properties, since 
these properties reveal certain dietary restrictions customers might have, and therefore what precautions the restaurant should
take and what food it should avoid preparing. I chose the property of average hours spent each day on eating, since this reveals
how much time customers will be willing to spend at a restaurant, which is key information in determining what type of restaurant 
to be. For instance, if the customers spent little time eating food each day, the restaurant should consider becoming proficient in
fast food.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    'Income Level': 'Rich',
    'Common Food Allergy': 'Peanuts',
    'Common Medical Condition': 'Diabetes',
    'Average Hours Spent each Day on Eating': 2,
}
