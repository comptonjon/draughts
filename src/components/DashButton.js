import './DashButton.css';

const DashButton = ({title, onClick}) => {
    return (
        <div className="DashButton">
            <button onClick={onClick}>{title}</button>
        </div>
    )
}

export default DashButton;