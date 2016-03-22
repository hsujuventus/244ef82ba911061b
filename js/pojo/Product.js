var Product = {
    init: function (productId, name, description, price, inventory) {
        var product = {};
        product.productId = productId;
        product.name = name;
        product.description = description;
        product.price = price;
        product.inventory = inventory;
        product.toString = function () {
            return JSON.stringfy(product, Product);
        };
        return product;
    }
};


