const a = Number(prompt('Input a'));
const b = Number(prompt('Input b'));
const c = Number(prompt('Input c'));
const result = quadraticEquation(a, b, c);
prnEq(result);

function quadraticEquation(a, b, c) {
    let x1, x2;
    const d = discriminant(a, b, c);
    const ss = Math.sqrt(d);
    if (d > 0) {
        x1 = (-1 * b - Math.sqrt(d)) / (2 * a);
        x2 = (-1 * b + Math.sqrt(d)) / (2 * a);
        return [x1,x2]
    } else 
    if (d === 0){
        x1 = -1 * b / 2 * a;    
        return [x1]
    }
    if (d < 0){
        x1 = null;    
        return [x1]
    }
}

function discriminant(a, b, c) {
    const d  = Math.pow(b,2) - 4 * a * c;
    return d;
}

function prnEq(val){
    const l = val.length;
    if (l === 2) {
        document.write("х Є {" + Math.round(val[0]*100)/100 + " ; " + Math.round(val[1]*100)/100 + "}");    
    }else
    if(l === 1){
        if (val[0] === null){
            document.write(" No Solution ");    
        }else{
            document.write(val[0]);
        } 
    }
}

