let output = document.querySelector('#output');
let btnRun = document.querySelector('#btnRun');

let nLoopMax = document.querySelector('#nLoopMax');
let nABish = document.querySelector('#nABish');
let nBBosh = document.querySelector('#nBBosh');

let isDevicable = function(a, b)
{
    return a % b === 0;
}

let bishBosh = function(nBish, nBosh, nMax)
{
    output.innerHTML = '';
    let iDeviceNumber1 = nBish;
    let iDeviceNumber2 = nBosh;
    const BISH = 'Bish';
    const BOSH = 'Bosh';

    let iLowestDenominator = iDeviceNumber1 * iDeviceNumber2;
    for(let i=1;i<(+nMax+1);i++)
    {
        //Smallest denominator of iDeviceNumber1 and iDeviceNumber2
        if(isDevicable(i, iLowestDenominator))
            output.innerHTML += `${BISH}${BOSH}<br>`;
        else if(isDevicable(i, iDeviceNumber1))
            output.innerHTML += `${BISH}<br>`;
        else if(isDevicable(i,iDeviceNumber2))
            output.innerHTML += `${BOSH}<br>`;
        else
            output.innerHTML += `${i}<br>`;
    }
}

let isPosNum = function(formInput)
{
    if(isNaN(formInput.value) || formInput.value < 1)
    {
        formInput.classList.add('is-invalid');
        
        return false;
    }
    formInput.classList.remove('is-invalid');
    return true;
}

btnRun.addEventListener('click', e => {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation');
    let form = forms[0];
    e.preventDefault();
    e.stopPropagation();
    
    if(form.checkValidity())
    {
        let bFullySuccess = true;
        bFullySuccess = isPosNum(nLoopMax) ? bFullySuccess : false;
        bFullySuccess = isPosNum(nABish) ? bFullySuccess : false;
        bFullySuccess = isPosNum(nBBosh) ? bFullySuccess : false;
        if(bFullySuccess)
        {
            form.classList.add('was-validated');
            bishBosh(nABish.value, nBBosh.value, nLoopMax.value);
        }
        else
            form.classList.remove('was-validated');
    }
});