import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/reducers/contacts/operations';

export default function ContactsItem({ contacts }) {
  const dispatch = useDispatch();

  return (
    <li>
      {contacts.name}: {contacts.number}
      <button onClick={() => dispatch(deleteContact(contacts.id))}>
        Delete
      </button>
    </li>
  );
}
ContactsItem.propTypes = {
  contacts: PropTypes.object.isRequired,
};
