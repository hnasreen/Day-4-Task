//1) a. PRINT ODD NUMBERS IN AN ARRAY USING ANONYMOUS FUNCTION:

var temp = {}
var final_arr=[]
var res = function(arr){
for(var i =0;i<arr.length;i++){
var ele = arr[i]
if(ele%2!=0){
temp[ele]=arr[i]
}
}
for(var key in temp){
final_arr.push(temp[key])
}
return final_arr
}
console.log(res([7,6,5,4,4,5,6,7,8,2,2,3,3]))

// b. PRINT ODD NUMBERS IN AN ARRAY USING IIFE:

temp={}
(function(arr){
for(var i =0;i<arr.length;i++){
var ele = arr[i]
if(ele%2!=0){
temp[ele]=arr[i]
}
}
for(var key in temp){
final_arr.push(temp[key])
}
console.log(final_arr)
})([7,6,5,4,4,5,6,7,8,2,2,3,3])

// 2)a. PRINT ODD NUMBERS IN AN ARRAY USING ARROW FUNCTION:

var temp = {}
var final_arr=[]
var res = (arr)=>{
for(var i =0;i<arr.length;i++){
var ele = arr[i]
if(ele%2!=0){
temp[ele]=arr[i]
}
}
for(var key in temp){
final_arr.push(temp[key])
}
return final_arr
}
console.log(res([7,6,5,4,4,5,6,7,8,2,2,3,3]))

//1)b. Convert all the strings to title caps in a string array using Anonymous Function:

