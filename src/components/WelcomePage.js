import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography'; 
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const styles = theme => ({
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  }
});

class WelcomePage extends React.Component {
  state = {
    activeTab: 0,
  }

  handleTabChange =(event, value) => {
    this.setState({ activeTab: value });
  }

  render() {

    const { classes, signup, login, isAuthenticated } = this.props;
    const { activeTab } = this.state;

    if (isAuthenticated) {
      return(
        <Redirect to="/chat" />
      );
    }

    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs
                  value={activeTab}
                  onChange={this.handleTabChange}
                  fullWidth
                >
                  <Tab label="Login" />
                  <Tab label="Sign Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {activeTab === 0 && <LoginForm onSubmit={login} />}
                {activeTab === 1 && <SignupForm onSubmit={signup} />}
              </div>  
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WelcomePage);
