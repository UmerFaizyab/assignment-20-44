//                      CHAPTER  21 -- 25
// var first = prompt("Enter your first name")
// var last = prompt("Enter your last name")
// var fullName = first + " " + last;
// alert("Welcome " + fullName)


// var phone = prompt("Enter your favourite phone")
// console.log("Your favourite phone is " + phone)
// console.log("Length of string is " + phone.length)


// var new1 = "Pakistani"
// console.log(new1.indexOf("n"))


// var new1 = "Hello World"
// console.log(new1.lastIndexOf("l"))


// var new1 = "Pakistani"
// console.log(new1.charAt(3))


// var first = prompt("Enter your first name")
// var last = prompt("Enter your last name")
// var fullName = first.concat(" " + last)
// alert("Welcome " + fullName)


// var city = "Hyderabad"
// var new1 = city.replace("Hyder", "Islam")
// console.log(city)
// console.log(new1)


// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var new1 = message.replace(/and/g, "&")
// console.log(new1)


// var num1 = "472";
// console.log(num1)
// console.log(typeof(num1))
// var num2 = Number(num1)
// console.log(num2)
// console.log(typeof(num2))


// var inpu = prompt("enter value")
// console.log(inpu.toUpperCase())


// var inpu = prompt("enter value")
// var new2 = inpu.slice(1)
// var new1 = inpu.slice(0,1)
// console.log(new1.toUpperCase() + new2) 


// var num = 35.36;
// var new1 = num.toString()
// console.log(new1.replace(".",""))

// 
// 
// 
// 
// 
// 
// 
// 
// /
// /
// /
// 

// var bool = false
// var num = 0
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var find1 = (prompt("Search")).toUpperCase()
// for(var i = 0 ; i < arr.length; i++){
//     if((arr[i]).toUpperCase() == find1){
//         bool = true
//         num = i
//         break
//     }
// }
// if(bool == false){
//     console.log("Sorry")
// }
// else if(bool == true){
//     console.log("Yes it is available at index " + num)
// }


// var text = "University of Karachi";
// var myArray = text.split("");
// for(var i = 0 ; i < myArray.length; i++){
//     console.log(myArray[i])
// }


// var inpu = "Pakistan"
// var myArray = inpu.split("")
// console.log("Last input is " + inpu[myArray.length-1])

// var text = "the quick brown fox jumps over the lazy dog";
// var my = text.toUpperCase()
// var myArray = my.split("");
// var count = 0;
// for(var i = 0 ; i < myArray.length; i++){
//     if(text.slice(i, i+3) == "the"){
//         count = count + 1
//     }
// }
// console.log("the count is " + count)


//                5                  CHAPTER  26 --

// var number = +prompt("Enter number")
// console.log("The input number is " + number)
// console.log("The rounded number is " + Math.round(number))
// console.log("The ceil number is " + Math.ceil(number))
// console.log("The floor number is " + Math.floor(number))


// var number = +prompt("Enter negative number")
// console.log("The input number is " + number)
// console.log("The rounded number is " + Math.round(number))
// console.log("The ceil number is " + Math.ceil(number))
// console.log("The floor number is " + Math.floor(number))

// var number = +prompt("Enter number")
// var new1 = Math.abs(number)
// console.log("The absolute value of " + number + " is " + new1)

// var new1 = Math.random() * 6
// var num = Math.ceil(new1)
// console.log("Random dice value is " + num)


// var new1 = Math.random() * 2
// var num = Math.ceil(new1)
// if(num == 1){
//     console.log("Heads")
// }
// else{
//     console.log("Tails")
// }

// var new1 = Math.random() * 100
// var num = Math.ceil(new1)
// console.log("Random number between 1 and 100: " + num)

// var inpu = prompt("input")
// var new1 = parseInt(inpu) + 0.4
// console.log("The weight of user is " + new1 + " kilograms")


// var new1 = Math.random() * 10
// var num = Math.ceil(new1)
// var user = +prompt("Guess the number between 1 - 10")
// if(user == num){
//     alert("Yes you guesssed it right")
// }
// else{
//     alert("sorry the number was " + num)
// }


