//Two pointer approach

//move l untill you find a positive
//move r untill you find a negative
//swap

let arr2d = [1, -3, 5, -6, 7, -9];

//op => [-3, -6, -9, 1, 5, 7]


//[1, -3, 5, -6, 7, -9]
// |                 |

//[-9. -3, 5, -6, 7, 1]
//         |   |

//[-9, -3, -6, 5, 7, 1]

let arr = [-5, 10, -3, 8, -1, 6];

//[-5,-3,-1,10,8,6]



function groupPositivesAndNegatives(arr){
    // return BubbleSort(arr);
    let l =0;
    let r= arr.length -1;

    while(l<=r){
        while(arr[l]<=0 && l<=r) l++;
        while(arr[r]>0 && l<=r) r--;

        if(l<=r){
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp; 
            l++;
            r--;
        }
    }

    return arr;
}

function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]; arr[i] = arr[j], arr[j] = temp;
            }
        }
    } return arr;
}

console.log(groupPositivesAndNegatives(arr)) //[-5, 10, -3, 8, -1, 6] 