import React from 'react'
import onClickOutside from 'react-onclickoutside'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import User from './User.js';
 
class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
    }
  }
 
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }
 
  handleClickMenu(val) {
    this.setState({
      listOpen: false,
    })
    alert(val)
  }
 
  handleClickOutside() {
    this.setState({
      listOpen: false,
    })
  }
 
  render() {
    const { listOpen } = this.state
    return (
      <div style={styles.dropDownMenu}>
        
        <IconButton onClick={this.toggleList.bind(this)}
            edge="start"
            color="inherit"
            aria-label="Menu">
            <MenuIcon />
        </IconButton>

        {listOpen && (
          <div style={styles.menuBox}>
            <div style={styles.menuContent}>
              <div onClick={this.handleClickMenu.bind(this, 1)}>
                <User
                    icon="🌽"
                    displayName="もろこし太郎"
                />
              </div>
            </div>
            <div style={styles.menuContent}>
              <div onClick={this.handleClickMenu.bind(this, 2)}>
                <User
                    icon="🦐"
                    displayName="エビデンス"
                />
              </div>
            </div>
            <div style={styles.lastMenuContent}>
              <div onClick={this.handleClickMenu.bind(this, 3)}>
                  <User
                    icon="🌻"
                    displayName="フラワー"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
 
const styles = {
  dropDownMenu: {
    position: 'relative',
  },
  menuBox: {
    position: 'absolute',
    top: '23px',
    width: '120px',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid black',
    backgroundColor: '#f0f0f0',
  },
  menuContent: {
    color: "#080808",
    padding: '3px 5px',
    borderBottom: '1px solid #080808',
  },
  lastMenuContent: {
    color: "#080808",
    padding: '3px 5px',
  },
}
 
export default onClickOutside(DropDownMenu)