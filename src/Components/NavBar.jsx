import { Menu } from 'semantic-ui-react';
import { logo } from '../Constants/constants';



const NavBar = () =>{
    return (
        <Menu borderless fixed='top'>
            <Menu.Item>
                <img src={logo}  alt="logo" style={{width: 100}}/>
            </Menu.Item>
            <Menu.Item name = 'Home'/>
            <Menu.Item name = 'Recipes'/>  
        </Menu>
    )
}

export default NavBar;