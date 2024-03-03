//Looking at the concepts of abstraction using interfaces
var SamSmith = {
    name: "Sam",
    id: 9102055326083,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = SamSmith.id + "-" + SamSmith.name;
        if (SamSmith.isManager) {
            return "emply-" + uniqueId;
        }
        return uniqueId;
    },
};
console.log("sample 1: ", SamSmith.getUniqueId());
var john = {
    name: "John",
    id: 9102055326083,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = john.id + "-" + john.name;
        if (!john.isManager) {
            return "emply-" + uniqueId;
        }
        return uniqueId;
    },
};
console.log("sample 2: ", john.getUniqueId());
