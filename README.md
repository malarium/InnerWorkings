# InnerWorkings
Simple app for planning spendings

Hello,

a short guide for this app:

My task was to build an app that counts 3 different jobs for InnerWorkings.

All the selections predefined in checkboxes with taxes and extra-margin as well as the prices are according to task clues (I assumed each price was per one item).

Job 1: give 1 as amount in 1st and 2nd item (envelopes and letterheads) and click "Count total expenses" at the bottom of the page. MAKE SURE NO OTHER ITEMS ARE CHOSEN

Job 2: give 1 as amount in 3rd item (T-shirts) and click "Count total expenses" at the bottom of the page. MAKE SURE NO OTHER ITEMS ARE CHOSEN

Job 3: give 1 as amount in 4th and 5th item (frisbees and yoyos) and click "Count total expenses" at the bottom of the page. MAKE SURE NO OTHER ITEMS ARE CHOSEN

However this app is quite universal, you can do different jobs on it, not just those specified in the task description.

Checkboxes are disabled until amount of particular item is given.

Enjoy!

-----------------------------

Below is a code assignment we would like the candidate to complete and return to us. 
1.	Include this problem statement with the solution.
2.	Use ECMAScript/HTML/CSS for the solution. No AJAX requests to server is allowed, i.e. all business logic should be implemented on the client side.
3.	Send us the solution with instructions on how to build and run the program.
4.	This is a stage for the candidate to showcase his/her skills and strengths, so keep that in mind when coming up with the solution.

Problem Statement: 
At InnerWorkings a "job" is a group of print items.  For example, a job can be a run of business cards, envelopes, and letterhead together.

Some items qualify as being sales tax free, whereas, by default, others are not.  Sales tax is 7%.

InnerWorkings also applies a margin, which is the percentage above printing cost that is charged to the customer.  For example, an item that costs $100 to print that has a margin of 11% will cost:
item: $100 -> $7 sales tax = $107
job:  $100 -> $11 margin
total: $100 + $7 + $11 = $118

The base margin is 11% for all jobs this problem.  Some jobs have an "extra margin" of 5%.  These jobs that are flagged as extra margin have an additional 5% margin (16% total) applied.

The final cost is rounded to the nearest even cent.  Individual items are rounded to the nearest cent.

Write a client-side application, i.e. only HTML, CSS and JavaScript/TypeScript, that calculates the total charge to a customer for a job. Usage of transpilers is allowed, i.e. you can use CoffeeScript, JSX or anything compiled to JavaScript. Node.js could be used for serving static pages.

Job 1:
extra-margin
envelopes 520.00
letterhead 1983.37 exempt

should output:
envelopes: $556.40
letterhead: $1983.37
total: $2940.30

Job 2:
t-shirts 294.04

output:
t-shirts: $314.62
total: $346.96

Job 3:
extra-margin
frisbees 19385.38 exempt
yo-yos 1829 exempt

output:
frisbees: $19385.38
yo-yos: $1829.00
total: $24608.68

Thank You.
