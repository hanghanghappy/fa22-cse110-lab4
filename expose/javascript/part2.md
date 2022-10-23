1. 3 wil be printed because the prices array consist of 3 elements so i looped 3 times
2. 150 will be printed because the last element in the prices array is 300 and 300 * (1-0.5) = 150
3. 150 will be printed since rounding 15000 (150 * 100) is still 15000 then it gets divided by 100 which the finalPrice will be 150
4. this function returns an array consisting of [50, 100, 150] which are the discounted prices of the original array
5. it causes an error because i is declared with let and so i can only be accessed inside the loop but not outside of the loop block
6. it causes an error because discountedPrice is declared with let inside the loop and so it can only be accessed inside but not outside of the loop block
7. 150 will be printed because finalPrice is declared with let intside the same scope as the log function
8. it will return the array consisting of [50, 100, 150] because they are calculated and pushed to discounted array which discounted is declared with let inside the same scope as the return function
9. it causes an error because i is declared with let and so i can only be accessed inside the loop but not outside of the loop block
10. 3 is going to be printed because length is a const and it is declared with the length of prices array which is 3
11. this function returns an array consisting of [50, 100, 150]. Even the array discounted is a const, it means a constant reference to the array so elements can still be changed inside the loop
12. 
    - A. student.name 
    - B. student['Grad Year']
    - C. student.greeting()
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]
13.
    - A. '32', because '3' is a string so + merges them (2 is converted to a string)(string conversion)
    - B. 1, because 3 is converted to a number
    (numeric conversion rules)
    - C. 3, because null is 0 when is a number
    (numeric conversion rules)
    - D. '3null', because null is converted to a string then merged as '3' is a string (string conversion)
    - E. 4, because true is 1 when converted to a number
    (numeric conversion rules)
    - F. 0, because false is 0 and null is 0 too when they are numbers and added to be 0 (numeric conversion rules)
    - G. 3undefined, because '3' is a string so undefined is converted to a string
    - H. NaN, because according to numberic conversion rules, undefined will be NaN
14.
    - A. true, because '2' is converted to a number
    - B. false, because the first character of '12' which is '1' is smaller than '2'
    - C. true, because '2' is converted to a number
    - D. false, because === checks the equality without type conversion.
    - E. false, because true is 1 when converted to number
    - F. true, because Boolean(2) is true and they are both the same type and equal
15. === is a strict equaliy operator that checks the equality without type conversion while == is a non-strict check that converts the types
16. [part2-question16.js](part2-question16.js)
17. The result will be [2,4,6]. First we declare a new array newArr then we iterate the array and multiply the values by 2 then place them into the new array. Therefore the new array consists of values which are all multiplied by 2
18. [part2-question18.js](part2-question18.js)
19. 1 4 3 2