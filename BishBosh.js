let iDeviceNumber1 = 3;
let iDeviceNumber2 = 4;
const BISH = 'Bish';
const BOSH = 'Bosh';

let iLowestDenominator = iDeviceNumber1 * iDeviceNumber2;
for(let i=1;i<101;i++)
{
    //Smallest denominator of iDeviceNumber1 and iDeviceNumber2
    if(isDevicable(i, iLowestDenominator))
        console.log(BISH + BOSH);
    else if(isDevicable(i, iDeviceNumber1))
        console.log(BISH);
    else if(isDevicable(i,iDeviceNumber2))
        console.log(BOSH);
    else
        console.log(i);
}

function isDevicable(a, b)
{
    return a % b === 0;
}