This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Test work for company C

Hi) I did this test work, it takes more time than I expect, but I try do my best.

The fact is that it doesn't often happen to do something with 0 and not in the context of ongoing development, so I had to make decisions that I'm not used to making.

As a middleware, I used Thunk because I didn't need to focus on side defects, but I can use Saga's for it. Some tools I used incorrectly and not optimally, since not all of them I have used in the last half year.

I did not cover the code with tests, since this was not in the assignment, but if there is a request for this, I will do it. 

I hope you appreciate my humor, but of course I would not send this to production.

####What would I add

- Test -> for selectors, utils, actions
- I would write a more powerful utility for choosing the font size, taking into account the size of the characters.
- To optimize the rendering, I would either ask the BE to give me the keys of the rows, or generate from when receiving the data so that the rows are not rendered. In this regard, there is a bug - if you try to advise with a difference of articles per second in one line, only one will be deleted.