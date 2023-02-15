import styles from './Todo.module.css';

function Todo({ todo, removeTodo, index }) {
  return (
    <div className={styles.todo} onDoubleClick={() => removeTodo(index)}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
