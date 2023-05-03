import { useSelector } from 'react-redux';
import './index.css';
const Header = () => {
    const user = useSelector((state) => state.user);
    return (
        <header>
            <h2>Información del usuario</h2>
            <div className='card'>
                <div>
                <h3>Detalles</h3>
                <hr className='divider'/>
                </div>
                <div className='card-group'>
                    <h3>Name:</h3>
                    <p>{user.name}</p>
                </div>
                <div className='card-group'>
                    <h3>Username:</h3>
                    <p>{user.username}</p>
                </div>
                <div className='card-group'>
                    <h3>Email:</h3>
                    <p>{user.email}</p>
                </div>

            </div>
        </header>
    );
}

export default Header;