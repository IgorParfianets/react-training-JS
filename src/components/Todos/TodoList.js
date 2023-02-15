import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, removeTodo }) {
  return (
    <div className={styles.listContainer}>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo todo={todo} key={index} index={index} removeTodo={removeTodo} />
        ))
      ) : (
        <p>Task list is Empty</p>
      )}
    </div>
  );
}

export default TodoList;
