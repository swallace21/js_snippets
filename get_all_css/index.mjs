let extractMe = document.getElementById('extract-me')
let extractMeMono = document.getElementById('extract-me-mono')
let resultsDiv = document.getElementById('resultsDiv')

function getCSS(element) {
    let css_data = ''
    let css_obj = getComputedStyle(element)

    console.log(css_obj)
    
    for (var i = 0; i < css_obj.length; i++) {
        css_data +=
            css_obj[i] + ': ' + 
            css_obj.getPropertyValue(css_obj[i])
            + ';<br>';
    }
    if(resultsDiv) {
        resultsDiv.innerHTML = css_data
    }
    return css_data;
}

getCSS(extractMe)