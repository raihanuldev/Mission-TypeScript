"use strict";
function add(param1, param2) {
    if (typeof param1 == 'string' && typeof param2 == 'string') {
        return param1.toString() + param2.toString();
    }
    else {
        return param1 + param2;
    }
}
add("21", "23");
add(12, 23);
