var Notification = {
    init: function (objectId, url, accountId) {
        var notification = {};
        notification.objectId = objectId;
        notification.url = url;
        notification.accountId = accountId;
        notification.toString = function () {
            return JSON.stringfy(objectId, notification, Notification);
        };
        return notification;
    }
};
