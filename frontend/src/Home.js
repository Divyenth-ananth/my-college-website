import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const goToMetaverse = () => {
        navigate('/metaverse');
    };

    return (
        <div className="home-container">
            <h1 style={{ color: 'blue' }}>Welcome to My College Website</h1>
            <p style={{ color: 'blue' }}>Explore our campus, services, and more!</p>

            {/* Metaverse Button */}
            <button onClick={goToMetaverse} style={styles.button}>
                Enter 3D Campus
            </button>
        </div>
    );
}

// Basic inline styles for the button (you can put this in your CSS file if you prefer)
const styles = {
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginTop: '20px',
    }
};

export default Home;

