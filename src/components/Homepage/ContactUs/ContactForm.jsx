import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        position: 'relative',
        width: '90%',
        maxWidth: '400px',
        height: '452px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
        backgroundColor: '#fff',
        margin: '20px 20px 20px 0',
    },
    '@media screen and (max-width: 700px)': {
        root: {
            margin: '20px 0',
        }
    },
    header: {
        position: 'absolute',
        top: '-20px',
        left: '8%',
        width: '84%',
        height: '50px',
        borderRadius: '5px',
        backgroundColor: '#1f74d4',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '20px',
        letterSpacing: '0.5px'
    },
    form: {
        margin: '40px 10% 0 10%',
        width: '80%',

    },
    textField: {
        width: '100%',
        margin: '10px 0'
    },
    submitButton: {
        width: '100%',
        height: '35px',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: '#11539d',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        marginTop: '20px'

    }
};


const CoontactForm = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <header className={classes.header}>课程咨询</header>
            <form className={classes.form} autoComplete="off">
                <TextField
                    id="name"
                    label="姓名"
                    className={classes.textField}
                />
                <TextField
                    id="email"
                    label="电子邮箱"
                    className={classes.textField}
                />
                <TextField
                    id="wechatID"
                    label="微信号"
                    className={classes.textField}
                />
                <TextField
                    id="question"
                    label="咨询内容"
                    multiline
                    rows="4"
                    // value={this.state.multiline}
                    // onChange={this.handleChange('multiline')}
                    className={classes.textField}
                />
                <button type="submit" className={classes.submitButton}>提交</button>
            </form>
        </div>
    );
};


export default withStyles(styles)(CoontactForm);
