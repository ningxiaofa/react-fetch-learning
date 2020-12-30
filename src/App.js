// import FetchDemo1 from "./components/FetchDemo1"
// import Parent from "./components/comunication/parent"
// import ProxyDemo from "./components/ProxyDemo"
// import ProxyDemo2 from "./components/ProxyDome2"
import EncapsulateHttpRequest from "./components/encapsulateHttpRequest"

function App() {
  return (
    <div className="App">
      <h1>App</h1>

      {/* 额外: 验证学习函调函数中, 传递参数为函数的执行过程/顺序 */}
      {/* <Parent onClickHandler={(cb)=>{
        cb()
        console.log('cb() in app.js');
      }}/> */}
      {/* <FetchDemo1 /> */}
      {/* <ProxyDemo /> */}
      {/* <ProxyDemo2 /> */}
      <EncapsulateHttpRequest />
    </div>
  );
}

export default App;
