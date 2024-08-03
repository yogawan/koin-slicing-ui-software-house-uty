const InputElements = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} name={props.name} />
        </div>
    );
};

export default InputElements;