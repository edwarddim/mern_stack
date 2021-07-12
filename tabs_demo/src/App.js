import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import {useState} from 'react'


function App() {

  const tabs = [
    {
      title : "Tab 1",
      content: "Tab 1 content :)"
    },
    {
      title : "Tab 2",
      content: "Tab 2 content :)"
    },
    {
      title : "Tab 3",
      content: "Tab 3 content :)"
    },
    {
      title : "Tab 4",
      content: "Tab 4 content :)"
    }
  ]

  const [idx, setIdx] = useState(0)

  const handleClick = (idx) => {
    console.log(idx)
    setIdx(idx)
  }


  return (
    <div className="App">
      {/* <Tabs tabs={tabs} /> */}
      {
        tabs.map((tab, i) => {
          return <Tab key={i} idx={i} tab={tab} handleClick={handleClick} />
        })
      }
      <div>
        <h1>{tabs[idx].content}</h1>
      </div>
    </div>
  );
}

export default App;
