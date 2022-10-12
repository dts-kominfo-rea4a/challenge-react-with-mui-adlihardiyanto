// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { indigo } from "@mui/material/colors";
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
    <List sx={{bgcolor: indigo[100]}}>
   <ListItem alignItems="flex-start">
    <ListItemAvatar>
        <Avatar src={data.photo}></Avatar>
    </ListItemAvatar>
    <ListItemText
				primary={data.name}
				secondaryTypographyProps={{ component: "div" }}
				secondary={
					<React.Fragment>
						<Typography>{data.phone}</Typography>
						<Typography>{data.email}</Typography>
					</React.Fragment>
				}
				title={data.name}
			/>
   </ListItem>
   </List>
    </>);
};

export default Contact;
