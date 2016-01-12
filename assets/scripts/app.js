var title = document.getElementById('main-title');
var body = document.getElementsByTagName('body')[0];

var altTitleStyle = '#fff'
var altBodyStyle = 'teal'
var nextTitleStyle;
var nextBodyStyle;

function changeTheme(){
   
    //saves current style to temp
    nextTitleStyle = title.style.color;
    //sets current style to alt
    title.style.color = altTitleStyle;
    //resets alt title style
    altTitleStyle = nextTitleStyle;
   
    //saves current style to temp
    nextBodyStyle = body.style.backgroundColor;
    //sets current style to alt
    body.style.backgroundColor = altBodyStyle;
    //resets alt title style
    altBodyStyle = nextBodyStyle;
    
        
}