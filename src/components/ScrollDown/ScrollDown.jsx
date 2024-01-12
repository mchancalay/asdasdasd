import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Keyboard } from '@mui/icons-material';

const ScrollDown = ({ children }) => {
    return (
        <div class="scrollDown">
            <a class="scrollDown__link" href="#">
                <p className="scrollDown__text">{children}</p>
                <KeyboardArrowDownIcon className="scrollDown__icon" />
            </a>
        </div>
    )
}

export default ScrollDown
