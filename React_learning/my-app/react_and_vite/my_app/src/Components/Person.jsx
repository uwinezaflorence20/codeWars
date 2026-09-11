export default function Person(props) {
  return (
    <div className="bg-red-300  grid grid-cols-2 ">
      <div>
        <img src={props.data.image} alt="nothing to add yet expect the image" />
      </div>
      <div>
        <p>{props.data.id}</p>
        <p>{props.data.name}</p>
        <p>{props.data.role}</p>
        <p>{props.data.status}</p>
      </div>
    </div>
  );
}