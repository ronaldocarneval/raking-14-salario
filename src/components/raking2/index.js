import './raking2.css'

const Raking2 = (props) => {
    return (
        <div className='raking2-container'>
            <div className='img-raking2'>
                <img src={props.img} />
            </div>
            <div className='info-raking2-container'>
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

export default Raking2