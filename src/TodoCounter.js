import './TodoCounter.css';

function TodoCounter({ total, complete }) {
    return (
      <h1 className='TodoCounter'>
        Has completadoo <span>{complete}</span>  de <span>{total}</span>  TODOs
      </h1>
    );
}

export { TodoCounter };
