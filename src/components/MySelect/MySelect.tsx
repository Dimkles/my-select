import { FC, useState } from 'react';
import './MySelect.scss'

interface selectedType {
    label: string
    value: string
}

interface MySelectProps {
    options: selectedType[]
    placeholder: string
    onChange: (value: string) => void
}

const MySelect: FC<MySelectProps> = ({ options, placeholder, onChange }) => {

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState<selectedType>({} as selectedType)

    const clickHandler = (option: selectedType) => {
        setSelected(option)
        onChange(option.value)
        setShow(false)
    }

    return (
        <div className='mySelect'>
            <button
                type='button'
                className='mySelect__toggle'
                onClick={() => setShow(!show)}
            >
                {selected.label ? selected.label : placeholder}
            </button>
            <div
                className={show
                    ? 'mySelect__options show'
                    : 'mySelect__options'
                }
            >
                {options.map(option =>
                    <div
                        onClick={() => clickHandler(option)}
                        key={option.value}
                        className={selected.value === option.value
                            ? 'mySelect__option selected'
                            : 'mySelect__option'
                        }
                    >
                        {option.label}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MySelect;