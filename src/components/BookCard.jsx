export default function BookCard(props) {
  console.log(props)
  return (
    <div id="book-card" data-testid="book-card">
      <img src={props.img} alt={""} />
      <b>
        <div id="book-card-title" data-testid="book-card-title">
          {props.title}
          <span>{props.year}</span>
        </div>
      </b>
      <div id="book-card-author" data-testid="book-card-author">{props.author}</div>
      <div id="book-card-price" data-testid="book-card-price">{props.price}</div>
    </div>
  );
}
