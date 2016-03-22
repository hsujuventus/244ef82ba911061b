var Property = {
    init: function (name, description, isPrivate) {
        var property = {};
        property.propertyId = -1;
        property.name = name;
        property.description = description;
        property.isPrivate = isPrivate;
        property.toString = function () {
            return JSON.stringfy(property, Property);
        };
        return property;
    }
};