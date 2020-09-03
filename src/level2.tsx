export const originalTeamToExpectedTeam21 = (originalTeam: any) => {
    const obj = { ...originalTeam };
    obj.name = "New York Badgers";
    obj.league = "Minor";
    obj.roster = 25;
    delete obj.size;
    return obj;
};

export const originalArrayToExpectedArray2 = (originalArray: any) => {
    const arr = originalArray.slice(2);
    return ["two", ...arr, 5];
};

export const originalTeamToExpectedTeam22 = (originalTeam: any) => {
    const obj = { ...originalTeam.captain };
    const newObj = { ...obj, age: 28 };
    return { ...originalTeam, captain: newObj };
};
