class ArrayUtils {
    constructor() {
        if (this.constructor !== 'ArrayUtils') {
           throw new Error('ArrayUtils cannot be instantiated.')
        }   
    }
  
    static average(nums) {
      if (nums.length === 0) {
        throw new Error('Array cannot be empty.')
      }
      const sum = nums.reduce((sum, num) => sum + num, 0)
      return sum / nums.length
    }

    static max(nums) {
        return Math.max(...nums)
    }
}