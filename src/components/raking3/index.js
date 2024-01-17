import './raking3.css'

const Raking3 = (props) => {
    return (
        <div className='raking3-container'>
            <div className='img-raking3'>
                <img src={props.img} />
            </div>
            <div className='info-raking3-container'>
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

export default Raking3