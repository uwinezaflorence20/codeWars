import React from "react"
export default function PracticeConditionalRendering(){
  const [messages] = React.useState(["a"])
    let text
    if (messages.length === 0) {
        text = "You're all caught up!"
    } else if (messages.length === 1) {
        text = "You have 1 unread message"
    } else {
        text = `You have ${messages.length} unread messages`
    }

    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "You have 1 unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

    
    return (
        <div>
            <h1>{text}</h1>
            <h1>{determineText()}</h1>
        </div>
    )
};