//                               CHAPTER 31 - 34

// var now = new Date()
// console.log(now)


// var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date()
// var mon = now.getMonth()
// console.log(month[mon])


// var days= ["Sun", "Mon", "tue", "Wed", "thu", "fri", "Sat"];
// var now = new Date()
// var day = now.getDay()
// console.log(days[day])


// var days= ["Sun", "Mon", "tue", "Wed", "thu", "fri", "Sat"];
// var now = new Date()
// var day = days[now.getDay()]
// if(day == days[0] || day == days[days.length]){
//     console.log("ITs Fun day")
// }


// var now = new Date()
// var mon = now.getDate()
// if(mon <= 15){
//     console.log("First fifteen days of the month")
// }
// else{
//     console.log("Last days of the month")
// }


// var now = new Date()
// var nowtime = now.getTime()
// console.log("current time " + now)
// console.log("Elapsed milliseconds since january 1, 1970: " + nowtime)
// console.log("Elapsed minutes since january 1, 1970: " + (nowtime/(1000*60*60)))


// var now = new Date()
// var nowtime = now.getHours()
// if(nowtime <= 12){
//     console.log(nowtime + " AM")
// }
// else{
//     console.log(nowtime + " PM")
// }


// var now = new Date()
// now.setDate(31)
// now.setFullYear(2020)
// now.setHours(00,00,00)
// console.log(now)


// var foo = new Date()
// var now = new Date()
// now.setDate(18)
// now.setFullYear(2015)
// now.setMonth(5)
// var timenow = now.getTime()
// var foo1 = foo.getTime()
// var pass = ((foo1-timenow)/(1000*60*60*24))
// console.log(pass + " days have passed since 1 st Ramadan, 2015")



// var date1 = +prompt("enter date")
// var year1 = +prompt("enter year")
// var month1 = +prompt("enter month")
// var foo = new Date()
// var now = new Date()
// now.setDate(date1)
// now.setFullYear(year1)
// now.setMonth(month1)
// var timenow = now.getTime()
// var foo1 = foo.getTime()
// var pass = ((foo1-timenow)/(1000*60*60*24))
// console.log(pass + " days have passed from reference date")



// var now = new Date()
// console.log("Current time " + now)
// var nowtime = now.getTime()
// var nowhour = now.getHours()
// var past = new Date()
// past.setHours(nowhour-1)
// console.log("1 Hour ago it was " + past)



// var date1 = +prompt("enter your birth date")
// var year1 = +prompt("enter your birth year")
// var month1 = +prompt("enter your birth month")
// var foo = new Date()
// var now = new Date()
// now.setDate(date1)
// now.setFullYear(year1)
// now.setMonth(month1)
// var timenow = now.getTime()
// var foo1 = foo.getTime()
// var pass = Math.floor(((foo1 - timenow)/(1000*60*60*24*365)))
// console.log("You are " + pass + " years old")



// console.log("Customer name: Umer Faizyab Khan")
// var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date()
// var mon = now.getMonth()
// console.log("Current month : "+  month[mon])
// var unit = 230;
// var per = 18;
// var surcharge = 500
// console.log("Number of units :" + unit)
// console.log("Charges per unit is :" + per)
// console.log("Late payment surcharge :" + surcharge)
// console.log("Total Amount : Rs" + ((unit*per)+surcharge))



//                          CHAPTER 
// function today(){
//     var now = new Date()
//     return now
// }
// console.log(today())




// function greet(first, second){
//     var gre = "Welcome " + first + " " + second;
//     return gre
// }
// var first = prompt("enter your first name")
// var second = prompt("enter your last name")
// console.log(greet(first, second))



// function greet(first, second){
//     var gre = "The Sum is " + (first + second);
//     return gre
// }
// var first = +prompt("enter first number")
// var second = +prompt("enter second number")
// console.log(greet(first, second))


