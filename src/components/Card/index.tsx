import './styles.css';
import { icons } from '../../assets/icons';

interface ICard {
  name: string;
  isChecked: boolean;
  onClickTrash: React.MouseEventHandler<HTMLDivElement>;
  onClickCheckbox: React.MouseEventHandler<HTMLDivElement>;
}

export function Card({ isChecked, name, onClickCheckbox, onClickTrash }: ICard) {
  return (
    <div className={`card ${isChecked ? 'isChecked' : ''} `}>
      <div className="leftContainer">
        <input type="checkbox" checked={isChecked} onClick={onClickCheckbox} />

        <strong>{name}</strong>
      </div>

      <div className="buttonTrash" onClick={onClickTrash}>
        <img src={icons.trash} />
      </div>
    </div>
  );
}
