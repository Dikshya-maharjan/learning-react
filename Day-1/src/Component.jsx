import hero from "./assets/hero.png";
function Component(){
return(
    <>
    <button>I'm button</button>
    <p>Hello there.<br/>How do you do?</p>
    <img className="avatar" src={hero}/>
    
    </>
)
}
export default Component;