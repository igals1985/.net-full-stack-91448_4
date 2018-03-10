

let grade: number = Number(prompt("please enter your grade:"));

switch (Math.floor(grade / 10)) {
    case 10:
    case 9: alert("מצוין"); break;
    case 8: alert("טוב מאד"); break;
    case 7: alert("טוב"); break;
    case 6: alert("בסדר"); break;
    case 5: alert("עובר"); break;
    default: alert("לא עובר"); break;
}
