// 1. Write a ts program to read and print elements of array.

// var a:string[] = ["a", "b", "c", "d"]
// for (var i=0;i<=a.length-1;i++) {
//     console.log(a[i]);
//     }


// var a=(abc:string[]) => {
//     for(var i=0; i<=abc.length;i++ ) {
//         return console.log(abc[i]);
        
//     }
// }

// var abc:string[] = ["a", "b", "c", "d"]

// console.log(abc.forEach(["a", "b", "c", "d"]))



// 2. Write a ts program to print all negative elements in an array.

// var a:number[] = [-1,-2,-3,4,5,-6,-7]
// var b:number[]=[]

// for (var i=0;i<=a.length;i++) {
//     if (a[i]<0) {
//         b.push(a[i])
//     } 
// }
// console.log(b);




// 3. Write a ts program to find sum of all array elements. 

// var a:number[] = [1,2,3,4,5,6]
// var b:number=0

// for (var i=0;i<=a.length-1;i++) {
//     b+=a[i]
    
// }
// console.log(b);


// 4. Write a ts program to find maximum and minimum element in an array.

// var a:number[] = [5,2,3,4,1,6,34,88,101,77,89,76,88]
// var b:number=0

// for (var i=0;i<=a.length;i++){
//     for(var j=i+1;j<=a.length;j++) {
//         if(a[i]>a[j]){
//             b=a[i]          
//         }
//     }
// }
// console.log(b)







//*****************************************//

// var b:number[] = a.sort()
// var c:number=0
// console.log(b);


// console.log("Minimum Number is",b[0]);

// for(var i=0;i<=b.length-1;i++){
  
//     if(i==b.length-1){
//         c=b[i];
//     }
// }
// console.log("Maximum number is", c);




// 5. Write a ts program to find second largest element in an array.



// 6. Write a ts program to count total number of even and odd elements in an array.

// var a:number[] = [5,2,3,4,1,6,34,546,777,896,98,76,88]
// var b:number=0
// var c:number=0

// for (var i=0;i<=a.length-1;i++) {
//     if(a[i]%2==0) {
//         b++
//     }
//     else if (a[i]%2!=0) {
//         c++;
        
//     }
// }
// console.log("Total number of Even numbers are", b);
// console.log("Total number of odd numbers are", c);

// 7. Write a ts program to count total number of negative elements in an array.
//     var a:number[] = [1,5,-6,8,-6,5,-14,-25,-9,45,87]
//     var b:number = 0
// for (var i=0;i<=a.length-1;i++) {
//     if(a[i]<0) {
//         b++
//     }
// }
// console.log("Total negative number are", b);


// 8. Write a ts program to copy all elements from an array to another array.
// var a:number[] = [1,2,3,4]
// var b:number[] = []

// console.log(b)b;

// var a:number[] = [1,2,3,4,5,6]
// var b:number[] = [11,12,13,14,15,16]
// var c:number[] = [21,22,23,24,15,16]
// var e:number[] = [1,2,3,4,5,6]

// var d = a.concat(b,c,e)
// console.log(d);
// var aa:number[]=[]

// var a = (arr:number[],brr:number[]):number[] => aa.concat(arr,brr)

// console.log(a([1,2,3],[4,5,6]));




// 9. Write a ts program to insert an element in an array.

// var a:number[] = [1,2,3,4,5]
// var c:number[] = []

// var b = (aa:number,bb:number):number[] => {
//    a.push(aa,bb)
//     return a;

// }

// console.log(b(5,8));




// 10. Write a ts program to delete an element from an array at specified position.
// var a:number[] = [1,2,3,4,5,6]

// a.splice(2,3)
// console.log(a);



// 11. Write a ts program to count frequency of each element in an array.

// var a:number[] = [1,2,3,4,5,4,2,1,9,5]
// var b:number = 4
// var c:number=0

// for (var i=0;i<=a.length-1;i++) {
//  for (var j=i+1;j<=a.length;j++) {
//     if(a[i]==j[i]) {
       
        
//     }
//  }
// }
// console.log(c);


// 12. Write a ts program to print all unique elements in the array.

//NOT SOLVED//

// var a:number [] = [1,2,3,4,5,6,5,44,8,3,2,1]
// var b:number[] = []
// var c:number = 0

// for (var i=0;i<=a.length-1;i++) {
//     for(var j=i+1;j<=a.length-1;j++) {
//         if (a[i]==a[j]){
//             b.push(a[i])
//             c++
         
//         }
//     } 
// }
// console.log(b);
// console.log(c);





// 13. Write a ts program to count total number of duplicate elements in an array.

// var a:number[] = [1,2,3,4,3,2,1]
// var b:number=0

// for (var i=0;i<=a.length-1;i++){
//     for(var j=i+1;j<=a.length-1;j++) {
//         if(a[i]==a[j]){
//             b++;
            
//         }
//     }
// }

// console.log("Number of duplicate elements are",b);



// 14. Write a ts program to delete all duplicate elements from an array.
///** Not solved  *///
// var a:number[] = [1,2,4,4,2,1]
// console.log(a);

// for(var i=0;i<=a.length-1;i++) {
//     for(var j=i+1;j<=a.length-1;j++){
//         if(a[i]==a[j]) {
//             a.splice(a[i],a[j])
            
//         }
//     }
// }
// console.log(a);



// 15. Write a ts program to merge two array to third array.
// var a:number[]=[1,2,3,4]
// var b:number[]=[5,6,7,8]

// var c:number[]=a.concat(b)
// console.log(c);


// 16. Write a ts program to find reverse of an array.

// var a:number[]=[1,2,3,4]
// var b:number[]=a.reverse()

// console.log(b);


// 17. Write a ts program to put even and odd elements of array in two separate array.

// var a:number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

// var evenn:number[]=[]
// var oddd:number[]=[]

// for (var i=0;i<=a.length-1;i++){
//     if(a[i]%2==0){
//         evenn.push(a[i])
//     }
//     else {
//         oddd.push(a[i])
//     }
// }

// console.log(evenn,oddd);



// 18. Write a ts program to search an element in an array. (Why answer has undefined)

// var a:number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

// var aa = (bb:number) => {
//     for(var i=0;i<=a.length-1;i++){
//         if(bb==a[i]){
            
//             return console.log(a.indexOf(i+1));
            
//         }
//     }
// }

// console.log(aa(6));


// 19. Write a ts program to sort array elements in ascending or descending order.

// var a:number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

// a.sort(c,d) => (c-d)


// 20. Write a ts program to sort even and odd elements of array separately.
// 21. Write a ts program to left rotate an array.
// 22. Write a ts program to right rotate an array.