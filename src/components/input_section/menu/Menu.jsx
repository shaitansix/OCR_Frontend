/* eslint-disable react/prop-types */
import { useState } from 'react'
import IconCustom from '@/components/UI/IconCustom'
import MenuItem from '@/components/input_section/menu_item/MenuItem'
import './Menu.css'

const Menu = ({ setImgUrl, setTypeOption }) => {
    const [itemSelected, setItemSelected] = useState('Cam')
    
    const handleClick = (text) => {
        setImgUrl('')
        setItemSelected(text)
        setTypeOption(text === 'Cam' ? 'webcam' : 'image')
    }

    return (
        <article className = 'menu-wrapper'>
            <div className = 'menu-container'>
                <MenuItem icon = {<IconCustom name = 'webcam' color = {itemSelected === 'Cam' ? 'var(--secundary-color-dark)' : 'var(--primary-color-dark)' } size = '50px' weight = {3} />} 
                          text = {'Cam'} 
                          itemSelected = {itemSelected} 
                          handleClick = {handleClick} />
                <MenuItem icon = {<IconCustom name = 'image' color = {itemSelected === 'File' ? 'var(--secundary-color-dark)' : 'var(--primary-color-dark)' } size = '44px' weight = {3} />} 
                          text = {'File'} 
                          itemSelected = {itemSelected} 
                          handleClick = {handleClick} />
            </div>
        </article>
    )
}

export default Menu