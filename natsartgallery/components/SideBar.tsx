import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './../css/sidebar.css';

export default function SideBar() {
    return (
        <Sidebar id='sidebar'>
            boo
            <Menu id='menu'>
            <SubMenu label="Profile" id='menu'>
                <MenuItem id='menu'> Account Settings </MenuItem>
                <MenuItem id='menu'> Contact Us </MenuItem>
            </SubMenu>
            </Menu>
        </Sidebar>
    )
}