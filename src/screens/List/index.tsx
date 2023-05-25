import { useState } from 'react';
import './styles.css';
import { Button } from '../../components/Buttons/Button';
import { Card } from '../../components/Card/';
import { toast } from 'react-toastify';
import { Form } from '../../components/Form';

interface IItem {
  name: string;
  isChecked: boolean;
}

export function List() {
  const [acquisition, setAcquisition] = useState<string>('');
  const [listAcquisitions, setListAcquisitions] = useState<IItem[]>([]);

  const catchHandler = (err: any) => {
    toast.dismiss();
    if (err) {
      toast.error(err);
    }
  };

  function checkIfTheItemIsAlreadyInTheList() {
    return !!listAcquisitions.find((item) => item.name === acquisition);
  }

  function handleAddAcquistion() {
    if (!acquisition) {
      return catchHandler('Item vazio');
    }

    if (checkIfTheItemIsAlreadyInTheList()) {
      return toast.info('Item já está na lista');
    }

    setListAcquisitions([...listAcquisitions, { name: acquisition, isChecked: false }]);
    setAcquisition('');
  }
  return (
    <div className="container">
      <header>
        <h1>Lista de Compras</h1>
      </header>

      {listAcquisitions.map((element, i) => (
        <Card
          name={element.name}
          isChecked={element.isChecked}
          onClickTrash={() => {
            setListAcquisitions(listAcquisitions.filter((item) => item.name !== element.name));
          }}
          onClickCheckbox={() => {
            setListAcquisitions((prevState) => {
              const newArray = [...prevState];
              newArray[i].isChecked = !newArray[i].isChecked;
              return newArray;
            });
          }}
        />
      ))}

      <Form onSubmit={handleAddAcquistion}>
        <input
          value={acquisition}
          placeholder="Digite o que será adicionado..."
          onChange={(e) => setAcquisition(e.target.value)}
        />

        <Button type="submit" label={'Adicionar'} />
      </Form>
    </div>
  );
}
