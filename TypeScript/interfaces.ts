//Looking at the concepts of abstraction using interfaces

interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

const SamSmith: Employee = {
  name: "Sam",
  id: 9102055326083,
  isManager: true,
  getUniqueId: (): string => {
    let uniqueId = SamSmith.id + "-" + SamSmith.name;
    if (SamSmith.isManager) {
      return "emply-" + uniqueId;
    }
    return uniqueId;
  },
};

console.log("sample 1: ", SamSmith.getUniqueId());

const john: Employee = {
  name: "John",
  id: 9102055326083,
  isManager: false,
  getUniqueId: (): string => {
    let uniqueId = john.id + "-" + john.name;
    if (!john.isManager) {
      return "emply-" + uniqueId;
    }
    return uniqueId;
  },
};

console.log("sample 2: ", john.getUniqueId());
