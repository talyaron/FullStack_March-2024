import { FC, useState } from 'react';
import './Chip.scss';

type UserType = 'user' | 'admin';

interface Props {
    chip: UserType
}

const Chip: FC<Props> = ({ chip: initialType }) => {
    const [userType, setUserType] = useState<UserType>(initialType);
    const [isOpen, setIsOpen] = useState(false);

    const handleCombo = () => {
        setIsOpen(!isOpen);
    };

    const selectUserType = (type: UserType) => {
        setUserType(type);
        setIsOpen(false);
    };



    return (
        <div className="relative inline-block">
            <button
                className={userType === 'admin' ? 'green' : 'purple'}

                onClick={handleCombo}

            >
                {userType === 'admin' ? 'Admin' : 'User'}
            </button>

            {isOpen && (
                <div >
                    <button
                        onClick={() => selectUserType('admin')}

                    >
                        Admin
                    </button>
                    <button
                        onClick={() => selectUserType('user')}

                    >
                        User
                    </button>
                </div>
            )}
        </div>
    );
};

export default Chip;