import React, {useState} from 'react'
import CreateComponent from "./CreateComponent/CreateComponent"
import ListComponent from "./ListComponent/ListComponent"

const Home = props => {

    const [submitState, setSubmitState] = useState(false)

    return(
        <div>
            <CreateComponent submitState={submitState} setSubmitState={setSubmitState} />
            <ListComponent submitState={submitState} setSubmitState={setSubmitState} />
        </div>
    )
}
export default Home