var res=function(arr){
for(var i=0;i<arr.length;i++)
{
arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
return arr
}
console.log(res(["nasreen","ridha","sharfu","asma","sab"]))

//1)b. Convert all the strings to title caps in a string array using IIFE:

(function(arr){
for(var i=0;i<arr.length;i++)
{
arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
console.log(arr)
})(["nasreen","ridha","sharfu","asma","sab"])

// 2)b. Convert all the strings to title caps in a string array using Arrow Function:

var res=(arr)=>{
for(var i=0;i<arr.length;i++)
{
arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
return arr
}
console.log(res(["nasreen","ridha","sharfu","asma","sab"]))

//1)c. Sum of all numbers in an array using Anonymous Function:

var count=0
var res=function(arr){
  for(var i=0;i<arr.length;i++)
{
  count=count+arr[i]
}
return count
}
console.log(res([2,3,5,6,1,4]))

//1)c. Sum of all numbers in an array using IIFE:

var count=0
(function(arr){
  for(var i=0;i<arr.length;i++)
{
  count=count+arr[i]
}
console.log(count)
})([2,3,5,6,1,4])

//2)c. Sum of all numbers in an array using Arrow Function:

var count=0
var res=(arr)=>{
  for(var i=0;i<arr.length;i++)
{
  count=count+arr[i]
}
return count
}
console.log(res([2,3,5,6,1,4]))

// 1)d. Return all the prime numbers in an array using Anonymous Function:

var temp={}
var final_array=[]
var res=function(arr){
  for(var i=0;i<arr.length;i++)
  {
  var element = arr[i]
  for(var j=1;j<=element;j++)
  {
   if(element%j==0)
   {
     if(temp[element])
     {
       temp[element]++
     }
     else
   {
     temp[element]=1
   }
  }
  }
  if(temp[element]==2)
  {
  final_array.push(element)
  }
  } 
  return final_array
}
console.log(res([1,2,3,4,5,6,7,8,9,10]))

// 1)d. Return all the prime numbers in an array using IIFE:

var temp={}
var final_array=[]
(function(arr){
  for(var i=0;i<arr.length;i++)
  {
  var element = arr[i]
  for(var j=1;j<=element;j++)
  {
   if(element%j==0)
   {
     if(temp[element])
     {
       temp[element]++
     }
     else
   {
     temp[element]=1
   }
  }
  }
  if(temp[element]==2)
  {
  final_array.push(element)
  }
  } 
  console.log(final_array)
})([1,2,3,4,5,6,7,8,9,10])

// 2)d. Return all the prime numbers in an array using Anonymous Function:

var temp={}
var final_array=[]
var res=(arr)=>{
  for(var i=0;i<arr.length;i++)
  {
  var element = arr[i]
  for(var j=1;j<=element;j++)
  {
   if(element%j==0)
   {
     if(temp[element])
     {
       temp[element]++
     }
     else
   {
     temp[element]=1
   }
  }
  }
  if(temp[element]==2)
  {
  final_array.push(element)
  }
  } 
  return final_array
}

console.log(res([1,2,3,4,5,6,7,8,9,10]))

// 1)e. Return all the palindromes in an array using Anonymous Function:

var temp=[]
var palindrome=[]
var rev_str=""
var res=function(arr){
  for(var i=0;i<arr.length;i++)
  {
   var str=arr[i].split("")
   for(var j=str.length-1;j>=0;j--)
   {
     rev_str=rev_str+str[j]
   }
   temp.push(rev_str)
   rev_str=""
  }
  for(var k=0;k<arr.length;k++)
  {
    if(arr[k]==temp[k])
    {
      palindrome.push(arr[k])
    }
  }
  return palindrome
}
console.log(res(["racecar",'12321',"car","adida","nasreen"]))

// 1)e. Return all the palindromes in an array using IIFE:

var temp=[]
var palindrome=[]
var rev_str=""
(function(arr){
  for(var i=0;i<arr.length;i++)
  {
   var str=arr[i].split("")
   for(var j=str.length-1;j>=0;j--)
   {
     rev_str=rev_str+str[j]
   }
   temp.push(rev_str)
   rev_str=""
  }
  for(var k=0;k<arr.length;k++)
  {
    if(arr[k]==temp[k])
    {
      palindrome.push(arr[k])
    }
  }
  console.log(palindrome)
})(["racecar",'12321',"car","adida","nasreen"])

// 1)e. Return all the palindromes in an array using Arrow Function:

var temp=[]
var palindrome=[]
var rev_str=""
var res=(arr)=>{
  for(var i=0;i<arr.length;i++)
  {
   var str=arr[i].split("")
   for(var j=str.length-1;j>=0;j--)
   {
     rev_str=rev_str+str[j]
   }
   temp.push(rev_str)
   rev_str=""
  }
  for(var k=0;k<arr.length;k++)
  {
    if(arr[k]==temp[k])
    {
      palindrome.push(arr[k])
    }
  }
  return palindrome
}
console.log(res(["racecar",'12321',"car","adida","nasreen"]))

//1)f. Return median of two sorted arrays of the same size using Anonymous Function:

var Merged_Array=[]
var temp=0
var count=0
var Median=0
var res=function(arr1,arr2){
  if(arr1.length==arr2.length)
  {
  Merged_Array=[...arr1,...arr2]
  for(var i=0;i<Merged_Array.length;i++)
  {
    for(var j=i+1;j<Merged_Array.length;j++)
  {
    if(Merged_Array[i]>=Merged_Array[j])
    {
      temp=Merged_Array[i]
      Merged_Array[i]=Merged_Array[j]
      Merged_Array[j]=temp
    }
  }
  }
  if(Merged_Array.length%2==0)
  {
    count=Merged_Array.length/2
    Median=(Merged_Array[count-1]+Merged_Array[count])/2
  }
  else
  {
    count=Math.round(Merged_Array.length/2)
    Median=Merged_Array[count-1]
  }
  return Median
  }
  else 
  return "The given arrays are not of same size"
}
var arr1=[2,3,1,5,4]
var arr2= [4,3,6,5,2]
console.log(res(arr1,arr2))

//1)f. Return median of two sorted arrays of the same size using IIFE:

var Merged_Array=[]
var temp=0
var count=0
var Median=0
(function(arr1,arr2){
  if(arr1.length==arr2.length)
  {
  Merged_Array=[...arr1,...arr2]
  for(var i=0;i<Merged_Array.length;i++)
  {
    for(var j=i+1;j<Merged_Array.length;j++)
  {
    if(Merged_Array[i]>=Merged_Array[j])
    {
      temp=Merged_Array[i]
      Merged_Array[i]=Merged_Array[j]
      Merged_Array[j]=temp
    }
  }
  }
  if(Merged_Array.length%2==0)
  {
    count=Merged_Array.length/2
    Median=(Merged_Array[count-1]+Merged_Array[count])/2
  }
  else
  {
    count=Math.round(Merged_Array.length/2)
    Median=Merged_Array[count-1]
  }
  console.log(Median)
  }
  else 
  console.log("The given arrays are not of same size")
})([2,3,1,5,4],[4,3,6,5,2])

//1)g. Remove duplicates from an array using Anonymous Function:

var temp={}
var final_array=[]
var res = function(arr){
 for(var i=0;i<arr.length;i++)
 {
  var element=arr[i]
   if(temp[element]){
     temp[element]++
   }
   else
   {
     temp[element]=1
   }
 }
 for(var key in temp)
 {
   if(temp[key]==1)
   {
     final_array.push(parseInt(key))
   }
 }
 return final_array
}
console.log(res([2,3,4,2,3,5,4,6,7,3,5,6,1,10,9,5]))

//1)g. Remove duplicates from an array using IIFE:


//1)h. Rotate an array by K times using Anonymous Function:

var i=0
var res = function(arr,k){
  while(i<k){
arr.push(arr.shift())
i++
}
return arr
}
console.log(res([4,5,1,2,3],2))

//1)h. Rotate an array by K times using IIFE: