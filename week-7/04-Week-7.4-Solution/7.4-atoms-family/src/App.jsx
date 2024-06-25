import {RecoilRoot,useRecoilValue} from 'recoil';
import './App.css'
import { todosAtomFamily } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  )
}

function Todo({id}){
  const currenttodo = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
      {currenttodo.title}
      {currenttodo.description}
    </div>
  )
}

export default App
