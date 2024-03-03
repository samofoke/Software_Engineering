// I have to sum up to index in an array

const twoSum = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let com = target - nums[i];

    if (map[com] !== undefined) {
      return [map[com], i];
    }
    map[nums[i]] = i;
  }
  return [];
};

console.log("test: ", twoSum([2, 7, 11, 15], 9));
console.log("test2: ", twoSum([3, 3], 6));
