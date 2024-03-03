//sum two Arrays

const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  throw new Error("no two sum solution.");
};

console.log(twoSum([2, 7, 11, 15], 9));
