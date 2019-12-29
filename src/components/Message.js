import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    chip: {
        margin: 4,
        marginLeft: 50,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

function Like(props) {
    const [liked, setLike] = React.useState(false);
    const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);
    return(
    <div className="status-action">
        <span onClick={toggleLike}>{liked ? '🙏' : '🙌'}</span>
    </div>
    )
}


export default class Message extends React.Component {
    render() {
        return (
            <div className="Message">
                <List style={styles.chip}>
                    <ListItem alineItems="flex-start" disabled="true">
                        <ListItemAvatar>
                            <Avatar className="" src={this.props.message.profile_image} />
                            <span style={{marginBottom: -5}}>@{this.props.message.user_name}</span>
                            <br />
                        </ListItemAvatar>
                        <div style={styles.chip} >
                                {this.props.message.text}
                        </div>
                    </ListItem>
                    <Like />
                    <Divider variant="inset" component="li"/>
                </List>
            </div>
        );
    }
}