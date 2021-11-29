import './styles.scss'

const Button = ({ text, fn }) => (
    <button onClick={fn}>{text}</button>
)

export default Button