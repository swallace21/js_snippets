// looking to expand this for synthetic events in react?
// https://reactjs.org/docs/events.html

// vanilla js dom event
function monitorEvents(element) {
    let eventLogger = function(e) { 
        // maybe store my eventName, timestamp, and JSON in a Database?
        console.log(e) 
    }
    for(let i in element) {
        if(i.startsWith("on")) {
            // evenName = i.slice(2)
            element.addEventListener(i.slice(2), eventLogger, true)
        }
    }
}

monitorEvents(document.body)