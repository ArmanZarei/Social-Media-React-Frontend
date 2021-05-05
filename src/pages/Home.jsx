import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    }
                };
                axios.get('user', config).then(res => {
                    setName(res.data.firstname + " " + res.data.lastname)
                }).catch(err => {
                    console.log(err)
                });
            }
        )();
    });

    return (
        <div>
            {name ? `Hello ${name}` : 'You are not logged in'}
        </div>
    );
};

export default Home;
