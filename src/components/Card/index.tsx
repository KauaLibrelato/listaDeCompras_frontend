import './styles.css';
import { icons } from '../../assets/icons';

export function Card({ name, onClick }: any) {
  return (
    <div className="card">
      <div className="leftContainer">
        <div>
          <input type="checkbox" />
        </div>
        <strong>{name} </strong>
      </div>

      <div className="buttonTrash" onClick={onClick}>
        <img src={icons.trash} />
      </div>
    </div>
  );
}
