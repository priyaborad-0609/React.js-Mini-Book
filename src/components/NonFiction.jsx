import nonFictionalData from "../nonfiction.json"
import BookCard from './BookCard';

export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Book</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {nonFictionalData.map((el,i)=><BookCard  author={el.author} img={el.img} price={el.price} title={el.title} year={el.year} />)}
      </div>
    </div>
  );
}
