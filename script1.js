// 1-Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'.
let string = "ddd@bbb@ccc";
let result = string.replaceAll("@", "!");
document.write(result + "<br>");