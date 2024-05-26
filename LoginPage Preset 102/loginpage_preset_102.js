/*--------- JS By 波佐見アイサ ---------*/

/*--------- Class = Pass-icon ---------*/

var a;
function pass()
{
    if(a==1)
    {
    document.getElementById('password').type='password';document.getElementById('pass-icon').src='pic/hide-regular-24.png';
    a=0;
}
else
{
    document.getElementById('password').type='text';document.getElementById('pass-icon').src='pic/hide-solid-24.png';
    a=1;
}
}

/*--------- Class = Pass-icon2 ---------*/

var b;
function pass2()
{
    if(b==1)
    {
    document.getElementById('ConfirmPassword').type='password';document.getElementById('pass-icon2').src='pic/hide-regular-24.png';
    b=0;
}
else
{
    document.getElementById('ConfirmPassword').type='text';document.getElementById('pass-icon2').src='pic/hide-solid-24.png';
    b=1;
}
}