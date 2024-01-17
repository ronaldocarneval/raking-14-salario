import './raking5.css'

const Raking5 = (props) => {
    return (
        <div className='raking5-container'>
            <div className='img-raking5'>
                <img src={props.img} />
            </div>
            <div className='info-raking5-container'>
                <div className='nome'>{props.nome}</div>
                <div className='barra'>
                    <div className='red'></div>
                    <div className='blue'></div>
                    <div className='yellow'></div>
                    <div className='green'></div>
                </div>
            </div>

        </div>
    )
}

export default Raking5