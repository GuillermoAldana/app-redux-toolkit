import { useSelector, useDispatch } from 'react-redux';
import { changeEmail } from '../../store/slices/userSlice';
import './index.css';

const Email = () => {
    const { email } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(changeEmail(value))
    }
    return (
        <div className='box-input'>
            <h4>Change email</h4>
            <input type="email" value={email} placeholder='Email' name='email' onChange={handleChange} className='form-input' />
        </div>

    );
}

export default Email;