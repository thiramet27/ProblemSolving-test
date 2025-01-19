**Your Approach to Solving the Problem:**
im staring with define the roman symbol to integer first 
and the concept that ill using for subtract and add is declare total , previousValue = 0 using for loop replace the symbol with integer from right to left and declare 'i' = s.length -1; i >=0; i--
then ill get a last character to interger and calculate before going to next character but i dont have any add or subtract logic right now 
so im going through with : if currentvalue < previous value do total -= currentvalue for the subtract logic then : else total += currentvalue for add logic then return total
the code look completely so the process will be : example II 
| I = 1 then calculate | I or 1(currentvalue) < 0(previousvalue) | total += currentvalue (total = 1) | previousvalue = currentvalue (previousvalue = 1) | return total = 1
| I = 1 then calculate | I or 1(currentvalue) < 1(previousvalue) | total += currentvalue (total = 2) | previousvalue = currentvalue (previousvalue = 1) | return total = 2

**Any Challenges You Faced:**
syntax , for loop form. the most difficult thing would probably be how to output my idea into a code for solving this but it possible because there is a lot of knowledge on a website 
and took me a few hours


**The Reasoning Behind Your Chosen Solution:**
im just imagine define roman symbol , convert that symbol to integer ,calculate it and return