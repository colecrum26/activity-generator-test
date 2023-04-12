import Activities from './activities';

function Header(props) {

    return (
        <div>
            <h1>Bored?</h1>
            <h3>Let's find an activity for you.</h3>
            <p>Click one of the following buttons to filter activities.</p>
            <Activities />
        </div>
    )
}

export default Header;