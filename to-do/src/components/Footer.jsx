import { Link } from 'react-router-dom'
const Footer = () => {
    return(
        <footer className="w-full mt-6 border-t pt-2 flex justify-center">
            <div className="text-center">
                <Link to="/about" className="text-blue-700 hover:underline">About</Link>
                <p className="text-sm mt-2">Copyright &copy; 2025</p>
            </div>
        </footer>
    )
}
export default Footer