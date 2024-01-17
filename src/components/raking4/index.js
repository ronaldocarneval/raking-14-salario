import './raking4.css'

const Raking4 = (props) => {
    return (
        <div className='raking4-container'>
            <div className='img-raking4'>
                <img src={props.img} />
            </div>
            <div className='info-raking4-container'>
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

export default Raking4