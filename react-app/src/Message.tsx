
let count = 0;

function Message() {
    console.log('Message Called', count)
    count++;

  return (
    <div>Message {count}</div>
  )
}

export default Message