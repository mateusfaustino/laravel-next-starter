import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SettingsIcons from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import Box from "@material-ui/core/Box";
import { useState } from 'react';
const DrawerMenu = ({list}) =>{
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return(
        <Box 
            display="flex"
            flexDirection="column" 
            alignItems="flex-start"
            justifyContent="space-between" 
            flexGrow="1"
            width="100%"
        >
                <Box flexGrow={2} width="100%">
                <List>
                    <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <SettingsIcons primary="Home" />
                    </ListItem>
                    
                    
                    <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <SettingsIcons primary="Profile" />
                    </ListItem>
                    </List>
                    <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <SettingsIcons primary="Settings" />
                    </ListItem>

                    
                </Box>
                <Box width="100%">
                <List>
                <ListItem
                        button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <SettingsIcons primary="Logout" />
                    </ListItem>
        </List>
                </Box>
            </Box>
    )
}
export default DrawerMenu