// function sum(first, second){
//     var gre = "The Sum is " + (first + second);
//     return gre
// }
// function mul(first, second){
//     var gre = "The Product is " + (first * second);
//     return gre
// }
// function sub(first, second){
//     var gre = "The Subtraction is " + (first - second);
//     return gre
// }
// function div(first, second){
//     var gre = "The division is " + (first / second);
//     return gre
// }
// var first = +prompt("enter first number")
// var second = +prompt("enter second number")
// var oper = prompt("Enter operation + - / *")
// console.log("Calculator")
// if(oper == "+"){
//     console.log(sum(first, second))
// }
// else if(oper == "-"){
//     console.log(sub(first, second))
// }
// else if(oper == "/"){
//     console.log(div(first, second))
// }
// else if(oper == "*"){
//     console.log(mul(first, second))
// }



// function square(one){
//     var sq = one * one
//     return sq
// }
// var num = +prompt("Enter number")
// console.log("The square is " + square(num))


// function facto(num){
//     var new1 = 1;
//     for(var i = num; i > 0; --i){
//         new1 = new1 * i
        
//     }
//     return new1
// }
// var number = +prompt("Enter number")
// console.log("The factorial is " + facto(number))


// function count(start,end){
//     for(var i = start; i <= end; i++){
//         console.log(i)        
//     }
// }
// var star = +prompt("Enter number")
// var end = +prompt("Enter number")
// console.log(count(star, end))



// function outer(base, perpen){
//     function inner(sq){
//         var ans = sq*sq
//         return ans
//     }
//     var hypo = (inner(base)) + (inner(perpen))
//     return hypo
// }
// var bas = +prompt("Enter Base")
// var hyp = +prompt("Enter perpendicular")
// console.log("The Hypotenuse is " +(outer(bas, hyp)))



// function area(wid, high){
//     var one = wid * high
//     return one
// }
// var width = +prompt("Enter Width")
// var height = +prompt("Enter Hight")
// console.log("The Area is " +(area(width, height)))



// function palindrome(one){
//     var inp = one.toUpperCase()
//     var new1 = inp.replace(/ /g , "")
//     var backward = "";
//     var bool1 = "";
//     for(var i = (new1.length-1); i >= 0; i--){
//         backward = backward + new1[i]
//     }
//     if(backward == new1){
//         bool1 = "Yes it is palindrome";
//     }
//     else{
//         bool1 = "No It is not a plaindrome";
//     }
//     return bool1

// }
// var inou = prompt("Write the sentence to know if it is palindrome")
// console.log(palindrome(inou))

// function capitaliz(word){
//     var words = word.split(" ");
//     var new1 = []
//     var sentence = ""
//     for(var i = 0; i < words.length; i++){
//         var sent = words[i]
//         var sent1 = (sent[0]).toUpperCase()
//         var sent2 = sent.slice(1)
//         new1.push(sent1 + sent2)
//     }
//     for(var j = 0; j < new1.length; j++){
//         sentence = sentence + new1[j] + " "
//     }
//     return sentence
// }
// var inputed = prompt("Enter the sentence to capitalize")
// console.log(capitaliz(inputed))


// function long(txt){
//     var new1 =txt.split(" ");
//     var num = []
//     var ans = ""
//     for(var i = 0; i < new1.length; i++){
//         num.push(new1[i].length)
//     }
//     for(var j = 0; j < new1.length; j++){
//         if((Math.max(...num)) == new1[j].length){
//             ans = new1[j]

//         }    
//     }
//     return(ans)
// }
// console.log(long("Web Development Tutorial EXPECTED OUTPUT"))



// function count(sent, letter){
//     var sentup = sent.toUpperCase()
//     var spl = sentup.split("")
//     var counting = 0
//     for(var i = 0; i < spl.length; i++){
//         if(spl[i] == (letter).toUpperCase()){
//             counting = counting + 1
//         }
//     }
//     return(counting)
// }
// var input1 = prompt("Enter Sentence")
// var input2 = prompt("letter")

// console.log(count(input1, input2))


// function calcCircumference(radius){
//     var circum = radius*3.142*2
//     return ("The Circumference is " + (circum.toFixed(3)))
// }
// var num = +prompt("enter radius")
// console.log(calcCircumference(num))




// function calcArea(radius){
//     var circum = (radius*radius)*3.142
//     return ("The Area is " + (circum.toFixed(3)))
// }
// var num = +prompt("enter radius")
// console.log(calcArea(num))






