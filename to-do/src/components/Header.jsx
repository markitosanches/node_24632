import Button from './Button'
const Header = ({title = "To Do List"}) => {
    const onClick = () => {
        console.log('Click Component')
    }
    return(
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl">{title}</h1>
            <Button text="Add" onClick={onClick} color="btn-green"/>
        </header>
    )
}
export default Header