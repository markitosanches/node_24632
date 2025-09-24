import Button from './Button'
const Header = ({title = "To Do List", toggleForm, showAdd}) => {

    return(
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl">{title}</h1>
            <Button text={showAdd ? 'Close' : 'Add'} onClick={toggleForm} color={showAdd ? 'btn-red' : 'btn-green'}/>
        </header>
    )
}
export default Header