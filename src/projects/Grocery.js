import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Grocery() {
  const [list, setlist] = useState([]);
  const [Alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });
  const [value, setValue] = useState('');
  const [edit, setEdit] = useState(null);
  const [editing, setEditing] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setAlert({
        show: true,
        type: 'danger',
        msg: 'Please Provide a Value',
      });
    } else if (value && editing) {
      console.log('sfdlksa');
      setlist(
        list.map((item) => {
          if (item.id === edit) {
            return { ...item, title: value };
          }
          return item;
        })
      );
      setEditing(false);
      setValue('');
      setAlert({
        show: true,
        type: 'success',
        msg: 'Item Updated',
      });
    } else {
      const newItems = { id: Date.now().toString(), title: value };
      setlist([...list, newItems]);
      setValue('');
      setAlert({
        show: true,
        type: 'success',
        msg: 'Item Added',
      });
    }
  };
  const removeItem = (id) => {
    console.log(id);
    const newItem = list.filter((item) => item.id !== id);
    console.log(newItem + 'dsd');
    setAlert({
      show: true,
      type: 'danger',
      msg: 'Item Delete',
    });
    return setlist(newItem);
  };
  const editItem = (id) => {
    let edits = list.find((item) => item.id === id);
    console.log(edits.title);
    setEdit(id);
    setValue(edits.title);
    setEditing(true);
  };

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [Alert]);
  return (
    <div>
      <h4 className={`text-center w-75 p-2 bg-white-50 text-${Alert.type}`}>
        {Alert.show ? `${Alert.msg}` : ''}
      </h4>
      <form className="d-flex" onSubmit={handlerSubmit}>
        <input
          className="form-control w-50 border-3 shadow border-dark me-2 fw-bolder"
          type="text"
          placeholder="A d d  a  l i s t"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-dark" type="submit">
          {editing ? 'Edit' : 'Submit'}
        </button>
      </form>
      <div className=" grocery w-50">
        {list.map((item) => {
          return (
            <Items
              key={item.id}
              {...item}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </div>
      <br />
      {list.length > 0 && (
        <button className="btn   m-3 btn-secondary" onClick={() => setlist([])}>
          Clear all
        </button>
      )}
    </div>
  );
}
const Items = ({ id, title, removeItem, editItem }) => {
  return (
    <div
      className="d-flex shadow justify-content-between m-2 mt-5 p-2"
      style={{ backgroundColor: '#cccccc' }}
    >
      <h5 className="text-dark">{title}</h5>
      <div className="d-inline-block">
        <span onClick={() => editItem(id)} className="text-success">
          {<FaEdit />}
        </span>
        <span onClick={() => removeItem(id)} className="text-danger">
          {<FaTrash />}
        </span>
      </div>
    </div>
  );
};
export default Grocery;
