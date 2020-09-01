import React, { FC } from "react";
import { getTopName, createQs, parseQs } from "./level1";
import {
    originalTeamToExpectedTeam21,
    originalArrayToExpectedArray2,
    originalTeamToExpectedTeam22,
} from "./level2";

import { getTopName3, createQs3, parseQs3 } from "./level3";

// Level 1
// 1.1
console.dir("1.1");
const teams = [
    { name: "Lions", score: 5 },
    { name: "Tigers", score: 4 },
    { name: "Bears", score: 6 },
    { name: "Monkeys", score: 2 },
];
const result11 = getTopName(teams);
console.dir(result11);
// 1.2
console.dir("1.2");
const qsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
};
const result12 = createQs(qsObj);
console.dir(result12);
// 1.3
console.dir("1.3");
const qs = "?page=2&pageSize=10&total=205&somethingElse=value";
const result13 = parseQs(qs);
console.dir(result13);

// Level 2
// 2.1
console.dir("2.1");
const originalTeam = {
    size: 15,
    name: "Tampa Bay Roosters",
    league: "Minor",
};
const expectedTeam = {
    name: "New York Badgers",
    league: "Minor",
    roster: 25,
};
const result21 = originalTeamToExpectedTeam21(originalTeam);
console.dir(result21);
// 2.2
console.dir("2.2");
const originalArray = [1, 2, 3, 4];
const expectedArray = ["two", 3, 4, 5];
const result22 = originalArrayToExpectedArray2(originalArray);
console.dir(result22);
// 2.3
console.dir("2.3");
const originalTeam1 = {
    name: "Tampa Bay Roosters",
    captain: {
        name: "Bryan Downey",
        age: 27,
    },
};
const expectedTeam1 = {
    name: "Tampa Bay Roosters",
    captain: {
        name: "Bryan Downey",
        age: 28,
    },
};
const result23 = originalTeamToExpectedTeam22(originalTeam1);
console.dir(result23);

// Level 3
// 3.1
console.dir("3.1");
const result31 = getTopName3(teams);
console.dir(result31);
// 3.2
console.dir("3.2");

const result32 = createQs3(qsObj);

console.dir(result32);

// 3.3
console.dir("3.3");
const queryString = "?page=2&pageSize=10&total=203";
const result33 = parseQs3(queryString);
console.dir(result33);

const App: FC = () => {
    return (
        <>
            <h1>Уровень 1</h1>
            <h3>1.1</h3>
            <div>{JSON.stringify(teams)}</div>
            <div>
                <b>Result: </b> {JSON.stringify(getTopName(teams))}
            </div>
            <h3>1.2</h3>
            <div>{JSON.stringify(qsObj)}</div>
            <div>
                <b>Result: </b> {createQs(qsObj)}
            </div>
            <h3>1.3</h3>
            <div>{JSON.stringify(qs)}</div>
            <div>
                <b>Result: </b>
                {JSON.stringify(parseQs(qs))}
            </div>
            <h1>Уровень 2</h1>
            <h3>2.1</h3>
            <div>
                <b>Original Team: </b> {JSON.stringify(originalTeam)}
            </div>
            <div>
                <b>expected Team: </b> {JSON.stringify(expectedTeam)}
            </div>
            <div>
                <b>Result: </b>
                {JSON.stringify(originalTeamToExpectedTeam21(originalTeam))}
            </div>
            <h3>2.2</h3>
            <div>
                <b>Original Array: </b> {JSON.stringify(originalArray)}
            </div>
            <div>
                <b>Expected Array: </b> {JSON.stringify(expectedArray)}
            </div>
            <div>
                <b>Result: </b>
                {JSON.stringify(originalArrayToExpectedArray2(originalArray))}
            </div>
            <h3>2.3</h3>
            <div>
                <b>Original Team: </b> {JSON.stringify(originalTeam1)}
            </div>
            <div>
                <b>Expected Team: </b> {JSON.stringify(expectedTeam1)}
            </div>
            <div>
                <b>Result: </b>
                {JSON.stringify(originalTeamToExpectedTeam22(originalTeam1))}
            </div>
            <h1>Уровень 3</h1>
            <h3>3.1</h3>
            <div>{JSON.stringify(teams)}</div>
            <div>
                <b>Result: </b>
                {JSON.stringify(getTopName3(teams))}
            </div>
            <h3>3.2</h3>
            <div>{JSON.stringify(qsObj)}</div>
            <div>
                <b>Result: </b>
                {JSON.stringify(createQs3(qsObj))}
            </div>
            <h3>3.3</h3>
            <div>{JSON.stringify(queryString)}</div>
            <div>
                <b>Result: </b>
                {JSON.stringify(parseQs3(queryString))}
            </div>
        </>
    );
};
export default App;
