import './raking.css'

const Raking = (props) => {
    return (
        <div className='raking-container'>
            <div className='img-raking'>
                <img src={props.img} />
            </div>
            <div className='info-raking-container'>
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

export default Raking