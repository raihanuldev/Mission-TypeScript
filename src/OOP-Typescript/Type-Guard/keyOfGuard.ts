
type own = number | string;

function add(param1: own, param2: own) {
    if (typeof param1 == 'string' && typeof param2 == 'string') {
        return param1.toString() + param2.toString();
    }
    else {
        return param1 + param2;
    }
}

add("21","23");
add(12,23);