//                  CHAPTER

// var  num1 = +prompt("enter first number")
// var  num2 = +prompt("enter second number")
// function power(a,b){
//     var new1 = b - a;
//     return (a + " is raised to " + new1)
// }
// console.log(power(num1, num2))



// var year = +prompt("Enter year")
// switch(year) {
//     case 2012 :
//         alert("Leap year");
//         break;
//     case 2016 :
//         alert("Leap year");
//         break;
//     case 2020 :
//         alert("Leap year");
//         break;
//     default :
//         alert("not a leap year");
// }
    


// function area1(a, b, c){
//     function so(a1, b1, c1){
//         var san = (a1 + b1 + c1)/2
//         return san
//     }
//     var areatri = so(a, b, c)
//     var new1 = areatri*(areatri - a)*(areatri - b)*(areatri - c)
//     return new1.toFixed(3)
// }
// var len1 = +prompt("Enter first length")
// var len2 = +prompt("Enter second length")
// var len3 = +prompt("Enter third length")

// console.log("The area of triangle is " + area1(len1, len2, len3))





// function area1(a, b, c){
//     function avg(a1, b1, c1){
//         var san = (a1 + b1 + c1)/3
//         return san.toFixed(2)
//     }
//     function per(a2, b2, c2){
//         var uif = ((a2 + b2 + c2)/300)*100
//         return uif.toFixed(2)
//     }
//     var average = avg(a, b, c)
//     var average2 = per(a, b, c)
//     console.log(average)
//     console.log(average2)
//     return ("Average = " + average + " " + "Percentage = " + average2)
// }
// var sub1 = +prompt("Enter first subject number")
// var sub2 = +prompt("Enter second subject number")
// var sub3 = +prompt("Enter third subject number")

// console.log(area1(sub1, sub2, sub3))




// var arr = [1 , 3,76, 54,23,45,52,13,145,77]
// function find(ind){
//     var count = 0
//     for(var i = 0; i < arr.length; i++){
//         if(ind == arr[i]){
//             count = i
//         }
//     }
//     return count
// }
// console.log(find(77))


// function vowelremove(sen){
//     var new1 = ""
//     for(var i = 0; i < sen.length; i++){
//         switch(sen[i]) {
//             case "a":
//               var new1 = new1 + ""
//               break;
//             case "e":
//               var new1 = new1 + ""
//               break;
//             case "i":
//               var new1 = new1 + ""
//               break;
//             case "o":
//               var new1 = new1 + ""
//               break;
//             case "u":
//               var new1 = new1 + ""
//               break;
//               default:
//                new1 = new1 + sen[i]
//           }
//     }
//     console.log(sen)
//     console.log(new1)
// }
// console.log(vowelremove("umer faizyab khan"))



// function vowelcount(sen){
//     var new1 = 0
//     for(var i = 0; i < sen.length; i++){
//         switch(sen[i]) {
//             case "a":
//               new1 = new1 + 1
//               break;
//             case "e":
//               new1 = new1 + 1
//               break;
//               default:
//                new1 = new1 + 0
//           }
//     }
//     return new1
// }
// console.log("Vowel a and e are " + (vowelcount("umer faizyab khan")) + " times in this sentence")




// function conver(a){
//     var m = (a * 1000) + "meters"
//     var f = (a * 3280.84) + "feet"
//     var i = (a * 39370.1) + "inches"
//     var c = (a * 100000.054) + "centimeter"
//     console.log(m)
//     console.log(f)
//     console.log(i)
//     console.log(c)
// }
// console.log(conver(4))


// function salary(a){

// }


// var num = +prompt("enter amount")
// var num2 = +prompt("enter note 10 | 50 | 100")
// function currency(amount, note){
//     var not1 = 10
//     var not2 = 50
//     var not3 = 100
//     var count = 0
//     if(note == 50){
//         count = (amount/not2) + " notes of 50"
//     }
//     else if(note == 100){
//         count = (amount/not3) + " notes of 100"
//     }
//     else if(note == 10){
//         count = (amount/not1) + " notes of 10"
//     }
//     return count
// }
// console.log(currency(num, num2))