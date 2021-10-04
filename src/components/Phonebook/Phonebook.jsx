import { useState } from 'react';
import s from './Phonebook.module.css';

function Phonebook({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    className={s.input}
                />
            </label>
            <label className={s.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    className={s.input}
                />
            </label>
            <button type="submit" className={s.button}>
                Add contact
            </button>
        </form>
    );
}

// class Phonebook extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     handleInputChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({
//             [name]: value,
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className={s.form}>
//                 <label className={s.label}>
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.handleInputChange}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                         required
//                         className={s.input}
//                     />
//                 </label>
//                 <label className={s.label}>
//                     Number
//                     <input
//                         type="tel"
//                         name="number"
//                         value={this.state.number}
//                         onChange={this.handleInputChange}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                         required
//                         className={s.input}
//                     />
//                 </label>
//                 <button type="submit" className={s.button}>
//                     Add contact
//                 </button>
//             </form>
//         );
//     }
// }

export default Phonebook;
