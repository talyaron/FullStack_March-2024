import { useDispatch } from 'react-redux'
import { increment } from '../../../model/slices/counterSlice';

const Component2 = () => {
    const dispatch = useDispatch();

    function handleAdd() {
        dispatch(increment());
    }

  return (
    <div>
        <h1>Component 2</h1>
          <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Component2