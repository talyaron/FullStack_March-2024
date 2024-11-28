import { FC, useState } from 'react';

import './User.scss';

interface Props {
    name: string;
    
}

const User: FC<Props> = ({ name }) => {
    


    return <div className='user' >
    <p>{name}</p>

        
    </div>;

}

export default User;