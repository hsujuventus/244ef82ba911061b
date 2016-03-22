var Pagination = {
    init: function (url, source, productId, direction, currentPage, filterType, filterStatus, keyword, orderPrice, orderLastModifyTime) {
        var pagination = {};
        pagination.url = url;
        pagination.source = source;
        pagination.productId = productId;
        pagination.direction = direction;
        pagination.currentPage = currentPage;
        pagination.filterType = filterType;
        pagination.filterStatus = filterStatus;
        pagination.keyword = keyword;
        pagination.orderPrice = orderPrice;
        pagination.orderLastModifyTime = orderLastModifyTime;
        pagination.toString = function () {
            return JSON.stringfy(pagination, Pagination);
        };
        return pagination;
    }
};
