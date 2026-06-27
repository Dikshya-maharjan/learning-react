import hero from "./assets/hero.png";
function Component(){
    const user={
        name:'Dikshya',
        imageUrl:"https://i.pinimg.com/736x/b4/4e/18/b44e18a716d18ebf030b34bb7a553b21.jpg",
        imageSize:90,
    };
    let content;
    const isLoggedIn='true';
    
    
    if (isLoggedIn) {
  content = <AdminPanel/>
} else {
  content = <LoginForm/>;
}
function AdminPanel() {
  return <h2>Welcome Admin!</h2>;
}

function LoginForm() {
  return <h2>Please Login</h2>;
}
return(
    <>
    <button>I'm button</button>
    <p>Hello there.<br/>How do you do?</p>
    <img className="avatar" src={hero}/>
    <h1>{user.name}</h1>
    <img className="avatar" src={user.imageUrl}
    style={{
        width:user.imageSize,
        height:user.imageSize
    }}/>
    <div>
        {content}
    </div>

    </>
)
}
export default Component;