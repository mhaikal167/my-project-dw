export default function Card(props) {
  return (
    <>
      <div
        className={`${props.className} card p-5 bg-white border border-gray-200 rounded-lg shadow mb-5 mr-10`}
      >
        {props.children}
      </div>
    </>
  );
}
