import { useState } from 'react';
import './styles.css';
import { Button } from '../../components/Buttons/Button';
import { Card } from '../../components/Card/';
import { toast } from 'react-toastify';

export function List() {
  const [acquisition, setAcquisition] = useState('');
  const [acquisitions, setAcquisitions] = useState([]);

  const catchHandler = (err: any) => {
    toast.dismiss();
    if (err) {
      toast.error(err);
    }
  };

  function handleAddAcquistion() {
    if (acquisition == '') {
      catchHandler('Item vazio');
      return;
    }
    setAcquisitions([...(acquisitions as never), acquisition as never]);
  }
  return (
    <div className="container">
      <header>
        <h1>Lista de Compras</h1>
      </header>

      <input
        type="text"
        placeholder="Digite o que será adicionado..."
        onChange={(e) => setAcquisition(e.target.value)}
      />

      <Button
        onClick={() => {
          handleAddAcquistion();
          setAcquisition('');
        }}
        label={'Adicionar'}
      />

      {acquisitions.map((el) => (
        <Card
          name={el}
          onClick={() => {
            setAcquisitions(acquisitions.filter((element) => element !== el));
          }}
        />
      ))}
    </div>
  );
}
