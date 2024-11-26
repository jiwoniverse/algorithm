/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (arr.length === 0) return []; 
    if (arr.length < size) return [arr];

    let answer = [];

    for (let i=0; i<arr.length; i+=size) {
        if (i > arr.length) {
            answer.push(arr.slice(i, arr.length))
            break;
        }
        answer.push(arr.slice(i, i+size))
    }

    return answer;
};
