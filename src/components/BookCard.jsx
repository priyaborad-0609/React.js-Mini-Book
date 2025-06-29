export default function BookCard(props) {
  console.log(props)
  return (
    <div data-testid="book-card">
      <img src={props.img} alt={""} />
      <b>
        <div data-testid="book-card-title">
          {props.title}
          <span>{props.year}</span>
        </div>
      </b>
      <div data-testid="book-card-author">{props.author}</div>
      <div data-testid="book-card-price">{props.price}</div>
    </div>
  );
}
