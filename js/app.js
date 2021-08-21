function setPrice(id,extra){
    const extraMemory = document.getElementById(id);
    extraMemory.innerText = extra;
    const totalCost = calcTotal();
    const totalPrice = document.getElementById('total-cost');
    totalPrice.innerText = totalCost;
    const finalPrice = document.getElementById('final-price');
    finalPrice.innerText = totalCost;
}
        // total price calculation
function takeValue(id){
    const value = document.getElementById(id).innerText;
    const numberValue = parseInt(value);
    return numberValue;
}
function calcTotal(){
const baseCost = takeValue('base-cost');
const memoryCost = takeValue('memory-cost');
const storageCost = takeValue('storage-cost');
const deliveryCost = takeValue('delivery-cost');
const totalCost = baseCost + memoryCost + storageCost + deliveryCost;
return totalCost;
}

        // Click handler

document.getElementById('memory-8gb').addEventListener('click', function(){
    setPrice('memory-cost',0);
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    setPrice('memory-cost',180);
})
document.getElementById('storage-256bg').addEventListener('click', function(){
    setPrice('storage-cost',0);
})
document.getElementById('storage-512bg').addEventListener('click', function(){
    setPrice('storage-cost',100);
})
document.getElementById('storage-1tb').addEventListener('click', function(){
    setPrice('storage-cost',180);
})
document.getElementById('late-delivery').addEventListener('click', function(){
    setPrice('delivery-cost',0);
})
document.getElementById('fast-delivery').addEventListener('click', function(){
    setPrice('delivery-cost',20);
})
        // Apply Promo code and set total 

document.getElementById('apply-btn').addEventListener('click', function(){
    const inputFiled = document.getElementById('promo-filed');
    const inputValue = inputFiled.value;
    const finalPrice = document.getElementById('final-price')
    if(inputValue.toLowerCase() == 'stevekaku'){
        const totalCost = calcTotal();
        const discount = Math.floor((totalCost/100) * 20);
        const discountPrice = totalCost - discount;
        finalPrice.innerText = discountPrice;
        inputFiled.value = '';
    }
})