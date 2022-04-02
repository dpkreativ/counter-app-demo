import { useDispatch, useSelector } from 'react-redux';
import increment from './actions/increment';

function App() {
  const value = useSelector((state) => state.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment);
  };

  return (
    <div className="flex flex-col space-y-5 items-center py-10">
      <h1 className="text-7xl font-bold">{value}</h1>
      <button
        onClick={handleClick}
        className="p-2 bg-blue-700 hover:bg-blue-800 hover:shadow font-semibold text-white text-xl rounded-lg"
      >
        Click me
      </button>
    </div>
  );
}

export default App;
