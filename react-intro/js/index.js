const Footer = ({year, owner="Maisonneuve"}) => {
    return(
        <footer className="text-center py-3"> 
            Copyright {year} - {owner}
        </footer>
    )
}

const Button = ({text, classProp="bg-blue-500 hover:bg-blue-800", onClick}) => {
    return(
        <button
        type="button"
        className={`text-white px-4 py-2 rounded-xl ${classProp}`}
        onClick={onClick}
        >
                {text}
        </button>
    )
}

const Input = (props) => {
    return(
        <div className="my-3">
            <label>{props.text}</label>
            <input type={props.type} placeholder={`Insert your ${props.text}`} className="border rounded px-3 py-2 my-2 w-full"/>
        </div>
    )
}

const ReactAppFromCDN = () => {
    const onClickPrimary = () => {
        console.log('Primary')
    }
    const onClickSecondary = () => {
        alert('Secondary')
    }
    return(
        //jsx
        <div className="container mx-auto">
            <div className="px-4 py-5 my-5 text-center">
                    <h1 className="text-5xl font-bold">React CDN with Tailwind</h1>
                    <div className="mx-auto mt-4">
                        <p className="text-xl mb-4">React Component</p>
                        <div className="flex gap-3 justify-center">
                            <Button text="Primary" onClick={onClickPrimary}/>
                            <Button text="Secondary" classProp="bg-green-500 hover:bg-green-800" onClick={onClickSecondary}/>
                        </div>
                    </div>
                    <Input text="Name"/>
                    <Input text="Email" type="email"/>
                    <Input text="Password" type="password"/>

                <Footer year="2025" owner="React"/>
            </div>
        </div>
    )
}

ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));



