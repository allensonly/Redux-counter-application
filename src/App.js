
import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    
    <>
    
    <div  className=' d-flex justify-content-center align-items-center flex-column w-100 bg-dark ' style={{height:'100vh'}} >

    <div className='d-flex justify-content-center align-items-center flex-column p-5 bg-white' >



    <h1 className='text-primary '>Counter Application</h1>

    <Counter/>


    </div>





    </div>
    
    </>
  
  );
}

export default App;
