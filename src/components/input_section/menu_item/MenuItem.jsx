import './MenuItem.css'

const MenuItem = ({ icon, text, itemSelected, handleClick }) => {
    return (
        <div className = {text === itemSelected ? 'menuitem-container menuitem-active' : 'menuitem-container menuitem-deactive'}
             onClick = {() => handleClick(text)}>
            {icon}
            <span>{text}</span>
        </div>
    )
}

export default MenuItem