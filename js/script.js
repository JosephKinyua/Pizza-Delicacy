function pizzaDelicacy(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.tops = topping;
}
pizzaDelicacy.prototype.firstChoicePizza = function() {
    return this.type + " . Outermost layer is a crust of your choice and topping of your choice";
};

function Cost(price, count, delivery) {
    this.price = price;
    this.count = count;
    this.delivery = delivery;

};
Cost.prototype.firstCost = function() {
    return this.price * this.count + this.delivery;
};
var pizzaPrices = [1100, 900, 750];
var crustingCost = [100, 80, 55];
var toppingCost = [80, 60, 40];
var deliveryCost = [250, 0];