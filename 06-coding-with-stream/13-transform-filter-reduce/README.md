# 13-transform-filter-reduce

This sub project shows how to use Transform streams to implement streaming data filter and reduce blocks.

Concretely, in this sub project we are going to analyze a big file containing all the sales for the year 2020.
The big file is a sales report file in the CSV format. We will calculate the total profit for sales made in Italy.

We will have to find all the records that have Italy as country and in the process sum up the profit value of the matching lines into a single number.

## Dependencies

Install all necessary dependencies with:

> npm install

## Run

To run the project

> npm Start

or

> node index.js