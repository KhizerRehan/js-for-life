// =======================================
// Find all triplets with zero sum
// =======================================
// Given an array of distinct elements. The task is to find triplets in array whose sum is zero


function findTripletsWhoseSumIsEqualToValue(array,sum_equal_to) {
	var isTripletFound = false;

	for (let i = 0; i < array.length - 2; i++) {
		for (let j = i+1; i < array.length - 1; i++) {
			
			for (let k = j+1; i < array.length; i++) {
				
				let sum_arr_value = array[i] + array[j] +array[k];
					if(sum_arr_value==sum_equal_to) {
						console.log("Sum of ("+array[i]+"+"+array[j]+"+"+array[k]+")"+"=="+sum_equal_to);
						return isTripletFound = true;
					}
			}
		}
	}

	return isTripletFound;

}

const array = [0, -1, 2, -3, 1];

findTripletsWhoseSumIsEqualToValue(array,0);
// =======================================