const ButtonCtaElements = (props) => {
    return (
        <div className="button-cta black">
            <a href="#">{props.text}</a>
            <img src="./arrow.png" alt="img" />
        </div>
    );
};

export default ButtonCtaElements;