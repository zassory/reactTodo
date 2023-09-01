import { TodoFilters } from "../TodoFilters/TodoFilters"
import { Todo } from "../Todo/Todo";


const TodoList = ({ todos , handleSetComplete , handleDelete }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        {todos.map(todo => {
          return (
            <Todo 
              key={todo.id} 
              todo={todo} 
              handleSetComplete= {handleSetComplete}
              handleDelete = {handleDelete}  
            />
          )
        })}
        <TodoFilters />
    </div>
  )
}
export { TodoList }
