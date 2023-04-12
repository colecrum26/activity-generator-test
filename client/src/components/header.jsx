import Activities from './activities';

function Header(props) {

    return (
        <div>
            <h1>Bored?</h1>
            <p>Let's find an activity for you.</p>
            <Activities />
        </div>
    )
}

export default Header;