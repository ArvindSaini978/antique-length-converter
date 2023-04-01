const centimeter = document.getElementById('cm');
const meter = document.getElementById('m');
const inch = document.getElementById('inch');
const kilometer = document.getElementById('km');
const feet = document.getElementById('feet');
const yard = document.getElementById('yard');
const mile = document.getElementById('mile');

centimeter.addEventListener('input', () => {
    const cm = centimeter.value;

    if (cm !== '' && cm !== "-") {
        meter.value = (cm / 100);
        inch.value = ((0.393701) * cm);
        kilometer.value = (cm / 100000);
        feet.value = ((0.032808) * cm);
        yard.value = ((0.010936) * cm);
        mile.value = ((0.000006) * cm);
    }
    else {
        meter.value = "";
        inch.value = "";
        kilometer.value = "";
        feet.value = "";
        yard.value = "";
        mile.value = "";
    }
})

meter.addEventListener('input', () => {
    const m = meter.value;

    if (m !== '' && m !== "-") {
        centimeter.value = (m * 100);
        inch.value = ((39.37008) * m);
        kilometer.value = (m / 1000);
        feet.value = ((3.28084) * m);
        yard.value = ((1.093613) * m);
        mile.value = ((0.000621) * m);
    }
    else {
        centimeter.value = "";
        inch.value = "";
        kilometer.value = "";
        feet.value = "";
        yard.value = "";
        mile.value = "";
    }
})

inch.addEventListener('input', () => {
    const ich = inch.value;
    if (ich !== '' && ich !== "-") {
        centimeter.value = (2.54 * ich);
        meter.value = ((0.0254) * ich);
        kilometer.value = (0.0000254 * ich);
        feet.value = ((0.083333) * ich);
        yard.value = ((0.027778) * ich);
        mile.value = ((0.000016) * ich);
    }
    else {
        centimeter.value = "";
        meter.value = "";
        kilometer.value = "";
        feet.value = "";
        yard.value = "";
        mile.value = "";
    }
})

kilometer.addEventListener('input', () => {
    const km = kilometer.value;
    if (km !== '' && km !== "-") {
        centimeter.value = (100000*km);
        meter.value = ((1000)*km);
        inch.value = ((39370.08)*km);
        feet.value = ((3280.84)*km);
        yard.value = ((1093.613)*km);
        mile.value = ((0.621371)*km);
    }
    else {
        centimeter.value = "";
        meter.value = "";
        inch.value = "";
        feet.value = "";
        yard.value = "";
        mile.value = "";
    }
})

feet.addEventListener('input', () => {
    const ft = feet.value;
    if (ft !== '' && ft !== "-") {
        centimeter.value = ((30.48)*ft);
        meter.value = ((0.3048)*ft);
        inch.value = ((12)*ft);
        kilometer.value = ((0.0003048)*ft);
        yard.value = ((0.333333)*ft);
        mile.value = ((0.000189)*ft);
    }
    else {
        centimeter.value = "";
        meter.value = "";
        inch.value = "";
        kilometer.value = "";
        yard.value = "";
        mile.value = "";
    }
})

yard.addEventListener('input', () => {
    const yrd = yard.value;
    if (yrd !== '' && yrd !== "-") {
        centimeter.value = ((91.44)*yrd);
        meter.value = ((0.9144)*yrd);
        inch.value = ((36)*yrd);
        kilometer.value = ((0.0009144)*yrd);
        feet.value = ((3)*yrd);
        mile.value = ((0.000568)*yrd);
    }
    else {
        centimeter.value = "";
        meter.value = "";
        inch.value = "";
        kilometer.value = "";
        feet.value = "";
        mile.value = "";
    }
})

mile.addEventListener('input', () => {
    const mil = mile.value;
    if (mil !== '' && mil !== "-") {
        centimeter.value = ((160934.4)*mil);
        meter.value = ((1609.344)*mil);
        inch.value = ((63360)*mil);
        kilometer.value = ((1.609344)*mil);
        feet.value = ((5280)*mil);
        yard.value = ((1760)*mil);
    }
    else {
        centimeter.value = "";
        meter.value = "";
        inch.value = "";
        kilometer.value = "";
        feet.value = "";
        yard.value = "";
    }
})