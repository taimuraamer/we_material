let text = [];

const formHandler = (e) => {
    e.preventDefault();
    text.push(e.target.elements.username.value);
    reRender();
}

const appRoot = document.getElementById('app')

const reRender = () => {
    const template = <div>
                        <form onSubmit={formHandler}>
                            <input type='text' name='username' />
                            <button>Click</button>
                            <ol>{text.map((t) => {
                                return <li>{t}</li>
                            })}</ol>
                        </form>
                    </div>
    ReactDOM.render(template, appRoot)
}

reRender();