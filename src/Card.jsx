function sayHello() {
    console.log('Hello')
}

export const Card = ({ name, onClicked }) => {
    return (
        <div onClick={onClicked}>
            This is {name}.
        </div>
    )
}
