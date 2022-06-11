import logo from '../logo.svg';
import './Header.scss';

const balance = 921.48


export default function Header() {
    return (
        <div className="balance-header">
            <div className='title-wrapper'>
                <span className="title">My balance</span>
                <h1 className="balance">${balance}</h1>
            </div>
            <img src={logo} alt="logo" />
        </div>
    )
}