const a = parseInt(prompt('Input a'));
const b = parseInt(prompt('Input b'));
const c = parseInt(prompt('Input c'));
showQE(a, b, c);




const result = quadraticEquation(a, b, c);
prnEq(result);

//ax^2 + bx + c = 0


function showQE(a, b, c){
    if (a===undefined || b===undefined || c===undefined){
        const msg = "<div class='vertical-container'><div>"+ "A and B and C must be defined"+"</div></div>";
        return document.write(msg);
    }
    let sgnB = '', sgnC ='';
    let digB = b+"x", digC = c;
    if(b > 0){
        sgnB = "\+";
    } else if (b === 0){
        digB = '';
    }   
    if(c > 0){
        sgnC = "\+";
    }  else if (c === 0){
        digC = '';
    }   
    
    const msg = a + "x&sup2;" + sgnB + digB + sgnC + digC + " = 0;"
    return document.write(msg);
}


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
    document.write("<div class='vertical-container'><div>");
    const l = val.length;
    switch(l){
        case 2:
            document.write("<small>Result</small> <br> x ∈ {" + Math.round(val[0]*100)/100 + " ; " + Math.round(val[1]*100)/100 + "}");
            break;    
        case 1:
            switch (val[0]) {
                case null:
                    document.write("No Solution because D < 0");
                    break;
                default:
                    document.write("<small>Result</small> <br> x ∈ {" + val[0] + "}");
            }
            break;    
    }
    document.write("</div></div>");
}

