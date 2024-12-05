
const Button = (props) => {
    // ДЕСТРУКТУРИЗАЦИЯ

    const { text, onClick } = props;
    return (
        <button onClick={onClick}>{text}</button>
    );
};

export default Button;