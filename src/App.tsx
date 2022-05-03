interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps){
  return <button 
    className="button"> {props.text ?? 'Default'}</button>
}


function App() {
  return (
  <div className="flex gap-2">
    <Button text="Enviar"/>
    <Button text="ok"/>
    <Button />
  </div>
  )
}

export default App
