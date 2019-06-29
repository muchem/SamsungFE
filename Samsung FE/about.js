const images = ['https://d113b16mcn34wy.cloudfront.net/app/uploads/2018/01/ssic-office.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Samsung_headquarters.jpg/1200px-Samsung_headquarters.jpg',
'https://cdn57.androidauthority.net/wp-content/uploads/2015/09/Samsung-Office-Silicon-Valley-3.jpg',
'https://www.element14.com/community/servlet/JiveServlet/showImage/38-28316-488384/samsung+Campus-Exterior-SamsungSign-1.jpg'];
var i =images.length;
function next(){
    clearInterval(auto); 
    if(i<images.length){
        i = i+1;
    } else {
        i=1;
    }
    document.getElementById('office').src = images[i-1];
    
}

function auto(){
    if(i<images.length){
        i = i+1;
    } else {
        i=1;
    }
    document.getElementById('office').src = images[i-1];
}
function back(){
    clearInterval(auto);
    if(i<images.length+1 && i>1){
        i = i-1;
    } else {
        i=images.length;
    }
    document.getElementById('office').src = images[i-1];
}
var auto = setInterval(auto, 3000);