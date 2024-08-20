




const Header = (props) => {
    return (
        <div className= {props.bgClass}>
            <div className="textContent">
                <h1 className="headerTitle">{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}


export default Header;