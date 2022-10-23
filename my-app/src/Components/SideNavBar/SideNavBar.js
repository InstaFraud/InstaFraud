import React from 'react'
import './SideNavStyle.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {InstFraudContext} from '../../Context/Context'

function SideNavBar() {

  const {isTwittClicked, setIsTwittClicked} = React.useContext(InstFraudContext)

  return (
     <div className='sidebarNav'>
            <HomeIcon/>
            <SearchOutlinedIcon/>
            <PostAddIcon onClick={()=>setIsTwittClicked(true)}/>
            <PersonPinIcon/>
            <PowerSettingsNewIcon/>
     </div>
  )
}

export default SideNavBar