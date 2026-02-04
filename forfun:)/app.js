function orderfood(order){
    let message ; 
    switch (order) {
        case 'pitzza':
            message = 'سفارش پیتزا است'
            break;
            case 'salad':
            message = 'سفارش سالاد است'
            break;
            case 'hanber':
            message = 'سفارش هنبر است'
            break;
            case 'falafel':
            message = 'سفارش فلافل است'
            break;        
    
        default:
            message = "غذا موجود نیست"
            break;
    }
    return message;
}
function placeorder() {
    console.log("start")
    const selectinput = document.getElementById('fodemenu').value;
    console.log("step1")
    const result =orderfood(selectinput)
    console.log("step2")
    document.getElementById('result').innerHTML = result
}