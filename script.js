// 1)
//  let arrey = [4,15,90,101]
// arrey.push(" javascript","python")
// arrey.unshift("html","css")
// console.log(arrey);
// arrey.shift();
// arrey.pop();
// console.log(arrey);
// 2
// let fruits = ["banana","orange","pear"]
//  console.log(fruits.length);
//  fruits.push("apply","banana");
//  fruits.unshift("watermelo");
//  console.log(fruits.length);
//  fruits.splice(3,0,"mango")
//  fruits.shift();
//  fruits.pop();
//  console.log(fruits.length);
// 3)
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newarrey= array.map(x=> x /3);
// console.log(newarrey);

// 4)
// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let array1 = array.filter(x => typeof x == "number");
// console.log(array1);
// let arrey1 = array.filter(function(x){
//     return typeof x == "number"
// })
// console.log(arrey1);
// 5)
// let languages = ['html', 'css', 'javascript', 'python','php']
// let newlanguages= languages.filter(x => x.length > 3)
// console.log(newlanguages);
// 6)
// let array= ['academy', 'of', 'digital', 'industries'].reduce(function(x, y){
//     return x.concat(y)
// },
// []
// )
// console.log(array);
// 7
// let item = [12, 'google', 32, null, "yahoo", 25];
// let resulte =item.map(function(x){
//     if (typeof x == "number"){
//     return x*x;
//    }else if (typeof x=="string"){
//        return x.toUpperCase();
//    }else{
//        x;
//    }}
// )
// console.log(resulte);

// let item= [12, 'google', 32, null, "yahoo", 25];
// let  item2= item.map(x=> typeof (x) == "number" ? x*x : typeof (x) == "string" ? x.toUpperCase() : x);
// console.log(item2);
//  //8.
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let resulte=words.filter (x =>  x.includes ("M") || x.includes("m")
     
// )
// console.log(resulte);



