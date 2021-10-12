import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";

const Header = ( ) => {
    return(
     <AppBar position="static">
         <Toolbar className={classes.toolbar}>
             <Typography variant="h5" className={classes.title}>
                   Travel Advisor
             </Typography>
             <Box display="flex">
                 <Typography variant="h6" className={classes.title}>
                   Explore New Places
             </Typography>
             </Box>
         </Toolbar>
     </AppBar>
    );
}

export default Header;