import './index.css'

const List = ({ elements }) => (
    <ul>
        {
            elements.map(item => (
                <li>{item}</li>
            ))
        }
    </ul>
)
    
    

export default List