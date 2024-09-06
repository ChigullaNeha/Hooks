// USE CONTEXT
import { useContext } from "react";
import { MyContext } from "../../App";

const Hello = () => {
    const {h} = useContext(MyContext);
    return <h1>{h} Component</h1>
}
export default Hello
