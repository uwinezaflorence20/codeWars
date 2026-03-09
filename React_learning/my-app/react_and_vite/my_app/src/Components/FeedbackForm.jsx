import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1 className='text-black'>Thank you! the message is sent</h1>;
  } else {
    // eslint-disable-next-line
    return (
      <div className='mb-10'>
      <form className='text-black' onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
        className='border-2'
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button className='text-black bg-amber-700 mx-96 p-3 rounded' type="submit">Send</button>
      </form>
      </div>
    );
  }
}
