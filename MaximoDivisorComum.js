mdc = function(o){
    if(!o.length)
        return 0;
    for(var r, a, i = o.length - 1, b = o[i]; i;)
        for(a = o[--i]; r = a % b; a = b, b = r);
    return b;
};